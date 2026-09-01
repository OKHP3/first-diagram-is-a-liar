---
name: Public release verification
description: External production version is authoritative when local editorial material and deployed content diverge.
---

When local editorial material disagrees with the deployed page, treat the
externally verified page as the current public release and label local work as
prepared or unpublished until deployment, metadata, and link checks are
confirmed. A successful GitHub Pages run for a tutorial or review surface does
not verify publication of a separate external article.

**Why:** A repository snapshot can be newer than production without having
been published; calling it current creates provenance, campaign, and rollback
errors.

**How to apply:** Check the deployed HTML and metadata, record the verification
date and exact release identifier, preserve the local source as a snapshot, and
update canonical story, changelog, governance, and campaign references
together. Keep unrelated hosted surfaces and their deployment identifiers
separate in the release handoff.