# PRD: The First Diagram Is Usually a Liar

## Replit multi-task implementation handoff

Status: proposed implementation plan
Prepared: 2026-08-26
Repository: `OKHP3/first-diagram-is-a-liar`
Audience: Replit implementation agent, maintainer, reviewer
Scope: the application repository only

## 1. Executive summary

The First Diagram Is Usually a Liar is a client-only interactive field guide for
turning messy thinking into diagrams that earn their words. It teaches the ROY
heuristic, makes revision visible, and shows how structured disagreement can
improve a visual model without pretending that every model, tool, prompt, or
round was operating under the same conditions.

The current application already has the intended five-step spine:

1. Spot the Lie.
2. Measure ROY.
3. Draw the Truth.
4. Use Disagreement.
5. Ship the Proof.

The repository also contains the evidence archive for the diagramming shootout:
the governing brief, eight prompts, Mermaid V1 and V2 sources, rendered assets,
slide exports, specialty records, release language, and prepared editorial cuts.

This PRD defines the next implementation pass for Replit. It is deliberately
multi-task and dependency-aware. It does not ask Replit to redesign the concept,
turn the application into a diagram editor, add a backend, or invent a winner.
It asks Replit to close the delivery, fidelity, usability, measurement, and
verification gaps that remain around the existing concept.

## 2. Product definition

### 2.1 Product promise

Help a person notice when a diagram is merely tidy, understand what the visual
is claiming, expose the work that the first shape hides, and ship enough source
and evidence that another person can use the model without reconstructing the
author's intent from scratch.

### 2.2 Working heuristic

```text
ROY = Understanding / Explanation
```

ROY means Return on You. It is a practical conversation starter about whether a
visual removes more confusion than it creates. It is not a scientific metric,
an objective benchmark, or a basis for ranking models.

### 2.3 Product boundary

The application is a browser-only tutorial and workbench. It has no server,
account system, database, OAuth flow, or secret-bearing integration. User
interaction may be stored locally when that is already part of the product
contract, but user-entered content must not be transmitted to a new service as
part of this PRD.

The companion public Writing is the long-form narrative. This application is its
practice surface. The repository archive is the evidence boundary. None of the
three surfaces should silently replace the others.

## 3. Source authority and evidence rules

Use the following order when a request or proposed implementation conflicts with
another source:

1. `AGENTS.md` and the current application source.
2. `archive/diagramming-shootout/council-brief.md`.
3. The archive manifests, indexes, and release records.
4. The repository's documented measurement contract.
5. The current public Writing and its prepared editorial cut.
6. This PRD for proposed implementation choices.

Every task update must label material claims as one of:

- **Confirmed:** directly supported by current repository or live/source evidence.
- **Inferred:** a reasonable interpretation that may need maintainer review.
- **Proposed:** a new behavior or implementation choice introduced here.
- **Unknown:** not established by the available evidence.

When sources disagree, preserve the disagreement in the record. Do not resolve a
count, score, release label, or deployment state by silently editing history.

## 4. Current verified state

### 4.1 Application

Confirmed in the current main branch:

- The root app is a React, TypeScript, Vite, and Tailwind client-only SPA.
- The tutorial has five visible steps.
- The app contains an interactive non-linear process model.
- The Council surface now distinguishes the Notion specialty condition from the
  Replit specialty condition in the UI.
- A five-item checklist is stored in browser local storage.
- The handoff action currently copies a compact brief and marks the checklist
  state; it does not yet create a durable file.
- The repository contains public-safe normalized captures of the six requested
  Notion source pages. Private Notion URLs must not be added to public copy.

### 4.2 Archive

Confirmed in the archive:

- The governing ETCH-AI-SKETCH brief and eight prompts.
- Mermaid V1 and V2 source relationships and rendered evidence.
- Separate Core Five, Exhibition, Specialty, and Attempted categories.
- Notion and Replit specialty records as separate conditions.
- Release and editorial material through the current public Writing v0.5.

### 4.3 Public delivery

The intended GitHub Pages route is configured in the repository, but a live
smoke test at `https://okhp3.github.io/first-diagram-is-a-liar/` returned 404 at
the time this PRD was prepared. A local build passing is not evidence that the
public route is live. The final task must prove the route with an external
request and record the result.

## 5. User stories

### US-01: First-time reader

As a first-time reader, I want to understand the tidy-lie problem quickly so I
can decide whether the method applies to my work.

### US-02: Diagram author

As a diagram author, I want to test whether my first shape hides loops, forks,
dead ends, ownership gaps, or unresolved decisions.

### US-03: Reviewer

As a reviewer, I want to see the prompt, role, round, source, and revision
conditions so I can compare outputs without treating unlike things as identical.

### US-04: Handoff recipient

