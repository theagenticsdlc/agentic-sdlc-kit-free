# Decision record template

One file per decision in `docs/decisions/`, named `DEC-nn-short-title.md`. Copy the block below.

Write a decision record when the answer **cannot** be read from the requirements or the schema and more than one feature depends on it. If the answer is already written somewhere, it is not a decision; put it in the feature specification.

While a record is `open`, every feature that lists it under "Depends on" is `blocked`. An agent that reaches an open decision stops and reports it. It does not choose.

---

# DEC-nn — <the question, in one line>

|                 |                                                     |
| --------------- | --------------------------------------------------- |
| **Status**      | open · accepted · rejected · replaced by DEC-mm     |
| **Owner**       | <the person who can actually make this call>        |
| **Date**        | <when it was settled; blank while open>             |
| **Blocks**      | <feature IDs waiting on this>                       |

## Why this needs deciding

<A few lines. What forces the question now, what the existing documents say, and what they leave open.>

## Options

| Option | What it means in practice | Cost or risk |
| ------ | ------------------------- | ------------ |
| A — <name> | <behaviour, in concrete terms> | <what you give up> |
| B — <name> | <behaviour, in concrete terms> | <what you give up> |

## Decision

<The chosen option, written precisely enough to implement from without asking again. One sentence on why the others lost, if that is not obvious.>

## What changes because of it

- [ ] <Document, schema or code change this decision requires>
- [ ] <Feature specifications to update, by ID>
