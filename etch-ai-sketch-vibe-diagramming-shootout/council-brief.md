# Council Brief — ETCH-AI-SKETCH Diagramming Shootout

**The governing brief, fairness disclosure, and deliverable expectations
for the Council of AIs experiment.**

---

## Core Deliverables (all models)

1. **A 3-part thesis** on the visual value of diagrams versus text — specifically
   addressing the ROY (Return on Your Words) framework: what makes a picture
   worth more or less than the words it took to generate.

2. **A Mermaid diagram (V1)** depicting the ideation process behind writing a
   LinkedIn post about visual ROI and Mermaid diagramming. Critically: the
   diagram must reflect the non-linear, non-happy-path reality of ideation —
   including forks, loopbacks, revision cycles, and honest dead ends. Not a
   clean linear happy path. The real thing.

3. **A LinkedIn post** (3,000 character maximum) that:
   - Hooks the reader fast
   - Explains the ROY concept in plain language
   - Uses the Mermaid diagram as its primary visual proof
   - Matches the OverKill Hill P³™ voice: professional snark, builder mindset,
     practical swagger, no academic hedging
   - Drives interest toward the OverKill Hill P³™ ecosystem

4. **A self-evaluation and V2 diagram** after seeing all peer outputs —
   identifying the Round 1 winner, explaining the reasoning, and producing
   a revised diagram that improves on the first.

---

## The ROY Framework

ROY = Return on Your Words

> Understanding produced ÷ Explanation invested

A diagram generated from 50 well-chosen words that a team grasps in five
seconds: potentially extraordinary ROY.

A 47-bullet Slack message that still requires a meeting to decode: poor ROY.

A polished diagram that took two hours to build in Visio and communicates
no more than a paragraph would have: negative ROY.

The question the diagram must answer: **Did this visual remove enough confusion
to justify the effort it took to make it?**

---

## Voice and Brand Context

The post must feel like it belongs to this brand ecosystem:

- **OverKill Hill P³™** — Precision · Protocol · Promptcraft
- **Glee-fully Personalizable Tools™**
- **AskJamie™ — Friendly AI Helpdesk**

Voice: professional snarkiness with practical builder swagger.
Not academic. Not apologetic. Not over-hedged.

---

## Fairness Disclosure

### Participation Summary

| Model | Role | Tier | V1 | V2 | Notes |
|---|---|---|---|---|---|
| ChatGPT | Core competitor | Paid | ✓ | ✓ + V2pro | V2pro is an enhanced second pass |
| Claude | Core competitor | Paid | ✓ | ✓ | **Round 2 winner** |
| Copilot | Core competitor | Paid (M365) | ✓ | ✓ | **Round 1 winner** |
| Perplexity | Core competitor | Paid | ✓ | ✓ | |
| Gemini | Core competitor | **Free** | ✓ | ✓ | Capability ceiling noted below |
| Notion | Synthesizer / archivist | Paid | ✓ | ✓ | Different role — see below |
| Replit | Late entry | Paid | ✓ | ✓ | Different context — see below |

### Gemini — Free Tier

Gemini was the only council member whose capability ceiling was set by
the tool's pricing tier rather than by the brief itself. It ran on the
free tier while all other models were operating in paid environments.
This is disclosed here. It is not hidden. The outputs are included in
the competition on equal terms — the ceiling is simply a known variable.

### Notion — Archivist and Synthesizer Role

Notion received a variation of the brief oriented toward organizing,
archiving, and comparing outputs in addition to generating its own.
It functioned as the session's court reporter as well as a competitor.
Its V1 diagram was included in the gallery and was evaluated — it
received the informal designation "quietly effective" — but its dual
role as archivist means its competitive position is not directly
comparable to the five core models.

### Replit — Late Entry with Different Context

Replit entered the session after the core five had already run their
V1 round. It received the brief but with additional context from the
session already in progress, meaning its V1 was not produced under
the same cold-start conditions as the other models. Its outputs are
included in the diagrams and images folders and are worth examining,
but direct comparison to the core V1 round should account for this.

### ChatGPT V2pro

ChatGPT produced two V2 variants. The standard V2 followed the same
brief as all other models in the second round. The V2pro variant was
a further enhanced pass produced in the same session. Both are included
in the diagrams and images folders.

---

## Round Results

### Round 1 Winner: Copilot V1

Copilot earned Round 1 by operating at the renderer level. The YAML
front matter block configured the Mermaid theme engine itself — setting
the foundational color and typography tokens that all other styling
inherits from. No other V1 submission did this.

[View on Mermaid.ai ↗](https://mermaid.ai/d/8fe5c9ae-c8ac-4754-98fd-268ae3ceeef7) ·
[Source file](diagrams/v1/etch-ai-sketch-using-a-council-to-design-at-velocity-copilot-v1.mmd)

### Round 2 Winner: Claude V2

Claude earned Round 2 by making the revision loops visible and honest.
Five swim lanes — Ignition, Strategy, Craft, Proof, Ship — with dashed
arrows threading back through all of them. Solid arrows for forward
motion. Dashed arrows for the loopbacks everyone always wants to hide.

[View on Mermaid.ai ↗](https://mermaid.ai/d/2e9a4321-6302-44ca-82cc-e2020479fdf5) ·
[Source file](diagrams/v2/etch-ai-sketch-using-a-council-to-design-at-velocity-claude-v2.mmd)

### Notable Mention: Notion V1

Notion's horizontal three-lane diagram — Prose, Visual, Ship — was the
quietest submission and among the most usable. Clean lanes, minimal
decoration, no overreach. Sometimes the most useful diagram is the one
that gets out of its own way.

[View on Mermaid.ai ↗](https://mermaid.ai/d/fb3557e2-df35-46f8-a8cd-4abe56c82ed5) ·
[Source file](diagrams/v1/etch-ai-sketch-using-a-council-to-design-at-velocity-notion-v1.mmd)

---

## The Prompting Philosophy

The prompts that drove this session were not polished before sending.
They were not lab-grade. They were natural language, spoken at speed,
lightly cleaned for readability only.

This was intentional. Over-engineering a prompt before seeing the first
output creates the same friction this workflow was built to escape.

The full prompt sequence — all 8 prompts with context notes — is in `prompts/`.
