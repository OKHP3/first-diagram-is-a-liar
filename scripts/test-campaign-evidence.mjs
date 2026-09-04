import { execFile } from "node:child_process";
import { lstat, readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const scriptsDirectory = dirname(fileURLToPath(import.meta.url));
const root = resolve(scriptsDirectory, "..");
const fixtureDirectory = join(scriptsDirectory, "campaign-evidence-fixtures");
const manifestPath = join(fixtureDirectory, "manifest.json");
const guardPath = join(scriptsDirectory, "check-campaign-evidence.mjs");

async function readManifest() {
  const source = await readFile(manifestPath, "utf8");
  const manifest = JSON.parse(source);
  const safe = Array.isArray(manifest.safe) ? manifest.safe : [];
  const blocked = Array.isArray(manifest.blocked) ? manifest.blocked : [];

  return [
    ...safe.map((fixture) => ({ ...fixture, expectedExitCode: 0 })),
    ...blocked.map((fixture) => ({ ...fixture, expectedExitCode: 1 })),
  ];
}

async function runFixture(fixture) {
  const fixturePath = resolve(fixtureDirectory, fixture.path);
  await lstat(fixturePath);

  try {
    await execFileAsync(
      process.execPath,
      [guardPath, "--fixture", fixturePath],
      { cwd: root, encoding: "utf8" },
    );
    return 0;
  } catch (error) {
    return typeof error?.code === "number" ? error.code : null;
  }
}

const fixtures = await readManifest();
if (fixtures.length === 0) {
  console.error("Campaign evidence fixture check: FAIL — manifest has no fixtures");
  process.exit(1);
}

const failures = [];
for (const fixture of fixtures) {
  try {
    const actualExitCode = await runFixture(fixture);
    if (actualExitCode !== fixture.expectedExitCode) {
      failures.push(fixture.label);
    }
  } catch {
    // Keep fixture contents and child-process diagnostics out of test output.
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