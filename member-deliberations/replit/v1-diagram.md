# Replit V1 — Round 1 Submission (Archived)

**Model:** Replit Auto
**Member folder:** `member-deliberations/replit/`
**Round:** Round 1 / V1
**Conditions:** Late-entry specialty submission; exact session date is not recorded
**Contribution:** First builder-focused Mermaid draft preserved by the human editor
**Source:** This Markdown record; matching source/render are indexed in the [diagram manifest](../../etch-ai-sketch-vibe-diagramming-shootout/diagram-manifest.csv)
**Archive status:** Archived submission; not a public article or deployment
**Judge verdict:** The builder's eye — does it ship, does it render, does it survive the IDE?
**Tags:** Code-first thinking · Runtime honesty · Builder pragmatism

**Canonical status:** Late-entry specialty-role archive; not part of the
initial Core Five comparison. Editable source and rendered-artifact links are
tracked in the [diagram manifest](../../etch-ai-sketch-vibe-diagramming-shootout/diagram-manifest.csv).

---

## Diagram

```mermaid
%%{init: {"theme": "base", "themeVariables": {"primaryColor": "#111827", "primaryTextColor": "#e5e7eb", "primaryBorderColor": "#c46a2c", "lineColor": "#c46a2c", "fontFamily": "monospace", "fontSize": "14px"}}}%%
flowchart TD
  classDef prompt   fill:#1c3a34,stroke:#c46a2c,color:#e5e7eb
  classDef generate fill:#5b3a27,stroke:#e6a03c,color:#e5e7eb
  classDef gate     fill:#676a2c,stroke:#e6a03c,color:#e5e7eb
  classDef fix      fill:#2a2320,stroke:#676a2c,color:#6b7280
  classDef ship     fill:#0a1628,stroke:#e6a03c,color:#e6a03c

  A["Write the prompt\n(ROY investment begins)"]:::prompt
  B["LLM generates diagram code"]:::generate
  C{"Does it render?"}:::gate
  D["Debug syntax errors"]:::fix
  E{"Happy path only?"}:::gate
  F["Add the loops,\nthe dead ends,\nthe honest mess"]:::fix
  G{"ROY check:\ndid words earn the visual?"}:::gate
  H["Cut it or rewrite\nfrom prose"]:::fix
  I[/"Ship it"/]:::ship

  A --> B --> C
  C -- "parse error" --> D --> B
  C -- "renders" --> E
  E -- "yes, lying" --> F --> E
  E -- "honest" --> G
  G -- "no ROY" --> H --> A
  G -- "earns it" --> I
```

---

## Builder's Notes

The first diagram is always a liar because the first prompt assumes a happy path.

The gate that matters is not "does it render" — that's just syntax. The gate that matters is "does it show the loop where things break." Most diagrams skip that gate. Most prompts never ask for it.

ROY — Return on Your Words — is the ratio of visual insight gained to prompt investment made. A diagram that only shows the happy path has negative ROY. The words cost something. The visual earned nothing the prose didn't already say.

The fix is not a better prompt. The fix is an honest question: *what actually happens when this breaks?*

---

*Round 1 · ETCH-AI-SKETCH Vibe-Diagramming Shootout · OverKill Hill P³*
