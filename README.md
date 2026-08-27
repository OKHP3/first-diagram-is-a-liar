# The First Diagram Is Usually a Liar

An interactive field guide for turning messy thinking into diagrams that earn
their words.

## Start here

```bash
npm ci
npm run dev
```

The application walks through the premise, the ROY exchange rate, a live
non-linear diagram workbench, the Council fairness model, and a shipping
checklist. It is the solution surface. The archive is the receipt stack.

## Try the application

- [Open the interactive tutorial](https://okhp3.github.io/first-diagram-is-a-liar/)
- [Read the long-form article](https://overkillhill.com/writings/first-diagram-is-a-liar/)

The tutorial is implemented at the repository root as a client-only React,
TypeScript, Vite, and Tailwind application. The GitHub Pages workflow is
configured for the application URL above, but that URL returned HTTP 404 during
this review. Treat it as the intended destination until a successful Actions
run and live smoke test confirm the deployment.

## The article

- [Live article](https://overkillhill.com/writings/first-diagram-is-a-liar/)
- [LinkedIn article](https://www.linkedin.com/pulse/first-diagram-usually-liar-jamie-hill-lv3hc)
- [GitHub repository](https://github.com/OKHP3/first-diagram-is-a-liar)
- **Live tutorial application:** [okhp3.github.io/first-diagram-is-a-liar](https://okhp3.github.io/first-diagram-is-a-liar/)
  - not live yet. The Pages deploy workflow is wired up but has not completed a successful run against this URL; it currently 404s. Run the app locally with `npm run dev` until a deployment lands.

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
src/                         interactive tutorial application
archive/
  diagramming-shootout/      brief, prompts, diagrams, images, decks
  member-deliberations/      specialty-role records
  editorial-cut/             prepared local HTML article cut
  legacy-exports/            selected preserved source captures
docs/                        roadmap, technology inventory, proto-posts
public/                      static icons and social-preview assets
scripts/                     archive, Mermaid, and post-merge validation
.github/workflows/           GitHub Pages build and deploy
```

The canonical story, result language, attribution, and fairness rules live in
[`archive/diagramming-shootout/canonical-story.md`](archive/diagramming-shootout/canonical-story.md)
and [`archive/diagramming-shootout/council-brief.md`](archive/diagramming-shootout/council-brief.md).

## Validation

```bash
npm run check
npm run build
npm run check:archive
npm run health:mermaid
git diff --check
```

The GitHub Pages workflow (`.github/workflows/deploy-pages.yml`) builds the
root app with the production base `/first-diagram-is-a-liar/` on every push
to `main` or manual dispatch. Live deployment still requires a successful
Actions run and a Pages smoke test. Until then, treat the hosted URL above
as not yet available and use local `npm run dev` as the current way to walk
the tutorial.

After a task merge, the environment runs `scripts/post-merge.sh`. It installs
from the committed npm lockfile, typechecks, builds, and reruns the archive and
Mermaid checks. The hook is root-only because this repository has no backend,
database, or secondary artifact.

## License and provenance

The Mermaid source files are provided for reference, learning, and adaptation.
Article text, brand assets, and slide deck content remain © OverKill Hill P³™.
See the archive provenance notes before reusing material.

