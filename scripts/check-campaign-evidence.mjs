import { lstat, readFile, readdir } from "node:fs/promises";
import { extname, relative, resolve, sep } from "node:path";

const root = process.cwd();
const defaultPaths = [
  "archive/diagramming-shootout",
  "docs",
];

const textExtensions = new Set([
  ".csv",
  ".html",
  ".js",
  ".json",
  ".mjs",
  ".md",
  ".mmd",
  ".txt",
  ".ts",
  ".tsx",
  ".yaml",
  ".yml",
]);
const structuredExtensions = new Set([
  ".csv",
  ".har",
  ".json",
  ".ndjson",
  ".tsv",
  ".xls",
  ".xlsx",
  ".zip",
]);
const visualExtensions = new Set([
  ".gif",
  ".jpeg",
  ".jpg",
  ".pdf",
  ".png",
  ".webp",
]);
const knownDocumentationFiles = new Set([
  "archive/diagramming-shootout/diagram-manifest.csv",
]);
const approvedAggregateLabel =
  /aggregate\s+campaign\s+evidence\s*[—-]\s*restricted\s+raw\s+source\s+not\s+attached/giu;
const suspiciousAttachmentName =
  /(?:analytics|ga4|google[-_ ]?analytics|debugview|user[-_ ]?explorer|event[-_ ]?level|raw[-_ ]?(?:analytics|export|readout)|unredacted|screen[-_ ]?shot|screenshot|attachment)/iu;
const evidenceDirectory =
  /(?:^|\/)(?:analytics|campaign[-_ ]?evidence|evidence|readout|readouts)(?:\/|$)/iu;

const contentRules = [
  {
    name: "user or device identifier value",
    pattern:
      /\b(?:user_id|user_pseudo_id|client_id|session_id|device_id|advertising_id)\b\s*(?::|=|,)\s*(?:"[^"\r\n]+"|'[^'\r\n]+'|[A-Za-z0-9][A-Za-z0-9._:-]{2,})/iu,
  },
  {
    name: "cookie or token value",
    pattern:
      /\b(?:cookie|set-cookie|authorization|bearer|access_token|refresh_token|id_token|api_key)\b\s*(?::|=)\s*(?:"[^"\r\n]+"|'[^'\r\n]+'|[^\s,}]+)/iu,
  },
  {
    name: "contact or network identifier value",
    pattern:
      /\b(?:email|phone|ip(?:_address)?|exact_location)\b\s*(?::|=)\s*(?:"[^"\r\n]+"|'[^'\r\n]+'|[^\s,}]+)/iu,
  },
  {
    name: "tracking identifier in URL",
    pattern:
      /[?&](?:gclid|fbclid|msclkid|click_id|clickid|dclid|wbraid|gbraid)=[^&\s)]+/iu,
  },
  {
    name: "raw export header",
    pattern:
      /(?:^|,)\s*(?:user_id|user_pseudo_id|client_id|session_id|device_id|event_timestamp)\s*(?:,|$)/imu,
  },
  {
    name: "email address",
    pattern: /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/iu,
  },
  {
    name: "IPv4 address",
    pattern:
      /(?<![\d.])(?:25[0-5]|2[0-4]\d|1?\d?\d)(?:\.(?:25[0-5]|2[0-4]\d|1?\d?\d)){3}(?![\d.])/u,
  },
];

function displayPath(path) {
  return relative(root, path).split(sep).join("/");
}

function isInsideDocs(relativePath) {
  return relativePath === "docs" || relativePath.startsWith("docs/");
}

function isCampaignEvidencePath(relativePath) {
  if (relativePath.startsWith("archive/diagramming-shootout/")) return true;
  if (!isInsideDocs(relativePath)) return false;
  return /(?:campaign|analytics|readout|release[-_ ]?evidence|evidence|measurement|handoff)/iu.test(
    relativePath,
  );
}

async function collectFiles(path) {
  const info = await lstat(path);
  if (info.isFile()) return [path];
  if (!info.isDirectory()) return [];

  const entries = await readdir(path, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    files.push(...(await collectFiles(resolve(path, entry.name))));
  }
  return files;
}

function lineNumber(source, index) {
  return source.slice(0, index).split("\n").length;
}

function isBinary(source) {
  return source.includes("\u0000");
}

function addFailure(failures, file, reason, line) {
  failures.push(`${displayPath(file)}${line ? `:${line}` : ""} — ${reason}`);
}

async function scanFile(file, failures) {
  const relativePath = displayPath(file);
  if (!isCampaignEvidencePath(relativePath)) return;

  const extension = extname(file).toLowerCase();
  const name = file.split(sep).pop() ?? "";
  const isKnownDocumentation = knownDocumentationFiles.has(relativePath);
  const isEvidenceAttachmentDirectory = evidenceDirectory.test(relativePath);

  if (suspiciousAttachmentName.test(name)) {
    addFailure(failures, file, "suspicious analytics or unredacted attachment filename");
  }

  if (
    !isKnownDocumentation &&
    structuredExtensions.has(extension) &&
    (isEvidenceAttachmentDirectory ||
      relativePath.startsWith("archive/diagramming-shootout/") ||
      isInsideDocs(relativePath))
  ) {
    addFailure(
      failures,
      file,
      `raw-looking ${extension.slice(1).toUpperCase()} attachment in campaign evidence`,
    );
  }

  if (
    visualExtensions.has(extension) &&
    (isEvidenceAttachmentDirectory ||
      (isInsideDocs(relativePath) && isCampaignEvidencePath(relativePath)))
  ) {
    addFailure(
      failures,
      file,
      "visual or document attachment in an evidence folder must be reviewed and kept owner-controlled",
    );
  }

  if (!textExtensions.has(extension)) return;

  const source = await readFile(file, "utf8");
  if (isBinary(source)) return;

  // The approved label documents that the raw source is not attached. Remove
  // only that label from the scan; a real value next to it must still fail.
  const scanSource = source.replace(approvedAggregateLabel, "");
  for (const rule of contentRules) {
    const match = rule.pattern.exec(scanSource);
    rule.pattern.lastIndex = 0;
    if (match) {
      addFailure(failures, file, `possible ${rule.name}`, lineNumber(scanSource, match.index));
    }
  }
}

const requestedPaths = process.argv.slice(2);
const paths = requestedPaths.length ? requestedPaths : defaultPaths;
const files = [];
for (const path of paths) {
  try {
    files.push(...(await collectFiles(resolve(root, path))));
  } catch (error) {
    console.error(`Campaign evidence privacy check: FAIL — cannot read ${path}`);
    console.error(`- ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
}

const failures = [];
for (const file of files) await scanFile(file, failures);

if (failures.length) {
  console.error("Campaign evidence privacy check: FAIL");
  console.error("Restricted analytics or attachment signals must stay out of shared evidence:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

const scanned = files.filter((file) => isCampaignEvidencePath(displayPath(file))).length;
console.log(
  `Campaign evidence privacy check: PASS (${scanned} campaign evidence paths scanned; ` +
    "aggregate summaries and event-contract prose allowed)",
);