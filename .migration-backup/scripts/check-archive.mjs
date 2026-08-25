import { access } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const required = [
  "archive/diagramming-shootout/council-brief.md",
  "archive/diagramming-shootout/diagram-manifest.csv",
  "archive/diagramming-shootout/prompts/all-8-prompts.md",
  "archive/editorial-cut/index.html",
  "archive/member-deliberations/replit/v2-diagram.md",
];
const failures = [];

for (const relative of required) {
  try { await access(resolve(root, relative)); } catch { failures.push(`missing ${relative}`); }
}

if (failures.length) {
  console.error("Archive integrity check: FAIL");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`Archive integrity check: PASS (${required.length} authority anchors present)`);
