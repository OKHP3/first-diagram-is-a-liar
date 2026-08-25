#!/usr/bin/env bash
set -euo pipefail

# The repository is transitioning from its current npm root to the
# multi-artifact pnpm workspace. Use the lockfile that exists at merge time.
if [[ -f pnpm-lock.yaml ]]; then
  pnpm install --frozen-lockfile
elif [[ -f package-lock.json ]]; then
  npm ci
else
  echo "No supported package lockfile found; nothing to install."
fi