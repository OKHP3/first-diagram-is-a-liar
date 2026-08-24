---
name: Git sync boundary
description: Safe synchronization behavior when local and GitHub histories are unrelated.
---

When local and remote histories are unrelated, preserve both with an explicit
non-force merge and verify the remote branch before publishing. A connected
GitHub API integration can inspect and mutate GitHub resources, but it does not
automatically provide shell credentials for uploading arbitrary local Git
objects.

**Why:** Treating unrelated histories as a normal pull risks overwriting the
newer archive; trying to solve the gap with a force-push would destroy remote
history, while file-by-file API writes cannot safely reproduce a binary-rich
repository.

**How to apply:** Confirm the live ref, merge with
`--allow-unrelated-histories`, keep the merge commit locally, and only publish
through an authenticated Git transport that can carry the complete object
graph.