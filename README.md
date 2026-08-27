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

## The article

- [Live article](https://overkillhill.com/writings/first-diagram-is-a-liar/)
- [LinkedIn article](https://www.linkedin.com/pulse/first-diagram-usually-liar-jamie-hill-lv3hc)
- [GitHub repository](https://github.com/OKHP3/first-diagram-is-a-liar)

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
npm run test:acceptance
git diff --check
```

### Local browser acceptance

`npm run test:acceptance` starts a temporary local Vite server and drives the
actual tutorial in headless Chromium. It covers the five-step journey, ROY
recalculation, revision-loop visibility, Council condition labels, checklist
completion and reload persistence, clipboard failure feedback, keyboard-facing
semantics, and the 390px narrow viewport.

The command needs a locally installed Chromium or Chrome executable. Chromium
is available in the Replit development environment; on another machine, set
`CHROMIUM_PATH` to the executable path when it is not on `PATH`. It uses no
credentials, analytics, private sources, hosted test service, or deployment.
This is a local acceptance check, not a GitHub Pages or hosted-renderer smoke
test.

The GitHub Pages workflow builds the root app with the production base
`/first-diagram-is-a-liar/`. Live deployment still requires a successful
Actions run and a Pages smoke test.

After a task merge, the environment runs `scripts/post-merge.sh`. It installs
from the committed npm lockfile, typechecks, builds, and reruns the archive and
Mermaid checks. The hook is root-only because this repository has no backend,
database, or secondary artifact.

## License and provenance

The Mermaid source files are provided for reference, learning, and adaptation.
Article text, brand assets, and slide deck content remain © OverKill Hill P³™.
See the archive provenance notes before reusing material.
