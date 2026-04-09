<!-- SAVE AS: 01-the-seed.md -->
# Prompt 01 — The Seed

**Stage:** ROI framing — finding the governing idea
**Sent to:** All five core council members
**Session position:** First — nothing loaded yet

---

## Strategic Note

The session did not start with "I want to write a LinkedIn post about Mermaid."
It started with a business school frame about return on investment — deliberately
indirect. Getting the model thinking in investment terms before pivoting to visual
communication was a strategic choice, not an accident. The real destination was
already in view. The approach was oblique.

The ROI vocabulary introduced here — "return on investment," "positive investment
of time," "ratio of value to cost" — propagated forward through every subsequent
prompt without needing to be re-established. That's sequential context doing its
job before the project is even named.

---

## The Prompt

```
Thinking like a professor of business and investment, what is a realistic
but attractive return on investment?

There is an old adage that a picture is worth 1,000 words. If a diagram
can be generated from words, what would be a good ROY — return on your
words? If it takes more words to generate the picture than the picture
returns in meaning, understanding, or compression, the investment may be
poor. But if a picture created from words lands with more meaning than the
words it took to create it, that seems valuable.

What ratio of words to meaning, understanding, and structure makes this a
good investment?
```

---

## What Happened Next

The models responded with business-style ROI analysis that grounded the
visual communication question in investment thinking. The ROY acronym
— Return on Your Words — was coined here and carried through the entire
session. It became the article's central metric.


---
---


<!-- SAVE AS: 02-the-meta-turn.md -->
# Prompt 02 — The Meta Turn

**Stage:** Project revealed — the work becomes self-demonstrating
**Sent to:** All five core council members
**Session position:** Second — ROI frame already loaded

---

## Strategic Note

Prompt 01 was the frame. Prompt 02 is where the actual project appears.
No reset. No "ignore everything above." The ROI frame was already loaded
and Prompt 02 built on it directly.

The recursive idea — using the post's own creation process as the diagram
subject — was stated here as a deliberate intention, not discovered later.
The strategy was present from the beginning. The model didn't need to be
told this was clever. It was given a clear structural goal and it
understood the recursive element immediately from context.

---

## The Prompt

```
A little meta, and quite recursive — very OverKill Hill and on brand.

I'm considering a LinkedIn post about the visual value of pictures and
understanding — specifically the value of Mermaid diagrams, Mermaid tooling,
and the ability to create Mermaid diagrams with most LLMs.

The post is a 3,000-character maximum. In that space, I want to depict the
steps of ideating and creating the post itself as a Mermaid diagram. So I'm
talking about the value of visual information sharing — using words to generate
pictures — and the picture I'm using as the example is the process of writing
the post.

What are the steps in creating a LinkedIn post about visual value, visual ROI,
and the way a picture can sometimes be worth less — or much more — than a
thousand words?
```

---

## What Happened Next

The models produced their first draft flowcharts. Most came back as clean,
linear, sequential paths — which is exactly what Prompt 03 was written to
correct.


---
---


<!-- SAVE AS: 03-the-happy-path-lie.md -->
# Prompt 03 — The Happy-Path Lie

**Stage:** Structural correction — forcing honesty into the first draft
**Sent to:** All five core council members
**Session position:** Third — immediately after seeing V1 outputs

---

## Strategic Note

The shortest prompt in the sequence and arguably the most important.

The model produced what most models produce on a first pass: a clean,
linear, happy-path diagram. Prompt 03 is the correction — not because
the model failed, but because the first draft revealed what was missing.

This is iteration at its most efficient. The first diagram was a useful
wrong answer. It showed exactly the problem the article was arguing
against: a diagram that performs certainty rather than depicts reality.
One short paragraph fixed it. No template. No framework. Just: that's
wrong, here's why, here's what right looks like.

---

## The Prompt

```
Ideation, thought, and writing are not perfectly linear. The initial diagram
shows a clean, linear happy path from start to finish — which is exactly the
problem the post is arguing against.

Generating a diagram from words involves revision. Revision involves forks
and loopbacks — a non-happy path. The diagram should reflect that reality:
not a straight line, but an honest depiction of the messy process it's
describing.

Add a small amount of visual flair: different colors on the nodes, styling
on the arrows, differentiated coloration to highlight and low-light items,
and a very conservative use of emoji — just enough to add character without
overdoing it.
```

