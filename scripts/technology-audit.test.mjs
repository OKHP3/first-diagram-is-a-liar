import assert from "node:assert/strict";
import { test } from "node:test";
import { readFile } from "node:fs/promises";
import { checkRows, classify, collectActions, collectPackages, compareVersions, requestJson, selectPython } from "./technology-audit.mjs";
import { issueChange } from "./technology-review-issue.mjs";

test("numeric versions, majors, prereleases and downgrades are distinguished", () => {
  assert.equal(compareVersions("1.10.0", "1.9.9"), 1);
  assert.equal(classify("7.0.2", "7.0.2"), "current");
  assert.equal(classify("8.2.2", "8.3.0"), "update");
  assert.equal(classify("24", "v24.21.0"), "floating-current-line");
  assert.equal(classify("3.13", "3.14.7"), "review-line");
  assert.equal(classify("v7", "v8.0.0"), "review-line");
  assert.equal(classify("3.14.0rc1", "3.14.7"), "review-nonstable");
  assert.equal(classify("2.0.0", "1.0.0"), "ahead-of-latest");
  assert.equal(classify("1.0.0", "2.0.0-beta.1"), "unknown");
  assert.equal(classify(null, "4.0.1", "4.0.1"), "unknown-installed");
  assert.equal(classify(null, "5.0.0", "4.0.1"), "review-baseline");
});

test("Python release lookup excludes prerelease and unpublished records", () => {
  assert.equal(selectPython([
    { name: "Python 3.15.0", is_published: true, pre_release: true },
    { name: "Python 3.14.7", is_published: true, pre_release: false },
    { name: "Python 3.15.1", is_published: false, pre_release: false },
    { name: "Python 3.9.9", is_published: true, pre_release: false },
  ]), "3.14.7");
  assert.throws(() => selectPython([]), /No stable/);
});

test("inventory includes nested and optional packages without promoting them to direct", () => {
  const manifest = { dependencies: { one: "1.0.0" } };
  const lock = { lockfileVersion: 3, packages: { "": manifest,
    "node_modules/one": { version: "1.0.0" },
    "node_modules/other/node_modules/one": { version: "0.9.0" },
    "node_modules/@vendor/native": { version: "2.0.0", optional: true, os: ["linux"] },
  } };
  const rows = collectPackages(manifest, lock);
  assert.deepEqual(rows.map(row => row.scope), ["direct", "transitive", "transitive"]);
  assert.equal(rows[2].name, "@vendor/native");
  assert.equal(rows[2].optional, true);
  assert.throws(() => collectPackages({ dependencies: { one: "2.0.0" } }, lock), /Manifest\/lock drift/);
});

test("actions are discovered across workflows with distinct references preserved", () => {
  const rows = collectActions([["a.yml", "- uses: actions/checkout@v7\n- uses: actions/setup-node@v7"],
    ["b.yml", "  uses: actions/checkout@v7\n- uses: actions/checkout@v6"]]);
  assert.equal(rows.length, 3);
  assert.match(rows[0].source, /a.yml, b.yml/);
});

test("lookup failures remain unknown, successful lookups survive, duplicates share a lookup", async () => {
  let requests = 0;
  const rows = await checkRows([
    { current: "1.0.0", release: { package: "ok" } },
    { current: "1.0.0", release: { package: "ok" } },
    { current: "1.0.0", release: { package: "offline" } },
  ], async release => {
    requests++;
    if (release.package === "offline") throw new Error("HTTP 503");
    return { latest: "2.0.0" };
  });
  assert.equal(requests, 2);
  assert.deepEqual(rows.map(row => row.status), ["update", "update", "unknown"]);
  assert.match(rows[2].error, /503/);
});

test("review issue updates existing evidence, stays quiet unchanged and closes only its own issue", () => {
  const report = { rows: [{ name: "one", current: "1.0.0", latest: "2.0.0", status: "update", scope: "direct" }] };
  const created = issueChange([], report, "OKHP3/first-diagram-is-a-liar");
  assert.equal(created.action, "create");
  const owned = { number: 7, body: created.body, user: { login: "github-actions[bot]" } };
  assert.equal(issueChange([owned], report, "OKHP3/first-diagram-is-a-liar").action, "none");
  assert.equal(issueChange([owned], { ...report, rows: [{ ...report.rows[0], latest: "3.0.0" }] }, "OKHP3/first-diagram-is-a-liar").action, "update");
  assert.equal(issueChange([owned], { rows: [] }, "OKHP3/first-diagram-is-a-liar").action, "close");
  assert.equal(issueChange([{ ...owned, user: { login: "maintainer" } }], { rows: [] }, "OKHP3/first-diagram-is-a-liar").action, "none");
  assert.equal(issueChange([owned], { rows: [{ ...report.rows[0], status: "unknown" }] }, "OKHP3/first-diagram-is-a-liar").action, "update");
});

test("all external inventory anchors are present", async () => {
  const root = new URL("../", import.meta.url);
  const config = JSON.parse((await readFile(new URL(".github/technology-inventory.json", root), "utf8")).replace(/^\uFEFF/, ""));
  for (const tool of config.externalTools) {
    const source = await readFile(new URL(tool.source, root), "utf8");
    if (tool.pattern) assert.match(source, new RegExp(tool.pattern, "m"), tool.name);
  }
});

test("rate limits retry within budget and respect longer server backoff without hammering", async () => {
  let calls = 0;
  const pauses = [];
  const result = await requestJson("https://example.test", {}, async () => {
    calls++;
    return calls === 1 ? new Response("", { status: 429, headers: { "retry-after": "2" } }) : Response.json({ version: "1.0.0" });
  }, async delay => pauses.push(delay));
  assert.equal(result.version, "1.0.0");
  assert.equal(calls, 2);
  assert.deepEqual(pauses, [2000]);
  calls = 0;
  await assert.rejects(requestJson("https://example.test", {}, async () => {
    calls++;
    return new Response("", { status: 429, headers: { "retry-after": "171" } });
  }, async () => assert.fail("Long server backoff must not be shortened")), /retry after 171/);
  assert.equal(calls, 1);
});
