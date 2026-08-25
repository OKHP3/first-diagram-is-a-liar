# Technology Inventory

Reviewed: 2026-08-24

## Scope

The active repository surface is a client-side Vite application plus a public
methodology archive. `src/`, `vite.config.ts`, and `package.json` are the
application source of truth. The ETCH-AI-SKETCH directories remain evidence
and learning material, not runtime dependencies. `archive/replit-workspace/`
is preserved, superseded source and is not part of the active build.

## Active application

| Technology | Role | In-place version | Validation |
|---|---|---:|---|
| TypeScript | Application source and static type checking | `~5.9.2` | `pnpm typecheck` |
| React | Client-side interactive tutorial | `^19.1.0` | Vite production build |
| Vite | Development server and static production build | `^7.3.3` | `pnpm build` |
| Tailwind CSS | Utility layer and CSS processing | `^4.2.1` | Vite production build |
| pnpm | Locked package installation | lockfile-backed | `pnpm install --frozen-lockfile` |
| GitHub Actions / Pages | Builds `dist/` and publishes the Pages artifact | workflow-managed | remote workflow after push |

The tutorial is browser-only. It has no application API, database, user
accounts, telemetry, or server-side rendering.

## Archive technologies

| Technology | Archive role | In-place version | Tracking status |
|---|---|---:|---|
| Mermaid | Editable diagram source and external render workflow | archive source is not package-pinned | Monthly version-review workflow |
| PptxGenJS | Historical deck-generation tool named by slide documentation | generator source is absent | Monthly version-review workflow |
| Markdown / CSV | Editable archive and index formats | Not applicable | Repository content format |
| PNG / PPTX / PDF / MP4 | Preserved render and distribution formats | Not applicable | Historical artifacts |

The monthly review checks external Mermaid and PptxGenJS release baselines. It
does not change the tutorial application's dependencies.
