import { readFile } from "node:fs/promises";
import { access } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const page = await readFile(resolve(root, "archive/editorial-cut/first-diagram-is-a-liar/index.html"), "utf8");
const diagrams = ["words-structure-understanding", "feedback-loop", "replit-v2"];
const failures = [];
const canonical = page.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
if (canonical !== "https://overkillhill.com/writings/first-diagram-is-a-liar/") {
  failures.push(`unexpected canonical URL: ${canonical ?? "missing"}`);
}

for (const id of diagrams) {
  for (const ext of ["mmd", "svg"]) {
    const path = resolve(root, `archive/editorial-cut/first-diagram-is-a-liar/assets/${id}.${ext}`);
    try { await access(path); } catch { failures.push(`missing ${id}.${ext}`); }
  }
  if (!page.includes(`data-diagram-id="${id}"`)) failures.push(`page missing ${id}`);
}

const requiredLocal = [
  "archive/editorial-cut/first-diagram-is-a-liar/mermaid-init.js",
  "archive/editorial-cut/first-diagram-is-a-liar/theme-additions.css",
  "etch-ai-sketch-vibe-diagramming-shootout/member-deliberations/replit/v2-diagram.md",
];
for (const relative of requiredLocal) {
  try { await access(resolve(root, relative)); } catch { failures.push(`missing ${relative}`); }
}

const urls = [
  "https://overkillhill.com/writings/first-diagram-is-a-liar/",
  "https://github.com/OKHP3/first-diagram-is-a-liar",
  "https://www.linkedin.com/pulse/first-diagram-usually-liar-jamie-hill",
  "https://replit.com/refer/overkillhillp3",
  "https://mermaidchart.cello.so/UhVlNtC2MlS",
  "https://ko-fi.com/T6T71HCY6A",
  "https://avatars.githubusercontent.com/u/57169982?s=60&v=4",
  "https://avatars.githubusercontent.com/u/983879?s=60&v=4",
];
for (const url of urls) {
  try {
    const response = await fetch(url, { redirect: "follow", signal: AbortSignal.timeout(15000) });
    // Referral providers can deny automated probes while still resolving for readers.
    if (!response.ok && response.status !== 403) failures.push(`${response.status} ${url}`);
  } catch (error) {
    failures.push(`unreachable ${url} (${error.message})`);
  }
}

if (failures.length) {
  console.error("Mermaid delivery health check: FAIL");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`Mermaid delivery health check: PASS (${diagrams.length} featured diagrams, 0 broken canonical destinations)`);
