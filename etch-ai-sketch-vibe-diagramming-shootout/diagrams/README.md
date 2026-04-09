# Diagrams — ETCH-AI-SKETCH Shootout

**Mermaid source files (.mmd) for all V1 and V2 submissions.**

---

## How to Use These Files

Any `.mmd` file can be:

- Pasted into [mermaid.live](https://mermaid.live) to render immediately
- Pasted into any LLM as a starting point for iteration or adaptation
- Used as a reference for Mermaid syntax, styling, and structural patterns

The Copilot V1 file uses YAML front matter for renderer-level theme
configuration. Paste it into a Mermaid renderer that supports config
blocks, or strip the front matter if yours doesn't.

Rendered PNG versions of all diagrams (full-res and lo-res) are in `../images/`.

---

## Round 1 — V1 Diagrams

### Core Five

All five received the brief cold. No model saw another's output at this stage.

| Model | Source File | Mermaid.ai | Notes |
|---|---|---|---|
| **Copilot** | [copilot-v1.mmd](v1/etch-ai-sketch-using-a-council-to-design-at-velocity-copilot-v1.mmd) | [View ↗](https://mermaid.ai/d/8fe5c9ae-c8ac-4754-98fd-268ae3ceeef7) | 🏆 Round 1 top performer — renderer-level YAML config |
| Claude | [claude-v1.mmd](v1/etch-ai-sketch-using-a-council-to-design-at-velocity-claude-v1.mmd) | [View ↗](https://mermaid.ai/d/fade689d-cfd2-47d9-b316-86a21a0533fb) | Strong subgraph structure, color discipline |
| ChatGPT | [chatgpt-v1.mmd](v1/etch-ai-sketch-using-a-council-to-design-at-velocity-chatgpt-v1.mmd) | [View ↗](https://mermaid.ai/d/b49cf4f6-5071-4207-8673-0ae56d328ed6) | Best all-around scaffolding |
| Perplexity | [perplexity-v1.mmd](v1/etch-ai-sketch-using-a-council-to-design-at-velocity-perplexity-v1.mmd) | [View ↗](https://mermaid.ai/d/2f015a7f-4589-4a27-8cc4-5b2d7bcd9d83) | Tightest ROY framing |
| Gemini | [gemini-v1.mmd](v1/etch-ai-sketch-using-a-council-to-design-at-velocity-gemini-v1.mmd) | [View ↗](https://mermaid.ai/d/d93b0060-2743-40de-869e-a84dc07553f2) | Free tier — see council-brief.md |

### Specialty Roles

| Model | Source File | Mermaid.ai | Notes |
|---|---|---|---|
| Notion | [notion-v1.mmd](v1/etch-ai-sketch-using-a-council-to-design-at-velocity-notion-v1.mmd) | [View ↗](https://mermaid.ai/d/fb3557e2-df35-46f8-a8cd-4abe56c82ed5) | ⭐ Notable mention — "quietly effective" |
| Replit | [replit-v1.mmd](v1/etch-ai-sketch-using-a-council-to-design-at-velocity-replit-v1.mmd) | [View ↗](https://mermaid.ai/d/90d988cd-3af8-4fcf-b42e-4bd3da3da29a) | Late entry — different context, see council-brief.md |

---

### Round 1 Top Performer — Copilot V1

Copilot earned Round 1 by configuring the Mermaid theme engine via YAML
front matter — setting the foundational color and typography tokens that
all other styling inherits from. No other V1 submission operated at the
renderer level. Every other model styled individual nodes. Copilot styled
the engine.

---

## Round 2 — V2 Diagrams

### Core Five

Each model saw the full set of V1 outputs, evaluated the field, and revised.

| Model | Source File | Mermaid.ai | Notes |
|---|---|---|---|
| **Claude** | [claude-v2.mmd](v2/etch-ai-sketch-using-a-council-to-design-at-velocity-claude-v2.mmd) | [View ↗](https://mermaid.ai/d/2e9a4321-6302-44ca-82cc-e2020479fdf5) | 🏆 Round 2 top performer — five lanes, honest recursion |
| Copilot | [copilot-v2.mmd](v2/etch-ai-sketch-using-a-council-to-design-at-velocity-copilot-v2.mmd) | [View ↗](https://mermaid.ai/d/ea1ba020-7f26-483d-9892-3d98b5b6db23) | Retained renderer discipline, tightened flow |
| ChatGPT | [chatgpt-v2.mmd](v2/etch-ai-sketch-using-a-council-to-design-at-velocity-chatgpt-v2.mmd) | [View ↗](https://mermaid.ai/d/18c4c328-bef3-4d80-bebf-d9127c39fe43) | Strongest packaging and labeling |
| Perplexity | [perplexity-v2.mmd](v2/etch-ai-sketch-using-a-council-to-design-at-velocity-perplexity-v2.mmd) | [View ↗](https://mermaid.ai/d/1e77a8a7-ec42-47ea-8cc6-8fe03204785c) | Most precise ROY annotation |
| Gemini | [gemini-v2.mmd](v2/etch-ai-sketch-using-a-council-to-design-at-velocity-gemini-v2.mmd) | [View ↗](https://mermaid.ai/d/54541ba0-3c57-4065-bf53-c698123747bc) | Most maximalist; memorable coinage |

### Exhibition

| Model | Source File | Mermaid.ai | Notes |
|---|---|---|---|
| ChatGPT V2pro | [chatgpt-v2pro.mmd](v2/etch-ai-sketch-using-a-council-to-design-at-velocity-chatgpt-v2pro.mmd) | [View ↗](https://mermaid.ai/d/e2a6df7d-dbbe-40d6-bdae-967ac33737be) | Pro-tier reasoning — unmatched access, not directly comparable |

### Specialty Roles

| Model | Source File | Mermaid.ai | Notes |
|---|---|---|---|
| Notion | [notion-v2.mmd](v2/etch-ai-sketch-using-a-council-to-design-at-velocity-notion-v2.mmd) | [View ↗](https://mermaid.ai/d/b40280fd-8ef3-4992-bbe3-9dbfce6fe603) | Retained horizontal lane clarity |
| Replit | [replit-v2.mmd](v2/etch-ai-sketch-using-a-council-to-design-at-velocity-replit-v2.mmd) | [View ↗](https://mermaid.ai/d/478c63dc-47c1-419a-b4a9-dac33707fc55) | Late entry — different context, see council-brief.md |

---

### Round 2 Top Performer — Claude V2

Claude earned Round 2 by making the loops visible and honest. Five swim
lanes — Ignition, Strategy, Craft, Proof, Ship — with dashed revision
arrows threading back through all of them. Solid arrows for forward
motion. Dashed arrows for the loopbacks everyone always wants to hide.
The diagram stopped performing certainty and started depicting how
ideation actually works.

---

## What Separates Strong Submissions from Weak Ones

- **Honest non-linearity** — forks, loopbacks, and dead ends are visible
- **Renderer-level configuration** — YAML front matter, not just node styling
- **Semantic node shapes** — decisions in diamonds, processes in rectangles, terminals in stadiums
- **Meaningful styling** — color and weight carry information, not just decoration
- **Visible revision loops** — the diagram shows that iteration happened
- **Conservative emoji** — present but not dominant
- **Clean subgraph labeling** — phase names that orient the reader immediately
