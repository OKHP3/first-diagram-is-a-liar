import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { performance } from "node:perf_hooks";
import { spawn } from "node:child_process";
import { tmpdir } from "node:os";

// This is an isolated candidate benchmark. Mermaid is deliberately not a
// dependency of the root tutorial.
const MERMAID_VERSION = "11.12.0";
const VITE_VERSION = "8.2.2";
const BUNDLE_BUDGET_BYTES = 1_000_000;
const STARTUP_BUDGET_MS = 500;
const root = resolve(new URL("..", import.meta.url).pathname);

function run(command, args, options = {}) {
  return new Promise((resolveProcess, rejectProcess) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      env: { ...process.env, npm_config_loglevel: "error" },
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk; });
    child.stderr.on("data", (chunk) => { stderr += chunk; });
    child.on("error", rejectProcess);
    child.on("exit", (code) => {
      if (code === 0) resolveProcess(stdout);
      else rejectProcess(new Error(`${command} ${args.join(" ")} failed (${code})\n${stderr || stdout}`));
    });
  });
}

async function sumFiles(directory, extension) {
  let total = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) total += await sumFiles(path, extension);
    else if (entry.name.endsWith(extension)) total += (await readFile(path)).byteLength;
  }
  return total;
}

async function coldImportMs(candidateRoot, modulePath) {
  const samples = [];
  for (let index = 0; index < 3; index += 1) {
    const output = await run(process.execPath, [
      "--input-type=module",
      "-e",
      `const start = performance.now(); await import(${JSON.stringify(modulePath)}); console.log(performance.now() - start);`,
    ], { cwd: candidateRoot });
    samples.push(Number.parseFloat(output.trim().split(/\s+/).at(-1)));
  }
  samples.sort((left, right) => left - right);
  return { samples, median: samples[1] };
}

async function writeFixture(directory, candidate) {
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, "index.html"), '<div id="app"></div><script type="module" src="/main.js"></script>\n');
  await writeFile(join(directory, "main.js"), candidate
    ? `import mermaid from "mermaid";
const start = performance.now();
mermaid.initialize({ startOnLoad: false, securityLevel: "strict" });
document.querySelector("#app").textContent = \`candidate \${Math.round(performance.now() - start)}ms\`;
`
    : `const start = performance.now();
document.querySelector("#app").textContent = \`baseline \${Math.round(performance.now() - start)}ms\`;
`);
  await writeFile(join(directory, "empty.mjs"), "export const baseline = true;\n");
}

async function benchmark() {
  const temporaryRoot = await mkdtemp(join(tmpdir(), "first-diagram-mermaid-benchmark-"));
  try {
    const candidateRoot = join(temporaryRoot, "candidate");
    const baselineRoot = join(temporaryRoot, "baseline");
    await Promise.all([writeFixture(candidateRoot, true), writeFixture(baselineRoot, false)]);
    await writeFile(join(temporaryRoot, "package.json"), JSON.stringify({
      private: true,
      type: "module",
      dependencies: { mermaid: MERMAID_VERSION, vite: VITE_VERSION },
    }, null, 2));
    await run("npm", ["install", "--ignore-scripts", "--no-package-lock", "--no-audit", "--no-fund"], { cwd: temporaryRoot });

    const vite = join(temporaryRoot, "node_modules", ".bin", "vite");
    const baselineDist = join(temporaryRoot, "baseline-dist");
    const candidateDist = join(temporaryRoot, "candidate-dist");
    await run(vite, ["build", "--outDir", baselineDist, "--emptyOutDir"], { cwd: baselineRoot });
    await run(vite, ["build", "--outDir", candidateDist, "--emptyOutDir"], { cwd: candidateRoot });

    const baselineBytes = await sumFiles(baselineDist, ".js");
    const candidateBytes = await sumFiles(candidateDist, ".js");
    const deltaBytes = candidateBytes - baselineBytes;
    const baselineStartup = await coldImportMs(baselineRoot, join(baselineRoot, "empty.mjs"));
    const candidateStartup = await coldImportMs(temporaryRoot, "mermaid");
    const packageStats = await readFile(join(temporaryRoot, "node_modules", "mermaid", "package.json"), "utf8");
    const resolvedVersion = JSON.parse(packageStats).version;
    const startupDelta = candidateStartup.median - baselineStartup.median;
    const verdict = deltaBytes <= BUNDLE_BUDGET_BYTES && startupDelta <= STARTUP_BUDGET_MS ? "GO" : "NO-GO";

    console.log(`Mermaid candidate benchmark: ${verdict}`);
    console.log(`- candidate: mermaid@${resolvedVersion} (requested ${MERMAID_VERSION})`);
    console.log(`- isolated Vite fixture: vite@${VITE_VERSION}`);
    console.log(`- baseline JS: ${baselineBytes} bytes`);
    console.log(`- candidate JS: ${candidateBytes} bytes`);
    console.log(`- bundle delta: ${deltaBytes} bytes (budget ${BUNDLE_BYTES(BUNDLE_BUDGET_BYTES)})`);
    console.log(`- baseline cold module import: ${baselineStartup.samples.join(", ")} ms (median ${baselineStartup.median} ms)`);
    console.log(`- candidate cold Mermaid import: ${candidateStartup.samples.join(", ")} ms (median ${candidateStartup.median} ms)`);
    console.log(`- startup delta: ${startupDelta.toFixed(1)} ms (budget ${STARTUP_BUDGET_MS} ms)`);
    console.log("- root tutorial action: retain deterministic SVG; do not add Mermaid runtime");
  } finally {
    await rm(temporaryRoot, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 });
  }
}

function BUNDLE_BYTES(bytes) {
  return `${bytes.toLocaleString("en-US")} bytes`;
}

try {
  await benchmark();
} catch (error) {
  console.error(`Mermaid candidate benchmark: FAIL — ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}