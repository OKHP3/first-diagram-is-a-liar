# Diagrams — ETCH-AI-SKETCH Shootout

**Mermaid source files for all V1 and V2 submissions from the Council of AIs.**

---

## How to Use These Files

Any `.mermaid` file in this folder can be:

- Pasted into [mermaid.live](https://mermaid.live) to render immediately
- Pasted into any LLM as a starting point for iteration
- Used as a reference for Mermaid syntax patterns
- Adapted for your own process documentation

The Copilot V1 file uses YAML front matter for renderer-level theme
configuration — paste it into a Mermaid renderer that supports config blocks,
or strip the front matter if your renderer doesn't.

---

## Round 1 — V1 Diagrams

All five core models plus Notion received the same brief and produced an initial
diagram cold, without seeing each other's work.

| Model | File | Mermaid.ai | Notes |
|---|---|---|---|
| Copilot | [copilot-v1.mermaid](v1/copilot-v1.mermaid) | [View ↗](https://mermaid.ai/d/8fe5c9ae-c8ac-4754-98fd-268ae3ceeef7) | **Round 1 winner** — renderer-level YAML config |
| Claude | [claude-v1.mermaid](v1/claude-v1.mermaid) | [View ↗](https://mermaid.ai/d/2e9a4321-6302-44ca-82cc-e2020479fdf5) | Strong subgraph structure, color discipline |
| ChatGPT | [chatgpt-v1.mermaid](v1/chatgpt-v1.mermaid) | — | Best all-around scaffolding |
| Perplexity | [perplexity-v1.mermaid](v1/perplexity-v1.mermaid) | — | Tightest ROY framing |
| Gemini | [gemini-v1.mermaid](v1/gemini-v1.mermaid) | — | Free tier — noted in council-brief.md |
| Notion | [notion-v1.mermaid](v1/notion-v1.mermaid) | [View ↗](https://mermaid.ai/d/fb3557e2-df35-46f8-a8cd-4abe56c82ed5) | "Quietly effective" — horizontal lanes |

### Round 1 Winner — Copilot V1

Earned it by configuring the Mermaid theme engine via YAML front matter —
not just styling nodes, but setting the foundational tokens that all other
styling inherits from. The only V1 submission to operate at the renderer
level rather than the node level.

---

## Round 2 — V2 Diagrams

After seeing all V1 outputs, each model evaluated the field and produced a
revised diagram that improved on its own first draft.

| Model | File | Mermaid.ai | Notes |
|---|---|---|---|
| Claude | [claude-v2.mermaid](v2/claude-v2.mermaid) | [View ↗](https://mermaid.ai/d/2e9a4321-6302-44ca-82cc-e2020479fdf5) | **Round 2 winner** — five lanes, honest recursion |
| Copilot | [copilot-v2.mermaid](v2/copilot-v2.mermaid) | — | Retained renderer discipline, tightened flow |
| ChatGPT | [chatgpt-v2.mermaid](v2/chatgpt-v2.mermaid) | — | Strongest packaging and labeling |
| Perplexity | [perplexity-v2.mermaid](v2/perplexity-v2.mermaid) | — | Most precise ROY annotation |
| Gemini | [gemini-v2.mermaid](v2/gemini-v2.mermaid) | — | Most maximalist; memorable coinage |
| Notion | [notion-v2.mermaid](v2/notion-v2.mermaid) | — | Retained horizontal lane clarity |

### Round 2 Winner — Claude V2

Earned it by making the loops visible and honest. Five swim lanes —
Ignition, Strategy, Craft, Proof, Ship — with dashed revision arrows
threading back through all of them. Solid arrows for forward motion.
Dashed arrows for the loopbacks everyone wants to hide. The diagram
stopped performing certainty and started depicting how ideation actually
works.

---

## What the Diagrams Are Depicting

All diagrams show the same subject: the ideation process behind writing a
LinkedIn post about the visual ROI of diagrams. The subject is deliberately
recursive — a diagram about the process of making a diagram.

Key elements that separate the stronger submissions from the weaker ones:

- **Honest non-linearity** — forks, loopbacks, dead ends visible
- **Semantic node shapes** — decisions in diamonds, processes in rectangles,
  terminal states in circles or stadiums
- **Meaningful styling** — color and weight differences that carry
  information rather than just decoration
- **Revision loops** — the diagram shows that V1 is wrong and V2 is better
  as a structural feature, not just an editorial claim
- **Conservative emoji** — present but not dominant
