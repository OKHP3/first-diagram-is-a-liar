# Synchronization record

Verified 2026-09-29 during candidate preparation.

| Surface | Before | Action | Verified result |
|---|---|---|---|
| GitHub main | `249b72ab8bb2813dc74156444683f2eb43eec3e2` | Metadata/PR inspection and fetch | Verified default branch `main`; no source mutation |
| Windows checkout | `f7ab4a5`, behind one; unrelated local work | Fast-forward only after changed-path review and hashes | HEAD and origin/main both `249b72ab8bb2813dc74156444683f2eb43eec3e2`; `0 0`; all 111 captured modified/untracked files preserved byte-for-byte |
| Replit checkout | Clean main at `7efacac`; cached origin/main equally old | Fetch, inspect three remote-only commits, fast-forward | HEAD and origin/main both `249b72ab8bb2813dc74156444683f2eb43eec3e2`; `0 0`; clean status; diff check passed |
| Replit built-in Git | Cached state | Reload panel, run its own Fetch | Upstream fetched just now; latest history is PR #20; no changes to commit; no authentication error |
| Replit app connector | Authentication expired | Exact app lookup attempted | Requires reconnection; browser and Git operation verified independently |
| GitHub Desktop | No native UI control available in this session | Underlying Windows checkout synchronized through Git | Desktop visual status not independently inspected |

Replit root: `/home/runner/workspace`. Windows origin and the redacted Replit destination check both match `https://github.com/OKHP3/first-diagram-is-a-liar.git`. No merge/rebase conflict, reset, stash operation, force push, or remote deletion occurred. The incoming changes were publication documentation only. No application implementation change or new deployment was made, and no application test result is claimed by this synchronization record.

Parity concerns committed main. Uncommitted owner files and the new candidate packet are not automatically present in Replit or GitHub. Candidate delivery and any later publication have their own state; do not describe them as deployed because main is synchronized.
