# ETCH-AI-SKETCH — Vibe Diagramming Shootout

**Seven models. Same brief. Two rounds. One human orchestrator.**

---

## What This Folder Contains

Everything generated during the Council of AIs experiment that became the
article *The First Diagram Is Usually a Liar*.

```
├── council-brief.md        ← the governing brief, fairness notes, methodology
├── prompts/                ← the 8 prompts that drove the session
├── diagrams/               ← Mermaid source files (.mmd) for all V1 and V2 outputs
├── images/                 ← rendered PNGs (full-res and lo-res) for all diagrams
├── slides/                 ← the ETCH-AI-SKETCH presentation deck
└── etch-ai-sketch-using-a-council-to-design-at-velocity-when-diagrams-stopped-being-drawing.mp4
    ← original Sora-generated video; see note below
```

---

## The MP4 File

The video in this folder was generated using Sora during the project.
It was not used in the final published article or LinkedIn posts — the
static PNG cover image was used instead. Sora has since been discontinued
by OpenAI. The file is preserved here as a project artifact but carries
platform watermarks from a discontinued product. Use the PNG from
`images/etch-ai-sketch-using-a-council-to-design-at-velocity.png` for
any publication or sharing purpose.

---

## The Name

ETCH-AI-SKETCH: a Council of AIs approach to diagramming at velocity. The name
references the Etch A Sketch toy — you describe what you want, it renders,
and if it's wrong you shake it and try again. Mermaid plus LLMs works the same
way. The cost of a wrong diagram collapsed to near zero. That's the whole point.

---

## The Rounds

### Round 1 — V1 Diagrams

Seven models received the brief and produced an initial Mermaid diagram
depicting the ideation process behind a LinkedIn post about visual ROI.
Models did not see each other's work at this stage.

**Round 1 Winner: Copilot V1**
The only model that configured Mermaid at the renderer level using YAML
front matter — operating on the theme engine itself, not just styling nodes.
[View on Mermaid.ai ↗](https://mermaid.ai/d/8fe5c9ae-c8ac-4754-98fd-268ae3ceeef7)

All V1 source files: `diagrams/v1/`

### Round 2 — V2 Diagrams

Each model saw the full set of V1 outputs, evaluated the field, and produced
a revised diagram that improved on its own first draft. ChatGPT additionally
produced a V2pro variant.

**Round 2 Winner: Claude V2**
Made the revision loops visible. Five swim lanes. Dashed arrows for the
loopbacks everyone always wants to hide. Stopped performing certainty
and started showing honest recursion.
[View on Mermaid.ai ↗](https://mermaid.ai/d/2e9a4321-6302-44ca-82cc-e2020479fdf5)

All V2 source files: `diagrams/v2/`

---

## Using the Mermaid Files

Any `.mmd` file in this repo can be:

- Pasted into [mermaid.live](https://mermaid.live) to render immediately
- Pasted into any LLM as a starting point for iteration or adaptation
- Used as a reference for Mermaid syntax and styling patterns

The Copilot V1 file uses YAML front matter for renderer-level theme
configuration. Paste it into a Mermaid renderer that supports config
blocks, or strip the front matter if your renderer doesn't.
