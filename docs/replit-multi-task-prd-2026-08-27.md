# Product Requirements Document

## First Diagram Is Usually a Liar: Replit Multi-Task Completion Plan

**Status:** Ready for implementation review  
**Date:** 2026-08-27  
**Product owner:** Jamie Hill / OverKill Hill P3  
**Implementation partner:** Replit, bounded task execution only  
**Repository:** OKHP3/first-diagram-is-a-liar  
**Companion article:** https://overkillhill.com/writings/first-diagram-is-a-liar/  
**Application target:** https://okhp3.github.io/first-diagram-is-a-liar/

## 1. Executive brief

First Diagram Is Usually a Liar is an interactive field guide for turning messy
thinking into diagrams that earn their words. Its five-step method is:

1. Spot the lie.
2. Measure Return on Your Words (ROY).
3. Draw the truth, including revision loops.
4. Use disagreement as evidence.
5. Ship the proof with its receipts.

The repository already contains a working client-only tutorial, a preserved
diagramming experiment archive, Mermaid source and rendered evidence, an
editorial article, and a public-safe synthesis of six historical Notion pages.
The application has the right product spine and a recognizable visual language.

The missing work is completion work. The current experience demonstrates the
method, but it does not yet make the learner's work durable, inspectable,
testable, and transferable. Some interactions are illustrative rather than
useful after the first pass. The source room is a strong content layer, but a
learner still cannot reliably turn the exercise into a compact artifact without
manually reconstructing it.

This PRD defines a bounded Replit plan to close those gaps. It is intended to
be passed to Replit as an execution brief. Each task has a file fence,
dependencies, acceptance criteria, and a stop condition.

The target is a polished, client-only learning instrument. It is not a generic
diagram editor, a collaboration platform, a scoring marketplace, or a backend
product.

## 2. Product promise

The application should leave a visitor able to:

- detect when a tidy diagram is hiding unresolved thinking;
- use interactive tests to revise the model;
- leave with a reusable handoff brief that another person can inspect and act
  on.

The product succeeds when the visitor changes their next diagramming move, not
when they merely finish clicking through five screens.

### 2.1 Thesis

An attractive diagram is not evidence of understanding. A diagram is a claim
about structure. The first claim is often premature. A useful process makes
uncertainty, revision path, comparison conditions, and source lineage visible.

### 2.2 ROY definition

ROY means Return on Your Words:

> Understanding produced divided by explanation invested.

The application may use a normalized teaching score, but it must explain that
the score is a learning aid, not a scientific measurement of comprehension. A
high score is a prompt to inspect assumptions, not permission to stop thinking.

## 3. Confirmed baseline

The following facts are confirmed from the repository and are the starting
point for implementation:

- The root app is a client-only React, TypeScript, Vite, and Tailwind
  application.
- The production base is /first-diagram-is-a-liar/ and local development uses /.
- The app has five navigable steps: premise, ROY, workbench, council, and
  handoff.
- The ROY screen has two range inputs and a live readout.
- The workbench shows a static non-linear process diagram and can show or hide
  revision loopbacks.
- The council screen distinguishes Core Five, Exhibition, Specialty, and
  Attempted entries. These categories must not be flattened into a leaderboard.
- The handoff screen has a five-item checklist, a copy-brief action, and a
  public-safe Source room.
- Checklist progress is persisted in browser local storage when storage works.
  The app must continue when storage is blocked.
- The Source room synthesizes six supplied Notion pages without reproducing
  private links, IDs, temporary asset URLs, or internal page structure.
- The archive is authoritative for prompts, Mermaid source, rendered assets,
  decks, release records, provenance, and fairness labels.
- The app has no backend, account system, secret, OAuth flow, or database.
- Existing validation covers TypeScript, production build, archive integrity,
  Mermaid delivery, and whitespace checks.

The repository gap analysis separately records unresolved publication work,
including live Pages confirmation, article alignment, and the project page.
This PRD addresses application completion gaps. It does not claim those
external publication gaps are solved.

## 4. Goals

