# Council Brief — ETCH-AI-SKETCH Diagramming Shootout

**The governing brief, fairness disclosure, and deliverable expectations
for the Council of AIs experiment.**

---

## The Governing Brief

The following brief was the core instruction set delivered to all five
primary council members across the session. It evolved across eight
prompts — this document captures the essential deliverables that applied
to all participants.

---

### Core Deliverables (all models)

1. **A 3-part thesis** on the visual value of diagrams versus text — specifically
   addressing the ROY (Return on Your Words) framework: what makes a picture
   worth more or less than the words it took to generate.

2. **A Mermaid diagram (V1)** depicting the ideation process behind writing a
   LinkedIn post about visual ROI and Mermaid diagramming. Critically: the
   diagram must reflect the non-linear, non-happy-path reality of ideation —
   including forks, loopbacks, revision cycles, and honest dead ends.

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

### The ROY Framework (context for all deliverables)

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

### Voice and Brand Context

The post must feel like it belongs to this brand ecosystem:

- **OverKill Hill P³™** — Precision · Protocol · Promptcraft
- **Glee-fully Personalizable Tools™**
- **AskJamie™ — Friendly AI Helpdesk**

Voice reference: professional snarkiness with practical builder swagger.
Not academic. Not apologetic. Not over-hedged.

---

## Fairness Disclosure

### Core Council Members (apples-to-apples round)

All five received materially the same brief, the same context, and the same
deliverable expectations:

| Model | Tier | Notes |
|---|---|---|
| ChatGPT | Paid | Strongest all-around scaffolding and synthesis |
| Claude | Paid | Best narrative architecture, Round 2 winner |
| Copilot | Paid (M365) | Cleanest renderer-level Mermaid config, Round 1 winner |
| Perplexity | Paid | Tightest ROY framing |
| Gemini | **Free tier** | Only member with a capability ceiling imposed by tooling cost |

**Gemini ran on the free tier.** This is the only council member whose
ceiling was set by the tool's pricing tier rather than by the brief itself.
This is disclosed here and in the article. It is not hidden.

### Non-Competing Participants

**Notion** acted as synthesizer, archivist, and court reporter rather than
a voting peer. Notion received a variation of the brief oriented toward
organizing and comparing outputs, not competing as an equal. Notion V1
was included in the diagram gallery because its output was genuinely
interesting — described by evaluators as "quietly effective."

**Replit** entered the session late and played a separate role entirely.
It was not part of the initial apples-to-apples round and its outputs
are not included in the V1 or V2 competition results.

---

## The Prompting Philosophy

The prompts that drove this session were not polished before sending.
They were not lab-grade. They were natural language, spoken at speed,
lightly cleaned for readability only.

This was intentional.

Over-engineering a prompt before seeing the first output creates the same
friction this workflow was built to escape. The cost of a wrong prompt
is low when iteration is fast. The cost of a wrong Visio diagram is high
when every element requires manual drag-and-drop.

The full prompt sequence — all 8 prompts, lightly cleaned with context
notes — is in `prompts/`.

---

## Round Results

### Round 1 Winner: Copilot V1

Copilot earned Round 1 by operating at the renderer level. The YAML front
matter block configured the Mermaid theme engine itself — not just styling
individual nodes, but setting the foundational color and typography tokens
that all other styling inherited from. No other V1 submission did this.

[View Copilot V1 on Mermaid.ai](https://mermaid.ai/d/8fe5c9ae-c8ac-4754-98fd-268ae3ceeef7) ·
[View source](diagrams/v1/copilot-v1.mermaid)

### Round 2 Winner: Claude V2

Claude earned Round 2 by making the revision loops visible and honest.
Five swim lanes — Ignition, Strategy, Craft, Proof, Ship — with dashed
arrows threading back through all of them. The diagram stopped performing
certainty and started showing how ideation actually works. Solid arrows
for forward motion. Dashed arrows for the loopbacks everyone always wants
to hide.

[View Claude V2 on Mermaid.ai](https://mermaid.ai/d/2e9a4321-6302-44ca-82cc-e2020479fdf5) ·
[View source](diagrams/v2/claude-v2.mermaid)

### Notable Mention: Notion V1

Notion's horizontal three-lane diagram — Prose, Visual, Ship — was the
quietest submission and among the most usable. Clean lanes, minimal
decoration, no overreach. Sometimes the most useful diagram is the one
that gets out of its own way.

[View source](diagrams/v1/notion-v1.mermaid)
