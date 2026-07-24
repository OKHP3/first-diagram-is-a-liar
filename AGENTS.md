# The First Diagram Is Usually a Liar

## Scope

This file is the canonical agent guidance for the repository root. The root is
one Git repository. It contains a public writing and methodology archive, not a
software application. There are no nested Git repositories.

The `.agents/skills/` tree contains repository-local agent skill assets. Treat
it as project metadata, not as the runtime of the archive. The
`etch-ai-sketch-vibe-diagramming-shootout/` directory is the main content
collection within this repository, not a separate project.

## Project identity

- **Suite:** OverKill Hill / Writings
- **Type:** Essay, article, and experiment archive
- **Repository:** https://github.com/OKHP3/first-diagram-is-a-liar
- **Article:** https://overkillhill.com/writings/first-diagram-is-a-liar/
- **LinkedIn article:** https://www.linkedin.com/pulse/first-diagram-usually-liar-jamie-hill-lv3hc
- **Notion anchor:** https://app.notion.com/p/a2d6183ab6824104951649004ba5e97e
- **Maintainer named in repository docs:** Jamie Hill / OverKill Hill P3

## Purpose and status

**Confirmed purpose:** This repository preserves the source material and public
artifacts behind *The First Diagram Is Usually a Liar*: the article, the
ETCH-AI-SKETCH Council of AIs diagramming shootout, the prompt sequence, the
Mermaid sources, rendered images, and slide decks.

**Inferred mission:** Make the experiment inspectable and reusable by keeping
the prompts, decision record, diagrams, evaluations, and publication assets
together.

**Vision:** No formal vision statement is present. The roadmap points toward a
more complete public archive with interviews, poll results, updated diagrams,
and a refined ROY framework, but those are future work rather than current
capabilities.

**Current status:** Maintained public archive. The changelog records a v0.1
release in April 2026. An Unreleased section and the roadmap describe v0.2+
follow-up work, so the archive is active and incomplete. There is no evidence
of a deployed service or executable product.

## Audience, scope, and non-goals

The likely audience is readers of the article, people studying or practicing
AI-assisted diagramming, and contributors who want to inspect or reuse the
published artifacts. This audience is inferred from the README and
contribution guidance.

In scope:

- public article and methodology documentation
- the ROY framework, meaning Return on Your Words
- the Council of AIs comparison and fairness disclosure
- eight lightly cleaned session prompts
- Mermaid V1 and V2 source files, public Mermaid links, and rendered PNGs
- square and wide PPTX/PDF presentation artifacts
- accessibility notes, naming conventions, and archive metadata

Out of scope:

- a runtime application, API, library, or production service
- a local diagram-rendering or slide-generation toolchain, which is not present
- treating the council record as a new software benchmark or re-scoring it
  without maintainer direction
- large unsolicited rewrites of the article or restructuring the archive
  without first explaining the problem

## Repository map

- `README.md`: public project orientation, article links, ROY summary, council
  overview, winners, author, and licensing notes.
- `etch-ai-sketch-vibe-diagramming-shootout/`: primary experiment archive.
  - `council-brief.md`: governing brief, tier taxonomy, fairness disclosure,
    and round results.
  - `council-snapshot.md` and `winners-summary.md`: shorter result summaries.
  - `prompts/`: the eight-prompt sequence and context notes.
  - `diagrams/`: Mermaid source files, organized into `v1/` and `v2/`, with
    usage notes and per-model links.
  - `images/`: full-resolution and low-resolution PNG renders plus the cover
    image.
  - `slides/`: square and wide PPTX source decks and PDF distributions.
  - `captions-and-alt-text.md`: image description guidance.
  - `mermaid-public-links.md`: public Mermaid render index.
  - `naming-conventions.md`: artifact naming rules.
  - `.mp4`: preserved video artifact. The folder README says it is not the
    preferred publication asset because it carries discontinued-platform
    watermarks; use the cover PNG for publication.
- `diagram-manifest.csv`: machine-readable index of 15 Mermaid public links.
- `technology-inventory.md` and `.github/technology-inventory.json`:
  authoring-technology baselines and review metadata.
- `.github/workflows/technology-version-review.yml`: monthly or manually
  triggered maintenance workflow that checks tracked npm release baselines and
  opens a GitHub issue when review is needed.
