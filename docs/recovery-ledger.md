# Root Tutorial Recovery Ledger

## Purpose

This ledger records the non-destructive recovery of the root tutorial after a
generated workspace displaced the client-only application. It distinguishes
what was restored, what was deliberately carried forward, and what remains
historical evidence.

## Authority

- **Known-good application baseline:** Git commit `a5d7c86`.
- **Canonical runtime:** the root TypeScript, React, Tailwind, and Vite app.
- **Canonical evidence surface:** `archive/`.
- **Historical recovery evidence:** the canonical root tree, `archive/`, and Git
  history.

## Recovery map

| Classification | Material | Disposition |
| --- | --- | --- |
| Restored | Root app, npm package contract, lockfile, Vite configuration, public assets, scripts, documentation, and Pages workflow from the known-good baseline | Returned to the repository root as the active tutorial. |
| Carried forward | Updated archive README, campaign/release records, v1.0 evidence and synthesis handoffs, and v0.6–v0.9 specialist chapters | Restored under `archive/` because they are evidence, not a runtime surface. |
| Consolidated | The unique project content from `.migration-backup/`, including agent support, release documents, and public visual assets | Moved up to its matching root-relative paths. The nested mirror is no longer an active or archival surface. |
| Retired from the active tree | Artifact applications, API/database libraries, pnpm workspace files, Replit runtime configuration, and the generic GitHub Pages guide | Removed from the active repository shape. Their commits remain recoverable through Git history. |
| Preserved historical input | `attached_assets/` | Retained as source material; it does not define the active product. |

## Claim status

### Confirmed

- The recovered tutorial is client-only and has no application analytics,
  tracking code, backend, database, authentication, or routing layer.
- The production Vite base is `/first-diagram-is-a-liar/`, while local
  development uses `/`.
- The Pages workflow runs root `npm ci`, typechecks, builds the root app, and
  copies `dist/index.html` to `dist/404.html`.
- The Council taxonomy remains visible as Core Five, Exhibition, Specialty,
  and Attempted rather than a flattened leaderboard.

### Inferred

- The archive-only updates listed above belong with the evidence archive because
  they extend release provenance without changing the tutorial’s claimed public
  publication state.

### Consolidated

- The tracked `.migration-backup/` mirror was removed after its unique
  project-relevant files were moved to their matching root-relative paths.
- The current root versions won all shared-path collisions; historical
  migration versions remain recoverable through Git history.

### Proposed

### Unknown

- GitHub Actions and the public GitHub Pages site have not been verified by this
  local recovery.
- No live publication, campaign metric, or v1.0 release is claimed by this
  ledger.
- The Replit environment may regenerate an ignored `.replit` file containing
  only its Node runtime module declaration after workspace reconciliation. It
  is not source-controlled, has no run command or product configuration, and
  cannot be made persistently absent from application code.