### Must achieve

- Make every step produce or update a learner-visible artifact.
- Allow safe resume and reset of a local session.
- Make the ROY calculation bounded, understandable, and honest about its limits.
- Turn the workbench into a source-first comparison, not only a visual toggle.
- Make council comparison inspectable by criteria and conditions.
- Generate a portable handoff brief containing claim, diagram state, revision
  loop, conditions, and next test.
- Preserve the public-safe Notion synthesis and connect themes to durable
  repository receipts.
- Meet keyboard, reduced-motion, contrast, and small-screen requirements.
- Add deterministic automated coverage for new state and calculation logic.
- Make the Pages release verifiable from the public URL.

### Should achieve

- Support dependency-free direct links to a step.
- Offer a small set of teaching presets for ROY tradeoffs.
- Let the learner download or copy Markdown without an account or network call.
- Provide a lightweight end-of-journey completion summary.

### Not in scope

- A general-purpose Mermaid editor.
- Multi-user collaboration or server persistence.
- Anonymous analytics, behavior tracking, or personal identifiers.
- A real audience voting system.
- A new council scoring leaderboard.
- A rewrite of the preserved archive.
- A second long-form article inside the app.

## 5. Experience principles

1. Working journey over static exercise. Every screen changes the next move.
2. Evidence tiers stay visible. Confirmed, inferred, proposed, and unknown claims
   are not equivalent.
3. The first pass may be wrong. Revision must be cheap and visible.
4. Source is part of the artifact. A visual without source and conditions is
   incomplete.
5. Disagreement is not automatically a vote. Criteria and comparability matter.
6. No dark patterns. No forced signup, hidden tracking, or fake certainty.
7. Specificity beats generic polish. Keep the practical OverKill Hill P3 voice.
8. New content must earn its space. The app is a field guide, not a document
   dump.

## 6. Target learner outputs

### Step 01: Spot the lie

Prompt the learner to identify one of four patterns:

- hidden loop;
- missing exception;
- false certainty;
- decorative complexity.

Allow an optional short claim statement with a character limit. Output is a
selected pattern and claim, not an essay.

### Step 02: Measure ROY

Keep the two manual inputs, but show the formula, bounded ranges, normalized
interpretation, and a clear heuristic disclaimer. Add buttons for:

- Fast sketch;
- Over-explained;
- Useful compression.

Presets set inputs but never replace manual control.

### Step 03: Draw the truth

Add a visible V1/V2 choice, a short readable source excerpt, a corresponding
visual state, and a What changed? explanation. If a real Mermaid renderer is
used, it must follow the existing repository delivery contract and not add an
unreviewed CDN. If the visual remains illustrative SVG, say so plainly.

### Step 04: Use disagreement

Keep the current council taxonomy. Add criterion selection from:

- fidelity;
- clarity;
- structure;
- hierarchy;
- iteration;
- usefulness.

Show direct-comparison eligibility, evidence notes, a synthesis outcome of
borrow, reject, or combine, and an optional synthesis sentence. Do not create a
numeric leaderboard without an explicit owner decision.

### Step 05: Ship the proof

Generate a handoff packet containing:

- premise and claim;
- ROY inputs and readout;
- selected workbench revision and loop state;
- council criterion and synthesis;
- checklist state;
- next feedback question;
- public source and repository links;
- generated date and schema version.

Provide Copy Markdown, Download Markdown, a plain-text preview, a clipboard
fallback, and a deterministic filename. Generation must happen in-browser.

## 7. Functional requirements

### FR-01: Typed session model

Create a versioned session object covering active step, premise, claim, ROY
inputs, preset, workbench state, council criterion and synthesis, checklist,
handoff activity, schema version, and updated timestamp.

Validate on read. Malformed JSON, unknown keys, invalid ranges, and old versions
must not crash the app. Preserve valid checklist state during migration where
possible.

### FR-02: Resume, reset, and storage status

Show Saved locally when persistence works and This session only when it does not.
Add Reset session with confirmation or a short undo window. Reset only the
app's namespaced storage key. Store no user identifiers.

