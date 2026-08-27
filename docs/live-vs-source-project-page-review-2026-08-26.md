# Live versus source review: OverKill Hill project pages

Reviewed: 2026-08-26
Reviewer: Codex
Purpose: establish the presentation baseline for the new First Diagram Is Usually a Liar project page.

## Method

The deployed HTML was retrieved from each requested `overkillhill.com` route.
The corresponding `main` source was retrieved from the requested GitHub
repository path through its raw content endpoint. Each pair was compared as
bytes and then checked for title, H1, H2 sequence, and link count.

This is a public presentation review. It does not prove the source repository's
runtime behavior, and it does not treat the two reference projects as authorities
for the First Diagram product contract.

## Results

| Project | Deployed response | Source response | SHA-256 | Result |
| --- | ---: | ---: | --- | --- |
| Glee-fully Chai Chasers | 47,956 bytes | 47,956 bytes | `11a544994245a5f0765e1a9430f78e493ff8ea22f237164fc86a9b8aac43d740` | Byte-identical |
| Abrahamic Reference Engine | 47,677 bytes | 47,677 bytes | `2303319c255b78b9558b083cbb6c65c43209bec23c0dbdc19fa727795b94247c` | Byte-identical |

Both pairs also matched on the extracted title, single H1, H2 sequence, and
link count. No deployed-versus-source content drift was identified in the two
requested pages at retrieval time.

## Shared information architecture observed

Both pages use the same project-page contract:

1. Canonical and social metadata.
2. Breadcrumb, tags, title, thesis line, and primary calls to action.
3. A problem statement grounded in a real product or engineering risk.
4. A live-demo section with an external-app disclosure when an iframe is used.
5. A concrete “What It Does” section.
6. A principles or governance section.
7. A “What This Is Not” boundary.
8. Origin or history.
9. Project information, related links, and on-page navigation.

## Glee-fully Chai Chasers baseline

The deployed page presents a free cascading-reels birthday game and a case
study in multi-agent orchestration. Its trust boundary is explicit: browser-only,
fictional currency, no purchases, no ads, and no accounts. It makes the
canonical spec, decision log, simulation oracle, bounded roles, and validation
loop visible. It also separates the hosted project page from the external live
demo.

The useful pattern for this project is not the game content. It is the way the
page connects product purpose, governance artifacts, implementation receipts,
and honest non-goals.

## Abrahamic Reference Engine baseline

The deployed page presents a neutral, citation-first reference engine. Its trust
boundary is explicit: browser-only, no login, no preaching, and no ranking. It
explains four modes, agent skills, scope boundaries, principles, source
attribution, and what the engine is not. Its live demo is labelled as an
external application outside the site trust boundary.

The useful pattern for this project is the explicit method boundary. A reader
can understand what is included, why it is included, and what the product does
not claim to settle.

## Implication for the First Diagram page

The new page at `/projects/first-diagram-is-a-liar/` follows the same contract
but keeps the project's special relationship intact:

- The public Writing is the narrative and primary reading path.
- The React/Vite application is the practice surface.
- The repository archive is the evidence stack.
- The page does not duplicate the entire article.
- The page does not link private Notion locators.
- The tutorial GitHub Pages route is described as intended until an external
  smoke test proves it live.

The page therefore borrows the proven information architecture without forcing
a writing-led experiment into the shape of a hosted SaaS product or a live
embedded tool.

## Open verification boundary

The reference page pairs were byte-identical at retrieval time. The new First
Diagram project page still requires a post-push live smoke test at:

`https://overkillhill.com/projects/first-diagram-is-a-liar/`

The tutorial route remains a separate deployment boundary:

`https://okhp3.github.io/first-diagram-is-a-liar/`

The OverKill Hill page being live must not be used as evidence that the tutorial
route is live.
