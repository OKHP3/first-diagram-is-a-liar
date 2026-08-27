---
name: Local browser acceptance
description: Replit-local browser checks and the preview watcher constraint.
---

A local browser acceptance runner should reuse an already-running preview app before starting another Vite watcher in this Repl.

**Why:** Running a second Vite watcher alongside the managed preview can exhaust the container's inotify file-watch limit and make an otherwise healthy app appear to fail.

**How to apply:** Probe the managed local app first; only launch a temporary server when no matching app is already serving. Keep the temporary server in its own process group so cleanup cannot leave orphaned watchers.