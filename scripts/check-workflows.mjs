import { spawnSync } from "node:child_process";

if (process.platform !== "linux") {
  console.log("Workflow lint runs on the pinned Linux CI runner; skipped on this platform.");
  process.exit(0);
}

const result = spawnSync("bash", ["scripts/check-workflows.sh"], { stdio: "inherit" });

if (result.error) {
  console.error(`Unable to run the workflow lint script: ${result.error.message}`);
  process.exit(1);
}

process.exit(result.status ?? 1);
