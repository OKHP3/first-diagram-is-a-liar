# The First Diagram Is Usually a Liar

## Application product requirements document

Status: implementation planning baseline
Prepared: 2026-08-26
Repository: first-diagram-is-a-liar
Audience: Replit implementation agent, project maintainer, reviewer
Scope: the current repository clone only

## 1. Executive summary

The application is an interactive field guide for turning messy thinking into diagrams that earn their words. Its purpose is to teach the ROY method, expose the difference between a tidy lie and an honest diagram, make revision visible, and use structured disagreement without flattening different evaluation conditions into one score.

The current React/Vite/Tailwind tutorial has the intended five-step spine:

1. Spot the lie.
2. Measure ROY.
3. Draw the truth.
4. Use disagreement.
5. Ship the proof.

The repository also preserves the evidence archive: the governing brief, eight prompts, Mermaid V1 and V2 sources, rendered assets, slide exports, specialist records, release language, and an editorial article cut.

The main implementation gaps are not a request to redesign the concept. They are delivery and fidelity gaps around the existing concept:

- the GitHub Pages deployment is not yet proven live;
- the Council data model combines Notion and Replit even though the archive treats them as separate specialty conditions;
- the handoff control copies a short brief but does not create a durable artifact;
- the documented analytics contract is not implemented in the SPA;
- there is no focused browser acceptance harness for the interactive workbench;
- public article language contains a count conflict that needs an owner-approved reconciliation;
- the project has no companion card on /projects/, which is a positioning decision rather than an automatic defect.

This PRD converts those findings into a dependency-aware, multi-task plan suitable for Replit. It deliberately separates confirmed work from owner decisions and from future editorial work.

## 2. Product identity and source authority

### 2.1 Confirmed product identity

The product is a client-only interactive tutorial application with a preserved evidence archive. It is not currently evidenced as a backend service, account product, data platform, AI diagram generator, or hosted SaaS application.

### 2.2 Source authority hierarchy

When implementation language conflicts, use this order:

1. Repository-local AGENTS.md and current source contract.
2. The governing archive brief at archive/diagramming-shootout/council-brief.md.
3. The canonical story and release manifest in archive/diagramming-shootout/.
4. The documented campaign measurement contract.
5. The public article and prepared editorial cut.
6. The companion project page in this change, which is a proposed public presentation layer and not a replacement for the archive.

External pages are evidence of public presentation, not authority for changing the repository's historical record.

### 2.3 Evidence labels

Every implementation note and handoff should use one of these labels:

- Confirmed: directly supported by repository or live/source evidence.
- Inferred: a reasonable interpretation that needs review if it changes behavior.
- Proposed: a new implementation choice in this PRD.
- Unknown: not established by the available evidence.

Do not invent a winner, an audience segment, a deployment result, a metric threshold, a license exception, or a public release date.

## 3. Product vision

People often draw the first diagram that makes their own thinking feel orderly. That diagram can be visually tidy while hiding loops, dead ends, unresolved choices, ownership gaps, or revision history. The application should help a reader see those lies early and replace them with a useful working model.

The desired user outcome is not a pretty diagram. It is a diagram that reduces reconstruction tax for the next person:

    Useful diagram
      = enough shared understanding
      + visible disagreement
      + honest revision evidence
      + a handoff that survives the render

ROY is the working heuristic:

    ROY = Understanding / Explanation

The application should make that heuristic memorable without presenting it as a scientific measurement or a universal ranking.

## 4. Problem statement

The project needs a small, fast, source-faithful tutorial that demonstrates:

- how to identify a diagram's hidden claim;
- how to ask whether the visual removes more confusion than it creates;
- how to represent non-linear work, including forks, loopbacks, revision cycles, and dead ends;
- how to interpret disagreement across different tools, prompts, roles, and rounds;
- how to ship the source, explanation, and receipts together.

The current application teaches most of this in sequence, but the delivery surface still has weak edges. A user can reach the Council section without seeing the separate Notion and Replit specialty conditions. A user can copy a compact handoff but cannot export or recover it as a durable file. The documented campaign events have no app implementation. The intended public app URL currently returns 404 while its manually dispatched Pages workflow is still queued.

## 5. Goals

### 5.1 In scope

- Preserve and clarify the existing five-step tutorial.
- Preserve the archive's Council taxonomy and conditions.
- Make the handoff useful outside the current browser session.
- Implement the already documented, privacy-bounded campaign measurement contract.
- Add an acceptance path that exercises the actual interactive behavior.
- Harden GitHub Pages delivery and fallback behavior.
- Reconcile count and release language without silently rewriting history.
- Prepare a companion project page aligned with the existing OverKill Hill project-page pattern.

