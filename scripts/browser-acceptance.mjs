import { access, mkdtemp, rm } from "node:fs/promises";
import { constants } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, resolve } from "node:path";
import { spawn } from "node:child_process";
import { createServer } from "node:net";

const root = resolve(dirname(new URL(import.meta.url).pathname), "..");
const mobileWidth = 390;
const briefStorageKey = "first-diagram-progress";
const sessionStorageKey = "first-diagram-session";
const handoffFilename = "first-diagram-is-a-liar-handoff.md";

async function hasExecutable(command) {
  if (command.includes("/")) {
    try {
      await access(command, constants.X_OK);
      return true;
    } catch {
      return false;
    }
  }
  return await new Promise((resolveResult) => {
    const probe = spawn("sh", ["-c", `command -v "${command}"`]);
    probe.on("close", (code) => resolveResult(code === 0));
    probe.on("error", () => resolveResult(false));
  });
}

async function findAvailableBrowser() {
  for (const candidate of [
    process.env.CHROMIUM_PATH,
    "chromium",
    "chromium-browser",
    "google-chrome",
    "google-chrome-stable",
  ].filter(Boolean)) {
    if (await hasExecutable(candidate)) return candidate;
  }
  return null;
}

async function freePort() {
  return await new Promise((resolvePort, reject) => {
    const server = createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject(new Error("Could not determine a free local port."));
        return;
      }
      server.close(() => resolvePort(address.port));
    });
  });
}

async function waitForHttp(url, timeoutMs = 15_000) {
  const deadline = Date.now() + timeoutMs;
  let lastError = "no response";
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
      lastError = `HTTP ${response.status}`;
    } catch (error) {
      lastError = error instanceof Error ? error.message : String(error);
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 100));
  }
  throw new Error(`Timed out waiting for ${url} (${lastError}).`);
}

async function isTutorialApp(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) return false;
    const html = await response.text();
    return html.includes('<div id="root"></div>') && html.includes("/src/main.tsx");
  } catch {
    return false;
  }
}

class DevToolsClient {
  constructor(url) {
    this.url = url;
    this.nextId = 0;
    this.pending = new Map();
    this.socket = null;
  }

  async connect() {
    this.socket = new WebSocket(this.url);
    await new Promise((resolveConnection, rejectConnection) => {
      this.socket.addEventListener("open", resolveConnection, { once: true });
      this.socket.addEventListener("error", () => rejectConnection(new Error("Could not connect to Chromium.")), { once: true });
    });
    this.socket.addEventListener("message", (event) => {
      const message = JSON.parse(String(event.data));
      if (!message.id) return;
      const request = this.pending.get(message.id);
      if (!request) return;
      this.pending.delete(message.id);
      if (message.error) request.reject(new Error(`${message.error.message} (${message.error.code})`));
      else request.resolve(message.result);
    });
    this.socket.addEventListener("close", () => {
      for (const request of this.pending.values()) request.reject(new Error("Chromium connection closed."));
      this.pending.clear();
    });
  }

