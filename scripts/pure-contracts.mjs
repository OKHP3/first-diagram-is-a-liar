import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const root = join(dirname(new URL(import.meta.url).pathname), "..");
const moduleNames = ["session", "roy", "workbench", "handoff"];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function assertEqual(actual, expected, message) {
  assert(Object.is(actual, expected), `${message} (expected ${String(expected)}, got ${String(actual)})`);
}

function assertDeepEqual(actual, expected, message) {
  assert(JSON.stringify(actual) === JSON.stringify(expected), `${message}\nExpected: ${JSON.stringify(expected)}\nActual: ${JSON.stringify(actual)}`);
}

class MemoryStorage {
  constructor(entries = {}) {
    this.values = new Map(Object.entries(entries));
  }

  getItem(key) {
    return this.values.get(key) ?? null;
  }

  setItem(key, value) {
    this.values.set(key, value);
  }

  removeItem(key) {
    this.values.delete(key);
  }
}

class BlockedStorage {
  getItem() {
    throw new Error("storage blocked");
  }

  setItem() {
    throw new Error("storage blocked");
  }

  removeItem() {
    throw new Error("storage blocked");
  }
}

async function loadModules() {
  const temporaryRoot = await mkdtemp(join(tmpdir(), "first-diagram-contracts-"));
  const temporarySource = join(temporaryRoot, "src");
  await mkdir(temporarySource);

  for (const name of moduleNames) {
    const sourcePath = join(root, "src", `${name}.ts`);
    const source = await readFile(sourcePath, "utf8");
    const rewritten = source.replace(/from (["'])\.\/([^"']+)\1/g, (_, quote, importedName) => (
      `from ${quote}./${importedName}.ts${quote}`
    ));
    await writeFile(join(temporarySource, `${name}.ts`), rewritten);
  }

  const imports = await Promise.all(moduleNames.map(async (name) => (
    await import(pathToFileURL(join(temporarySource, `${name}.ts`)).href)
  )));

  return {
    temporaryRoot,
    session: imports[0],
    roy: imports[1],
    workbench: imports[2],
    handoff: imports[3],
  };
}

async function run() {
  const modules = await loadModules();
  const { session, roy, workbench, handoff } = modules;
  const passed = [];

  try {
    const fixedNow = 1_725_350_400_000;
    const defaultSession = session.createDefaultSession(fixedNow);
    assert(session.validateSession(defaultSession), "the default session should satisfy its own schema");
    assertDeepEqual(session.createDefaultSession(fixedNow), defaultSession, "default sessions should be deterministic for a fixed clock");
    passed.push("default session contract");

    const maxClaim = "x".repeat(session.CLAIM_MAX_LENGTH);
    const validBoundarySession = {
      ...defaultSession,
      activeStep: 4,
      visitedSteps: [0, 4],
      premise: { pattern: "hidden-loop", claim: maxClaim },
      roy: { words: 200, clarity: 10, preset: "" },
      council: { criterion: "usefulness", outcome: "combine", note: maxClaim },
      nextTest: maxClaim,
    };
    assert(session.validateSession(validBoundarySession), "schema boundaries should accept the final tutorial step and maximum text lengths");
    assert(!session.validateSession({ ...validBoundarySession, activeStep: 5 }), "schema should reject an active step beyond the tutorial");
    assert(!session.validateSession({ ...validBoundarySession, premise: { ...validBoundarySession.premise, claim: `${maxClaim}x` } }), "schema should reject an overlong claim");
    assert(!session.validateSession({ ...validBoundarySession, roy: { ...validBoundarySession.roy, words: 201 } }), "schema should reject words above the allowed range");
    passed.push("session range and text boundaries");

    const versionOneClaim = `  ${"claim ".repeat(40)}  `;
    const versionOneStorage = new MemoryStorage({
      [session.SESSION_STORAGE_KEY]: JSON.stringify({
        schemaVersion: 1,
        premise: { claim: versionOneClaim },
        checklist: { claim: true, handoff: true },
      }),
    });
    const migratedVersionOne = session.loadSession(versionOneStorage, fixedNow);
    assert(migratedVersionOne.available && migratedVersionOne.restored && migratedVersionOne.migrated, "version-one sessions should be reported as restored migrations");
    assertEqual(migratedVersionOne.session.schemaVersion, session.SESSION_SCHEMA_VERSION, "migration should produce the current schema version");
    assertEqual(migratedVersionOne.session.updatedAt, fixedNow, "migration should use the supplied clock");
    assertEqual(migratedVersionOne.session.premise.claim.length, session.CLAIM_MAX_LENGTH, "migration should cap the old premise claim");
    assert(migratedVersionOne.session.checklist.claim && migratedVersionOne.session.checklist.handoff, "migration should preserve valid checklist entries");

    const legacyStorage = new MemoryStorage({
      [session.LEGACY_STORAGE_KEY]: JSON.stringify({ claim: true, loops: true }),
    });
    const migratedLegacy = session.loadSession(legacyStorage, fixedNow);
    assert(migratedLegacy.restored && migratedLegacy.migrated, "legacy storage should be reported as migrated");
    assertDeepEqual(migratedLegacy.session.checklist, { claim: true, loops: true }, "legacy storage should preserve completed checklist entries");
    const malformedStorage = new MemoryStorage({ [session.SESSION_STORAGE_KEY]: "{malformed" });
    const malformed = session.loadSession(malformedStorage, fixedNow);
    assert(malformed.available && !malformed.restored && !malformed.migrated, "malformed current storage should safely fall back without claiming restoration");
    const blocked = session.loadSession(new BlockedStorage(), fixedNow);
    assert(!blocked.available && !blocked.restored, "blocked storage should fall back to an unavailable session");
    passed.push("session migration and storage failures");

    assertEqual(roy.calculateRoy(20, 1), 2.5, "ROY should calculate the minimum input edge");
    assertEqual(roy.calculateRoy(200, 10), 2.5, "ROY should calculate the maximum word edge");
    assertEqual(roy.calculateRoy(20, 10), 25, "ROY should calculate the highest bounded score");
    assertEqual(roy.calculateRoy(200, 1), 0.3, "ROY should calculate the lowest bounded score");
    assertEqual(roy.calculateRoy(0, 0), 2.5, "ROY should clamp values below both ranges");
    assertEqual(roy.calculateRoy(999, 999), 2.5, "ROY should clamp values above both ranges");
    assertEqual(roy.getRoyBand(2.49), "needs-work", "ROY should classify scores below the inspect threshold");
    assertEqual(roy.getRoyBand(2.5), "inspect", "ROY should classify the inspect threshold inclusively");
    assertEqual(roy.getRoyBand(5), "earning-space", "ROY should classify the earning threshold inclusively");
    assertEqual(roy.getRoyBand(Number.NaN), "needs-work", "ROY should treat non-finite scores as needs work");
    assertEqual(roy.getRoyPreset("missing"), roy.royPresets[0], "unknown presets should use the first safe preset");
    passed.push("ROY range and band contract");

    assertDeepEqual(Object.keys(workbench.workbenchStates), ["v1", "v2"], "workbench should expose both revisions");
    assert(workbench.workbenchStates.v1.source.includes("flowchart LR") && !workbench.workbenchStates.v1.source.includes("-."),
      "V1 should remain the straight first pass");
    assert(workbench.workbenchStates.v2.source.includes("doubt / revise") && workbench.workbenchStates.v2.source.includes("missing exception"),
      "V2 should expose both revision loopbacks");
    passed.push("workbench revision contract");

    const unsafeText = "<script>\n*bold* _under_ [link] #tag | pipe \\tick`";
    const handoffSession = {
      ...defaultSession,
      activeStep: 4,
      visitedSteps: [0, 1, 2, 3, 4],
      premise: { pattern: "hidden-loop", claim: unsafeText },
      roy: { words: 50, clarity: 7, preset: unsafeText },
      workbench: { revision: "v2", showLoops: true },
      council: { criterion: "iteration", outcome: "combine", note: unsafeText },
      checklist: { claim: true, loops: true, signal: true, conditions: true, handoff: true },
      nextTest: unsafeText,
      handoff: { copied: false, downloaded: false, generatedDate: "2026-09-03" },
    };
    const firstMarkdown = handoff.buildHandoffMarkdown(handoffSession, "2026-09-03");
    const secondMarkdown = handoff.buildHandoffMarkdown(handoffSession, "2026-09-03");
    assertEqual(firstMarkdown, secondMarkdown, "handoff Markdown should be deterministic for the same session and date");
    assert(firstMarkdown.includes("# Local Working Handoff") && firstMarkdown.includes("- **Step:** 05 / The handoff"),
      "handoff should include export identity and current position");
    assert(firstMarkdown.includes("Learner text policy:** Included by default for an explicit local export"),
      "handoff should state the learner text export policy");
    assert(firstMarkdown.includes("\\*bold\\* \\_under\\_ \\[link\\] \\#tag \\| pipe \\\\tick\\`"),
      "handoff should escape Markdown punctuation in learner text");
    assert(!firstMarkdown.includes("<script>") && !firstMarkdown.includes("\n*bold*"),
      "handoff should remove angle brackets and flatten learner line breaks");
    assert(firstMarkdown.includes("- [x] The claim is clear before the diagram appears.") && firstMarkdown.includes("Current ROY readout:** 7x"),
      "handoff should preserve checklist and ROY values");
    assert(firstMarkdown.includes("Selected revision:** V2 / honest revision") && firstMarkdown.includes("Synthesis outcome:** combine"),
      "handoff should preserve workbench and council selections");
    passed.push("handoff escaping and deterministic output");
  } finally {
    await rm(modules.temporaryRoot, { recursive: true, force: true });
  }

  console.log(`Pure contract tests: PASS (${passed.length} checks)`);
  passed.forEach((check) => console.log(`- ${check}`));
}

try {
  await run();
} catch (error) {
  console.error(`Pure contract tests: FAIL — ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}