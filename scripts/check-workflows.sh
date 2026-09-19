#!/usr/bin/env bash

set -euo pipefail

readonly ACTIONLINT_VERSION="1.7.7"
readonly ARCHIVE="actionlint_${ACTIONLINT_VERSION}_linux_amd64.tar.gz"
readonly EXPECTED_SHA256="023070a287cd8cccd71515fedc843f1985bf96c436b7effaecce67290e7e0757"
readonly DOWNLOAD_URL="https://github.com/rhysd/actionlint/releases/download/v${ACTIONLINT_VERSION}/${ARCHIVE}"
readonly WORKFLOWS=(
  ".github/workflows/deploy-pages.yml"
  ".github/workflows/technology-version-review.yml"
)

for workflow in "${WORKFLOWS[@]}"; do
  if [[ ! -f "$workflow" ]]; then
    printf 'Required workflow is missing: %s\n' "$workflow" >&2
    exit 1
  fi
done

tmp_dir="$(mktemp -d)"
trap 'rm -rf "$tmp_dir"' EXIT

curl --fail --silent --show-error --location \
  "$DOWNLOAD_URL" \
  --output "$tmp_dir/$ARCHIVE"

printf '%s  %s\n' "$EXPECTED_SHA256" "$tmp_dir/$ARCHIVE" | sha256sum --check --status
tar --extract --gzip --file "$tmp_dir/$ARCHIVE" --directory "$tmp_dir" actionlint

"$tmp_dir/actionlint" "${WORKFLOWS[@]}"