# First Diagram Field Guide

An interactive tutorial for the idea behind *The First Diagram Is Usually a
Liar*: use a cheap first sketch to surface assumptions, reveal the loopbacks,
and create a diagram brief another person can actually use.

The published article remains at
[overkillhill.com/writings/first-diagram-is-a-liar](https://overkillhill.com/writings/first-diagram-is-a-liar/).
This repository now pairs that evidence archive with a client-side learning
application. The app is prepared for GitHub Pages, but no live Pages release is
claimed until its workflow has run successfully.

## Run the guide

```bash
pnpm install --frozen-lockfile
pnpm dev
```

For a production-shaped GitHub Pages build:

```bash
VITE_BASE_PATH=/first-diagram-is-a-liar/ pnpm build
```

## What the application does

1. Captures the reader's plain-language explanation.
2. Makes them choose a hidden interruption: handoff, decision, or feedback.
3. Generates a loop-aware Mermaid starter rather than a happy-path-only flow.
4. Copies a reusable diagram brief or downloads the Mermaid source.

The guide is static and runs entirely in the browser. It does not call an API,
store reader input, or claim to generate a finished diagram automatically.

## Repository map

```text
src/                                      the React, TypeScript, Tailwind guide
etch-ai-sketch-vibe-diagramming-shootout/ public council evidence and sources
archive/source-captures/                  named historical imports and raw prompts
archive/editorial-cut/                    prepared article source, not a live release
archive/replit-workspace/                 superseded generic Replit API/preview scaffold
docs/                                     project and technology documentation
scripts/                                  narrow archive validation helpers
.agents/                                  repository-local agent skills and metadata
```

## Evidence boundary

The ETCH-AI-SKETCH archive contains the eight prompt sequence, Mermaid source,
rendered assets, the tiered council record, and release evidence. Round 1's top
performer was Copilot V1; Round 2's was Claude V2. Those are round-specific
results, not a universal model ranking. See
[`etch-ai-sketch-vibe-diagramming-shootout/canonical-story.md`](etch-ai-sketch-vibe-diagramming-shootout/canonical-story.md)
for the source-of-truth language.

## License

Mermaid source files are provided for reference, learning, and adaptation. The
article text, brand assets, and deck content are © OverKill Hill P³™.
