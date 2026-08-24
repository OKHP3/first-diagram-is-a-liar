---
name: Mermaid delivery health
description: Reliable verification policy for public Mermaid diagrams and dependency checks.
---

Public Mermaid diagrams should always ship with local source and static visual
fallbacks; remote renderers and hosted referral endpoints are enhancement paths,
not prerequisites for readable content.

**Why:** Renderer imports, CSP policies, and automated probes can fail even when
the page is otherwise healthy; a blank diagram damages the article's core claim.

**How to apply:** Check local source/fallback pairs and canonical destinations
before release. Treat provider `403` responses as reachable-but-protected only
when the URL itself resolves and the page has a local fallback. A hosted
Mermaid route can load its branded shell and title while leaving the canvas
blank; record that as render-unverified rather than calling the route healthy,
and keep the local fallback authoritative.