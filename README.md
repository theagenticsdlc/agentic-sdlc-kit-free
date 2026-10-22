# Agentic SDLC Kit — Free edition

The starting set: the method in overview, the three documents every agent-built feature needs, and the base agent files for Claude Code and Cursor.

## What is here

| Path | Use it for |
| --- | --- |
| `playbook/00-overview.md` | The nine stages of the lifecycle and what each one is for |
| `docs/_templates/FEATURE_SPEC.md` | Writing a feature with a stable ID and acceptance criteria before an agent touches it |
| `docs/_templates/DECISION.md` | Recording a decision so the agent never has to guess one |
| `docs/_templates/AGENT_ENTRYPOINT.md` | The file your agent reads first: sources of truth, non-negotiables, where things go |
| `.claude/skills/commit/` | `/commit` in Claude Code |
| `.cursor/commands/commit.md` | `/commit` in Cursor |
| `.cursor/rules/base.mdc` | Always-on working rules for Cursor |
| `commitlint.config.cjs` | Rejects commits that do not follow the format |

## Getting started

1. Copy these files into the root of your repository.
2. Copy `docs/_templates/AGENT_ENTRYPOINT.md` to `AGENTS.md` (and to `CLAUDE.md` if you use Claude Code) and fill it in.
3. Write your next feature with `FEATURE_SPEC.md` before you ask an agent to build it.
4. Optional: enforce the commit format with a hook.

   ```bash
   npm install --save-dev @commitlint/cli @commitlint/config-conventional husky
   npx husky init
   echo 'npx --no -- commitlint --edit "$1"' > .husky/commit-msg
   ```

## What the paid edition adds

The parts that connect the stages: implementing a feature by ID, pull requests, multi-agent review, issues generated from your docs, CI, acceptance gates, and a reference product built through the whole lifecycle.