As the next person in the chain, I want a durable handoff artifact that includes
the claim, the ROY question, the current model, and the open uncertainties.

### US-05: Maintainer

As a maintainer, I want changes to be verifiable through repeatable checks and a
clear deployment proof rather than a claim that a build looked successful.

## 6. Goals and non-goals

### 6.1 Goals

- Preserve the five-step tutorial spine and its practical tone.
- Make the non-linear workbench legible and robust when rendering is unavailable.
- Keep Council conditions distinct and visibly comparable.
- Give the user a durable, privacy-safe handoff export.
- Implement the already documented, privacy-bounded measurement contract.
- Add a focused browser acceptance path for the real interactive flow.
- Make GitHub Pages delivery reproducible and externally verifiable.
- Reconcile conflicting counts and release language through an explicit record.
- Keep public copy source-bounded and free of private workspace locators.

### 6.2 Non-goals

- A general-purpose Mermaid editor.
- An AI diagram-generation service.
- A model leaderboard or overall Council winner.
- A new backend, account system, remote persistence, OAuth flow, or database.
- Remote storage of user-entered diagrams or handoff text.
- A new visual language that replaces Mermaid or the existing archive.
- Rewriting the public Writing as part of application implementation.
- Editing the OverKill Hill main site from this repository's Replit task.

## 7. Functional requirements

### FR-001: Premise and ROY

The first step must explain the tidy-lie problem in plain language and introduce
ROY as a heuristic. The formula must remain readable on narrow screens.

Acceptance criteria:

- A new user can state what the diagram is claiming after the premise step.
- ROY is visible without requiring horizontal scrolling.
- The UI does not describe ROY as objective, scientific, or universal.

### FR-002: Non-linear workbench

The workbench must show that real work may fork, loop back, revise, stall, or
end. The explanation must remain useful when the rendered visual is unavailable.

Acceptance criteria:

- The workbench renders in a modern browser.
- A readable fallback or source explanation is available if Mermaid fails.
- Forks, loops, revisions, and dead ends are named in text as well as shown in
  the visual.
- The workbench does not claim to be a complete domain process model.

### FR-003: Council condition fidelity

The app must preserve condition metadata for every Council entry. At minimum,
the visible model must distinguish Core Five, Exhibition, Specialty Notion,
Specialty Replit, and Attempted entries.

Acceptance criteria:

- Notion and Replit appear as separate cards or rows.
- The UI explains why condition differences matter.
- No overall ranking or single winner is implied by the layout.
- Existing archive names and links remain intact.

### FR-004: Source-to-render traceability

Each public visual or example must have a clear path to its source, prompt,
round, or archive record where that source exists.

Acceptance criteria:

- Source links use stable repository paths.
- A missing source is labelled unknown rather than invented.
- Links open safely and do not expose private Notion locators.
- The user can distinguish a rendered asset, source file, editorial summary,
  and application illustration.

### FR-005: Durable handoff export

The handoff action must offer a recoverable local artifact in addition to the
existing clipboard behavior. The artifact must be plain text or Markdown and
must not leave the browser unless the user explicitly downloads it.

Minimum export fields:

- project and export timestamp;
- current tutorial step;
- ROY framing;
- the user's current checklist state;
- the current model or selected workbench state;
- open questions and unresolved decisions;
- source and repository links where available;
- an explicit statement that the export is a working handoff, not a verdict.

Acceptance criteria:

- Download works in a browser with clipboard permission denied.
- The filename is deterministic enough to find and does not contain unsafe
  characters.
- The output is readable when opened outside the app.
- A download is not described as cloud backup or durable server storage.
- Existing clipboard behavior remains available when supported.

### FR-006: Privacy-bounded measurement

Implement only the events already defined in the repository measurement contract.
Do not add new user profiling, form capture, or content transmission.

The instrumentation must be disabled or inert when no configured measurement
destination exists. The implementation must not block tutorial use.

Acceptance criteria:

- Event names and payload fields match the local measurement document.
- No handoff text, diagram content, or private source URL is sent as an event
  parameter.
- The app remains fully usable if the measurement library is blocked.
- Configuration is documented and has a clear owner decision for any required
  measurement identifier.

### FR-007: Accessibility and responsive behavior

The five-step flow, workbench, Council surface, checklist, and export controls
must be usable with keyboard navigation and at narrow viewport widths.

Acceptance criteria:

- Every interactive control has an accessible name and visible focus state.
- Step state is exposed to assistive technology.
- Decorative diagrams do not create duplicate screen-reader prose.
- Reduced-motion preferences are respected.
- No horizontal page overflow appears at the project mobile breakpoint.
- Color is not the only signal for Council condition or completion state.

### FR-008: Deployment contract

The GitHub Pages workflow must build the root Vite app using the configured base
path, preserve the SPA fallback, and publish the expected artifact.