  async send(method, params = {}) {
    if (!this.socket) throw new Error("Chromium connection is not open.");
    const id = ++this.nextId;
    return await new Promise((resolveResponse, rejectResponse) => {
      this.pending.set(id, { resolve: resolveResponse, reject: rejectResponse });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  async evaluate(expression, scope) {
    let result;
    try {
      result = await this.send("Runtime.evaluate", {
        expression,
        awaitPromise: true,
        returnByValue: true,
      });
    } catch (error) {
      throw new Error(`${scope}: ${error instanceof Error ? error.message : String(error)}`);
    }
    if (result.exceptionDetails) {
      const description = result.exceptionDetails.exception?.description
        ?? result.exceptionDetails.text
        ?? "browser evaluation failed";
      throw new Error(`${scope}: ${description}`);
    }
    return result.result?.value;
  }
}

function assert(condition, scope, message) {
  if (!condition) throw new Error(`Acceptance failure [${scope}]: ${message}`);
}

async function waitFor(client, expression, scope, timeoutMs = 5_000) {
  const deadline = Date.now() + timeoutMs;
  let lastError;
  while (Date.now() < deadline) {
    try {
      if (await client.evaluate(expression, scope)) return;
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 50));
  }
  const detail = lastError instanceof Error ? ` (${lastError.message})` : "";
  throw new Error(`Acceptance failure [${scope}]: timed out${detail}`);
}

async function click(client, selector, scope) {
  await client.evaluate(`(() => {
    const control = document.querySelector(${JSON.stringify(selector)});
    if (!control) throw new Error("control not found: " + ${JSON.stringify(selector)});
    control.click();
    return true;
  })()`, scope);
}

async function setRange(client, selector, value, scope) {
  await client.evaluate(`(() => {
    const control = document.querySelector(${JSON.stringify(selector)});
    if (!(control instanceof HTMLInputElement)) throw new Error("range control not found");
    const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set;
    setter.call(control, ${JSON.stringify(String(value))});
    control.dispatchEvent(new Event("input", { bubbles: true }));
    control.dispatchEvent(new Event("change", { bubbles: true }));
    return true;
  })()`, scope);
}

async function assertActiveStep(client, index, scope) {
  const active = await client.evaluate(`(() => {
    const current = document.querySelector('.rail-step[aria-current="step"]');
    return current ? [...document.querySelectorAll(".rail-step")].indexOf(current) : -1;
  })()`, scope);
  assert(active === index, scope, `expected step ${index + 1} to be active, got ${active + 1}`);
}

async function getPageTarget(debugPort) {
  const deadline = Date.now() + 10_000;
  while (Date.now() < deadline) {
    try {
      const targets = await (await fetch(`http://127.0.0.1:${debugPort}/json/list`)).json();
      const page = targets.find((target) => target.type === "page" && target.webSocketDebuggerUrl);
      if (page) return page;
    } catch {
      // Chromium may need a moment to publish the target.
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 100));
  }
  throw new Error("Timed out waiting for Chromium's local page target.");
}

async function terminateProcess(child) {
  if (!child || child.exitCode !== null) return;
  const exited = new Promise((resolveExit) => child.once("exit", resolveExit));
  const signal = process.platform === "win32" ? "SIGTERM" : "SIGTERM";
  try {
    if (process.platform === "win32") child.kill(signal);
    else process.kill(-child.pid, signal);
  } catch {
    child.kill(signal);
  }
  await Promise.race([exited, new Promise((resolveDelay) => setTimeout(resolveDelay, 1_000))]);
  if (child.exitCode === null) {
    try {
      if (process.platform === "win32") child.kill("SIGKILL");
      else process.kill(-child.pid, "SIGKILL");
    } catch {
      child.kill("SIGKILL");
    }
    await Promise.race([exited, new Promise((resolveDelay) => setTimeout(resolveDelay, 500))]);
  }
}

async function runAcceptance() {
  const browser = await findAvailableBrowser();
  assert(browser, "environment/browser prerequisite", "Chromium or Chrome was not found. Set CHROMIUM_PATH to an executable browser.");

  const debugPort = await freePort();
  const userDataDir = await mkdtemp(`${tmpdir()}/first-diagram-acceptance-`);
  let server;
  let chromium;
  let client;
  let serverOutput = "";
  let browserOutput = "";
  let appUrl;
  const passed = [];

  try {
    const existingAppUrl = "http://127.0.0.1:5000/";
    if (await isTutorialApp(existingAppUrl)) {
      appUrl = existingAppUrl;
      passed.push("reuse running local app");
    } else {
      const appPort = await freePort();
      server = spawn(process.platform === "win32" ? "npm.cmd" : "npm", [
        "run",
        "dev",
        "--",
        "--host",
        "127.0.0.1",
        "--port",
        String(appPort),
      ], {
        cwd: root,
        env: { ...process.env, NODE_ENV: "development" },
        stdio: ["ignore", "pipe", "pipe"],
        detached: process.platform !== "win32",
      });
      server.stdout.on("data", (chunk) => { serverOutput += chunk; });
      server.stderr.on("data", (chunk) => { serverOutput += chunk; });
      appUrl = `http://127.0.0.1:${appPort}/`;
      await waitForHttp(appUrl);
    }

    chromium = spawn(browser, [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-background-networking",
      "--disable-component-update",
      "--disable-sync",
      `--user-data-dir=${userDataDir}`,
      "--remote-debugging-address=127.0.0.1",
      `--remote-debugging-port=${debugPort}`,
      appUrl,
    ], { stdio: ["ignore", "ignore", "pipe"], detached: process.platform !== "win32" });
    chromium.stderr.on("data", (chunk) => { browserOutput += chunk; });
    const target = await getPageTarget(debugPort);
    client = new DevToolsClient(target.webSocketDebuggerUrl);
    await client.connect();
    await client.send("Page.enable");
    await client.send("Runtime.enable");
    await client.send("Page.navigate", { url: appUrl });
    await waitFor(client, `document.readyState === "complete" && Boolean(document.querySelector(".app-shell"))`, "application startup");
    await client.evaluate(`localStorage.removeItem(${JSON.stringify(briefStorageKey)}); localStorage.removeItem(${JSON.stringify(sessionStorageKey)})`, "clean acceptance state");
    await client.send("Page.reload", { ignoreCache: true });
    await waitFor(client, `document.readyState === "complete" && Boolean(document.querySelector(".app-shell"))`, "application startup");
    await client.evaluate(`localStorage.setItem(${JSON.stringify(sessionStorageKey)}, "{malformed")`, "malformed session setup");
    await client.send("Page.reload", { ignoreCache: true });
    await waitFor(client, `document.readyState === "complete" && Boolean(document.querySelector(".app-shell"))`, "malformed session recovery");
    const malformedRecovery = await client.evaluate('({ active: document.querySelector(\'.rail-step[aria-current="step"]\')?.textContent, status: document.querySelector(".session-status")?.textContent })', "malformed session recovery");
    assert(malformedRecovery.active?.includes("Spot the lie") && malformedRecovery.status?.includes("Saved locally"), "malformed session recovery", `malformed local state did not safely fall back while preserving storage availability: ${JSON.stringify(malformedRecovery)}`);
    await client.evaluate(`localStorage.removeItem(${JSON.stringify(sessionStorageKey)})`, "clean malformed session state");
    await client.send("Page.reload", { ignoreCache: true });
    await waitFor(client, `document.readyState === "complete" && Boolean(document.querySelector(".app-shell"))`, "clean session recovery");
    passed.push("malformed session recovery");

    const railCount = await client.evaluate('document.querySelectorAll(".rail-step").length', "step rail");
    assert(railCount === 5, "step rail", `expected five tutorial steps, found ${railCount}`);
    passed.push("five-step rail");
    await assertActiveStep(client, 0, "step 1 active semantics");
    const accessibility = await client.evaluate(`(() => {
      const skip = document.querySelector(".skip-link");
      const main = document.querySelector("#main-content");
      const buttons = [...document.querySelectorAll(".rail-step")];
      skip?.focus();
      return {
        skipFocusable: document.activeElement === skip,
        mainFocusable: main?.getAttribute("tabindex") === "-1",
        labeledSteps: buttons.every((button) => Boolean(button.getAttribute("aria-label"))),
        exactlyOneCurrent: buttons.filter((button) => button.getAttribute("aria-current") === "step").length === 1,
      };
    })()`, "step 1 keyboard semantics");
    assert(accessibility.skipFocusable, "step 1 keyboard semantics", "skip link could not receive focus");
    assert(accessibility.mainFocusable, "step 1 keyboard semantics", "main content is not programmatically focusable");
    assert(accessibility.labeledSteps, "step 1 keyboard semantics", "a tutorial step control has no accessible label");
    assert(accessibility.exactlyOneCurrent, "step 1 active semantics", "expected exactly one aria-current step");
    passed.push("keyboard-relevant labels and active-step semantics");

    await click(client, '.pattern-choice input[value="hidden-loop"]', "step 1 premise pattern");
    await client.evaluate(`(() => { const field = document.querySelector("#claim"); if (!(field instanceof HTMLTextAreaElement)) throw new Error("claim field missing"); const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value").set; setter.call(field, "The tidy line hides a retry."); field.dispatchEvent(new Event("input", { bubbles: true })); return true; })()`, "step 1 bounded claim");
    const premise = await client.evaluate('({ pattern: document.querySelector(\'.pattern-choice input:checked\')?.value, claim: document.querySelector("#claim")?.value })', "step 1 premise capture");
    assert(premise.pattern === "hidden-loop" && premise.claim === "The tidy line hides a retry.", "step 1 premise capture", "pattern or bounded claim did not persist in the UI");
    passed.push("bounded premise capture");

    await click(client, ".hero-actions .button-primary", "step 1 start control");
    await waitFor(client, 'document.querySelector(".section-intro h2")?.textContent.includes("Measure what the picture bought")', "step 2 navigation");
    await assertActiveStep(client, 1, "step 2 active semantics");
    passed.push("step 1 to step 2 navigation");

    const initialRoy = await client.evaluate('document.querySelector(".roy-number")?.textContent.trim()', "step 2 ROY readout");
    assert(initialRoy === "7x", "step 2 ROY readout", `expected initial ROY of 7x, got ${initialRoy}`);
    await setRange(client, "#words", 100, "step 2 words control");
    await waitFor(client, 'document.querySelector(".roy-number")?.textContent.trim() === "3.5x"', "step 2 ROY recalculation");
    await setRange(client, "#clarity", 10, "step 2 clarity control");
    await waitFor(client, 'document.querySelector(".roy-number")?.textContent.trim() === "5x"', "step 2 ROY recalculation");
    const labeledRanges = await client.evaluate(`(() => [...document.querySelectorAll('input[type="range"]')].every((input) => {
      const label = document.querySelector('label[for="' + input.id + '"]');
      return Boolean(input.id && label);
    }))()`, "step 2 range labels");
    assert(labeledRanges, "step 2 range labels", "a ROY range control is missing its associated label");
    passed.push("ROY controls and live recalculation");

    await click(client, ".step-nav .button-primary", "step 2 next control");
    await waitFor(client, 'document.querySelector(".section-intro h2")?.textContent.includes("Draw the truth")', "step 3 navigation");
    await assertActiveStep(client, 2, "step 3 active semantics");
    const workbenchAccessibility = await client.evaluate(`(() => {
      const svg = document.querySelector(".diagram-lines");
      const textAlternative = document.querySelector(".text-alternative");
      const boundary = document.querySelector(".illustrative-note");
      return {
        svgRole: svg?.getAttribute("role"),
        svgLabel: svg?.getAttribute("aria-label"),
        hasTextAlternative: Boolean(textAlternative?.textContent?.includes("Text alternative:")),
        hasBoundaryNote: Boolean(boundary?.textContent?.includes("not a live Mermaid parser")),
        hasRuntimeMermaidBlock: Boolean(document.querySelector(".mermaid")),
      };
    })()`, "step 3 SVG fallback accessibility");
    assert(workbenchAccessibility.svgRole === "img" && Boolean(workbenchAccessibility.svgLabel),
      "step 3 SVG fallback accessibility", "the fixed teaching SVG must expose an accessible image role and label");
    assert(workbenchAccessibility.hasTextAlternative && workbenchAccessibility.hasBoundaryNote,
      "step 3 SVG fallback accessibility", "the workbench must retain its prose alternative and honest renderer boundary");
    assert(!workbenchAccessibility.hasRuntimeMermaidBlock,
      "step 3 SVG fallback accessibility", "the root tutorial must not render a Mermaid block at runtime");
    passed.push("fixed SVG fallback and text alternative accessibility");
    const loopState = await client.evaluate(`(() => {
      const toggle = document.querySelector(".toggle-button");
      const lines = [...document.querySelectorAll(".loop-line")];
      return {
        pressed: toggle?.getAttribute("aria-pressed"),
        visible: lines.every((line) => getComputedStyle(line).opacity === "1"),
      };
    })()`, "step 3 revision loop state");
    assert(loopState.pressed === "true" && loopState.visible, "step 3 revision loop state", "revision loopbacks should be visible initially");
    await click(client, ".toggle-button", "step 3 loopback toggle");
    await waitFor(client, 'document.querySelector(".toggle-button")?.getAttribute("aria-pressed") === "false" && [...document.querySelectorAll(".loop-line")].every((line) => getComputedStyle(line).opacity === "0")', "step 3 loopback toggle");
    await click(client, ".toggle-button", "step 3 loopback toggle");
    await waitFor(client, 'document.querySelector(".toggle-button")?.getAttribute("aria-pressed") === "true"', "step 3 loopback toggle");
    passed.push("revision-loop visibility toggle");
    await click(client, '.revision-tabs button[role="tab"]:first-child', "step 3 V1 revision");
    const v1 = await client.evaluate('({ source: document.querySelector(".workbench-evidence pre")?.textContent, change: document.querySelector(".workbench-evidence p")?.textContent, selected: document.querySelector(\'.revision-tabs [aria-selected="true"]\')?.textContent })', "step 3 V1 source");
    assert(v1.selected?.includes("V1") && v1.source?.includes("flowchart LR") && v1.change?.includes("V1 draws"), "step 3 V1 source", "V1 tab did not synchronize source and explanation");
    await click(client, '.revision-tabs button[role="tab"]:last-child', "step 3 V2 revision");
    const v2 = await client.evaluate('({ source: document.querySelector(".workbench-evidence pre")?.textContent, change: document.querySelector(".workbench-evidence p")?.textContent })', "step 3 V2 source");
    assert(v2.source?.includes("doubt / revise") && v2.change?.includes("V2 keeps"), "step 3 V2 source", "V2 tab did not synchronize source and explanation");
    passed.push("source-first V1/V2 comparison");

    await click(client, ".step-nav .button-primary", "step 3 next control");
    await waitFor(client, 'document.querySelector(".section-intro h2")?.textContent.includes("Use disagreement")', "step 4 navigation");
    await assertActiveStep(client, 3, "step 4 active semantics");
    const tiers = await client.evaluate(`(() => [...document.querySelectorAll(".tier-pill")].reduce((counts, pill) => {
      const tier = pill.textContent.trim();
      counts[tier] = (counts[tier] ?? 0) + 1;
      return counts;
    }, {}))()`, "step 4 Council condition labels");
    for (const [tier, expected] of Object.entries({ "Core Five": 5, Exhibition: 1, "Specialty Notion": 1, "Specialty Replit": 1, Attempted: 1 })) {
      assert(tiers[tier] === expected, "step 4 Council condition labels", `expected ${expected} ${tier} label(s), found ${tiers[tier] ?? 0}`);
    }
    passed.push("Council taxonomy labels");
    await click(client, 'input[name="criterion"][value="iteration"]', "step 4 criterion");
    await click(client, 'input[name="outcome"][value="combine"]', "step 4 synthesis outcome");
    await client.evaluate(`(() => { const field = document.querySelector("#synthesis-note"); if (!(field instanceof HTMLTextAreaElement)) throw new Error("synthesis field missing"); const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, "value").set; setter.call(field, "Borrow the loop and reject the decoration."); field.dispatchEvent(new Event("input", { bubbles: true })); return true; })()`, "step 4 synthesis note");
    const synthesis = await client.evaluate('({ criterion: document.querySelector(\'input[name="criterion"]:checked\')?.value, outcome: document.querySelector(\'input[name="outcome"]:checked\')?.value, note: document.querySelector("#synthesis-note")?.value })', "step 4 synthesis state");
    assert(synthesis.criterion === "iteration" && synthesis.outcome === "combine" && synthesis.note?.includes("Borrow the loop"), "step 4 synthesis state", "criterion or synthesis did not persist");
    passed.push("criterion and synthesis capture");

    await click(client, ".step-nav .button-primary", "step 4 next control");
    await waitFor(client, 'document.querySelector(".section-intro h2")?.textContent.includes("Ship the proof")', "step 5 navigation");
    await assertActiveStep(client, 4, "step 5 active semantics");
    const unchecked = await client.evaluate('document.querySelectorAll(".check-row input:not(:checked)").length', "step 5 checklist");
    assert(unchecked === 5, "step 5 checklist", `expected five unchecked items after a clean start, found ${unchecked}`);
    for (let index = 1; index <= 5; index += 1) {
      await click(client, `.check-row:nth-of-type(${index})`, `step 5 checklist item ${index}`);
    }
    await waitFor(client, 'document.querySelector(".panel-kicker")?.textContent.includes("5 OF 5")', "step 5 checklist completion");
    const completion = await client.evaluate(`(() => ({
      checked: document.querySelectorAll(".check-row input:checked").length,
      completedRail: document.querySelectorAll(".rail-step.is-complete").length,
    }))()`, "step 5 checklist completion");
    assert(completion.checked === 5, "step 5 checklist completion", `expected five checked items, found ${completion.checked}`);
    assert(completion.completedRail === 5, "step 5 checklist completion", "completed checklist did not mark the tutorial rail complete");
    passed.push("checklist completion");

    await client.evaluate(`(() => {
      Object.defineProperty(navigator, "clipboard", { configurable: true, value: undefined });
      return navigator.clipboard === undefined;
    })()`, "step 5 clipboard fallback setup");
    await click(client, ".copy-brief-button", "step 5 copy control");
    await waitFor(client, 'document.querySelector(".copy-status")?.textContent.includes("Clipboard access is unavailable")', "step 5 clipboard fallback feedback");
    const retryLabel = await client.evaluate('document.querySelector(".copy-brief-button")?.textContent.includes("Try copying again")', "step 5 clipboard fallback feedback");
    assert(retryLabel, "step 5 clipboard fallback feedback", "copy control did not expose its retry state");
    passed.push("clipboard failure feedback");

    await client.evaluate(`(() => {
      window.__handoffCapture = { download: "", textPromise: null };
      URL.createObjectURL = (blob) => {
        window.__handoffCapture.textPromise = blob.text();
        return "blob:acceptance-capture";
      };
      HTMLAnchorElement.prototype.click = function () {
        window.__handoffCapture.download = this.download;
      };
      return true;
    })()`, "step 5 local handoff capture setup");
    await click(client, ".download-handoff-button", "step 5 Markdown handoff download");
    const firstHandoff = await client.evaluate(`(async () => ({
      filename: window.__handoffCapture.download,
      content: await window.__handoffCapture.textPromise,
    }))()`, "step 5 Markdown handoff content");
    assert(firstHandoff.filename === handoffFilename, "step 5 Markdown handoff filename", `expected deterministic filename ${handoffFilename}, got ${firstHandoff.filename}`);
    for (const expected of [
      "# Local Working Handoff",
      "- **Step:** 05 / The handoff",
      "Bounded claim:** The tidy line hides a retry.",
      "Selected revision:** V2 / honest revision",
      "Selected criterion:",
      "Synthesis outcome:** combine",
      "Schema version:** 2",
      "Current ROY readout:** 5x",
      "- [x] The claim is clear before the diagram appears.",
      "Revision loopbacks:** Visible",
      "## Next test",
      "https://github.com/OKHP3/first-diagram-is-a-liar/tree/main/archive/editorial-cut",
    ]) {
      assert(firstHandoff.content.includes(expected), "step 5 Markdown handoff content", `export is missing ${expected}`);
    }
    await waitFor(client, `document.querySelector(".copy-status")?.textContent.includes("Saved locally as ${handoffFilename}.")`, "step 5 local handoff feedback");
    await click(client, ".download-handoff-button", "step 5 deterministic Markdown handoff download");
    const secondHandoff = await client.evaluate(`(async () => ({
      filename: window.__handoffCapture.download,
      content: await window.__handoffCapture.textPromise,
    }))()`, "step 5 deterministic Markdown handoff content");
    assert(secondHandoff.filename === firstHandoff.filename && secondHandoff.content === firstHandoff.content, "step 5 deterministic Markdown handoff", "repeated exports did not produce the same filename and content");
    passed.push("local Markdown handoff download and deterministic content");

    await new Promise((resolveDelay) => setTimeout(resolveDelay, 100));
    await client.send("Page.reload", { ignoreCache: true });
    await waitFor(client, 'document.readyState === "complete" && document.querySelectorAll(".rail-step").length === 5', "step 5 persistence reload");
    await click(client, ".rail-step:nth-of-type(5)", "step 5 persistence navigation");
    await waitFor(client, 'document.querySelector(".section-intro h2")?.textContent.includes("Ship the proof")', "step 5 persistence navigation");
    const persisted = await client.evaluate(`(() => ({
      checked: document.querySelectorAll(".check-row input:checked").length,
      status: document.querySelector(".checklist-panel .panel-kicker")?.textContent.trim(),
    }))()`, "step 5 checklist reload persistence");
    assert(persisted.checked === 5, "step 5 checklist reload persistence", `expected five checked items after reload, found ${persisted.checked}`);
    assert(persisted.status === "SHIP CHECK / 5 OF 5", "step 5 checklist reload persistence", `unexpected checklist status after reload: ${persisted.status}`);
    passed.push("checklist reload persistence");

    await client.evaluate('location.hash = "#step-3"', "deep-link setup");
    await waitFor(client, 'document.querySelector(\'.rail-step[aria-current="step"]\')?.textContent.includes("Draw the truth")', "deep-link navigation");
    await client.evaluate('history.back()', "browser back navigation");
    await waitFor(client, 'document.querySelector(\'.rail-step[aria-current="step"]\')?.textContent.includes("Ship the proof")', "browser back navigation");
    passed.push("hash deep link and history navigation");

    await client.evaluate(`(() => {
      Storage.prototype.__firstDiagramOriginalSetItem = Storage.prototype.setItem;
      Storage.prototype.setItem = function () { throw new Error("storage blocked"); };
      document.querySelector(".check-row input")?.click();
      return true;
    })()`, "storage blocked setup");
    await waitFor(client, 'document.querySelector(".session-status")?.textContent.includes("This session only")', "storage blocked fallback");
    await client.evaluate(`(() => {
      if (Storage.prototype.__firstDiagramOriginalSetItem) Storage.prototype.setItem = Storage.prototype.__firstDiagramOriginalSetItem;
      delete Storage.prototype.__firstDiagramOriginalSetItem;
      return true;
    })()`, "storage blocked cleanup");
    passed.push("storage-blocked session-only fallback");

    await client.send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
    const reducedMotion = await client.evaluate('getComputedStyle(document.querySelector(".button")).transitionDuration', "reduced-motion behavior");
    assert(reducedMotion === "0.01ms" || reducedMotion === "1e-05s", "reduced-motion behavior", `expected reduced transition duration, got ${reducedMotion}`);
    passed.push("reduced-motion preference");

    await client.send("Emulation.setDeviceMetricsOverride", {
      width: mobileWidth,
      height: 844,
      deviceScaleFactor: 1,
      mobile: true,
    });
    await waitFor(client, `document.documentElement.scrollWidth <= ${mobileWidth} && document.body.scrollWidth <= ${mobileWidth}`, "mobile width overflow");
    const mobileLayout = await client.evaluate(`(() => ({
      width: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
    }))()`, "mobile width overflow");
    assert(mobileLayout.width === mobileWidth, "mobile width overflow", `expected viewport width ${mobileWidth}, got ${mobileLayout.width}`);
    assert(mobileLayout.documentWidth <= mobileWidth && mobileLayout.bodyWidth <= mobileWidth, "mobile width overflow", `horizontal overflow at ${mobileWidth}px (${mobileLayout.documentWidth}px document, ${mobileLayout.bodyWidth}px body)`);
    passed.push(`responsive boundary at ${mobileWidth}px`);

    console.log(`Browser acceptance: PASS (${passed.length} checks)`);
    passed.forEach((check) => console.log(`- ${check}`));
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    const serverDetail = server?.exitCode ? `\nVite output:\n${serverOutput}` : "";
    const browserDetail = chromium?.exitCode ? `\nChromium output:\n${browserOutput}` : "";
    throw new Error(`${detail}${serverDetail}${browserDetail}`);
  } finally {
    if (client) {
      try { await client.send("Browser.close"); } catch { /* Browser may already be gone after a failed assertion. */ }
    }
    await terminateProcess(chromium);
    await terminateProcess(server);
    await rm(userDataDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  }
}

try {
  await runAcceptance();
} catch (error) {
  console.error(`Browser acceptance: FAIL — ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}