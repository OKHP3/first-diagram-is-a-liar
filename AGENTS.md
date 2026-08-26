# The First Diagram Is Usually a Liar

## Scope

This is one Git repository. It contains a TypeScript/Tailwind/Vite tutorial
application at the root and a preserved public evidence archive under
`archive/`. There are no nested Git repositories.

The `.agents/skills/` tree contains repository-local Agent Skill assets. Treat
it as project metadata and preserve it unless a skill-specific task explicitly
authorizes a change.

## Project identity

- Suite: OverKill Hill / Writings
- Type: interactive tutorial application plus evidence archive
- Repository: https://github.com/OKHP3/first-diagram-is-a-liar
- Article: https://overkillhill.com/writings/first-diagram-is-a-liar/
- Maintainer: Jamie Hill / OverKill Hill P3

## Purpose and status

Confirmed purpose: teach the ROY method, the difference between a tidy lie and
an honest diagram, and the use of structured disagreement to improve visual
communication.

Confirmed archive: the ETCH-AI-SKETCH brief, eight prompts, Mermaid V1/V2
sources, rendered assets, slide exports, Replit specialty records, and the
prepared editorial HTML cut are preserved under `archive/`.

Current status: the root tutorial is implemented and has a source-controlled
GitHub Pages workflow. The external article is v0.5, Council-Assisted Scoring,
verified on 2026-08-24. Pages deployment is not confirmed until Actions and a
live smoke test succeed.

## Repository map

- `src/`: the interactive single-page tutorial.
- `vite.config.ts`, `package.json`, `tsconfig.json`: the app contract.
- `archive/diagramming-shootout/`: governing brief, prompts, Mermaid sources,
  images, decks, release records, and result language.
- `archive/member-deliberations/`: specialty-role records.
- `archive/editorial-cut/`: prepared local HTML article cut, not a deployment.
- `archive/legacy-exports/`: selected historical captures and exports.
- `docs/`: roadmap, technology inventory, recovery ledger, and LinkedIn
  proto-posts.
- `scripts/check-archive.mjs`: archive authority-anchor check.
- `scripts/check-mermaid-delivery.mjs`: Mermaid source and canonical-link check.
- `scripts/post-merge.sh`: root-only dependency and validation setup after a
  task merge.
- `.github/workflows/deploy-pages.yml`: root Vite build and Pages deployment.

## Working conventions

- Start with `README.md`, then read `archive/README.md` and the relevant
  `council-brief.md` before changing archive material.
- Preserve the distinction between Core Five, Exhibition, Specialty, and
  Attempted entries. Do not flatten different conditions into one leaderboard.
- Preserve source-to-render relationships and update manifests and indexes
  when archive assets move.
- Use lowercase ASCII kebab-case for new ordinary names. Preserve required
  names such as `README.md`, `AGENTS.md`, `LICENSE`, and tool-required files.
- Preserve standalone punchy lines in public copy. Use the ROY principle:
  verbosity must earn its space.
- Do not use em dashes in generated content.
- Keep the OverKill Hill P3 voice practical, builder-oriented, and snarky.
- Preserve user changes. Do not force-push, reset, or discard work.

## Validation

```text
npm run check
npm run build
npm run check:archive
npm run health:mermaid
git diff --check
git status --short --branch
```

The production Vite base is `/first-diagram-is-a-liar/`; local development
uses `/`. The app is a client-only SPA with no backend, secrets, OAuth, or
database. The Pages workflow copies `dist/index.html` to `dist/404.html` for
fallback behavior. The tracked `.replit` file only provides the local preview
workflow and the post-merge hook path; application code does not depend on it.

## Evidence boundaries

The external article URL and GitHub repository are public anchors, not proof
of the new Pages deployment. A passing build proves local source integrity, not
live hosting. Report confirmed, inferred, proposed, and unknown claims
separately.