---

## What Happened Next

The V1 diagrams produced in response became the Round 1 competition entries.
Copilot won Round 1 by doing something no other model did: configuring the
Mermaid theme engine itself via YAML front matter.


---
---


<!-- SAVE AS: 04-voice-and-brand-lock-in.md -->
# Prompt 04 — Voice and Brand Lock-In

**Stage:** Tone calibration — style through example, not description
**Sent to:** All five core council members
**Session position:** Fourth — structure established, voice needed matching

---

## Strategic Note

Rather than describing the desired voice, the brief provided examples of it.
A LinkedIn article series was pasted in as raw context — not summarized, not
formatted. Just dropped in as: this is the voice, learn from it.

This is the most efficient form of style transfer in natural-language
prompting. Description approximates. Example demonstrates. When you
describe a voice, the model interpolates. When you show a voice, the
model matches. The reference material wasn't cleaned before pasting.
The rough edges and real cadence were part of the signal.

---

## The Prompt

```
Create a tone-matched LinkedIn post with the same professional snarkiness
and swagger — good hook, click-worthy, strong CTA, reinforcing my brand
while driving views to the company LinkedIn page and ecosystem sites.

For tone and style reference, here is a sample of my recent LinkedIn style:
[LinkedIn post link]

And the text of a recent article:
[article link]

[Reference material: 3 Years with ChatGPT — 8-Part Series, pasted in full]
```

---

## What Happened Next

Each model produced a LinkedIn post in its interpretation of the voice.
These five outputs became the pool for Prompt 05's comparative judging round.
The variation between them — despite identical reference material — is what
makes the council approach valuable: same input, different instincts.


---
---


<!-- SAVE AS: 05-the-council-becomes-formal.md -->
# Prompt 05 — The Council Becomes Formal

**Stage:** Comparative judging — single-model generation becomes orchestration
**Sent to:** All five core council members
**Session position:** Fifth — each model had produced a post and a diagram

---

## Strategic Note

The leanest prompt relative to what it asked the model to do. One sentence
ran a competitive evaluation. The criteria — "most OverKill Hill and
LinkedIn-ready" — were compressed into six words that only meant something
because four prompts had already established the context.

This is sequential context doing its job. "Most OverKill Hill" carried full
brand meaning because it was loaded in Prompt 04. "LinkedIn-ready" carried
full format meaning because it was established in Prompt 02. Neither needed
defining. This is also where the session shifted from single-model generation
to council orchestration — each model was now evaluating a competitive field,
not just producing output.

---

## The Prompt

```
Now judge your results against your peers — select the best post that is most
OverKill Hill and LinkedIn-ready. The final post will have two or three embedded
images: one or more of the Mermaid diagrams, and one of the diagram's code.
```

---

## What Happened Next

Each model evaluated the field and selected a top performer. The assessments
varied — expected — but the comparative reasoning was genuinely useful for
understanding what each model prioritized. Copilot prioritized structural
discipline. Claude prioritized narrative honesty. ChatGPT prioritized
audience reach. Perplexity prioritized conceptual precision.


---
---


<!-- SAVE AS: 06-the-hybrid-request.md -->
# Prompt 06 — The Hybrid Request

**Stage:** Synthesis — stop drafting, start building
**Sent to:** All five core council members
**Session position:** Sixth — judging round complete

---

## Strategic Note

Every preceding prompt was a draft. This one is the instruction to stop
drafting and build. Two different registers operate simultaneously:
creative direction ("best-of hybridization," "every useful feature from
Mermaid's toolbox") and production constraints (character limit, links,
image plan). Both were necessary. Neither crowded out the other.
That's a well-formed brief — it tells the model what to build and what
it has to work within.

---

## The Prompt