Acceptance criteria:

- `npm run check` passes.
- `npm run build` passes.
- The workflow succeeds on `main` or is otherwise proven equivalent.
- The public route returns a successful response after deployment.
- The deployed page loads its JS and CSS under `/first-diagram-is-a-liar/`.
- A manual smoke test records the route, status, and retrieval time.

## 8. Multi-task implementation plan

Replit should execute these tasks in order. Each task is independently reviewable
and must leave the repository in a buildable state.

### RT-001: Baseline and acceptance harness

Priority: P0
Dependencies: none
Suggested file fence: `package.json`, `package-lock.json` or the existing package
manager lockfile, `tests/` or `e2e/`, and a short task note under `docs/`.

Work:

- Record the current five-step flow and current handoff behavior.
- Choose the smallest browser harness compatible with the existing project.
- Add tests for step navigation, checklist interaction, Council condition
  visibility, and the handoff action.
- Keep tests deterministic and local.

Done when:

- The harness can run in a clean checkout using documented commands.
- A failure identifies the step and control that failed.
- The harness does not require credentials, network APIs, or private sources.

### RT-002: Truthful workbench and source fallback

Priority: P1
Dependencies: RT-001
Suggested file fence: the workbench component and its directly owned styles and
tests only.

Work:

- Audit the existing process model against the governing brief.
- Ensure forks, loops, revisions, dead ends, and unresolved decisions are both
  visible and explained.
- Add a readable source or text fallback for render failure.
- Preserve the existing tutorial sequence and tone.

Done when:

- A reviewer can identify the non-linear behavior without inspecting source.
- Mermaid failure does not create a blank or misleading step.
- No unsupported domain detail is added.

### RT-003: Council data model and condition presentation

Priority: P1
Dependencies: RT-001
Suggested file fence: Council data/types/components and their tests.

Work:

- Verify the current split between Notion and Replit against the archive.
- Add explicit condition labels and explanatory copy where they are missing.
- Preserve Core Five, Exhibition, Specialty, and Attempted taxonomy.
- Keep comparison views side-by-side only when the conditions are made visible.

Done when:

- Every entry has a condition that can be understood without reading source.
- No UI element implies a single universal score.
- Existing public-safe source links continue to resolve.

### RT-004: Durable local handoff export

Priority: P1
Dependencies: RT-001
Suggested file fence: handoff/export component, directly owned utility, and tests.

Work:

- Keep the current copy-to-clipboard action.
- Add a Markdown download with the minimum fields in FR-005.
- Handle denied clipboard permission and unsupported download behavior clearly.
- Add a short privacy note in the UI.

Done when:

- The browser acceptance test can verify a download or a deterministic export
  function without sending data remotely.
- The artifact can be opened in a plain text editor.
- Export content reflects the current local state at the moment of action.

### RT-005: Privacy-bounded analytics adapter

Priority: P1
Dependencies: RT-001
Suggested file fence: analytics adapter, environment/config documentation, and
tests. Do not add secrets to the repository.

Work:

- Map only the documented tutorial events.
- Add a no-op adapter for missing configuration or blocked providers.
- Confirm that event payloads contain no user-entered handoff text or diagram
  content.
- Document the maintainer decision required for a real measurement identifier.

Done when:

- Tests prove the no-op path works.
- A reviewer can inspect every emitted event field.
- The app does not fail when analytics is unavailable.

### RT-006: Accessibility and narrow-screen hardening

Priority: P1
Dependencies: RT-002, RT-003, RT-004
Suggested file fence: directly affected JSX and styles, plus accessibility tests.

Work:

- Audit focus order, labels, announcements, contrast, and keyboard behavior.
- Test the five steps at a narrow viewport.
- Add reduced-motion handling for any newly introduced transitions.
- Confirm the source library and Council cards do not create unbounded overflow.

Done when:

- Keyboard-only navigation can complete the core tutorial flow.
- The page has no horizontal scroll at the supported mobile width.
- The visual and textual representations do not contradict each other.

### RT-007: Count and release reconciliation record

Priority: P1
Dependencies: none
Suggested file fence: `docs/` only unless a maintainer approves public-copy edits.

Work:

- Compare the local manifest count with the public Writing and prepared cuts.
- Record the known “15 diagrams” versus “18 diagrams” conflict.
- Separate diagram-record count, rendered-deck count, and round/heat count if
  those are the distinct meanings.
- Do not change historical article text automatically.

Done when:

- The record names each conflicting claim and its source.
- The unresolved owner decision is explicit.
- A later content edit can cite this record rather than re-opening the audit.

### RT-008: Pages delivery and live smoke test

Priority: P0
Dependencies: RT-001 through RT-006; RT-007 may remain documentation-only
unless it changes public wording.

