# ETCH-AI-SKETCH — Vibe Diagramming Shootout

**Six models. Same brief. Two rounds. One human orchestrator.**

---

## What This Folder Contains

Everything generated during the Council of AIs experiment that became the
article *The First Diagram Is Usually a Liar*.

```
├── council-brief.md        ← the governing brief, fairness notes, methodology
├── prompts/                ← the 8 prompts that drove the session
├── diagrams/               ← Mermaid source files for all V1 and V2 outputs
├── images/                 ← rendered PNGs used in the article and LinkedIn post
└── slides/                 ← the ETCH-AI-SKETCH presentation deck (PDF)
```

---

## The Name

ETCH-AI-SKETCH: a Council of AIs approach to diagramming at velocity. The name
references the Etch A Sketch toy — you describe what you want, it renders,
and if it's wrong you shake it and try again. Mermaid plus LLMs works the same
way. The cost of a wrong diagram collapsed to near zero. That's the whole point.

---

## The Brief

All five core council members received materially the same brief.
See `council-brief.md` for the full text, the fairness disclosure, and the
exact deliverables expected from each model.

---

## The Rounds

### Round 1 — V1 Diagrams

Each model received the brief cold and produced an initial Mermaid diagram
depicting the ideation process behind a LinkedIn post about visual ROI.

**Winner: Copilot V1**
The only model that configured Mermaid at the renderer level using YAML
front matter — operating on the theme engine itself, not just styling nodes.

All V1 source files are in `diagrams/v1/`.

### Round 2 — V2 Diagrams

Each model saw the full set of V1 outputs, evaluated the field, and produced
a revised diagram that improved on its own first draft.

**Winner: Claude V2**
Made the revision loops visible. Five swim lanes. Dashed arrows for the
loopbacks everyone always wants to hide. Stopped performing certainty
and started showing honest recursion.

All V2 source files are in `diagrams/v2/`.

---

## Using the Mermaid Files

Any `.mermaid` file in this repo can be:

- Pasted directly into [mermaid.live](https://mermaid.live) to render
- Pasted into any LLM prompt to request iteration or adaptation
- Used as a starting point for your own process diagrams

The Copilot V1 file uses YAML front matter for theme configuration —
paste it into a Mermaid renderer that supports configuration blocks.
The Claude V2 file uses the OKH dark theme token set.
