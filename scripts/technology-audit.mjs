import { readFile, readdir, mkdir, writeFile, appendFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const stable = /^v?(\d+)\.(\d+)\.(\d+)$/;
const backoffUntil = new Map();

export function compareVersions(left, right) {
  const a = stable.exec(left ?? "");
  const b = stable.exec(right ?? "");
  if (!a || !b) throw new Error(`Expected stable versions: ${left}, ${right}`);
  for (let i = 1; i <= 3; i++) {
    if (+a[i] !== +b[i]) return Math.sign(+a[i] - +b[i]);
  }
  return 0;
}

export function classify(current, latest, reviewedBaseline) {
  if (!stable.test(latest ?? "")) return "unknown";
  if (current == null) {
    if (!reviewedBaseline) return "unknown-installed";
    return compareVersions(latest, reviewedBaseline) > 0 ? "review-baseline" : "unknown-installed";
  }
  if (/^v?\d+(\.\d+)?$/.test(current)) {
    const prefix = current.replace(/^v/, "").split(".");
    const target = latest.replace(/^v/, "").split(".");
    return prefix.every((part, i) => part === target[i]) ? "floating-current-line" : "review-line";
  }
  if (!stable.test(current)) return "review-nonstable";
  const difference = compareVersions(latest, current);
  return difference > 0 ? "update" : difference < 0 ? "ahead-of-latest" : "current";
}

export function collectPackages(manifest, lock) {
  if (lock.lockfileVersion !== 3 || !lock.packages?.[""]) throw new Error("Expected npm lockfile v3");
  const direct = { ...manifest.dependencies, ...manifest.devDependencies };
  for (const [name, version] of Object.entries(direct)) {
    if (lock.packages[`node_modules/${name}`]?.version !== version) throw new Error(`Manifest/lock drift: ${name}`);
  }
  return Object.entries(lock.packages).filter(([path]) => path).map(([path, entry]) => {
    const name = entry.name ?? path.split("node_modules/").at(-1);
    return { name, current: entry.version,
      scope: path === `node_modules/${name}` && Object.hasOwn(direct, name) ? "direct" : "transitive",
      source: `package-lock.json:${path}`, optional: Boolean(entry.optional),
      os: entry.os ?? null, cpu: entry.cpu ?? null, release: { type: "npm", package: name } };
  });
}

export function collectActions(workflows) {
  const actions = new Map();
  for (const [source, content] of workflows) {
    for (const match of content.matchAll(/^\s*(?:-\s*)?uses:\s*["']?([\w.-]+\/[\w.-]+)@([\w.-]+)/gm)) {
      const key = `${match[1]}@${match[2]}`;
      const existing = actions.get(key);
      if (existing && !existing.source.split(", ").includes(source)) existing.source += `, ${source}`;
      else if (existing) continue;
      else actions.set(key, { name: match[1], current: match[2], scope: "action", source,
        release: { type: "github", repository: match[1] } });
    }
  }
  return [...actions.values()];
}

export async function requestJson(url, headers, fetcher = fetch, pause = ms => new Promise(done => setTimeout(done, ms))) {
  for (let attempt = 0; attempt < 3; attempt++) {
    let response;
    try {
      response = await fetcher(url, { headers, signal: AbortSignal.timeout(20000) });
    } catch (error) {
      if (attempt === 2) throw error;
      await pause(1000 * 2 ** attempt);
      continue;
    }
    if (response.ok) return response.json();
    const retryAfter = response.headers.get("retry-after");
    const seconds = retryAfter == null ? null : /^\d+$/.test(retryAfter)
      ? Number(retryAfter) : Math.max(0, (Date.parse(retryAfter) - Date.now()) / 1000);
    const delay = seconds == null || !Number.isFinite(seconds) ? 1000 * 2 ** attempt : Math.ceil(seconds * 1000);
    if (attempt === 2 || (response.status !== 429 && response.status < 500) || delay > 30000) {
      const error = new Error(`HTTP ${response.status}: ${url}${retryAfter ? ` (retry after ${retryAfter}; rerun later if beyond the retry budget)` : ""}`);
      if (response.status === 429 && seconds != null && Number.isFinite(seconds)) error.retryAfterMs = delay;
      throw error;
    }
    await pause(delay);
  }
  throw new Error(`Release lookup exhausted retries: ${url}`);
}

async function json(url) {
  const origin = new URL(url).origin;
  if ((backoffUntil.get(origin) ?? 0) > Date.now()) {
    throw new Error(`Publisher rate limit: ${origin}; retry after ${new Date(backoffUntil.get(origin)).toISOString()}`);
  }
  const headers = { "User-Agent": "first-diagram-technology-audit", Accept: "application/json" };
  if (url.startsWith("https://api.github.com/") && process.env.GH_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GH_TOKEN}`;
  }
  // Reuse local CLI authentication without exposing credentials. CI uses GH_TOKEN.
  if (url.startsWith("https://api.github.com/") && !process.env.GH_TOKEN) {
    try {
      return JSON.parse(execFileSync("gh", ["api", url.slice("https://api.github.com/".length)],
        { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], timeout: 30000 }));
    } catch { /* HTTP below will report missing access, never a false success. */ }
  }
  try {
    return await requestJson(url, headers);
  } catch (error) {
    // A long server backoff applies to this publisher, not just one package.
    if (error.retryAfterMs) backoffUntil.set(origin, Date.now() + error.retryAfterMs);
    throw error;
  }
}

export function selectPython(releases) {
  if (!Array.isArray(releases)) throw new Error("Unexpected Python release response");
  const versions = releases.filter(item => item.is_published && !item.pre_release)
    .map(item => item.name?.replace(/^Python /, "")).filter(version => stable.test(version));
  versions.sort((a, b) => compareVersions(b, a));
  if (!versions.length) throw new Error("No stable Python release found");
  return versions[0];
}

async function latestRelease(release) {
  if (release.type === "npm") {
    const sourceUrl = `https://registry.npmjs.org/${encodeURIComponent(release.package)}/latest`;
    const data = await json(sourceUrl);
    if (!stable.test(data.version)) throw new Error(`Nonstable npm latest for ${release.package}`);
    return { latest: data.version, sourceUrl, engines: data.engines ?? null };
  }
  if (release.type === "github") {
    const sourceUrl = `https://api.github.com/repos/${release.repository}/releases/latest`;
    const data = await json(sourceUrl);
    if (data.draft || data.prerelease || !stable.test(data.tag_name)) throw new Error("Not a stable action release");
    return { latest: data.tag_name, sourceUrl: data.html_url };
  }
  if (release.type === "node") {
    const sourceUrl = "https://nodejs.org/dist/index.json";
    const releases = (await json(sourceUrl)).filter(item => stable.test(item.version))
      .sort((a, b) => compareVersions(b.version, a.version));
    const lts = releases.find(item => item.lts);
    if (!lts || !releases.length) throw new Error("No stable Node.js LTS found");
    return { latest: lts.version, latestCurrent: releases[0].version, sourceUrl };
  }
  if (release.type === "python") {
    const sourceUrl = "https://www.python.org/api/v2/downloads/release/?is_published=true";
    return { latest: selectPython(await json(sourceUrl)), sourceUrl };
  }
  throw new Error(`Unknown release source: ${release.type}`);
}

export async function checkRows(rows, lookup = latestRelease) {
  const cache = new Map();
  const output = [];
  // Bound requests and include optional packages for every OS in the lock inventory.
  for (let offset = 0; offset < rows.length; offset += 6) {
    output.push(...await Promise.all(rows.slice(offset, offset + 6).map(async row => {
      try {
        const key = JSON.stringify(row.release);
        if (!cache.has(key)) cache.set(key, lookup(row.release));
        const result = await cache.get(key);
        return { ...row, ...result, status: classify(row.current, result.latest, row.reviewedBaseline) };
      } catch (error) {
        return { ...row, latest: null, status: "unknown", error: error.message };
      }
    })));
  }
  return output;
}

export const needsReview = row => ["update", "review-line", "review-baseline", "review-nonstable", "ahead-of-latest", "unknown"].includes(row.status);
const cell = value => String(value ?? "Unknown").replaceAll("|", "\\|").replace(/[\r\n]+/g, " ");

export function renderReport(report, onlyChanges = false) {
  const lines = ["# Technology version report", "", `Retrieved: ${report.checkedAt} (UTC).`, "",
    `Source HEAD: ${report.sourceHead}. Working tree: ${report.workingTree}.`, "",
    "In-place npm versions come from the lock contract, not this machine's node_modules.",
    "Floating selectors do not prove which patch ran. Registry latest excludes prereleases.",
    "Node.js comparisons use LTS; newest Current is recorded separately. Transitive updates need parent compatibility.", ""];
  for (const scope of ["direct", "action", "external", "environment", "transitive"]) {
    const rows = report.rows.filter(row => row.scope === scope && (!onlyChanges || needsReview(row)));
    if (!rows.length) continue;
    lines.push(`## ${scope}`, "", "| Technology | In place / selector | Latest stable | Status | Evidence |", "|---|---|---|---|---|");
    for (const row of rows) {
      const latest = row.latestCurrent ? `${row.latest} LTS; ${row.latestCurrent} Current` : row.latest;
      lines.push(`| ${cell(row.name)} | ${cell(row.current)} | ${cell(latest)} | ${cell(row.status)} | ${row.sourceUrl ? `[publisher](${row.sourceUrl})` : cell(row.error)}; ${cell(row.source)} |`);
    }
    lines.push("");
  }
  lines.push(`Rows: ${report.rows.length}; review/update signals: ${report.rows.filter(needsReview).length}; lookup failures: ${report.rows.filter(row => row.status === "unknown").length}.`, "",
    "See docs/technology-inventory.md for scope, managed services, formats, workstation observations, and the update plan.", "");
  return lines.join("\n");
}

export async function audit(repositoryRoot = root) {
  const read = path => readFile(resolve(repositoryRoot, path), "utf8");
  const [manifest, lock, config] = await Promise.all(["package.json", "package-lock.json", ".github/technology-inventory.json"].map(async path => JSON.parse((await read(path)).replace(/^\uFEFF/, ""))));
  const workflows = await Promise.all((await readdir(resolve(repositoryRoot, ".github/workflows")))
    .filter(name => /\.ya?ml$/.test(name)).map(async name => [`.github/workflows/${name}`, await read(`.github/workflows/${name}`)]));
  const external = await Promise.all(config.externalTools.map(async tool => {
    const content = await read(tool.source);
    const current = tool.pattern ? content.match(new RegExp(tool.pattern, "m"))?.[1] : null;
    if (tool.pattern && current == null) throw new Error(`Missing version anchor: ${tool.name}`);
    return { ...tool, current, scope: "external" };
  }));
  const environment = [{ name: "Node.js audit host", current: process.version, scope: "environment", source: "process.version", release: { type: "node" } }];
  const npm = process.env.npm_config_user_agent?.match(/npm\/([\d.]+)/)?.[1];
  environment.push({ name: "npm audit host", current: npm ?? null, scope: "environment", source: "npm user agent; unknown when invoked directly with node", release: { type: "npm", package: "npm" } });
  const rows = await checkRows([...collectPackages(manifest, lock), ...collectActions(workflows), ...external, ...environment]);
  return { schemaVersion: 1, checkedAt: new Date().toISOString(),
    sourceHead: execFileSync("git", ["rev-parse", "HEAD"], { cwd: repositoryRoot, encoding: "utf8" }).trim(),
    workingTree: execFileSync("git", ["status", "--porcelain"], { cwd: repositoryRoot, encoding: "utf8" }).trim() ? "modified" : "clean", rows };
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length && (args.length !== 2 || args[0] !== "--out")) throw new Error("Usage: npm run audit:technologies -- [--out directory]");
  const destination = resolve(root, args[1] ?? ".local/technology-review");
  const report = await audit();
  await mkdir(destination, { recursive: true });
  await writeFile(resolve(destination, "technology-versions.json"), `${JSON.stringify(report, null, 2)}\n`);
  const markdown = renderReport(report);
  await writeFile(resolve(destination, "technology-versions.md"), markdown);
  if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, markdown);
  const failures = report.rows.filter(row => row.status === "unknown").length;
  console.log(`${report.rows.length} rows; ${report.rows.filter(needsReview).length} review/update signals; ${failures} lookup failures. Report: ${destination}`);
  if (failures) process.exitCode = 2;
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
