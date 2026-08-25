# Application Migration Ledger

This ledger records the 2026-08-24 transition from a public writing archive
with imported Replit workspace material to a static tutorial application plus
preserved evidence archive.

| Before | After | Treatment |
|---|---|---|
| `attached_assets/` | `archive/source-captures/` | Preserved imported source material under portable, descriptive subpaths. Three byte-identical text copies and one hash-identical PNG were removed. |
| `artifacts/` and `lib/` | `archive/replit-workspace/` | Preserved the generic API and component-preview scaffold. It is no longer the active application runtime. |
| `writings/` | `archive/editorial-cut/` | Preserved the prepared article source without presenting it as a deployed release. |
| `member-deliberations/` | `etch-ai-sketch-vibe-diagramming-shootout/member-deliberations/` | Moved the member record beside its council archive. |
| root monorepo configuration | root Vite application configuration | Replaced the inactive workspace entrypoint with the client-only TypeScript and Tailwind guide. |

No Git branches, stashes, archive refs, or non-duplicate historical source
captures were pruned as part of this migration.
