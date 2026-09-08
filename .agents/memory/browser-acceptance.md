---
name: Local browser acceptance
description: Replit-local browser checks and the preview watcher constraint.
---

A local browser acceptance runner should reuse an already-running preview app before starting another Vite watcher in this Repl.

**Why:** Running a second Vite watcher alongside the managed preview can exhaust the container's inotify file-watch limit and make an otherwise healthy app appear to fail.

**How to apply:** Probe the managed local app first; only launch a temporary server when no matching app is already serving. Keep the temporary server in its own process group so cleanup cannot leave orphaned watchers.

Chromium may serialize a reduced-motion transition of `0.01ms` as `1e-05s` in computed styles.

**Why:** Browser acceptance assertions should compare equivalent CSS durations rather than assuming one serialization format.

**How to apply:** Accept the browser's normalized seconds form when checking reduced-motion behavior.

Native disclosure and button keyboard activation is reliable in this runner with a trusted CDP `rawKeyDown` + `keyUp` Space sequence.

**Why:** Chromium headless did not activate these native controls when the acceptance check sent Enter or a plain key-down event, even though focus was correct.

**How to apply:** Use the Space sequence for archive keyboard-activation checks, and assert the resulting native state or click handler outcome rather than dispatching synthetic DOM keyboard events.