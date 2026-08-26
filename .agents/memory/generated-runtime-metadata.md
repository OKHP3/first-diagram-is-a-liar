---
name: Generated runtime metadata
description: Replit environment behavior that can make retired runtime configuration reappear outside Git.
---

When a root project intentionally has no Replit product configuration, workspace
reconciliation may recreate an ignored `.replit` file that declares the Node
runtime module; browser/tooling workflows may also transiently add a Python base
module. Treat these entries as platform metadata, not as an active application
surface or source-controlled product decision.

**Why:** Reconciliation can reintroduce generated runtime modules after workflow
or browser-tooling activity, even when the product remains a client-only Node
application.

**How to apply:** Keep the repository’s tracked configuration free of incidental
runtime additions, verify any replacement through Replit’s configuration
validator, and document the boundary rather than repeatedly trying to remove
environment-generated metadata.