### 5.2 Out of scope

- Rebuilding the tutorial as a full diagram editor.
- Adding accounts, a backend, a database, OAuth, or secrets.
- Persisting user-entered diagram content remotely.
- Creating an AI diagram generator or provider ranking engine.
- Replacing Mermaid with a new rendering system.
- Declaring an overall Council winner.
- Publishing to the OverKill Hill main repository or deploying external pages from this repository.
- Turning prepared editorial material into a published article without owner approval.

## 6. Current-state baseline

### 6.1 Application surface

Confirmed in src/App.tsx:

- five tutorial steps are present;
- the workbench includes a non-linear process model;
- Council entries include five Core Five entries, one Exhibition entry, one combined Specialty entry, and one Attempted entry;
- a five-item checklist is stored in browser local storage;
- the handoff button copies a compact brief and toggles checklist state.

Confirmed in src/main.tsx and package.json:

- the app is a client-only React/Vite application;
- no analytics bridge is present in the application entry point;
- no browser test script or browser test dependency is present;
- the production base is /first-diagram-is-a-liar/.

### 6.2 Archive baseline

The archive confirms:

- the ROY method and thesis;
- eight prompts;
- Mermaid V1 and V2 source relationships;
- the Core Five, Exhibition, Specialty Notion, Specialty Replit, and Attempted Mermaid AI categories;
- a rule against flattening different conditions into one leaderboard;
- a release sequence through current article v0.5;
- prepared but not externally published v1.0 and review-only companion packets.

### 6.3 External delivery baseline

The intended Pages URL, https://okhp3.github.io/first-diagram-is-a-liar/, returned 404 at review time. The Pages workflow exists, but its manually dispatched run was queued and no successful live smoke test was available. This is a delivery gap, not evidence that the local application is broken.

## 7. Reference project-page review

Reviewed anchors, retrieved 2026-08-26:

