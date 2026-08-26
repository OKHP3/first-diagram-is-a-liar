#!/usr/bin/env bash
set -euo pipefail

# Keep post-merge setup aligned with the canonical root tutorial.
# This is intentionally root-only: the project has no backend, database, or
# secondary artifact that should be installed or migrated after a merge.
npm ci --no-audit --no-fund
npm run check
npm run build
npm run check:archive
npm run health:mermaid