Suggested file fence: `.github/workflows/deploy-pages.yml`, `vite.config.ts`,
and deployment documentation only when a defect is proven.

Work:

- Verify the production base path.
- Verify the `dist/index.html` to `dist/404.html` fallback behavior.
- Run the workflow through the repository's configured deployment route.
- Request the public route after the run completes.
- Check the document title, one H1, loaded CSS, loaded JS, and one interactive
  step in the deployed page.

Done when:

- The public route returns success rather than 404.
- The browser console has no app-blocking errors in the smoke test.
- The result is recorded with the workflow run or commit and retrieval time.

### RT-009: Final evidence gate

Priority: P0
Dependencies: RT-008

Work:

- Run the complete validation matrix.
- Review the diff for accidental private locators, unsupported claims, and
  unrelated formatting churn.
- Update the application status note with confirmed, inferred, proposed, and
  unknown items.

Done when:

- All required checks pass or each non-pass is explicitly reported.
- The maintainer can reproduce the build and smoke test.
- The implementation is ready for review as a coherent set of small changes.

## 9. Dependency graph

```text
RT-001 baseline and harness
  ├── RT-002 truthful workbench
  ├── RT-003 Council conditions
  ├── RT-004 durable handoff export
  └── RT-005 analytics adapter
        └── RT-006 accessibility and responsive hardening
RT-002 + RT-003 + RT-004 + RT-006
  └── RT-008 Pages delivery and smoke test
RT-008
  └── RT-009 final evidence gate

RT-007 count and release record can run in parallel.
```

## 10. Validation matrix

| Area | Required check | Evidence to retain |
| --- | --- | --- |
| Type and lint | `npm run check` | command output and commit |
| Production build | `npm run build` | build output and artifact path |
| Archive | `npm run check:archive` | authority-anchor result |
| Mermaid | `npm run health:mermaid` | source/render health result |
| Formatting | `git diff --check` | clean result |
| Browser flow | RT-001 harness | test output and browser version |
| Accessibility | keyboard, narrow viewport, reduced motion | checklist or test output |
| Deployment | workflow plus external request | run URL, route, status, time |
| Privacy | source scan for private locators and secrets | scan result |

A skipped check is not a pass. If a required tool is unavailable, report the
missing tool and the affected confidence boundary.

## 11. Content and copy rules

- Keep the practical, builder-oriented, slightly snarky OverKill Hill voice.
- Preserve standalone punchy lines when they carry the argument.
- Do not use an overall winner claim.
- Do not call ROY scientific or objective.
- Keep historical counts and release labels source-faithful.
- Use public GitHub paths for shareable source references.
- Do not publish private Notion URLs, page IDs, or private workspace names.
- Do not state that GitHub Pages is live until the smoke test passes.
- Do not add new product categories that are not supported by the archive.

## 12. Owner decisions required

These decisions are intentionally not invented by this PRD:

1. Should the public Writing be corrected from “18 diagrams” to “15 records,”
   or are the two counts describing different evidence units?
2. Should a real analytics measurement identifier be configured, and who owns it?
3. Is the Pages workflow allowed to publish from `main`, or is a separate release
   approval required?
4. Does the maintainer want the tutorial route advertised as “live” only after
   an external smoke test, or should it remain an intended route until then?
5. Which local export filename convention should become the long-term public
   support contract, if any?

Replit should stop and report rather than choose an answer when a decision would
change public meaning, privacy, or deployment authority.

## 13. Replit handoff prompt

Implement this PRD as a sequence of small, reviewable tasks in the dependency
order above.

Start by reading `AGENTS.md`, `README.md`, `archive/README.md`, and the governing
Council brief. Inspect the current source before editing. Preserve existing user
work and the archive taxonomy. Use the current repository's package manager and
validation commands. Do not add a backend, account system, remote persistence,
new AI provider, or private source locator.

For each task, report:

- task ID and status;
- files changed;
- confirmed behavior;
- tests run and results;
- any inferred or proposed behavior;
- remaining unknowns or owner decisions.

Do not mark deployment complete because a local build passed. Do not mark a
validator passed if it did not run. Do not flatten Council categories to make a
chart or score look simpler. The implementation is complete only when the final
evidence gate contains a reproducible build result and a successful external
smoke test, or a clearly documented blocker outside the repository's control.

## 14. Definition of done

The multi-task plan is complete when:

- the tutorial still teaches the five moves coherently;
- the non-linear workbench and source fallback are usable;
- Council conditions remain distinct;
- a user can create a local Markdown handoff;
- measurement is privacy-bounded and non-blocking;
- the core flow has browser acceptance coverage;
- narrow-screen and keyboard behavior are verified;
- the count conflict is recorded without silent history edits;
- the Pages route has a successful externally verified deployment;
- the final report separates confirmed facts from inference, proposal, and
  unknowns.
