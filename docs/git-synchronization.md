# Git synchronization

GitHub `OKHP3/first-diagram-is-a-liar`, branch `main`, is the published source.
Windows/File Explorer and Replit are separate working copies. Files edited in
one copy do not arrive in the other until they are committed, published, merged,
and fetched there. A clean Replit Git panel cannot prove that Windows edits
were published.

## Before changing either copy

Stop concurrent editing and run these commands in the repository root:

```bash
git status --short --branch
git branch -vv
git worktree list
git stash list
git diff --check
git fetch origin
git rev-list --left-right --count HEAD...origin/main
```

Do not print credential-bearing remote URLs into screenshots or logs. Inspect
the configured destination with credentials redacted when diagnosing transport.
Preserve dirty files, stashes, unique commits, and unresolved merge indexes
before cleanup. Never delete an index lock unless its owning process is known
to have stopped.

## Land work through GitHub

1. Commit intentional edits on a named feature branch. Review the diff so
   generated output, recovery data, and credentials do not enter the commit.
2. Push that branch and open a pull request to `main`.
3. Require the contract and build checks to pass. Inspect the changed source,
   archive checks, Mermaid delivery, and browser acceptance before squash merge.
4. Wait for the merged commit's Pages deployment and check the live page.

## Update a clean main checkout

Only use this sequence when `git status --porcelain` is empty and the current
branch is `main`:

```bash
git config pull.ff only
git fetch origin
git merge --ff-only origin/main
git rev-parse HEAD origin/main
git rev-list --left-right --count HEAD...origin/main
git status --short --branch
```

The two full commit IDs must match, divergence must be `0 0`, and there must be
no modified or untracked project files. Run `bash scripts/post-merge.sh` in
Replit after a manual Shell update; Replit's task merge hook is a separate path.
Run `npm run test:acceptance` with the environment's Chromium installation.

A fast-forward refusal means there is local history to inspect. Preserve that
history and integrate meaningful changes through a pull request. Do not keep
retrying pull, reset the checkout, or force-push to make the error disappear.
Fast-forward-only configuration prevents an accidental merge; it cannot resolve
divergence on its own.

## Authentication and cleanup

Shell fetch/push, the Replit Git panel, and the Replit application connector are
separate authentication surfaces. Record each result separately. If a connector
asks for account confirmation, the owner completes that sign-in step. A working
Shell is not evidence that the connector has been repaired.

After integration, delete the merged feature branch and prune `origin`.
For old task branches, compare commit ancestry and actual changes, including
squash-equivalent patches. Preserve uncertain history under dated recovery refs
and in a verified Git bundle before removing visible branch names. Keep Replit's
backup remote and current task references. An abandoned worktree can retain a
conflicted index even after all working files have disappeared; preserve its
metadata and conflict-stage blobs before removing its registration.

Mark only this repository's resolved GitHub notifications read and Done after
CI and deployment have settled. Keep actionable failures visible. A clean
notification inbox is separate from source parity and deployment health.
