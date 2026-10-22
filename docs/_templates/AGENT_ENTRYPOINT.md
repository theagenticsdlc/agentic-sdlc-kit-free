# Agent entrypoint template

Save this at the repository root as `CLAUDE.md` for Claude Code, or `AGENTS.md` for tools that read that name. Cursor reads `AGENTS.md` as well; if you also use `.cursor/rules/`, keep the rules there short and point them here.

This is the first thing an agent reads in every session, so keep it under about 150 lines. It should say where the truth lives and what is never allowed, and link out for everything else. Delete the guidance in angle brackets as you fill it in.

---

# <Project name> — agent entrypoint

<One or two sentences: what this product is and who uses it.>

## 1. Sources of truth

When two sources disagree, the higher one wins. Report the conflict; do not resolve it silently.

1. `<requirements document>` — what the product does
2. `<schema document or file>` — what the data looks like
3. `<feature catalogs>` — features, IDs, acceptance criteria
4. `<decision records>` — settled questions
5. `<architecture and standards documents>` — how code is structured and written
6. Existing code — how things are done today, where the documents are silent

## 2. Non-negotiables

Rules that hold in every change. Each one is short here and explained in the linked document.

- <A rule about correctness that must never break, e.g. how money or quantities are represented.>
- <A rule about access, e.g. every query is scoped to the caller's organisation.>
- <A rule about data, e.g. which records are append-only.>
- <A rule about boundaries, e.g. which layer may talk to the database.>
- <A rule about secrets and personal data in logs.>

## 3. Where things go

| Kind of code | Location | Notes |
| ------------ | -------- | ----- |
| <HTTP handlers> | `<path>` | <what they may and may not do> |
| <Business rules> | `<path>` | |
| <Persistence> | `<path>` | |
| <Background jobs> | `<path>` | |
| <Shared types> | `<path>` | |
| <UI features> | `<path>` | |

## 4. Commands

```bash
<install>
<run locally>
<run one test file>
<verify: lint, type-check, test and build — all must pass before a change is called done>
```

## 5. How work is delivered

- One feature ID per branch: `<branch naming pattern>`.
- Commits: `<type>(<feature-id>): <description>`.
- A change that alters behaviour updates the feature's specification in the same pull request.
- A contract change moves its types, client, server and test together.
- Do not commit or push unless asked.

## 6. How to work here

- Read the feature's specification and its dependencies before writing code.
- Match the nearest existing code of the same kind: its naming, structure and size.
- Implement what the specification names and nothing else. Report anything found outside the slice; do not fix it inline.
- Stop and ask when the specification is silent, two documents conflict, or a decision record is open.
- Report results as they are: what passed, what failed, what was skipped.
