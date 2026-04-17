Create a new STAR behavioural-question story for the situation the user described.

## Input
A free-text description of the situation, either from the user's own career or a template scenario. Ask clarifying questions if essential STAR elements are missing — in particular, what the concrete *action* was and what the numerical *result* was.

## Output file

Find the next-numbered file in `bq/stories/`:

```
bq/stories/NN_<slug>.md
```

where NN is the next sequential number (existing: `01_relationship_win` through `10_regulatory_change_adapt` — so next would be `11_<slug>.md`), and `<slug>` is a short topic identifier.

## Required section structure (STAR template)

1. `# <Category>: <one-line title>`

   Category = one of: Relationship & Trust / Commercial / Integrity / Ethics / Resilience / Judgement / Collaboration / Regulatory Awareness.

2. `## Situation` — one paragraph setting the context. Client type, stakes, timing. Specific, not generic.

3. `## Task` — what was the challenge or decision to resolve. 1–2 sentences.

4. `## Action` — the specific, measurable steps taken. Use "I" where the user personally acted. Numbered sub-bullets preferred. **No vague phrases like "I communicated effectively"** — say what was said, when, how.

5. `## Result` — what happened. **Must include a number** (AUM, retention %, revenue, client count). If the story is a template, use placeholder `[US$XM]` etc., but make clear where a real number is needed.

6. `## What this demonstrates` — one line mapping to a PB competency. Load-bearing — this is the payload interviewers remember.

## After writing

- Update `bq/README.md` competency-mapping table with the new story.
- Verify the Action section has at least 4 specific sub-points; no filler.
- Verify the Result section contains a number (real or placeholder).
- Propose a commit message: `docs(bq): add story NN - <slug>`.