- [deployed Glee-fully Chai Chasers page](https://overkillhill.com/projects/glee-fully-chai-chasers/)
- [Glee-fully Chai Chasers GitHub source](https://github.com/OKHP3/OverKill-Hill/blob/main/projects/glee-fully-chai-chasers/index.html)
- [deployed Abrahamic Reference Engine page](https://overkillhill.com/projects/abrahamic-reference-engine/)
- [Abrahamic Reference Engine GitHub source](https://github.com/OKHP3/OverKill-Hill/blob/main/projects/abrahamic-reference-engine/index.html)

The deployed Glee-fully Chai Chasers page and its requested GitHub counterpart were fetched and compared. The deployed HTML and the raw main HTML had identical SHA-256 content:

    11a544994245a5f0765e1a9430f78e493ff8ea22f237164fc86a9b8aac43d740

The deployed Abrahamic Reference Engine page and its requested GitHub counterpart were also identical:

    2303319c255b78b9558b083cbb6c65c43209bec23c0dbdc19fa727795b94247c

The comparison found no live-versus-source drift in those two pages at retrieval time. They establish the presentation baseline for the companion page:

- canonical and social metadata;
- breadcrumb, tags, title, one-line thesis, and clear calls to action;
- problem and live-demo boundary;
- What It Does and What It Is Not;
- principles, origin, receipts, project information, and related links;
- explicit external-app disclosure where an iframe or live app is involved;
- honest status and hosting language.

The Glee page presents an active/shipped orchestration product with five AI tools, governance artifacts, and a separate external live demo. The Abrahamic page presents an active citation-first engine with four modes, four skills, explicit methodology, and a clear non-authoritative scope boundary. Both pages make the product's trust boundary legible.

The First Diagram companion page should borrow this information architecture while preserving the different identity of a writing companion and tutorial. It must not claim that the tutorial is live until the Pages URL passes a smoke test.

## 8. Gap register

| ID | Finding | Evidence | Priority | Classification |
| --- | --- | --- | --- | --- |
| G-01 | Intended Pages URL returns 404 and the Pages run is not confirmed successful. | Live probe, Actions API, workflow file | P0 | Confirmed delivery gap |
| G-02 | Notion and Replit are combined into one Specialty Council card. | src/App.tsx versus archive taxonomy | P1 | Confirmed fidelity gap |
| G-03 | Handoff copies only a compact brief and has no durable export or recovery path. | src/App.tsx behavior | P1 | Confirmed usability gap |
| G-04 | Analytics events are documented but absent from the SPA. | campaign-measurement.md versus src/ | P1 | Confirmed instrumentation gap |
| G-05 | No focused browser acceptance suite exercises the five-step flow. | package.json scripts and dependencies | P1 | Confirmed verification gap |
| G-06 | Public article language contains both “all 15 diagrams” and “all 18 diagrams”; the local manifest has 15 records. | Live article and diagram-manifest.csv | P1 | Confirmed editorial inconsistency |
| G-07 | No First Diagram card appears on the current /projects/ listing. | Current Projects page | P2 | Owner positioning decision |
| G-08 | v1.0 and v0.6-v0.9 materials are prepared or review-only, not automatically missing application features. | Release manifest and specialist README | P2 | Release boundary, not app defect |

## 9. Product requirements

### FR-001: Premise and ROY

The app must explain the tidy-lie problem and the ROY heuristic in plain language. It must state that ROY is a practical heuristic, not a scientific or objective score.

Acceptance criteria:

- a first-time user can state what a diagram is claiming after the premise step;
- the ROY formula is visible and readable on narrow screens;
- the UI does not present ROY as a leaderboard or universal benchmark.

### FR-002: Non-linear workbench

The app must preserve the workbench's ability to show a process with forks, loopbacks, revision cycles, and dead ends. The workbench must remain understandable if a diagram renderer or CDN fails.

Acceptance criteria:

- the rendered workbench is visible in a modern browser;
- a readable source or fallback explanation remains available when rendering fails;
- the workbench labels its purpose and does not imply that it is a complete domain process model.

### FR-003: Fair Council representation

The Council must represent conditions distinctly:

- Core Five: ChatGPT, Claude, Copilot, Perplexity, Gemini;
- Exhibition: ChatGPT V2 Pro;
- Specialty: Notion;
- Specialty: Replit;
- Attempted: Mermaid AI.

Acceptance criteria:

- Notion and Replit render as separate records;
- category labels and round/result language remain source-faithful;
- the UI states that conditions are not flattened into one overall winner;
- Attempted entries remain visibly separate from scored or shipped entries.

### FR-004: Durable handoff

The user must be able to produce a durable local handoff artifact containing the tutorial's current proof obligations without sending user-entered content to a server.

Minimum handoff fields:

- title and content identifier;
- tutorial version;
- ROY reminder;
- five checklist items and completion state;
- Council condition summary;
- links to the article, repository, and archive receipts;
- generated timestamp;
- a statement that the handoff is local and user-editable.

Preferred format: Markdown download with a clear filename. Clipboard copy may remain as a convenience.

Acceptance criteria:

- download works without a backend;
- downloaded content is deterministic except for timestamp and checklist state;
- no free-form user content or slider values are transmitted;
- a user can reopen or share the file outside the browser.

### FR-005: Privacy-bounded analytics

If analytics is enabled in the deployment, the app must implement only the documented campaign contract:

- campaign_landing;
- tutorial_step_view;
- cta_click;
- outbound_click.

Required parameters are limited to content identifier, content version, step identifier where applicable, CTA identifier, destination class, and the four campaign UTM values where present.

The app must not transmit slider values, checklist state, copied text, user-entered content, diagram content, or personal data.

Acceptance criteria:

- analytics is disabled or harmless when the measurement ID is absent;
- events are emitted once per intended interaction;
- event names and parameters match the archive contract;
- a local verification mode can log sanitized event payloads without contacting a provider.

### FR-006: Accessibility and responsive behavior

The app must be usable by keyboard and on narrow screens.

Acceptance criteria:

- all controls have accessible names;
- focus is visible and moves in a predictable order;
- status feedback for copy and download is announced or otherwise available to assistive technology;
- color is not the only way to distinguish Council conditions;
- text, formulas, cards, and the workbench do not overflow the viewport at common mobile widths;
- reduced-motion preferences are respected where animation exists.

### FR-007: Delivery and fallback

The Pages workflow must build the production app with the configured base path, publish the fallback 404.html, and make the deployed URL verifiable.

Acceptance criteria:

- workflow installation, typecheck, build, artifact upload, and Pages deployment succeed;
- the deployed URL returns HTTP 200;
- a direct deep-link request returns a usable page;
- asset URLs resolve below /first-diagram-is-a-liar/;
- the workflow does not imply successful live hosting merely because a local build passed.

### FR-008: Source and receipt links

The app must link to the current article, repository, archive, and relevant source receipts. Links must use explicit labels and must not imply that prepared or review-only material is externally published.

### FR-009: Release language integrity

The repository must preserve historical release distinctions. Any count correction must be recorded as an owner-approved editorial decision with before-language, after-language, evidence, and affected surfaces.

## 10. Replit multi-task implementation plan

Replit should execute these tasks in order. Each task is independently reviewable and should leave the working application buildable.

### FD-001: Establish the baseline and acceptance harness

Priority: P0
Depends on: none
File fence: package.json, package-lock.json, tests/ or e2e/, test configuration, documentation only

Work:

- record the existing five-step flow as acceptance scenarios;
- add the smallest suitable browser test harness already compatible with the project;
- cover initial render, step navigation, Council visibility, checklist persistence, copy action, and narrow viewport smoke behavior;
- make test commands explicit in package.json;
- do not rewrite application behavior in this task except to add stable test selectors where needed.

Done when:

- a fresh install can run the browser acceptance command;
- failures identify the step and user-visible expectation;
- the tests do not require secrets or a remote backend;
- the original validation commands still pass.

### FD-002: Restore Council condition fidelity

Priority: P1
Depends on: FD-001
File fence: src/App.tsx, related source data/types, focused tests

Work:

- split the combined Notion + Replit card into separate Specialty records;
- preserve the Core Five, Exhibition, and Attempted labels;
- add concise condition metadata only where supported by the archive;
- make the no-overall-winner rule visible near the Council;
- add tests that assert all taxonomy entries are present and distinct.

Done when:

- the UI presents eight distinct records or the equivalent source-faithful set;
- no historical result language is invented;
- the Council remains legible on mobile;
- the archive checks remain green.

### FD-003: Add a durable local handoff export

Priority: P1
Depends on: FD-001, FD-002
File fence: src/App.tsx, new small utility/module if useful, focused tests

Work:

- retain clipboard copy as an optional convenience;
- add a Markdown download action using a browser-generated Blob;
- include the minimum FR-004 fields and explicit source links;
- make filename and content identifier stable;
- provide visible and accessible success/failure feedback.

Done when:

- the download can be opened as readable Markdown;
- it includes current checklist completion state but no private or free-form telemetry;
- it works without a backend;
- tests cover successful generation and the unavailable clipboard case.

### FD-004: Implement the documented analytics bridge

Priority: P1
Depends on: FD-001
File fence: src/main.tsx, src/App.tsx, a small analytics utility, deployment documentation, focused tests

Work:

- implement a provider-neutral event adapter;
- emit the four documented event names at the specified interaction points;
- gate provider calls on an explicit measurement configuration;
- add a local sanitized logger for verification;
- ensure no checklist, copied text, slider, diagram, or user-entered data is included.

Done when:

- absent configuration produces no provider request and no runtime error;
- local verification shows the exact allowlisted event payload shape;
- duplicate step-view events are controlled and documented;
- the implementation is traceable to the campaign measurement contract.

### FD-005: Accessibility and responsive hardening

Priority: P1
Depends on: FD-002, FD-003
File fence: src/App.tsx, src/index.css, focused tests

Work:

- inspect keyboard order, focus treatment, semantic headings, button names, live feedback, contrast, and mobile overflow;
- repair only evidence-backed issues;
- preserve the existing visual language and punchy standalone copy;
- add reduced-motion handling if needed.

Done when:

- keyboard-only traversal reaches every action;
- copy/download feedback is perceivable;
- common narrow widths do not cause horizontal page overflow;
- no accessibility repair removes the Council distinctions or source links.

### FD-006: Reconcile count and release language

Priority: P1
Depends on: FD-001
File fence: docs/, README.md, src/ only if UI copy is affected

Work:

- create a report-only inventory of every 15/18 diagram statement and its source;
- compare the local manifest, article, editorial cut, and app copy;
- propose one owner decision: distinguish the 15-record manifest from 18 total visual references, or correct the unsupported statement;
- do not silently edit public history or prepared release material;
- after approval, update only the approved surfaces and record the before/after rationale.

Done when:

- every count statement has an evidence source or is marked unknown;
- the application does not repeat an unresolved count;
- historical release labels remain intact;
- the open decision is clearly handed back to the maintainer if approval is unavailable.

### FD-007: Harden and verify GitHub Pages delivery

Priority: P0
Depends on: FD-001, FD-005
File fence: .github/workflows/deploy-pages.yml, vite.config.ts, documentation only unless a workflow defect is demonstrated

Work:

- inspect the queued workflow and its next run rather than assuming failure or success;
- confirm the Pages source and project URL;
- validate the production base and fallback behavior;
- run the workflow and record the run URL, commit, and result;
- perform HTTP smoke tests for the root URL, a deep link, and representative assets;
- if the external Pages configuration cannot be changed from this repository, record the exact owner action as a blocker.

Done when:

- the workflow succeeds;
- the deployed URL returns 200 and loads assets;
- a deep link is usable;
- the final report distinguishes local build success, workflow success, and live smoke-test success.

### FD-008: Final evidence review and Replit handoff

Priority: P0
Depends on: FD-002 through FD-007
File fence: documentation and validation outputs only

Work:

- run all repository validation commands;
- run browser acceptance tests;
- inspect the final diff for accidental archive or public-copy changes;
- produce a concise handoff listing changed files, test commands, deployment evidence, unresolved owner decisions, and rollback points;
- state what remains prepared, review-only, unknown, or not deployed.

Done when:

- all required validation is green or explicitly reported as not run with reason;
- no unsupported product/runtime claims remain;
- the maintainer can review the implementation task-by-task;
- the PRD is updated with actual outcomes rather than optimistic placeholders.

## 11. Dependency map

    FD-001 baseline and tests
      |-- FD-002 Council fidelity
      |     |-- FD-003 durable handoff
      |           |-- FD-005 accessibility and responsive hardening
      |-- FD-004 analytics bridge
      |-- FD-006 count and release audit

    FD-001 + FD-005
      |-- FD-007 Pages delivery and live smoke test

    FD-002 + FD-003 + FD-004 + FD-005 + FD-006 + FD-007
      |-- FD-008 final evidence review

## 12. Companion project page requirements

The companion page created with this PRD is projects/first-diagram-is-a-liar/index.html. It is aligned with the existing OverKill Hill project-page information architecture and with the article's current public thesis.

It must:

- present the effort as a writing companion, methodology, and interactive tutorial;
- link to the article, repository, and evidence archive;
- explain the five-step tutorial;
- distinguish Council conditions;
- show receipts and release boundaries;
- state that the tutorial deployment is pending until a live smoke test succeeds;
- avoid embedding or linking to a currently 404 tutorial URL as if it were live;
- avoid claiming that prepared v1.0 material is published;
- use a proposed canonical project URL that remains visibly pending;
- preserve the shared site navigation and styling hooks.

The page is a source artifact for review. It does not publish itself to overkillhill.com and does not modify the OverKill Hill main repository.

## 13. Data, privacy, and security requirements

- No backend, database, account system, OAuth, or secret is required.
- Local storage may retain checklist state only.
- The handoff export is generated locally.
- Analytics must be opt-in at the deployment configuration level and must follow FR-005.
- Do not collect diagram text, copied text, free-form user content, or identifiable data.
- External links and live demo disclosures must make the destination boundary obvious.
- Any third-party script must be documented and must not block the tutorial's core use when unavailable.

## 14. Validation gates

The following commands are the minimum repository gate:

    npm run check
    npm run build
    npm run check:archive
    npm run health:mermaid
    git diff --check
    git status --short --branch

The Replit implementation should add and report:

    npm run test:e2e

If a command cannot run because a dependency, credential, or external service is unavailable, report it as not run. Do not label it passed.

## 15. Rollback and change control

- Keep each FD task reviewable and revertible.
- Do not move or delete archive material as part of application work.
- Do not rewrite historical release records to make current implementation look complete.
- If a UI change risks changing the article's meaning, stop at a proposed copy change and request owner review.
- If Pages configuration is external to the repository, document the required owner action instead of manufacturing a local success claim.
- Preserve the companion page as a draft source until its destination repository and publication path are approved.

## 16. Owner decisions required

Replit must not invent answers to these questions:

1. Should the First Diagram effort receive a card on the main /projects/ listing, or remain categorized under Writings?
2. What is the approved explanation for the 15 versus 18 diagram references?
3. Should the prepared v1.0 editorial cut be submitted for publication, and through which route?
4. Which analytics measurement ID, if any, is approved for the production Pages deployment?
5. Who owns the external GitHub Pages configuration if the repository workflow cannot complete deployment?

## 17. Expected Replit handoff format

Return one implementation report with:

- task IDs completed and skipped;
- changed files per task;
- test and validation output;
- browser acceptance results;
- Pages workflow run URL and live smoke-test URLs if available;
- analytics verification evidence using sanitized payloads;
- before/after evidence for any count or release-language change;
- unresolved owner decisions;
- explicit final status: CLEAR, AMBIGUOUS, or NEEDS INPUT.

The success condition is not “the page looks finished.” The success condition is that the tutorial teaches the intended method, preserves the archive's distinctions, produces a useful handoff, and makes its delivery and evidence boundaries honest.
