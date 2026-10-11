# Repository preparation for the final article

Date: 2026-09-29. Scope: `OKHP3/first-diagram-is-a-liar` only.

## Profile and evidence

Confirmed, high confidence: this is a hybrid application and evidence archive. The root Vite tutorial, preserved diagram sources/renders, publication receipts, and local Agent Skills have different purposes. The current folder split is useful and does not need wholesale reorganization.

The initial index contained 698 tracked files: 451 under `.agents`, 129 under `archive`, 27 under `docs`, 28 under `scripts`, 19 under `public`, and 11 under `src`, plus root and other supporting files. No nested Git repository, unresolved index stages, tracked ignored files, or tracked dependency/build/recovery directory was found. The organizer's broader disk inventory counted 884 files because it also includes ignored local recovery material and build output. Those totals are not interchangeable.

GitHub's default branch is `main`; fetched tip: `249b72ab8bb2813dc74156444683f2eb43eec3e2`. Initial Windows HEAD was `f7ab4a5fad37d788c5d05191e1d5c9601356614a`, behind by one commit. The only remote change is the v0.9 receipt. Owner changes include an edited Notion routing skill, newly installed skills, catch-up publication copy, and the preceding editorial audit. They are preserved.

No stash was present. Two local-only commits on `codex/v0.6-linkedin-companion` remain attached to an active worktree. One unreachable commit, `8b34f198893785b0aa2d3dbb6def559cf536860c`, corresponds to merged PR #16. It was pinned before fetching under `refs/archive/2026-09-29/preparation-unreachable-8b34f19`. The subsequent audit found no unreachable commits. Other unreachable blobs/trees and existing recovery refs were not pruned.

## Branch decision ledger

| Branch | Evidence | Decision |
|---|---|---|
| `main` | Behind one, unrelated local working changes | Fast-forward only after confirming no path overlap; preserve working changes. |
| `codex/linkedin-v09-companion` | PR #20 merged; receipt file equals main; active worktree | Keep worktree and branch. Squash merge means tip is not an ancestor of main. |
| `codex/v0.8-editorial-reconciliation` | PR #19 merged; both changed files equal main; active worktree | Keep. No active-task cleanup inferred from merge. |
| `codex/v0.8-mermaid-theme-builder-linkedin` | PR #18 merged; later receipt differs through subsequent reconciliation | Retain provenance; optional future cleanup needs exact recovery/patch verification. |
| `codex/v0.7-replit-linkedin` | PR #17 remains open and draft; three unique branch commits | Keep for editorial review. Published article addition does not prove this separate feed post was published. |
| `codex/v0.6-linkedin-companion` | Two unpushed commits, four changed paths, active worktree | Preserve; do not substitute its candidate prose for published evidence. |

## Content that could confuse the next draft

1. Six tracked skill folders end in ` copy`. Four contain byte-identical counterparts: `okhp3-repl-repo-janitor copy` (3 files), `okhp3-replit-canvas-board copy` (4), `okhp3-replit-design-pipeline copy` (4), and `okhp3-replit-multi-artifact copy` (4). The GitHub-sync and Replit-janitor copies contain differing files and cannot be collapsed as exact duplicates. Use the explicitly named canonical skill paths for this task.
2. `skills/okhp3-skill-promotion/` exists despite the historical migration ledger saying it was removed. Git history shows it was reintroduced later. It is support metadata, not article evidence.
3. Current publication labels lag the actual v0.9 receipt in several governance files. The prior 34-issue editorial audit identifies the exact conflicts. An old file calling itself canonical does not override a newer dated receipt.
4. `projects/first-diagram-is-a-liar/index.html` is an external-site companion artifact. Its canonical URL is the website project page. It is not the Vite runtime or the requested article master.
5. `archive/editorial-cut/` is a prepared earlier cut, not the final candidate produced in this task. Source snapshots and interview reconstructions need their provenance labels.

The organizer reported naming-profile findings, including 46 long path segments and 50 paths with spaces. It reported no case/normalization collision, Windows-reserved name, or forbidden-character category. These are review signals, not proof that all consumers accept every path. Existing diagram filenames are public source anchors and remain intact.

## Smallest target structure and proposed mappings

Keep `src`, `public`, `scripts`, `.github`, `.agents`, and the archive in place. Put the unified master, publication candidates, claim ledger, and review records in `docs/final-publication/`. Keep private Notion destination IDs and transient audit output in ignored local storage.

| Current path | Proposed path/action | Evidence and risk | Reversible step |
|---|---|---|---|
| `.agents/skills/okhp3-replit-canvas-board copy/` | Future removal after explicit skill cleanup approval | Four identical files; skill discovery could list duplicates | Preserve exact source commit and recover files from it |
| `.agents/skills/okhp3-replit-design-pipeline copy/` | Future removal after explicit skill cleanup approval | Four identical files; same discovery risk | Same source-commit recovery |
| `.agents/skills/okhp3-replit-multi-artifact copy/` | Future removal after explicit skill cleanup approval | Four identical files; same discovery risk | Same source-commit recovery |
| Other copied skills and `skills/` mirror | Keep; reconcile in a skill-specific task | Differing versions and provenance require review | No mutation |
| `archive/diagramming-shootout/diagrams/v1/` and `v2/` | Keep exact paths | Public links and source/render manifests depend on them | No mutation |
| Existing publication receipts | Keep exact paths and dates | Historical provenance | Add pointers rather than rewrite |
| New final-publication packet | `docs/final-publication/` | Requested candidate content, clearly unpublished | Remove only the newly created packet if abandoned |

The repository-organizer skill requires an approved exact mapping before structural moves/deletions, and project instructions protect `.agents/skills`. This pass therefore does not delete or rename skill assets. It prevents their use as competing article authority through the candidate source ledger. No approval is required to continue drafting.

## Execution and limits

Completed: read-only janitor and organizer inventories, GitHub PR-state checks, duplicate comparisons, fetch without pruning, and one recovery-ref addition. No source files moved, deleted, overwritten, or merged during the inventory. No remote branch deleted; no PR closed. This is a classified repository, not a claim of zero accumulated material.

Local machine reports are under ignored `.local/publication-preparation/`. They include the complete before/fetched Git inventories and the organizer inventory. Replit and Windows synchronization results are recorded separately in the final-publication handoff.
