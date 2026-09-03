# Gap Analysis: Vision vs. Delivered State

**Reviewed:** 2026-08-27
**Method:** Repository documents (README, AGENTS.md, roadmap.md, CHANGELOG.md, recovery-ledger.md, technology-inventory.md, v0.6-source-reconciliation-2026-08-25.md) compared against the live `overkillhill.com/projects/` page, the live article, and a direct check of the GitHub Pages URL.
**Evidence tiers used throughout:** CONFIRMED (directly observed), INFERRED (reasoned from confirmed evidence), UNKNOWN (not verifiable from here).

## Executive summary

- The repo's own README calls the interactive tutorial app "the solution surface," the primary deliverable, not the article. It's built: TypeScript/React/Vite/Tailwind, client-only, with a ROY meter, non-linear diagram workbench, Council fairness view, and shipping checklist. CONFIRMED via source.
- That app is not reachable. `https://okhp3.github.io/first-diagram-is-a-liar/` returns HTTP 404 right now. CONFIRMED via direct check.
- `overkillhill.com/projects/` doesn't list this effort at all under "Built at the Hill," where Mermaid Theme Builder and BPMN for Mermaid live. It only shows up under Writings, and even there, only the article gets a mention. CONFIRMED via live fetch.
- The live article is v0.5. Roadmap's own V1.0 line ("prepared, unpublished") has two boxes still unchecked: verify and publish the full editorial cut, and capture the deployed source snapshot and release evidence. CONFIRMED via roadmap.md and live article version.
- Four planned LinkedIn companion posts (v0.6 Notion, v0.7 Replit, v0.8 Mermaid Theme Builder, v0.9 BPMN for Mermaid) plus a v1.0 synthesis post exist only as drafts. Zero confirmed publications. This was already flagged internally on 2026-08-25 and hasn't moved since. CONFIRMED via docs/linkedin/proto-posts/ and the reconciliation memo.
- v0.8 and v0.9 are the exact posts that would drive referral traffic to Mermaid Theme Builder and BPMN for Mermaid, both of which are live projects today. Not publishing them is leaving cross-promotion on the table for tools that already ship. INFERRED.
- Two changelog line items are still open by the changelog's own admission: article revision notes for v0.2+, and poll-result/council-interview summaries. CONFIRMED via CHANGELOG.md.
- Local `main` is 8 commits behind `origin/main`, with roughly 324 files showing as modified in the working tree. Any local build/verify pass right now doesn't prove what's actually on GitHub or what Pages would build from. CONFIRMED via git status. This is a prerequisite blocker, not a scope gap, but it has to clear before any of the below gets fixed for real.

## Vision vs. live state

| Commitment (source) | Status per repo docs | Status live | Verdict |
|---|---|---|---|
| Interactive tutorial app as "the solution surface" (README.md) | Built, Pages workflow checked in | HTTP 404 at the Pages URL | Not delivered |
| App linked from the article or projects page | Not addressed in vision docs | Not present in article body or on `/projects/` | Not delivered |
| Article v1.0 publish + deployed snapshot evidence (roadmap.md V1.0) | Marked `[ ]` unchecked, "prepared, unpublished" | Live article is v0.5 | Not delivered |
| GitHub Pages deployment verified (AGENTS.md, recovery-ledger.md) | Explicitly flagged "not confirmed" / "Unknown" | Confirmed failing (404), not merely unverified | Worse than tracked |
| LinkedIn companion series v0.6-v0.9 + v1.0 synthesis (docs/linkedin/proto-posts) | Drafted; v0.6 explicitly "review-only" per 2026-08-25 memo | No public permalinks found for any of the five | Not delivered |
| Article revision notes v0.2+ (CHANGELOG.md Unreleased) | Listed as remaining planned work | N/A | Not delivered |
| Poll-result summaries + council interview links (CHANGELOG.md Unreleased) | Listed as remaining planned work | N/A | Not delivered |
| Mermaid archive integrity, Council taxonomy fidelity, licensing notes | Implemented and checked via scripts/check-archive.mjs, check-mermaid-delivery.mjs | Not independently re-run this pass | On track (not re-verified here) |

## Options for closing the gaps

