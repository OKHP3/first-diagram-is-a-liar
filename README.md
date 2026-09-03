# The First Diagram Is Usually a Liar

An interactive field guide for turning messy thinking into diagrams that earn
their words.

## Start here

```bash
npm ci
npm run dev
```

The application walks through the premise, the ROY exchange rate, a
source-first V1/V2 diagram workbench, the Council fairness model, and a
shipping checklist. It is the solution surface. The archive is the receipt
stack. The local session remembers premise, controls, revision, synthesis,
checklist, and handoff activity when browser storage is available.

The handoff step can download a deterministic
`first-diagram-is-a-liar-handoff.md` working snapshot containing the current
local tutorial state, including the premise, ROY, workbench, Council, checklist,
next test, receipts, generated date, and schema version. It is deliberately not
cloud backup, durable server storage, or a verdict; clipboard copy remains
available for the full packet as a separate convenience. By owner policy, an
explicit local export includes the learner-entered bounded claim, synthesis
sentence, and next test. A future shared or externally distributed export must
offer an explicit redacted mode first.

## The article and application

- [Live article](https://overkillhill.com/writings/first-diagram-is-a-liar/)
- [LinkedIn article](https://www.linkedin.com/pulse/first-diagram-usually-liar-jamie-hill-lv3hc)
- [GitHub repository](https://github.com/OKHP3/first-diagram-is-a-liar)
- **Live tutorial application:** [okhp3.github.io/first-diagram-is-a-liar](https://okhp3.github.io/first-diagram-is-a-liar/)
  — the GitHub Pages route is live and technically verified. It is a separate
  tutorial surface, not the `overkillhill.com` article host.
- **Article release boundary:** the public article remains labelled v0.5. The
  full `ARTICLE-1.0` editorial cut is frozen locally but deferred pending
  owner approval and external publication evidence. The approved count-label
  correction was deployed separately on 2026-09-01.
- **Release evidence:** see
  [`docs/article-1.0-release-evidence-2026-09-03.md`](docs/article-1.0-release-evidence-2026-09-03.md)
  for the dated decision, Mermaid rerun, campaign-data limitation, and rollback
  identifiers.

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
actual tutorial in headless Chromium. It covers the five-step journey, bounded
premise capture, ROY recalculation, revision-loop visibility, source-first V1/V2
comparison, Council condition labels and synthesis, checklist completion and
reload persistence, malformed-state recovery, hash/history navigation,
clipboard failure feedback, local Markdown handoff content and deterministic
naming, keyboard-facing semantics, and the 390px narrow viewport. The handoff
assertions capture the browser-generated Blob locally; they do not upload
handoff text or diagram state.

The command needs a locally installed Chromium or Chrome executable. Chromium
is available in the Replit development environment; on another machine, set
`CHROMIUM_PATH` to the executable path when it is not on `PATH`. It uses no
credentials, analytics, private sources, hosted test service, or deployment.
This is a local acceptance check, not a GitHub Pages or hosted-renderer smoke
test.

The GitHub Pages workflow (`.github/workflows/deploy-pages.yml`) builds the
root app with the production base `/first-diagram-is-a-liar/` on every push
to `main` or manual dispatch. The successful Actions run and Pages smoke test
are recorded in the dated final evidence gate and current hosted evidence:
[`docs/final-evidence-gate-2026-08-27.md`](docs/final-evidence-gate-2026-08-27.md);
this repository makes no claim of `.replit.app` publication.

After a task merge, the environment runs `scripts/post-merge.sh`. It installs
from the committed npm lockfile, typechecks, builds, and reruns the archive and
Mermaid checks. The hook is root-only because this repository has no backend,
database, or secondary artifact.

## License and provenance

The Mermaid source files are provided for reference, learning, and adaptation.
Article text, brand assets, and slide deck content remain © OverKill Hill P³™.
See the archive provenance notes before reusing material.
