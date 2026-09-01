# Diagram Count Reconciliation — 2026-08-27

## Decision

The archive supports **15 distinct diagram records**, not 18 distinct
diagrams:

- **7 V1 records** in Round 1;
- **8 V2 records** in Round 2, including the ChatGPT V2 Pro exhibition variant
  and the Replit specialty entry.

The number **18** is supported as the page/slide count of the exported
presentation deck. Both the square and wide PPTX/PDF exports contain the same
18 slides:

1. Round 1 title slide;
2. 7 V1 diagram slides;
3. Round 2 title slide;
4. 8 V2 diagram slides;
5. Final Read slide.

That is **15 diagram-bearing slides plus 3 framing/result slides**, not 18
diagram records.

## Evidence matrix

| Evidence unit | Count | Authority | Interpretation |
|---|---:|---|---|
| Distinct diagram records | 15 | [`diagram-manifest.csv`](../archive/diagramming-shootout/diagram-manifest.csv) | 7 V1 rows + 8 V2 rows; one row per archived submission/variant |
| V1 Mermaid source files | 7 | `archive/diagramming-shootout/diagrams/v1/` | Round 1 records |
| V2 Mermaid source files | 8 | `archive/diagramming-shootout/diagrams/v2/` | Round 2 records, including the exhibition and specialty entries |
| Full-resolution diagram PNGs | 15 | `archive/diagramming-shootout/images/v1/` and `images/v2/` | One checked-in full-resolution render per diagram record |
| Lo-resolution diagram PNGs | 15 | The same V1/V2 image directories | A second delivery rendition, not a second diagram |
| Slides/pages in the square deck | 18 | `slides/etch-ai-sketch-using-a-council-to-design-at-velocity-square.{pptx,pdf}` | 15 diagram slides plus 3 non-diagram slides |
| Slides/pages in the wide deck | 18 | `slides/etch-ai-sketch-using-a-council-to-design-at-velocity-wide.{pptx,pdf}` | Same slide sequence as the square deck |
| Competition heats | 4 | The live v0.5 article's visual-edition copy | Two heats in Round 1 and two heats in Round 2; heats are evaluation groupings, not extra records |

The manifest and source-file counts are repository evidence. The deck counts
were checked from the physical PDF page counts and PPTX slide XML for both
orientations. The public article wording was retrieved from the canonical URL
on 2026-08-27.

## Claim classification

### Confirmed

- The canonical archive has 15 distinct diagram records: 7 V1 and 8 V2.
- The archived deck exports have 18 slides/pages in each orientation.
- The 18-slide sequence contains 15 diagram-bearing slides and 3
  title/result slides.
- The archive's full-resolution and lo-resolution PNG pairs are alternate
  renditions of the same 15 records.
- The live v0.5 article currently says “All 18 diagrams” and says both deck
  formats contain “the same 18 diagrams.”

### Inferred

- The public article's “18 diagrams” wording most likely carried forward the
  deck's 18-slide count. The deck's `2/18` through `17/18` labels support that
  explanation, but no source explicitly states that the article author meant
  slides rather than diagrams.
- The phrase “15 records” refers to the archive's one-row-per-submission
  manifest model, which includes exhibition and specialty entries even though
  they are not all part of the same Core Five comparison.

### Approved

- For the next authorized public editorial release, describe the evidence as
  **15 diagram records across V1 and V2, presented in an 18-slide deck**.
- If the deck is mentioned separately, call it an **18-slide deck** rather than
  an 18-diagram deck.
- Cite this reconciliation from any future release or content review so the
  count distinction is not reopened from memory.

### Unknown / owner-controlled

- Whether the already-published v0.5 article will receive the approved
  correction through an external release, or remain historical copy.
- The external deployment identifier, canonical verification, and rollback
  confirmation for the authorized release remain pending.

No public article, external deck, or historical release text was rewritten by
this reconciliation. The approved wording remains subject to the external
deployment and canonical-verification gates recorded in the release handoff.
