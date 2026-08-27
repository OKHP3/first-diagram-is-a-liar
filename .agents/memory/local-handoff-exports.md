---
name: Local handoff exports
description: Privacy and determinism constraints for browser-generated working handoffs.
---

A local handoff should be a deterministic browser-generated snapshot with no timestamp, user tracking, remote persistence, or implied verdict.

**Why:** Recoverability is useful only if readers can trust that exporting does not silently upload private working context or turn an unfinished state into a conclusion.

**How to apply:** Keep download and clipboard actions separate, label unresolved user-specific questions as unknown, and test the Blob content and filename locally without navigating to a remote endpoint.