| Option | What it does | Tradeoff |
|---|---|---|
| A. Fix the pipe, then republish in roadmap order | Clean git state first, confirm Pages Actions run green, ship v1.0 article + app link, then work the LinkedIn series in its existing v0.6→v0.9→v1.0 order | Slowest to first visible win, but lowest risk of publishing on top of a broken deploy |
| B. Ship the app first, article second | Get the tutorial app live and linked immediately since it's the most finished asset sitting idle; hold the article at v0.5 a while longer | Article and app stay out of sync on version story for longer; risk of the "council scored itself" framing feeling stale if the app ships with newer content |
| C. Ship the LinkedIn series first | Push v0.6-v0.9 out now to drive traffic to Mermaid Theme Builder and BPMN for Mermaid while the app/article work continues in parallel | Companion posts currently reference an app and article state that isn't live yet, so early posts either undersell the effort or need rewrites once A/B lands |
| D. Do nothing further, freeze at v0.5 | Treat the archive and article as complete, drop V1.0 and the companion series from scope | Cheapest, but abandons work already drafted (five posts, a finished app) and leaves the projects page permanently missing this effort |

## Recommendation

Option A, with the git cleanup as a hard prerequisite, not a parallel track. Nothing else on this list is trustworthy to verify or ship while the working copy is 8 commits behind and shows 324 modified files. That's not a scope item, it's a blocker on every other line.

After that: get the Pages deploy actually green and confirmed by a live smoke test, link the app from both the article and, more importantly, get this effort added to `overkillhill.com/projects/` under "Built at the Hill" alongside the other live tools. That's the single highest-leverage fix here. The app is finished. It's just invisible. Then publish v1.0 of the article with the deployed snapshot evidence the roadmap already asks for, and only then work the LinkedIn series, because v0.8 and v0.9 read better once the flagship piece they're standing on is actually current.

Option C is tempting because Mermaid Theme Builder and BPMN for Mermaid are shipped and could use the referral traffic today, but posting a companion series that points back to a v0.5 article and a 404'd app undercuts the whole pitch. Sequence matters more than speed here.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Reconciling 8 commits + 324 modified files could surface real conflicts, not just line-ending noise | Diff before merging; don't force-push or discard per AGENTS.md's own working conventions |
| Pages Actions run could fail on a real build error once git state is clean, not just a config gap | Run `npm run check`, `npm run build`, `npm run check:archive`, `npm run health:mermaid` locally against the reconciled `main` before trusting the workflow |
| Adding this effort to `/projects/` requires a change on the live site, outside this repo | Scope that as its own task with whatever owns the overkillhill.com site content, not as a repo commit |
| Hashtag policy for v0.6 is still an open editorial call per the 2026-08-25 memo | Resolve before any companion post goes out, not after |
| Publishing v1.0 before the app is verifiably live would repeat the same "prepared, unpublished" problem one version later | Gate the article v1.0 publish on a passing live smoke test of the Pages URL, per AGENTS.md's own evidence boundaries |

## Next actions

- [ ] Reconcile local `main` with `origin/main` (8 commits behind) and resolve the 324-file working-tree drift
- [ ] Run the full local validation suite against the reconciled tree (`npm run check`, `npm run build`, `npm run check:archive`, `npm run health:mermaid`)
- [ ] Trigger the Pages workflow and confirm a live smoke test passes at the Pages URL
- [ ] Link the tutorial app from the live article
- [ ] Request this effort be added to `overkillhill.com/projects/` under "Built at the Hill"
- [ ] Publish article v1.0 with the deployed source snapshot and release evidence roadmap.md calls for
- [ ] Resolve the v0.6 hashtag policy conflict, then clear v0.6-v0.9 and the v1.0 synthesis post through their review gate and publish in order
- [ ] Close out the two open CHANGELOG items: article revision notes v0.2+, and poll-result/council-interview summaries

## 2026-09-03 closure addendum

The findings above are a historical report of the 2026-08-27 state and are not
rewritten. The current evidence changes only the statuses that were actually
rechecked:

| Earlier gap | Current evidence | Current status |
|---|---|---|
| G-01: Pages route returned 404 | The route returned HTTP 200 on 2026-09-03; the remote Pages workflow also passed on 2026-09-01 | **Resolved technically**; keep it separate from article publication |
| G-06: count wording unresolved | The approved count wording is live in the v0.5 article; the full local editorial cut remains separate | **Resolved for the bounded correction; ARTICLE-1.0 still deferred** |
| Article v1.0 publication/evidence | The exact local editorial source is frozen and the evidence packet is complete, but full-cut owner approval and external deployment are absent | **Deferred, not published** |
| Campaign readout | No GA4/DebugView/provider/qualitative data was available for the closed window | **Unknown / unavailable, not zero** |
| G-07: `/projects/` positioning | No owner decision or external site change was part of this evidence closure | **Out of scope and still owner-controlled** |

The dated evidence packet is
[`docs/article-1.0-release-evidence-2026-09-03.md`](article-1.0-release-evidence-2026-09-03.md).
