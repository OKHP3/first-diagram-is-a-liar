---
name: Merge marker validation
description: Why merge ancestry and a clean working tree are insufficient proof of a correctly resolved reconciliation.
---

Treat a merge as unresolved if its committed tree still contains literal
conflict markers, even when it has two parents and Git reports a clean working
tree.

**Why:** An automated or mistaken resolution can stage and commit
`<<<<<<<`, `=======`, and `>>>>>>>` as ordinary file content. Git then considers
the merge complete although the source remains broken or ambiguous.

**How to apply:** Before pushing a reconciliation branch, scan the full tracked
tree for conflict markers, run `git diff --check`, and validate both intended
feature sets in addition to checking merge ancestry.