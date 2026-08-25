---
name: Generated runtime metadata
description: Replit environment behavior that can make retired runtime configuration reappear outside Git.
---

When a root project intentionally has no Replit product configuration, workspace
reconciliation may recreate an ignored `.replit` file that declares only the
Node runtime module. Treat it as platform metadata, not as an active application
surface or source-controlled product decision.

**Why:** Removing this generated file does not remain durable after the
environment reconciles workflows or project metadata, even when no run command,
artifact routing, or application configuration is present.

**How to apply:** Keep the repository’s tracked configuration free of Replit
runtime scaffolding, verify that the generated file is ignored and contains no
product behavior, and document the boundary rather than repeatedly trying to
remove it.