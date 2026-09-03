# Canonical Release Manifest

**Project:** ETCH-AI-SKETCH — *The First Diagram Is Usually a Liar*
**Canonical owner:** Jamie Hill, published through OverKill Hill P³™
**Record status:** Canonical as of 2026-08-24; later edits must preserve this sequence.

This manifest is the source of truth for version names, round labels, ownership,
and publication status. “V1” and “V2” below describe diagram iterations within
the council experiment; they do **not** rename the article. The deployed page
and the local editorial cut are intentionally recorded separately.

## Release sequence

| ID | Stage | Date | Purpose | Owner / maker | Source | Render / public artifact | Status |
|---|---|---|---|---|---|---|---|
| `ARTICLE-0.1` | Article v0.1, protoform | Date not recorded in the source materials | Establish the ROY thesis and the experiment brief | Jamie Hill; model-assisted drafts | [Captured source](../legacy-exports/council-review.txt) | [Public article](https://overkillhill.com/writings/first-diagram-is-a-liar/) | Archived predecessor |
| `ROUND-1` | Council Round 1 / V1 | Session date not recorded | Cold-start submissions and first-pass comparison | Council members; Jamie Hill chaired | [V1 Mermaid sources](diagrams/v1/) | [V1 rendered PNGs](images/v1/) and [public links](mermaid-public-links.md#round-1) | Archived competition round |
| `ROUND-2` | Council Round 2 / V2 | Session date not recorded | Revision after peer-output review | Council members; Jamie Hill chaired | [V2 Mermaid sources](diagrams/v2/) | [V2 rendered PNGs](images/v2/) and [public links](mermaid-public-links.md#round-2) | Archived competition round |
| `ARTICLE-0.5` | Article v0.5, Council-Assisted Scoring | 2026-08-24 (verified public state) | Publish the council-assisted scoring and model self-interviews | Jamie Hill; OverKill Hill P³™ editorial work | [Production history](release-changelog.md) | [Live article](https://overkillhill.com/writings/first-diagram-is-a-liar/) | Current canonical public release |
| `ARTICLE-1.0` | Article v1.0, Editorial Cut | Prepared locally; targeted count-label correction deployed 2026-09-01 | Synthesize the thesis, council evidence, and selected lessons for a future release; the approved count correction was released separately through the external production source | Jamie Hill; OverKill Hill P³™ editorial work | [Local editorial source](../editorial-cut/index.html) | [External count-label release](https://overkillhill.com/writings/first-diagram-is-a-liar/) and [local HTML](../editorial-cut/index.html) | Count-label correction externally deployed and verified; full local editorial cut remains prepared |

## Canonical result language

- **Round 1 top performer:** Copilot V1, for renderer-level Mermaid theme
  configuration. This is a round-specific result, not an overall winner.
- **Round 2 top performer:** Claude V2, for making revision loops visible and
  honest. This is a round-specific result, not a claim that Claude authored
  the article.
- **Notion:** archivist/synthesizer and notable mention; not part of the Core
  Five comparison.
- **Replit:** late-entry specialty-role participant. Replit V1 and V2 are
  archived submissions. They are not evidence that Replit V2 shipped as the
  public article or product.
- **No overall council winner is declared.** The rounds had different
  conditions and criteria; the records above are the complete result language.


## Canonical count language

The archive contains **15 distinct diagram records**: 7 V1 records and 8 V2
records in `diagram-manifest.csv`. The square and wide presentation exports
each contain **18 slides**: the 15 diagram slides, two round-title slides, and
one Final Read slide. Full- and lo-resolution renders are alternate renditions
of the same diagram records, not additional diagrams.

For the article release, use **15 diagram records across V1 and V2, presented
in an 18-slide deck**. Do not describe the deck as containing 18 distinct
diagrams. This wording was deployed and verified externally on 2026-09-01 as a
targeted count-label correction. The public page remains labelled v0.5, and
the prior v0.5 source/deployment is retained as the rollback target; this
manifest does not rewrite historical release records.

## Count boundary

The archive's `diagram-manifest.csv` contains **15 distinct diagram records**:
7 V1 records and 8 V2 records. The square and wide exported decks each contain
18 slides: 15 diagram-bearing slides, two round-title slides, and one Final Read
slide. The deck count is therefore not an 18-diagram record count. Full- and
lo-resolution PNGs are alternate renditions of those same 15 records.

Before the 2026-09-01 correction, the published v0.5 article said “All 18
diagrams” in its deck section and that both formats contained “the same 18
diagrams.” The approved wording, now present in the externally verified page,
is **15 diagram records across V1 and V2, presented in an 18-slide deck**.
See
[`../../docs/diagram-count-reconciliation-2026-08-27.md`](../../docs/diagram-count-reconciliation-2026-08-27.md)
for the evidence matrix and claim classifications.

## Version rule

`ARTICLE-1.0` names the prepared edited article release, not a selected “winning”
diagram and not a separate production artifact. The current deployed page is
`ARTICLE-0.5` until the editorial cut is externally verified and published. A
published page may display and link to council work, but those diagrams remain
attributed submissions. “Synthesis” describes a method or a member's output; it
does not transfer authorship to a model.

## Companion-post labels

The planned v0.6 through v0.9 LinkedIn companion series is separate from the
article release sequence. Its labels identify draft posts about Notion, Replit,
Mermaid Theme Builder, and BPMN for Mermaid; they do not create
`ARTICLE-0.6` through `ARTICLE-0.9` releases.

The 2026-08-25 source reconciliation confirmed that the v0.6 Notion post is a
review-only companion draft, not an approved or published LinkedIn release.
See [`../../docs/v0.6-source-reconciliation-2026-08-25.md`](../../docs/v0.6-source-reconciliation-2026-08-25.md)
for the dated evidence matrix, the verification attempt and LinkedIn access
limitation, unresolved editorial choice, and required publication record.

The four focused chapter packets are indexed in
[`../specialist-chapters/README.md`](../specialist-chapters/README.md).
They preserve the same companion-post labels and canonical-link boundaries for
v0.6 Notion, v0.7 Replit, v0.8 Mermaid Theme Builder, and v0.9 BPMN for Mermaid.

The prepared final article, evidence map, preflight ledger, and review-only
final LinkedIn copy are connected in
[`v1.0-synthesis-handoff.md`](v1.0-synthesis-handoff.md). This handoff does not
change the `ARTICLE-1.0` publication status or the current public `ARTICLE-0.5`
record.

## 2026-09-03 evidence closure

The full `ARTICLE-1.0` editorial cut is **prepared locally and deferred**, not
published. Its frozen local source is recorded in
[`../../docs/article-1.0-release-evidence-2026-09-03.md`](../../docs/article-1.0-release-evidence-2026-09-03.md).
The owner-approved 2026-09-01 external release was limited to the corrected
diagram/deck count wording and subsequent archive-link repair; the live article
still displays v0.5. No full-cut owner approval, v1.0 publication date, or
performance result is recorded.
