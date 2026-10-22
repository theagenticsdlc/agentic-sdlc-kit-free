# Feature specification template

One block per feature, kept in a catalog file for its area (for example `docs/domains/checkout.md`). Copy the block below, fill it in, and delete the guidance in angle brackets.

Rules for every feature:

- **The ID is permanent.** `<PREFIX>-nn`, one prefix per area. Never renumber and never reuse; a removed feature is marked `retired` and kept.
- **Acceptance criteria are checkable.** Each is a statement someone can test and tick, not an aim. If a criterion cannot fail, rewrite it.
- **Dependencies are IDs.** Another feature or a decision record, never free text.
- **Every feature traces to a requirement.** No requirement behind it means it is out of scope until one exists.
- **Status changes in the pull request that ships the code,** not before and not after.

---

## <PREFIX-nn> — <feature name>

|                |                                                              |
| -------------- | ------------------------------------------------------------ |
| **Status**     | spec · partial · built · blocked · retired                   |
| **Milestone**  | <milestone of the first shippable slice>                     |
| **Depends on** | <feature IDs and decision IDs, or "none">                    |
| **Traces to**  | <requirements section that authorises this feature>          |
| **Owner**      | <who answers questions about it>                             |

### Purpose

<Two or three sentences in plain language: who needs this, what they can do once it exists, and why it matters. Someone outside the team should understand it.>

### Acceptance criteria

- [ ] <Observable behaviour, including the actor and the outcome.>
- [ ] <The failure case: what happens when the input is invalid, the caller is not allowed, or a dependency is down.>
- [ ] <Any rule that must hold no matter what, stated so a test can assert it.>

### Contract surface

<Only what this feature adds or changes. Leave a line out if it does not apply.>

- **Endpoints:** <method, path, who may call it>
- **Data:** <tables or fields added or changed>
- **Events or jobs:** <what is emitted or scheduled>
- **Screens:** <pages or components, and which portal>

### Out of scope

<What a reader might assume is included and is not, with the feature ID that covers it if one exists.>

### Notes

<Open questions with the decision ID that will settle each one. Remove this section when empty.>