### FR-03: Navigation and deep links

Support rail navigation, browser back and forward, a documented dependency-free
URL hash for the active step, safe fallback for invalid values, predictable
focus movement, and no state loss during navigation. Current, completed, and
not-started states cannot rely on color alone.

### FR-04: Source-first workbench

The V1/V2 source, visual state, and change explanation must agree. Provide a
text alternative. Do not misrepresent hand-authored illustrative SVG as a live
parser.

### FR-05: Council comparison

Comparability, conditions, evidence, and learner synthesis must be visible.
Core Five, Exhibition, Specialty, and Attempted remain separate lanes.

### FR-06: Handoff renderer

Markdown output must be deterministic for identical state, escape special
characters, include required empty-field labels, expose a manual copy fallback,
and never include private URLs or raw local storage data.

### FR-07: Source room integrity

Keep the six-page public-safe synthesis, link to the public reconciliation
note and durable archive receipts, and label historical, current, and
review-only material. Do not publish private Notion URLs, IDs, temporary signed
assets, or internal structure.

### FR-08: Completion summary

Show visited steps, checklist count, premise status, synthesis status, and
whether the packet was copied or downloaded. Never claim that the learner has
produced a validated diagram. Use Ready for review or Incomplete by choice.

## 8. Accessibility and non-functional requirements

- Every control has a programmatic label.
- Range values and status changes are exposed to assistive technology.
- Step changes move focus without trapping it.
- Keyboard users can reach every action in logical order.
- The diagram has a useful text alternative.
- Meaning does not depend on color or motion.
- Focus indicators remain visible against the dark palette.
- Reduced-motion mode keeps the interaction understandable.
- 320px and 390px widths have no page-level horizontal overflow.
- Browser zoom remains usable.
- Buttons describe their outcomes.
- Clipboard failure has a manual fallback.
- There is one main landmark and a logical heading order.
- No large dependency, remote runtime, analytics tag, backend, or secret is
  added without an owner decision.
- Preserve the Vite base path, client-only architecture, visual language, and
  archive authority.

## 9. Replit execution plan

Execute these tasks in order. Each task should produce one reviewable
checkpoint. Do not replace these boundaries with a broad improve the app task.

### Task 0: Baseline and protected files

Read AGENTS.md, README.md, package.json, vite.config.ts, src/App.tsx,
src/index.css, src/notion-sourced.ts, and the relevant archive and docs.

Return the current SHA, status, available commands, proposed files, and overlap
with concurrent work. Stop if planned files already contain unreviewed work.
Do not change archive files, .agents/skills, deployment base, workflow
permissions, or unrelated generated files.

### Task 1: Domain model and persistence

**Files:** src/session.ts, src/roy.ts, tests, and narrow App imports.

Implement typed state, validation, migration, safe storage, reset, and pure ROY
helpers.

**Acceptance:** tests cover first load, valid restore, malformed restore,
migration, storage exceptions, reset, ROY edges, and presets. Pure modules have
no DOM imports. Storage-unavailable mode still accepts input.

### Task 2: Navigation and premise capture

**Files:** App, navigation utility if needed, focused CSS, and tests.

Implement hash/history state, focus management, premise choices, claim field,
character count, and storage status.

**Acceptance:** all steps are reachable, back/forward works, invalid hashes
fall back, reload restores valid state, labels are clear, and mobile navigation
has no overflow.

### Task 3: Honest ROY teaching instrument

**Files:** App, roy utility, CSS, and tests.

Implement formula explanation, presets, bounded feedback bands, and heuristic
disclaimer.

**Acceptance:** learners can explain the number, manual control remains possible,
no NaN or infinity appears, mobile layout works, and feedback-band tests pass.

### Task 4: Source-first workbench

**Files:** workbench utility, App, CSS, and tests.

Implement V1/V2 state, source excerpt, visual state, change explanation, and
text fallback. Use the existing Mermaid delivery contract only if needed.

