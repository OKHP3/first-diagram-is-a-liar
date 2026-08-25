import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const targets = [
  {
    name: "ChatGPT V2",
    url: "https://mermaid.ai/d/18c4c328-bef3-4d80-bebf-d9127c39fe43",
  },
  {
    name: "Gemini V2",
    url: "https://mermaid.ai/d/54541ba0-3c57-4065-bf53-c698123747bc",
  },
  {
    name: "Copilot V1",
    url: "https://mermaid.ai/d/8fe5c9ae-c8ac-4754-98fd-268ae3ceeef7",
  },
  {
    name: "ChatGPT V1",
    url: "https://mermaid.ai/d/b49cf4f6-5071-4207-8673-0ae56d328ed6",
  },
];

let playwright;
try {
  playwright = await import("playwright");
} catch {
  console.error(
    "Hosted Mermaid browser check: NOT RUN — install Playwright with " +
      "`pnpm add -Dw playwright` and its Chromium browser before running this check.",
  );
  process.exit(2);
}

const headed = process.env.HEADED === "1";
const screenshotDir = process.env.SCREENSHOT_DIR
  ? resolve(process.cwd(), process.env.SCREENSHOT_DIR)
  : null;
if (screenshotDir) await mkdir(screenshotDir, { recursive: true });

const browser = await playwright.chromium.launch({ headless: !headed });
const results = [];

for (const target of targets) {
  const page = await browser.newPage();
  let response;
  let error;
  try {
    response = await page.goto(target.url, {
      waitUntil: "domcontentloaded",
      timeout: 30_000,
    });
    await page.waitForTimeout(2_000);
    const observed = await page.evaluate(() => {
      const text = document.body?.innerText ?? "";
      const visualCandidates = [...document.querySelectorAll("svg, canvas")]
        .map((element) => {
          const box = element.getBoundingClientRect();
          const contentLength =
            element instanceof SVGElement
              ? element.innerHTML.trim().length
              : element.width * element.height;
          return {
            width: Math.round(box.width),
            height: Math.round(box.height),
            contentLength,
          };
        })
        .filter(
          ({ width, height, contentLength }) =>
            width >= 100 && height >= 50 && contentLength > 0,
        );
      return { text, visualCandidates };
    });
    const titleMatches = observed.text
      .toLowerCase()
      .includes(target.name.toLowerCase());
    const nonEmptyCanvas = observed.visualCandidates.length > 0;
    const navigationStatus = response?.status() ?? null;
    results.push({
      name: target.name,
      url: target.url,
      navigationStatus,
      authorizationLimited: [401, 403].includes(navigationStatus),
      titleMatches,
      nonEmptyCanvas,
      result: titleMatches && nonEmptyCanvas ? "RENDER-VERIFIED" : "RENDER-FAILED",
      visualCandidates: observed.visualCandidates,
    });
    if (screenshotDir) {
      await page.screenshot({
        path: resolve(
          screenshotDir,
          `${target.name.toLowerCase().replaceAll(" ", "-")}.png`,
        ),
        fullPage: true,
      });
    }
  } catch (caught) {
    error = caught;
    results.push({
      name: target.name,
      url: target.url,
      navigationStatus: response?.status() ?? null,
      authorizationLimited: [401, 403].includes(response?.status()),
      titleMatches: false,
      nonEmptyCanvas: false,
      result: "BROWSER-ERROR",
      error: caught.message,
    });
  } finally {
    await page.close();
  }
  if (error) console.error(`${target.name}: ${error.message}`);
}

await browser.close();

const output = process.env.RESULT_FILE
  ? resolve(process.cwd(), process.env.RESULT_FILE)
  : null;
if (output) await writeFile(output, `${JSON.stringify({ headed, results }, null, 2)}\n`);

for (const result of results) {
  console.log(
    `${result.result}: ${result.name} ` +
      `(status=${result.navigationStatus ?? "none"}, ` +
      `authorizationLimited=${result.authorizationLimited}, ` +
      `titleMatches=${result.titleMatches}, nonEmptyCanvas=${result.nonEmptyCanvas})`,
  );
}

const failures = results.filter((result) => result.result !== "RENDER-VERIFIED");
if (failures.length) {
  console.error(`Hosted Mermaid browser check: FAIL (${failures.length} route(s))`);
  process.exit(1);
}
console.log("Hosted Mermaid browser check: PASS (4 formerly blank routes rendered)");