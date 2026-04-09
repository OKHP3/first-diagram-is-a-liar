# ETCH-AI-SKETCH — Vibe Diagramming Shootout

**Seven models. Same brief. Two rounds. One human orchestrator.**

---

## What This Folder Contains

Everything generated during the Council of AIs experiment that became the
article *The First Diagram Is Usually a Liar*.

```
├── council-brief.md        ← governing brief, four-tier taxonomy, fairness disclosure
├── prompts/                ← the 8 prompts that drove the session
├── diagrams/               ← Mermaid source files (.mmd) for all V1 and V2 outputs
├── images/                 ← rendered PNGs (full-res and lo-res) for all diagrams
├── slides/                 ← the ETCH-AI-SKETCH presentation deck
└── etch-ai-sketch-using-a-council-to-design-at-velocity-when-diagrams-stopped-being-drawing.mp4
```

---

## The MP4 File

Generated using Sora during the project. Not used in the final published
article or LinkedIn posts — the static PNG cover was used instead. Sora
has since been discontinued by OpenAI. The file is preserved here as a
project artifact but carries platform watermarks from a discontinued product.
Use `images/etch-ai-sketch-using-a-council-to-design-at-velocity.png` for
any publication or sharing purpose.

---

## The Name

ETCH-AI-SKETCH: a Council of AIs approach to diagramming at velocity. Named
after the Etch A Sketch toy — you describe what you want, it renders, and if
it's wrong you shake it and try again. Mermaid plus LLMs works the same way.
The cost of a wrong diagram collapsed to near zero. That's the whole point.

---

## The Council — Four Tiers

Not all participants operated under the same conditions.
Full taxonomy and disclosure in `council-brief.md`.

| Tier | Members |
|---|---|
| Core Five | ChatGPT, Claude, Copilot, Perplexity, Gemini |
| Exhibition | ChatGPT V2pro (Pro-tier reasoning — unmatched access) |
| Specialty Roles | Notion (archivist/synthesizer), Replit (late entry) |
| Attempted | Mermaid AI (excluded — context-blind) |

---

## The Rounds

### Round 1 — V1 Diagrams

The Core Five received the brief cold. No model saw another's output.
Notion and Replit also submitted V1 diagrams under their respective conditions.

**Round 1 Top Performer: Copilot V1**
The only model that configured Mermaid at the renderer level using YAML
front matter — operating on the theme engine itself, not just styling nodes.
[View on Mermaid.ai ↗](https://mermaid.ai/d/8fe5c9ae-c8ac-4754-98fd-268ae3ceeef7)

All V1 source files: `diagrams/v1/`

### Round 2 — V2 Diagrams

Each model saw the full set of V1 outputs and produced a revised diagram.
ChatGPT additionally produced a V2pro variant using Pro-tier reasoning access.

**Round 2 Top Performer: Claude V2**
Made the revision loops visible. Five swim lanes with dashed arrows threading
back through all of them. Stopped performing certainty. Started showing truth.
[View on Mermaid.ai ↗](https://mermaid.ai/d/2e9a4321-6302-44ca-82cc-e2020479fdf5)

All V2 source files: `diagrams/v2/`

---

## Using the Mermaid Files

Any `.mmd` file can be:

- Pasted into [mermaid.live](https://mermaid.live) to render immediately
- Pasted into any LLM as a starting point for iteration or adaptation
- Used as a reference for Mermaid syntax, styling, and structural patterns

The Copilot V1 file uses YAML front matter for renderer-level theme
configuration. Paste it into a Mermaid renderer that supports config
blocks, or strip the front matter if yours doesn't.
