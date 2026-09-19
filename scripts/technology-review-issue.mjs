import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { needsReview, renderReport } from "./technology-audit.mjs";

const marker = "<!-- first-diagram-technology-review:v2 -->";
const title = "Technology version review required";

export function issueChange(issues, report, repository) {
  const existing = issues.find(issue => !issue.pull_request && issue.body?.includes(marker)
    && issue.user?.login === "github-actions[bot]");
  if (!report.rows.some(needsReview)) return existing ? { action: "close", number: existing.number } : { action: "none" };
  const body = [marker,
    "Dependabot proposes npm and GitHub Actions updates. Review other runtimes and authoring tools using docs/technology-inventory.md.",
    "Lookup failures mean unknown, never current. Major releases and archive regeneration require compatibility review.",
    `[Dated full report and JSON artifact](https://github.com/${repository}/actions/workflows/technology-version-review.yml)`,
    renderReport({ ...report, checkedAt: "see workflow report", sourceHead: "default branch", workingTree: "scheduled checkout" }, true)
  ].join("\n\n");
  if (existing?.body === body) return { action: "none" };
  return existing ? { action: "update", number: existing.number, body } : { action: "create", body };
}

export async function syncReviewIssue({ repository, token, report, fetcher = fetch }) {
  if (!/^[\w.-]+\/[\w.-]+$/.test(repository ?? "") || !token) throw new Error("GitHub repository and token are required");
  const repositoryEndpoint = `https://api.github.com/repos/${repository}`;
  const endpoint = `${repositoryEndpoint}/issues`;
  async function request(url, method = "GET", data) {
    const response = await fetcher(url, { method,
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "Content-Type": "application/json" },
      body: data ? JSON.stringify(data) : undefined, signal: AbortSignal.timeout(20000) });
    if (!response.ok) throw new Error(`GitHub issue request failed: HTTP ${response.status}`);
    return response.json();
  }
  const metadata = await request(repositoryEndpoint);
  if (metadata.has_issues === false) return { action: "disabled" };
  if (metadata.has_issues !== true) throw new Error("Repository issue availability is unknown");
  const issues = [];
  for (let page = 1; ; page++) {
    const batch = await request(`${endpoint}?state=open&per_page=100&page=${page}`);
    if (!Array.isArray(batch)) throw new Error("Unexpected issue response");
    issues.push(...batch);
    if (batch.length < 100) break;
  }
  const change = issueChange(issues, report, repository);
  if (change.action === "create") await request(endpoint, "POST", { title, body: change.body });
  if (change.action === "update") await request(`${endpoint}/${change.number}`, "PATCH", { body: change.body });
  if (change.action === "close") await request(`${endpoint}/${change.number}`, "PATCH", { state: "closed" });
  return change;
}

async function main() {
  const report = JSON.parse(await readFile(process.argv[2], "utf8"));
  const change = await syncReviewIssue({ repository: process.env.GITHUB_REPOSITORY, token: process.env.GH_TOKEN, report });
  if (change.action === "disabled") console.log("::notice::Repository Issues are disabled. Review the Actions summary and technology-versions artifact; Dependabot pull requests remain active.");
  console.log(`Technology review issue: ${change.action}`);
}

if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  main().catch(error => { console.error(error.message); process.exitCode = 1; });
}