- `CHANGELOG.md`: public-facing release history and planned additions.
- `ROADMAP.md`: future content milestones from v0.1 through v1.0.
- `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `LICENSE`: project
  participation, reporting, licensing, and conduct rules.
- `CLAUDE.md`: pointer to this file. Keep it aligned with the canonical guide.

## Technology and interfaces

The repository uses Markdown and CSV as its editable documentation and index
formats. Its visual artifacts are Mermaid `.mmd` source, PNG, PPTX, PDF, and
MP4 files. The slide README records PptxGenJS as the tool used to build the
decks, but no generator source or package manifest is present here.

The primary external interfaces are the published article, LinkedIn, Mermaid.ai
render links, and Mermaid Live for rendering or experimenting with `.mmd`
files. External links are part of the public archive and may require network
access to verify.

## Working conventions

- Start with `README.md`, then read the relevant folder README and
  `council-brief.md` before changing an archive artifact.
- Preserve the distinction between Core Five, Exhibition, Specialty Roles, and
  Attempted entries. Do not present differently conditioned entries as direct
  comparisons.
- Preserve source-to-render relationships. When adding or renaming an asset,
  update the relevant README, manifest, public-link index, captions, and
  naming references together.
- Follow the naming pattern documented in
  `etch-ai-sketch-vibe-diagramming-shootout/naming-conventions.md`.
- Keep prompt text and evaluation notes faithful to the archive record. Label
  editorial additions clearly.
- Preserve standalone punchy lines in public-facing prose. Do not collapse
  them into paragraphs.
- Use the ROY principle: understanding produced divided by explanation
  invested. Verbosity must earn its space.
- Do not use em dashes in generated content. If AutoCAD material is ever added,
  the brand rule in the existing project guidance is R10 only.
- Keep public writing consistent with the established OverKill Hill P3 voice:
  practical, builder-oriented, professionally snarky, and not academically
  hedged.
- Preserve user changes and avoid destructive version-control commands.

## Safe change procedure

1. Confirm the repository root with `git rev-parse --show-toplevel`.
2. Check `git status --short --branch` and preserve unrelated changes.
3. Identify the smallest relevant documentation or artifact set.
4. Make the change without modifying source code, dependencies, generated
   artifacts, secrets, CI behavior, or unrelated files unless the request
   explicitly includes them.
5. Re-check internal references and naming after the change.
6. Run `git diff --check` and inspect the final diff.

For Mermaid changes, validate syntax and appearance in a renderer that accepts
the relevant diagram type. `mermaid.live` is the documented manual option. The
Copilot V1 source includes YAML front matter for renderer-level configuration,
so use a renderer that supports Mermaid config blocks or strip that front
matter for a renderer that does not.

## Validation and deployment

No package manager, build command, test suite, linter, application build,
deployment configuration, or local renderer is documented or present in the
repository. One GitHub Actions workflow exists for scheduled technology
version review; it is repository maintenance, not an application build or
deployment pipeline. Do not invent additional tooling. Validation is currently
documentation and artifact focused:

- `git status --short --branch` confirms working-tree scope.
- `git diff --check` catches whitespace errors.
- `git diff -- AGENTS.md` reviews guidance changes.
- `.github/workflows/technology-version-review.yml` can be dispatched manually
  or allowed to run on its monthly schedule; it checks the tracked Mermaid and
  PptxGenJS baselines and may open a review issue.
- Markdown paths and archive indexes should be checked when related files move.
- Mermaid sources should be rendered manually when their syntax or layout
  changes.
- External URLs can be checked manually when link validity is part of the
  request.

The repository is published through its GitHub repository and linked public
properties. No automated deployment process is evidenced here.

## Known gaps and open questions

- The repository does not define a formal product status beyond release and
  roadmap documents. The current status above is an evidence-based summary.
- No branch strategy, release procedure, local generation workflow, or
  automated link and artifact checker is documented.
- The roadmap includes poll summaries, interviews, and additional analysis that
  are not present in the current tracked archive.
- The README's illustrated folder layout is more aspirational than complete in
  places, so verify actual paths before adding references.
- Ownership beyond the maintainer named in `CONTRIBUTING.md` is unknown.

## Keeping this guide current

Update this file when the repository gains a runtime, build or validation
workflow, deployment path, new artifact family, nested project, or materially
different purpose. Keep claims labeled as confirmed, inferred, or unknown when
the repository does not establish them directly. Keep `CLAUDE.md` as a short
pointer unless it needs genuinely Claude-specific instructions.
