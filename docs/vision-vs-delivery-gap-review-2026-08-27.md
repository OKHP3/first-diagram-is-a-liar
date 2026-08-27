# Vision vs. Delivery Gap Review — 2026-08-27

Status: report-only. No code, archive, or public-site content changed.
Reviewed by: Claude (Cowork), against repo clone + live overkillhill.com/projects/
Builds on: docs/first-diagram-is-a-liar-application-prd.md (2026-08-26), which already contains a correct gap register (G-01 to G-08) and an 8-task Replit implementation plan (FD-001 to FD-008). This review's job was to check whether that plan has actually shipped. It has not.

## What the vision actually says

Confirmed sources: AGENTS.md, README.md, PRD section 3.

- Interactive field guide teaching the ROY method: Understanding / Explanation.
- Five-step spine: spot the lie, measure ROY, draw the truth, use disagreement, ship the proof.
- Council taxonomy stays unflattened: Core Five (ChatGPT, Claude, Copilot, Perplexity, Gemini), Exhibition (ChatGPT V2 Pro), Specialty Notion, Specialty Replit, Attempted (Mermaid AI). No overall winner declared.
- A durable handoff artifact the user can take out of the browser.
- A documented, privacy-bounded analytics contract, opt-in only.
- Verified GitHub Pages delivery.
- Preserved evidence archive under archive/.

## What overkillhill.com/projects/ shows today

Fetched 2026-08-27. The effort does not appear on /projects/ at all. It surfaces only under Writings, as the v0.5 article (`overkillhill.com/writings/first-diagram-is-a-liar/`). No live interactive tutorial is discoverable from the public site. This matches PRD owner-decision #1, which is still open.

## Gap register, re-verified today

| ID | In-scope vision item | Live/repo evidence checked today | Verdict |
| --- | --- | --- | --- |
| G-01 | GitHub Pages tutorial live at okhp3.github.io/first-diagram-is-a-liar/ | Direct fetch returned 404 | Still open, P0 |
| G-02 | Council shows Specialty Notion and Specialty Replit as separate records (FR-003) | `src/App.tsx` line 20 still reads `{ name: "Notion + Replit", tier: "Specialty", ... }` | Still open, P1 |
| G-03 | Durable local handoff export, Markdown/Blob download (FR-004) | `App.tsx` only has `copyBrief()` clipboard copy; no Blob, no download, no file export | Still open, P1 |
| G-04 | Privacy-bounded analytics bridge, 4 documented events (FR-005) | No analytics code anywhere in `src/`; no analytics dependency in `package.json` | Still open, P1 |
| G-05 | Browser acceptance harness covering the 5-step flow (FD-001) | `package.json` has no `test:e2e` script and no test framework dependency | Still open, P1, and it blocks verifying G-02 through G-04 once fixed |
| G-06 | Consistent diagram count in public article language | Manifest confirmed at 15 records; PRD's "15 vs 18" conflict finding stands, no owner ruling recorded since | Still open, P1 |
| G-07 | Companion page decision: /projects/ card vs. Writings-only | `projects/first-diagram-is-a-liar/index.html` was drafted 2026-08-26, correctly scoped as a non-self-publishing source artifact per PRD section 12. It has not been pushed into the OverKill Hill main site repo. Live site still shows Writings-only. | Drafted, not published; owner decision still open |
| G-08 | v0.6-v0.9 material readiness | Confirmed release-boundary only, not an app defect | Not a gap |

Net finding: `src/App.tsx`, `src/main.tsx`, and `package.json` are unchanged since before the PRD was written (last real app commit `65db663`, "Harden tutorial flow and archive references"). The only commit since then (`1a56f65`) added the PRD and the companion page draft. Zero of FD-001 through FD-008 have executed.

One new fact the PRD didn't have: a Replit App named `the-first-diagram-is-usually-a-liar` (replId `bb1da2b0-78de-40be-9a8a-a8d344427d97`) exists and was last updated 2026-08-27T01:40:12Z, tracking almost exactly when the PRD landed. It's the intended execution target (AGENTS.md and the PRD both frame this as Replit implementation work, and `.replit` already carries the app's dev workflow and a chromium package for browser testing). It hasn't been dispatched yet.

## Options

**A. Dispatch the existing PRD to the Replit App now, in FD dependency order.**
Fast. The plan is already scoped for exactly this handoff. Risk: PRD section 16 has five owner decisions Replit is explicitly told not to invent answers to (analytics measurement ID, the 15/18 count call, v1.0 publication route, /projects/ vs Writings placement, who owns external Pages config). Dispatching before answering those means FD-004 and FD-006 stall partway through.

**B. Answer the five owner decisions first, then dispatch.**
One extra step, but they're Jamie's calls, not research, so it's cheap. Gets a single clean pass instead of a partial run that comes back NEEDS INPUT.

**C. Execute FD-001 through FD-008 by hand in this session instead of routing through Replit.**
Full control, no second-agent interpretation risk. But it duplicates a purpose-built environment that already exists (`.replit` has the dev workflow and chromium already wired for FD-001's browser harness), costs more time and tokens, and this session can't run the live browser acceptance suite the way the Replit workflow can.

**D. Leave it. Ship the article and companion page as-is, treat the code gaps as backlog.**
Zero cost today. But the README and the live article both point readers at a tutorial URL that 404s right now. That's not a backlog item sitting quietly, it's a public broken link on record.

## Recommendation

B, then A. Answer the five owner decisions (fast, they're calls not investigation), then dispatch `docs/first-diagram-is-a-liar-application-prd.md` to the existing Replit App via its update flow, in the PRD's own dependency order: FD-001 baseline/tests first, then FD-002/FD-004/FD-006 in parallel, then FD-003, then FD-005, then FD-007, then FD-008 as the final evidence review.

Skip C. The right tool for this already exists and is already configured; rebuilding FD-001's test harness by hand here is wasted motion.

Skip D. G-01 is a live, public-facing false promise (README and article both link to a 404). That shouldn't survive another review cycle untouched.

## Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| Replit invents an answer to one of the five owner decisions instead of stopping | Prompt explicitly names the five as blocked pending Jamie's ruling; require NEEDS INPUT status on any task that hits one unanswered |
| FD tasks run out of dependency order and break the build | PRD section 11 already has the correct dependency map; hold Replit to it, don't let it skip ahead to FD-007 before FD-001/FD-005 |
| "Build succeeded" gets reported as "deployment succeeded" | FD-007's own acceptance criteria require distinguishing local build success, workflow success, and live smoke-test success; don't accept a report that conflates them, verify the live URL independently after the fact |
| Count reconciliation (G-06) quietly rewrites historical release language | FD-006 is already scoped report-only until Jamie approves a specific correction; hold it to that boundary |

## Next actions

- [ ] Jamie rules on the five PRD section 16 owner decisions (happy to draft options for each if that speeds it up)
- [ ] Dispatch the PRD to Replit App `bb1da2b0-78de-40be-9a8a-a8d344427d97`, starting with FD-001
- [ ] Review the FD-001 handoff (test harness) before authorizing FD-002 onward
- [ ] After FD-007, independently smoke-test `okhp3.github.io/first-diagram-is-a-liar/` rather than trusting a workflow-green claim
- [ ] Once Pages is live and Council fidelity is restored, revisit the /projects/ vs /writings/ placement call with real working evidence instead of a draft page
