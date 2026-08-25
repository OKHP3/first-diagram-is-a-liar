# Migration ledger

Date: 2026-08-24

## Repository shape

The repository moved from a mixed Replit workspace into a single TypeScript,
Tailwind, Vite tutorial application with a retained evidence archive.

| Previous path | New path or action | Reason |
|---|---|---|
| `etch-ai-sketch-vibe-diagramming-shootout/` | `archive/diagramming-shootout/` | Preserve the experiment under a shorter semantic path. |
| `member-deliberations/` | `archive/member-deliberations/` | Keep specialty records with the evidence set. |
| `writings/first-diagram-is-a-liar/` | `archive/editorial-cut/` | The prepared HTML cut is local source material, not the new runtime. |
| `attached_assets/` | `archive/legacy-exports/` | Replace the Replit attachment buffer with a provenance-labelled holding area. |
| `artifacts/`, `lib/` | removed | Replit API and component-preview scaffold had no role in the tutorial. |
| `skills/okhp3-skill-promotion/` | removed | Stale publication mirror; `.agents/skills/` remains the local runtime skill source. |
| Replit workspace files and pnpm metadata | removed | No longer matches the application boundary. |

## Detritus removed

- connector metadata containing a GitHub connection identifier
- three exact duplicate prompt captures
- one exact duplicate rendered PNG already present in the experiment archive
- generated `app.js`, `index.html`, and theme files from the old attachment buffer
- the old Replit post-merge database hook and placeholder script package

Unreachable Git objects were observed during the janitor pass and intentionally
left untouched as recovery material.

## Follow-up cleanup

The remote Replit integration later reintroduced workspace-only metadata after
the original migration. The npm-based Pages application does not consume it,
so the following tracked leftovers were removed again:

- `.replit`
- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`

The working tree also contained generated `dist/` and `node_modules/` folders;
both are ignored build/install outputs and were removed before validation.
The root governance files use the GitHub-recognized names `LICENSE`,
`CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, and `SECURITY.md`.
