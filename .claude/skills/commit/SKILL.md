---
name: commit
description: Commit the current work as one or more conventional commits scoped to a feature ID. Use when the user asks to commit.
argument-hint: [FEATURE-ID] [extra context]
---

# Commit

Turn the working tree into clean commits. Never push, and never commit unless the user asked for it in this conversation.

## 1. Look before staging

Run `git status` and `git diff` (plus `git diff --staged` if anything is already staged). Read the changes; do not rely on memory of what was edited.

Stop and tell the user, without committing, if you find:

- a secret, key, token or `.env` file
- generated output, build artefacts or dependency folders
- debugging leftovers or commented-out code
- changes that have nothing to do with the rest

## 2. Decide the split

One commit is one logical change. If the tree holds two unrelated changes, make two commits. Keep a contract change — types, client, server and its test — together in one commit so no commit leaves the build broken.

## 3. Find the scope

The scope is the feature ID in lowercase. Take it from the argument, or from the branch name (`feature/<id>-<slug>`). If there is no ID, use the area of the codebase. Do not invent an ID.

## 4. Write the message

```text
<type>(<scope>): <description>

<body, only when the reason is not obvious from the diff>
```

- **Type:** `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `perf`, `build` or `ci`.
- **Description:** imperative mood, lowercase start, no full stop, under about 70 characters. Say what changes for the system, not which files were touched.
- **Body:** why the change was made, and anything a reviewer must know. Wrap at about 72 characters.
- **Breaking change:** add `!` after the scope and a `BREAKING CHANGE:` footer.

## 5. Stage and commit

Stage files by name. Do not use `git add -A` or `git add .`. Commit, and if a hook rejects the commit, fix the cause and commit again; do not bypass hooks.

## 6. Report

Show the commit hashes and subjects, and list anything left uncommitted and why.
