---
name: Replit auto-commit behavior
description: Replit may automatically commit workspace configuration changes while repository maintenance is in progress.
---

Replit can automatically commit changes to `.replit` as an agent-authored configuration commit while a maintenance session is running. Treat that commit as an environment change to preserve, not as part of the requested content cleanup; verify its diff and publication state before reporting alignment.

**Why:** During repository cleanup, a previously uncommitted `.replit` module addition was committed automatically, moving local `main` ahead of `origin/main` without a deliberate source edit.

**How to apply:** Always re-check `git status`, `git log origin/main..main`, and the `.replit` diff after Git configuration or workflow-related operations. Do not reset or publish the commit without explicit authorization.