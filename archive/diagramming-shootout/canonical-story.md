# Canonical Story — ETCH-AI-SKETCH

This is the source of truth for the public story. Derivative pages, decks,
posts, and member notes may preserve their original voice, but their labels
must not contradict this sequence. The external production page was checked
on 2026-08-24 and is currently v0.5; the local editorial HTML is not evidence
of a deployed v1.0 release.

## The release sequence

| Identifier | Meaning | Evidence | Status |
|---|---|---|---|
| **v0.1 — Theatrical Cut** | The first public LinkedIn post/article treatment: a fast, deliberately imperfect statement of the ROY thesis. | LinkedIn article and the original prompt captures in `../legacy-exports/`. | Historical release; do not present as the final archive. |
| **v0.2 — Council Introduction** | The article expanded from the initial thesis into the Council of AIs experiment and its comparison frame. | The production page's version history and preserved campaign material. | Historical production release; exact source snapshot is not present locally. |
| **v0.3 / v0.3.3 — Scoring Debrief** | Audience and architect scoring were added, including the Round 1 and Round 2 top-performer findings. | The production page's version history and campaign material. | Historical production release; exact source snapshot is not present locally. |
| **v0.4 — Story Behind the Story** | The Council's purpose, disagreement, and manual human-in-the-loop method were made explicit. | The production page's version history and preserved campaign material. | Historical production release; exact source snapshot is not present locally. |
| **v0.5 — Council-Assisted Scoring** | Council-assisted scoring and model self-interviews became part of the public article. | The deployed public article and its version history, checked 2026-08-24. | **Current canonical public release.** |
| **Round 1 — V1** | The Core Five answered the brief independently from a cold start. Notion and Replit are preserved as specialty entries, not apples-to-apples Core Five competitors. | `prompts/`, `diagrams/v1/`, `diagram-manifest.csv`. | Complete archive. Copilot V1 is the Round 1 top performer. |
| **Round 2 — V2** | Participants revised after seeing the V1 set. ChatGPT V2 Pro is an exhibition variant; Replit entered with accumulated context. | `diagrams/v2/`, `diagram-manifest.csv`, `winners-summary.md`. | Complete archive. Claude V2 is the Round 2 top performer. |
| **v1.0 — Editorial Cut (prepared)** | A local editorial synthesis of the thesis, council evidence, and selected lessons. It is not a model-generated diagram and not a claim that every participant had identical conditions. | `../editorial-cut/index.html`. | Prepared locally; **not verified or published externally**. |

## Council status

The phrase **seven models** refers to the Core Five plus the Exhibition and
Specialty entries counted as model participants in the archive. The detailed
taxonomy is the fairer description:

- **Core Five:** ChatGPT, Claude, Copilot, Perplexity, Gemini.
- **Exhibition:** ChatGPT V2 Pro; not directly comparable to the Core Five.
- **Specialty roles:** Notion (archivist/synthesizer) and Replit (late-entry
  builder perspective).
- **Attempted and excluded:** Mermaid AI; preserved as a context-blind
  attempt, not a scored council member.

Notion did not vote as an independent Core Five judge. Its output is archived
and may receive a notable mention. Replit's entries are preserved and useful,
but its late-entry context means they are not evidence of a cold-start tie.

## Results language

Use these exact labels:

- **Round 1 top performer — Copilot V1:** renderer-level Mermaid theme
  configuration was the distinguishing achievement.
- **Round 2 top performer — Claude V2:** visible revision loops made the
  non-linear process structurally honest.
- **Notable mention — Notion V1:** clear, restrained, and useful as an
  archival view.

“Winner” is acceptable as shorthand only when the round is named. Do not call
ChatGPT V2 Pro the overall winner, and do not describe the Specialty entries
as direct competitors.

## Count language

Use **15 diagram records across V1 and V2, presented in an 18-slide deck**.
The 15 records are the 7 V1 and 8 V2 rows in `diagram-manifest.csv`. Each
archived deck contains those 15 diagram slides plus two round-title slides and
one Final Read slide.

Do not use “18 diagrams” as a literal count of distinct submissions. The
deployed v0.5 article's existing wording is a historical public claim and is
not silently rewritten by this archive decision; apply the approved count
language when the public writing is next edited and released.

## Editorial boundaries

- **Jamie Hill** is the human author, orchestrator, editor, and adjudicator.
- **OverKill Hill P³™** is the publishing brand.
- Council providers and models generated or contributed the labelled source
  material under the conditions recorded here.
- Mermaid is the diagram language/rendering ecosystem, not the author of the
  council submissions.
- Logos, remote images, referral links, and Ko-fi links are third-party
  resources or destinations; their presence is not an endorsement claim.

AutoCAD 12 belongs to the author's historical framing about learning tools. It
is not a council participant and must not appear in participant counts.

## Delivery fallback

The public article may render diagrams client-side, but the Mermaid source
must remain readable when the CDN, renderer, or a diagram definition fails.
The fallback is an explicit notice plus the preserved source—not a blank
container and not a silently substituted image.
