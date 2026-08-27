# Final Evidence Gate — 2026-08-27

## Decision

**Result:** READY FOR GITHUB PAGES REVIEW, with the evidence boundaries below.

The local validation matrix passes. The GitHub Pages workflow and public route
also have a successful externally verified smoke test, recorded separately from
the local checkout. This record makes no claim that the application was
published through Replit and does not claim a `.replit.app` publication.

**Release authority decision:** Future GitHub Pages publications from `main`
require explicit approval from the repository owner or a maintainer explicitly
delegated by the owner. That approval must identify the release candidate and
be recorded before the merge/push that triggers publication, or before a manual
dispatch from `main`. The current workflow remains unchanged: a successful
deployment is technical evidence and is not, by itself, release authorization.

## Evidence boundary

The local matrix was run on local commit
`b779e7eb127a4d148a20b81542ddf5718504bccd` with the managed `Start application`
workflow running on port 5000. The hosted Pages run was built from remote
`main` commit `422ac63d05beb085b545270378478a83a8fc294c`, so hosted evidence is
not silently presented as proof that the hosted artifact equals this local
checkout. The Pages workflow and route evidence are maintained in
[`github-pages-delivery.md`](github-pages-delivery.md).

## Validation matrix

| Area | Result | Reproducible evidence |
| --- | --- | --- |
| Typecheck | **PASS** | `npm run check` completed successfully with TypeScript 7.0.2. |
| Production build | **PASS** | `npm run build` completed successfully and emitted the local `dist/` bundle. |
| Archive integrity | **PASS** | `npm run check:archive` found all 5 authority anchors. |
| Mermaid delivery | **PASS** | `npm run health:mermaid` found 3 featured diagrams, their local `.mmd`/`.svg` pairs, and no broken canonical destinations. |
| Formatting | **PASS** | `git diff --check` completed without whitespace errors after the final edit. |
| Browser flow | **PASS** | `npm run test:acceptance` passed 12 checks in Chromium 138.0.7204.100, reusing the managed local app. |
| Accessibility boundary | **PASS WITH LIMITATION** | The browser harness verified skip-link focus, programmatically focusable main content, labelled step controls, one active step, labelled ranges, and the 390px no-overflow boundary. Reduced-motion handling is present in CSS; the harness does not emulate the reduced-motion media preference. |
| Privacy boundary | **PASS** | A scoped source scan over `src/`, `public/`, `index.html`, `scripts/`, `.github/`, `docs/`, and `README.md` found no credential signatures, private Notion/Replit URLs, or tracking signatures in active product sources. |
| GitHub Pages HTTP smoke | **PASS** | The public route returned HTTP 200 with the expected title, React root, and `/first-diagram-is-a-liar/assets/` prefix. |
| GitHub Pages browser smoke | **PASS** | Chromium rendered the hosted app, found the 5-step rail, and advanced the hero control to `Measure what the picture bought.` with step 2 active. |
| GitHub Actions deployment | **PASS — EXTERNAL** | Workflow run [33068937691](https://github.com/OKHP3/first-diagram-is-a-liar/actions/runs/33068937691) completed successfully; build, `404.html` fallback copy, artifact upload, and deploy jobs passed. |

## Browser and archive evidence

The local acceptance run covered:

- the five-step journey and active-step semantics;
- ROY recalculation from `7x` through the range controls;
- visible/hidden revision-loop state;
- Core Five, Exhibition, Specialty, and Attempted Council labels;
- checklist completion and reload persistence;
- clipboard failure feedback with retry state;
- deterministic local Markdown handoff filename and content;
- keyboard-facing labels and the 390px responsive boundary.

The handoff assertions capture the generated Blob locally. They do not upload
diagram state or handoff text. The archive and Mermaid scripts provide the
checked-in authority-anchor and local-source/render fallback evidence; they do
not establish that an external renderer or historical artifact was authored by
the current application.

## Claim review

### Confirmed

- The active tutorial is client-only: no backend, database, authentication,
  application analytics, tracking, or remote persistence is present.
- Local state is limited to the tutorial checklist and the local handoff
  interaction; the handoff is a working snapshot, not a verdict or cloud backup.
- The local validation matrix and browser acceptance checks pass as recorded
  above.
- The externally verified GitHub Pages route renders the tutorial and supports
  the first interactive transition.
- Council result language remains round-specific. No overall winner is claimed,
  and Specialty entries are not presented as direct competitors.
- Future Pages release authority is owner-controlled: the repository owner or
  an explicitly delegated maintainer must approve each publication before its
  triggering merge/push or manual dispatch.
- The archive contains 15 distinct diagram records: 7 V1 and 8 V2. The
  exported square and wide decks each contain 18 slides, made up of those 15
  diagram slides plus two round-title slides and one Final Read slide.
- The live v0.5 article's “18 diagrams” wording is a historical public claim;
  it is not supported as a literal distinct-diagram count by the archive.

### Inferred

- The current local checkout is a review surface separate from the Pages
  artifact identified by the external workflow record. Any release comparison
  should name both commits rather than infer equivalence.
- The repository is ready for a maintainer’s GitHub Pages review because the
  workflow, artifact fallback, public route, and first interaction all have
  traceable evidence.

### Proposed

- A maintainer should use the successful Pages run and public route as the
  external review baseline, while retaining the local matrix as reproducible
  source evidence.
- A future article release should use “15 diagram records across V1 and V2,
  presented in an 18-slide deck,” subject to owner/editorial approval.
- For each future release, the evidence record should include the approver,
  approval time and durable GitHub approval record, exact `main` commit, Actions
  run details, public route retrieval, and browser smoke results. Missing
  approval means the run is technically observed but not authorized for
  release.
- Keep the prepared article and companion-post material subject to their
  existing owner approval and publication gates.

### Unknown / owner-controlled

- Whether the already-published article should be corrected, and whether its
  next release should say “15 diagrams,” “15 diagram records,” or the fuller
  “15 diagram records across an 18-slide deck.” See the dated reconciliation
  record for the confirmed evidence.
- Whether a real analytics identifier should ever be configured and who owns
  that decision. No analytics was added by this task.
- Which local handoff filename convention, if any, should become a long-term
  public support contract.
- The current body/version of the legacy LinkedIn Pulse page and the final
  approval/publication state of the v0.6 companion draft.
- No Replit-hosted publication URL has been verified or claimed.

## Reproduction

From the repository root:

```bash
npm ci
npm run check
npm run build
npm run check:archive
npm run health:mermaid
npm run test:acceptance
git diff --check
```

For the hosted check, dispatch the checked-in
[`deploy-pages.yml`](../.github/workflows/deploy-pages.yml) workflow from
`main`, then request
`https://okhp3.github.io/first-diagram-is-a-liar/` in a browser. Confirm the
document title, rendered five-step rail, loaded CSS/JavaScript, and the hero
transition to step 2. Before dispatching, obtain and record the repository
owner’s or explicitly delegated maintainer’s approval for the exact source
commit. Record the approver, approval time, durable GitHub approval record,
workflow run, source commit, route, and retrieval time alongside any future
review. A `push` to `main` follows the same procedure; the approval must
precede the push.
