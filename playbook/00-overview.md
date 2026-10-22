# The Agentic SDLC — Overview

A coding agent writes code quickly and has no stake in whether that code is right for your product. It does not know what was promised to a customer, which decision was already made last month, or what "done" means for the feature in front of it. Left alone, it fills each of those gaps with a plausible guess.

The Agentic SDLC is a delivery lifecycle that closes those gaps before the agent starts. It is nine stages. Each one produces something written down, and each one says which part is the agent's task and which part stays with a person.

## Three principles

**Control, not vibes.** What gets built, what is forbidden, and what counts as finished are written before any code is. The agent works inside those limits; it does not set them.

**Delegate tasks, not judgment.** An agent can implement a specified feature, write the tests for stated criteria, and check a change against a list of rules. It does not choose the product's behaviour, settle a trade-off, or approve its own work. Those are decisions, and decisions have an owner.

**Smallest possible slice.** One feature, one fix or one refactor per run. A small slice fits in the agent's attention, produces a change a person can actually review, and fails cheaply when it fails.

## The nine stages

### 1. Specify

Write what the product does before asking for any of it. Requirements come first, the data model is derived from them, and from both comes a catalog of features. Every feature has a stable ID, a short purpose, the features it depends on, and acceptance criteria written as checkable statements.

- **You produce:** requirements, schema, feature catalogs.
- **The agent's part:** drafting from your notes, checking the documents against each other for gaps.
- **Stays with you:** what the product does and what "done" means for each feature.

### 2. Decide

Some questions cannot be answered from the requirements: which of two designs, where a boundary sits, what to leave out of the first release. Each gets a numbered decision record with an owner. A feature that depends on an open decision is blocked until it is settled.

- **You produce:** decision records.
- **The agent's part:** laying out the options and what each one changes.
- **Stays with you:** the decision. An agent that meets an open decision stops and reports; it never picks.

### 3. Plan

Group features into milestones. Each milestone ends in an acceptance gate: a script of checks run against a deployed build. Issues are generated from the feature catalog, so the tracker always says what the documents say. A short working agreement covers who owns what, how much is in progress at once, and how to keep working when a dependency is not ready.

- **You produce:** milestone plan, working agreement, issues.
- **The agent's part:** generating issues from the catalog, keeping them in sync when the documents change.
- **Stays with you:** order, ownership and scope of each milestone.

### 4. Brief the agent

Give the agent one entrypoint file that it reads at the start of every session. It lists the sources of truth in order of precedence, the rules that are never broken, where each kind of code goes, and the commands that verify a change. Rules show the exact shape expected, not only the principle: an example of the pattern is followed more reliably than a sentence describing it.

- **You produce:** the entrypoint, rules, and reusable skills or commands.
- **The agent's part:** following them, and saying so when two of them conflict.
- **Stays with you:** what the rules are.

### 5. Build

Run one feature at a time, by its ID. The agent reads the feature's specification and its dependencies, reads the neighbouring code, implements only that slice, writes a test for each acceptance criterion, verifies, and updates the documents in the same change. Build one representative feature first and turn what you learn into rules; then run the rest in batches.

- **You produce:** the instruction to build a feature, and answers when the agent stops to ask.
- **The agent's part:** the implementation, tests, verification and a faithful report.
- **Stays with you:** anything the specification is silent on.

### 6. Commit and merge

Commits follow one format and name the feature they belong to. Each change goes up as one pull request, from a template that matches the kind of change, with the acceptance criteria listed so a reviewer can tick them.

- **You produce:** the go-ahead to commit and open the request.
- **The agent's part:** the commit message, the pull request description, the checklist.
- **Stays with you:** when a change is ready to be seen by others.

### 7. Review

Before a person reviews, several agents read the change in parallel, each with one job: rules and invariants, acceptance criteria, correctness, and drift between code and documents. Their findings are checked against the real files and collected into a private briefing.

The same pass runs twice, for two different readers. The author runs it on the branch before asking for review, and fixes or answers what it finds, so a reviewer's time is not spent on what an agent could have caught. The reviewer runs it on the pull request, and reads the briefing, then the change.

- **You produce:** the review.
- **The agent's part:** a first pass that tells you where to look and what to ask.
- **Stays with you:** which findings are right, every comment that reaches the author, and the approval.

### 8. Verify

Automated checks run in stages: commit format, lint and types, unit and contract tests, the flows that must never break, then build, deploy and smoke test. Load tests cover the paths where volume matters. At the end of a milestone, the acceptance script is run against the deployed build, and whatever fails becomes an issue in that same milestone.

- **You produce:** the acceptance run and its verdict.
- **The agent's part:** running the script, recording results, drafting the findings.
- **Stays with you:** whether the milestone closes.

### 9. Learn

When a mistake repeats, it becomes a rule, added before the next feature starts. After each milestone, write down what worked and what did not. Operational knowledge goes into runbooks and a dated logbook, where the next session, human or agent, will find it.

- **You produce:** the retrospective and the new rules.
- **The agent's part:** recording a lesson with its evidence, proposing the rule when it repeats, drafting the retrospective from the record, updating runbooks.
- **Stays with you:** which lessons become rules.

## How the stages connect

Every stage reads what the one before it wrote:

```text
requirements → schema → feature catalog → issue → branch → change → review → acceptance gate
                  ↑            ↑                               |
              decisions     rules  ←───────── lessons ─────────┘
```

A line of code traces back to a feature ID, the ID to a requirement. When behaviour changes, the document changes in the same pull request, so the documents and the code never disagree on the main branch.

## Starting on an existing codebase

You do not need all nine stages on the first day. Start with two:

1. **Stage 4.** Write the agent entrypoint for the repository as it is today.
2. **Stage 1, for one feature.** Write the next feature as a specification with an ID and acceptance criteria before asking an agent to build it.

Add a decision record the first time the agent would otherwise have guessed. Add the rest as the work calls for it.
