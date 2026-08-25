# The First Diagram Is Usually a Liar

An interactive field guide for turning messy thinking into diagrams that earn
their words.

This repository contains the working tutorial application and the preserved
evidence archive behind **ETCH-AI-SKETCH**. The SPA is the solution surface;
the archive is the receipt stack.

## Start here

Install the exact dependency tree, then start the Vite development server:

```bash
npm ci
npm run dev
```

For the Replit preview, use the webview port explicitly:

```bash
npm run dev -- --host 0.0.0.0 --port 5000
```

The tutorial moves through five field tests:

1. **Spot the lie** — identify where a diagram pretends the thinking is resolved.
2. **Measure ROY** — compare clarity delivered with words invested.
3. **Draw the truth** — expose the rough draft and its revision loops.
4. **Use disagreement** — compare council perspectives without flattening their conditions.
5. **Ship the proof** — run a handoff checklist and copy a compact brief.

Checklist progress is saved in the browser's local storage. No account,
backend, database, API, or server-side user data is required.

## The article and archive

- [Live article](https://overkillhill.com/writings/first-diagram-is-a-liar/)
- [LinkedIn article](https://www.linkedin.com/pulse/first-diagram-usually-liar-jamie-hill-lv3hc)
- [GitHub repository and application source](https://github.com/OKHP3/first-diagram-is-a-liar)
- [GitHub Pages application](https://okhp3.github.io/first-diagram-is-a-liar/)

The GitHub repository is public. The Pages URL is the canonical public
application address; it will become live after GitHub Pages is enabled and the
deployment workflow completes successfully.

The canonical story, result language, attribution, and fairness rules live in
[`archive/diagramming-shootout/canonical-story.md`](archive/diagramming-shootout/canonical-story.md)
and [`archive/diagramming-shootout/council-brief.md`](archive/diagramming-shootout/council-brief.md).

## The core idea

A picture is not automatically worth 1,000 words.

ROY means Return on Your Words:

> Understanding produced ÷ Explanation invested

If a diagram costs more to make than it saves in comprehension, the return is
negative. If a rough prompt creates a shared model in seconds, the return can
be extraordinary. The tutorial makes that test usable instead of leaving it as
a written exercise in hypocrisy.

## Repository map

```text
src/                         React tutorial application
index.html                   Vite document shell
vite.config.ts               Development and GitHub Pages base paths
package.json                 npm scripts and pinned dependencies
package-lock.json            Reproducible npm installation
archive/
  diagramming-shootout/      brief, prompts, diagrams, images, decks
  member-deliberations/      specialty-role records
  editorial-cut/             prepared local HTML article cut
  legacy-exports/            selected preserved source captures
docs/                        roadmap, technology inventory, proto-posts
scripts/                     archive and Mermaid delivery checks
.github/workflows/           GitHub Pages build and deploy
```

The application is intentionally separate from the article archive. Archive
material is preserved for inspection, provenance, and adaptation; it is not
runtime application content.

## Development and deployment

- **Development:** Vite serves from `/`.
- **GitHub Pages build:** Vite uses `/first-diagram-is-a-liar/`.
- **Deployment:** pushes to `main` run the Pages workflow in
  [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).
- **Refresh support:** the workflow copies `dist/index.html` to
  `dist/404.html` so direct Pages paths can return to the SPA shell.
- **Source of truth:** `main` and the checked-in npm lockfile define the
  publishable tutorial. Replit workspace metadata is not part of the Pages
  application boundary.

## Validation

Run the complete local contract before publishing:

```bash
npm ci
npm run check
npm run build
npm run check:archive
npm run health:mermaid
```

The Pages workflow repeats dependency installation, typechecking, and the
production build. A successful workflow is necessary but not sufficient for a
release; verify the deployed Pages URL and representative tutorial
interactions after deployment.

## License and provenance

The Mermaid source files are provided for reference, learning, and adaptation.
Article text, brand assets, and slide deck content remain © OverKill Hill P³™.
See the archive provenance notes before reusing material.
