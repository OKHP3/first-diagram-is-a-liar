import { execFile } from "node:child_process";
import { lstat, readFile } from "node:fs/promises";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const scriptsDirectory = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptsDirectory, "..");
const fixtureDirectory = join(scriptsDirectory, "campaign-evidence-fixtures");
const manifestPath = join(fixtureDirectory, "manifest.json");
const guardPath = join(scriptsDirectory, "check-campaign-evidence.mjs");
const categories = new Map([
  ["safe", 0],
  ["blocked", 1],
]);

function resolveFixturePath(path) {
  const fixturePath = resolve(fixtureDirectory, path);
  const relativePath = relative(fixtureDirectory, fixturePath);
  if (
    relativePath === "" ||
    relativePath === ".." ||
    relativePath.startsWith(`..${process.platform === "win32" ? "\\" : "/"}`) ||
    isAbsolute(relativePath)
  ) {
    return null;
  }
  return fixturePath;
}

async function readManifest() {
  const source = await readFile(manifestPath, "utf8");
  const manifest = JSON.parse(source);
  if (
    !manifest ||
    typeof manifest !== "object" ||
    Array.isArray(manifest) ||
    Object.keys(manifest).some((category) => !categories.has(category)) ||
    [...categories.keys()].some((category) => !Array.isArray(manifest[category]))
  ) {
    throw new Error("manifest categories are malformed");
  }

  const fixturePaths = new Set();
  const fixtures = [];
  for (const [category, expectedExitCode] of categories) {
    for (const fixture of manifest[category]) {
      const fixturePath =
        typeof fixture?.path === "string" && fixture.path.trim() !== ""
          ? resolveFixturePath(fixture.path)
          : null;
      if (
        !fixture ||
        typeof fixture !== "object" ||
        Array.isArray(fixture) ||
        !fixturePath ||
        typeof fixture.label !== "string" ||
        fixture.label.trim() === "" ||
        fixturePaths.has(fixturePath)
      ) {
        throw new Error("manifest entries are malformed or duplicated");
      }

      fixturePaths.add(fixturePath);
      fixtures.push({ ...fixture, fixturePath, expectedExitCode });
    }
  }

  return fixtures;
}

async function findMissingFixtures(fixtures) {
  const missing = [];
  for (const fixture of fixtures) {
    try {
      const fixtureStat = await lstat(fixture.fixturePath);
      if (!fixtureStat.isFile()) {
        missing.push(fixture.label);
      }
    } catch {
      missing.push(fixture.label);
    }
  }
  return missing;
}

async function runFixture(fixture) {
  const source = await readFile(fixture.fixturePath, "utf8");
  const contentLines = source
    .split(/\r?\n/u)
    .map((line) => line.trim())
    .filter(Boolean);

  try {
    const { stdout, stderr } = await execFileAsync(
      process.execPath,
      [guardPath, "--fixture", fixture.fixturePath],
      { cwd: root, encoding: "utf8" },
    );
    return {
      exitCode: 0,
      leakedContent: contentLines.some((line) =>
        `${stdout}${stderr}`.includes(line),
      ),
    };
  } catch (error) {
    const output = `${error?.stdout ?? ""}${error?.stderr ?? ""}`;
    return {
      exitCode: typeof error?.code === "number" ? error.code : null,
      leakedContent: contentLines.some((line) => output.includes(line)),
    };
  }
}

let fixtures;
try {
  fixtures = await readManifest();
} catch {
  console.error("Campaign evidence fixture check: FAIL — invalid manifest");
  process.exit(1);
}

if (fixtures.length === 0) {
  console.error("Campaign evidence fixture check: FAIL — manifest has no fixtures");
  process.exit(1);
}

const failures = await findMissingFixtures(fixtures);
if (failures.length) {
  console.error("Campaign evidence fixture check: FAIL");
  for (const label of failures) {
    console.error(`- ${label}`);
  }
  process.exit(1);
}

for (const fixture of fixtures) {
  const result = await runFixture(fixture);
  if (result.exitCode !== fixture.expectedExitCode || result.leakedContent) {
    failures.push(fixture.label);
  }
}

if (failures.length) {
  console.error("Campaign evidence fixture check: FAIL");
  for (const label of failures) {
    console.error(`- ${label}`);
  }
  process.exit(1);
}

const blockedCount = fixtures.filter(
  (fixture) => fixture.expectedExitCode === 1,
).length;
console.log(
  `Campaign evidence fixture check: PASS (${fixtures.length} maintained fixtures; ` +
    `${blockedCount} restricted cases rejected)`,
);