**Acceptance:** revision changes source and explanation together; loopbacks are
perceivable without color; source is selectable; illustrative limitations are
honest; reduced motion remains understandable; no new CDN appears.

### Task 5: Council comparison

**Files:** council utility, App, CSS, and tests.

Implement criteria, comparability labels, evidence notes, synthesis outcome,
and synthesis capture.

**Acceptance:** taxonomy is unchanged, incomparable entries are marked, no
numeric ranking appears accidentally, state persists, and assistive technology
can identify the selected criterion and outcome.

### Task 6: Handoff packet

**Files:** handoff utility, App, CSS, and tests.

Implement deterministic packet data, Markdown rendering, copy, download, text
preview, filename, and fallback.

**Acceptance:** all required fields appear, output is deterministic, clipboard
failure is recoverable, download uses a browser Blob, private data is excluded,
and special-character tests pass.

### Task 7: Source and content integrity

**Files:** source data, App, and public documentation links only.

Confirm six-page synthesis, source labels, public receipts, and release-status
language.

**Acceptance:** no private Notion link or internal ID reaches the bundle, public
links resolve, source room remains compact, and draft releases are not called
published.

### Task 8: Browser and accessibility QA

Run the following matrix:

- Chromium at 320x844;
- Chromium at 390x844;
- desktop width at 1440px;
- keyboard-only navigation;
- reduced-motion preference;
- blocked or throwing local storage;
- unavailable clipboard;
- reload at each step hash;
- browser console with no uncaught errors.

Record results in an evidence log. Add automated smoke coverage only when it
does not force a large unrelated dependency.

### Task 9: Release and live verification

Run:

    npm ci
    npm run check
    npm run build
    npm run check:archive
    npm run health:mermaid
    git diff --check

Then verify the actual Pages workflow and smoke test the public URL, direct
loading, later-step reload, source links, handoff copy/download, console, and
mobile layout. Record the deployed source commit. Local validation and live
confirmation are separate evidence tiers.

## 10. Definition of done

- The five-step journey remains recognizable and usable.
- Each requirement has an owner, implementation path, and test.
- Session state survives reload and resets safely.
- ROY is explainable and not presented as science.
- Workbench state includes source and revision meaning.
- Council comparison preserves taxonomy and avoids fabricated ranking.
- Handoff Markdown copies and downloads without a backend.
- Source room is public-safe and receipt-linked.
- Keyboard, assistive technology, reduced-motion, mobile, and console checks pass.
- Repository validation passes.
- Pages deployment and live smoke tests pass.
- Final handoff distinguishes confirmed, inferred, proposed, unknown, and
  deferred behavior.

## 11. Replit evidence packet

Return:

- commit SHA and branch;
- files changed by task;
- tests and results;
- commands and exit statuses;
- browser QA matrix;
- screenshots or links where available;
- live URL and observed commit;
- warnings and deferred items;
- confirmation that no private material, secrets, analytics, or backend calls
  were introduced.

Do not report build passed as equivalent to release passed.

## 12. Guardrails

- Never push directly to main.
- Never reset, force-push, or discard concurrent work.
- Stage only confirmed paths.
- Do not regenerate the archive or .agents/skills tree.
- Do not add backend, database, login, OAuth, analytics, or secrets.
- Do not copy private Notion pages wholesale into public files.
- Do not turn the council into a single winner table.
- Do not replace the five-step journey with a long reading page.
- Do not add a general-purpose diagram editor.
- Do not change the production base path.
- Do not claim deployment without testing the public URL.
- Stop and report any conflict with canonical archive or evidence boundaries.

## 13. Deferred owner decisions

Replit must not silently decide:

- whether the normalized ROY scale should be renamed;
- whether a real Mermaid parser is worth bundle and QA cost;
- whether learner text belongs in downloaded output by default;
- whether anonymous measurement should ever be added;
- how an article version beyond v0.5 aligns with the app and project page;
- whether review-only v0.8 and v0.9 material should be promoted.

Until ruled otherwise, use the lower-risk interpretation: client-only, local-only,
public-safe, source-first, and honest about uncertainty.