```
Using the elements from all provided versions, create a best-of hybridization
post. Add new elements based on what you've learned from your peers and from me.

Then create a Mermaid diagram to accompany it — pulling every useful feature
from Mermaid's toolbox.

Constraints: post can't exceed 3,000 characters, should contain links, I have
a Mermaid account and can share a link to the final diagram, and I plan to use
images of both the code and the rendered diagram to maximize character usage
and minimize rendering issues.
```

---

## What Happened Next

The hybrid outputs became the material for the final published LinkedIn post.
The Claude hybrid provided the structural foundation. ChatGPT's hook language
was incorporated. Perplexity's ROY framing tightened the thesis. Copilot's
technical Mermaid approach influenced the final diagram configuration.


---
---


<!-- SAVE AS: 07-the-comment-origin-story.md -->
# Prompt 07 — The Comment (Origin Story)

**Stage:** Personal addendum — raw autobiographical input, model does editorial work
**Sent to:** Primary model only
**Session position:** Seventh — post finalized, comment needed

---

## Strategic Note

The cleanest example in the sequence of treating the model as a writing
partner rather than a content generator. The content is entirely the
author's. The model's job was editorial, not creative: take a stream-of-
consciousness personal story and shape it into a LinkedIn comment that
matches the post's voice.

The input contained live-dictation markers. The model's task was to clean
these without sanitizing them. The rough texture needed to survive.
Style calibration through example plus editorial instruction is one of the
highest-ROY prompting patterns available: you supply the story, the model
makes it usable.

---

## The Prompt

```
Now I want to craft my first comment to my own post.

I began drawing pictures on a computer using AutoCAD 10 around 1991. Since
then I've used numerous tools to put an idea into visual form — house plans,
network diagrams, process flows, mind maps, org charts, UML, crow's-foot
database schemas. The list goes on.

About eight months ago, ChatGPT coughed up a random visual for a simple
process I was describing. I asked what the hell it was. It replied: a
Mermaid diagram.

So I asked Copilot to generate one too, then discovered that Microsoft Loop
(Copilot Pages) could render Mermaid natively.

I can't begin to count the hours I've stared at the Visio UI thinking: how
in the hell am I going to draw this?

Now I can just throw spaghetti against the wall at high velocity and
minimal drag.
```

---

## What Happened Next

The model produced the first comment used on the LinkedIn post. The
AutoCAD 10 origin story, the Visio framing, and the spaghetti metaphor
all survived into the published version.


---
---


<!-- SAVE AS: 08-the-diagram-competition.md -->
# Prompt 08 — The Diagram Competition

**Stage:** Art contest — council orchestration becomes competitive performance
**Sent to:** All five core council members
**Session position:** Eighth and final

---

## Strategic Note

"Art contest" and "art of the possible (pun intended)" reframe competitive
evaluation as creative performance — which changes how the model approaches
both the judgment criteria and the V2 generation task.

The pun only lands here because of everything that came before it. Seven
prior prompts had established that this project was about showcasing what
Mermaid could do when pushed. The phrase didn't need explaining. It just
needed deploying.

This is also the prompt that produced the two round top performers. The
instruction to "learn from your self-evaluation and your peers" is what
generated the honest self-critique that made the V2 diagrams better than
the V1 diagrams. Models improve faster when they're shown their peers'
work. That's the council methodology in one sentence.

---

## The Prompt

```
This is the final competition — an art contest where you judge your design
against your peers: ChatGPT, Claude, Perplexity, Copilot, and Notion. The
plan is to create separate comments on my LinkedIn post with links to the
Mermaid-hosted results from each model.

First: identify the top performer — the diagram that best depicts the theme
and makes the most of Mermaid's current feature set. Showcase the art of
the possible (pun intended).

Second: learning from your own self-evaluation and your peers' work, create
a V2 that raises the bar for what a Mermaid diagram can do for a LinkedIn
audience.
```

---

## What Happened Next

**Round 1 top performer: Copilot V1** — renderer-level YAML configuration,
the only V1 submission to operate on the Mermaid theme engine itself.

**Round 2 top performer: Claude V2** — honest recursion, visible revision
loops, five swim lanes depicting how ideation actually works.

All Mermaid source files for V1 and V2 submissions are in `../diagrams/`.
