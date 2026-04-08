# The First Diagram Is Usually a Liar

**A public methodology archive for the article, the Council of AIs shootout,
and the prompts that started it all.**

---

## The Article

Live at:
**[overkillhill.com/writings/first-diagram-is-a-liar](https://overkillhill.com/writings/first-diagram-is-a-liar/)**

Also published on LinkedIn:
**[The First Diagram Is Usually a Liar — LinkedIn Pulse](https://www.linkedin.com/pulse/first-diagram-usually-liar-jamie-hill-lv3hc)**

---

## What This Project Is

A LinkedIn article became an experiment. The experiment became a methodology.
This repo is the receipt stack.

The article argues that the first diagram almost always lies — it shows the
happy path instead of the honest path. It introduces ROY (Return on Your Words)
as the real metric for visual communication, and documents what happened when
six AI models competed to diagram the same idea.

The prompts that drove the experiment were not polished. They were not
lab-grade. They were natural language, spoken at speed, and fired without
heavy pre-production. That's also part of the thesis: velocity has value.
Over-engineering a prompt too early creates the same friction the workflow
was built to escape.

This repo makes all of that visible.

---

## What's in Here

```
etch-ai-sketch-vibe-diagramming-shootout/
├── README.md               ← shootout context and methodology
├── council-brief.md        ← the governing brief sent to all council members
├── prompts/                ← all 8 prompts, lightly cleaned, with context
├── diagrams/               ← Mermaid source files, V1 and V2, all models
├── images/                 ← rendered PNGs used in the article and post
└── slides/                 ← the ETCH-AI-SKETCH deck (PDF)
```

---

## The Short Version of the Argument

A picture is not automatically worth 1,000 words.

The real question is ROY — Return on Your Words:

> Understanding produced ÷ Explanation invested

If it costs more to make the diagram than the diagram saves in comprehension,
the ROI is negative. If a rough prompt generates a diagram that replaces three
meetings worth of explanation, the ROI is extraordinary.

Mermaid plus LLMs collapsed the production cost of diagrams enough to make
them cheap to draft, cheap to revise, and cheap to throw away. That changes
the game.

---

## The Council

Six models. Same brief. Two rounds. One human orchestrator.

| Model | Role | Notes |
|---|---|---|
| ChatGPT | Core competitor | Strongest all-around scaffolding |
| Claude | Core competitor | Best narrative architecture, Round 2 winner |
| Copilot | Core competitor | Cleanest renderer-level config, Round 1 winner |
| Perplexity | Core competitor | Tightest ROY framing |
| Gemini | Core competitor | Free tier — capability ceiling noted |
| Notion | Archivist / synthesizer | Different role — not a voting peer |
| Replit | Late entry | Not part of initial apples-to-apples round |

---

## Round Winners

**Round 1 — Copilot V1**
Earned it by configuring Mermaid at the renderer level via YAML front matter —
not just styling nodes, but operating on the theme engine itself.

**Round 2 — Claude V2**
Earned it by making the revision loops visible. Solid arrows for forward motion.
Dashed arrows for the loops everyone always wants to hide. The diagram stopped
performing certainty and started showing honest recursion.

---

## Author

**Jamie Hill** — Lead Enterprise Architect, OverKill Hill P³™
[LinkedIn](https://www.linkedin.com/in/jamiehill75) ·
[OverKill Hill P³™](https://overkillhill.com) ·
[LinkedIn Company Page](https://www.linkedin.com/company/overkillhillp3)

---

## License

The Mermaid source files in `diagrams/` are provided for reference, learning,
and adaptation. The article text, brand assets, and slide deck content are
© OverKill Hill P³™. If you adapt the diagrams or methodology, attribution
is appreciated but not required.
