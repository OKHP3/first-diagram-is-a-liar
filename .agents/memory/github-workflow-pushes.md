---
name: GitHub workflow pushes
description: Environment-specific GitHub authentication behavior when pushing commits that modify Actions workflow files.
---

For HTTPS pushes that change `.github/workflows/*`, use the securely bound
`GITHUB_PAT` with `repo` and `workflow` scopes. A GitHub PAT configured
elsewhere does not replace the OAuth credential Git may already be using.

**Why:** GitHub rejects workflow-file updates made through an OAuth app without
the `workflow` scope, even when ordinary repository pushes work.

**How to apply:** Verify secret existence through the environment-secrets
surface, use a non-persistent askpass process for the push, disable only the
credential helper for that command, and confirm `HEAD` equals `origin/main`
after fetching.