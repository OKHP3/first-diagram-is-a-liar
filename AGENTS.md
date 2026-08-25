# The First Diagram Is Usually a Liar

## Scope and identity

This repository is one Git checkout with no nested Git repositories. It now
contains two related surfaces:

- `src/` is the active **First Diagram Field Guide**, a TypeScript, React,
  Vite, and Tailwind single-page tutorial.
- `etch-ai-sketch-vibe-diagramming-shootout/` is the public evidence archive
  behind the article and Council of AIs experiment.

The repository is not evidence of a deployed application. GitHub Pages
configuration is checked in, but a live deployment is unverified until the
workflow succeeds and the resulting URL is tested.

## Purpose and boundaries

**Confirmed purpose:** preserve the article evidence while providing a useful,
client-only way to turn a messy explanation into a loop-aware Mermaid starter.

**Inferred mission:** demonstrate the ROY principle by letting a reader create
a small, reusable artifact rather than merely read about diagramming.

**Out of scope:** backend services, user accounts, storing reader input,
re-scoring the council, and changing archival claims without source evidence.

## Repository map

- `src/`: active tutorial application source.
- `index.html`, `vite.config.ts`, `package.json`, and `tsconfig*.json`: active
  application entry and build configuration.
- `.github/workflows/deploy-pages.yml`: GitHub Pages build and deployment.
- `etch-ai-sketch-vibe-diagramming-shootout/`: council prompts, Mermaid source,
  renders, slides, provenance, release records, and member deliberations.
- `archive/source-captures/`: normalized historical imports.
- `archive/editorial-cut/`: prepared article source, not verified as current
  external content.
- `archive/replit-workspace/`: superseded generic API and component-preview
  scaffold. Preserve it as historical source; do not treat it as active code.
- `docs/`: project and technology documentation.
- `scripts/check-editorial-cut.mjs`: narrow validator for the prepared article
  source.
- `.agents/` and `skills/`: repository-local skill material and its intentional
  mirror. They are not application runtime code.

## Archive integrity

- Preserve the Core Five, Exhibition, Specialty Roles, and Attempted taxonomy.
  Do not present differently conditioned entries as direct comparisons.
- Keep source-to-render relationships intact. Changes to an archive asset may
  require matching updates to its manifest, captions, public-link index,
  naming references, and provenance record.
- Keep prompts and evaluation notes faithful to the archive. Label editorial
  additions clearly.
- Historical raw captures are provenance. Do not delete or rename one unless
  the user explicitly approves the exact target and internal references are
  updated in the same change.
- The prepared editorial cut and the external public article are distinct. The
  live article was last verified as v0.5 on 2026-08-24; do not call the local
  v1.0 material published without new external evidence.

## Application conventions

- Keep the guide client-only. Do not add APIs, persistence, analytics, or
  secrets for an interaction that can remain local to the browser.
- The workbench must produce a usable output: a copyable brief and a
  downloadable Mermaid source draft. Avoid replacing that result with static
  explanatory prose.
- Maintain semantic controls, visible focus states, keyboard-accessible inputs,
  and readable contrast. Do not use generic dashboard styling.
- Use `VITE_BASE_PATH=/first-diagram-is-a-liar/` for a production-shaped Pages
  build. The Pages workflow supplies this value; local development uses `/`.
- Do not use em dashes in generated public-facing copy.

## Safe change procedure

1. Confirm the repository root with `git rev-parse --show-toplevel`.
2. Inspect `git status --short --branch` and preserve unrelated changes.
3. For application work, run `pnpm typecheck` and `pnpm build`. Run a second
   build with the Pages base when asset paths or deployment configuration move.
4. For archive path changes, update all relative Markdown and script references
   and run the relevant narrow validator.
5. Run `git diff --check` and inspect the final diff.

## Deployment boundary

GitHub Pages is the intended static deployment path. The workflow builds `dist`
from `main` and deploys its artifact using the Pages actions. It does not prove
Pages has been enabled in the repository settings, that the action completed,
or that the public page is healthy. Report these states separately.

## Naming and cleanup

Use lowercase ASCII kebab-case for new ordinary paths. Preserve required tool
names such as `README.md`, `AGENTS.md`, `.github`, `package.json`, and
`vite.config.ts`. Existing public artifact names and external URL targets are
authority anchors, not casual rename candidates.

Do not delete branches, stashes, archive refs, or unmerged source material
without a separately verified recovery plan and explicit approval.
