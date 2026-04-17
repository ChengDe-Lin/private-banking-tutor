Create a new suitability case study for the scenario the user described.

## Input
A free-text scenario describing a client: age, net worth, family, FX base, objective, constraints, preferences. If the description is too thin, ask 3–5 clarifying questions before writing.

## Output file

Find the next-numbered file in `cases/`:

```
cases/NN_<slug>.md
```

where NN is the next sequential number (existing: `01_hnw_income`, `02_concentrated_equity`, `03_aggressive_growth`, `04_liquidity_event`, `05_cross_border_family` — so the next would be `06_<slug>.md`), and `<slug>` is a short topic identifier.

## Required section structure (case study template)

1. `# Case NN: <slug>`
2. `## Client profile` — net worth, age, occupation, family, FX base, current holdings, liquidity needs, AI classification, US-person status, relevant jurisdictional notes.
3. `## Constraints & objectives` — primary objective, secondary objectives, risk tolerance (stated + practical), horizon, preferences, explicit exclusions.
4. `## Recommended allocation` — SAA + TAA tilts in **table** form. Specify mandate (DPM vs advisory vs hybrid). Include USD $ amounts.
5. `## Product picks with justification` — each product **linked** to a `products/*.md` page where relevant (e.g. `[IG ladder](../products/fixed_income.md)`).
6. `## Risks to flag to the client` — at minimum 5 risks, each with mitigation.
7. `## Interview follow-ups` — 3–5 probing questions the interviewer might drill, each with a rigorous answer.
8. `## Related` — links to `products/`, `concepts/`, `regulation/`, `bq/stories/` as relevant.

## Ground rules

- Every allocation has a specific product picker with rationale.
- Numbers must add up — % weights sum to 100%; USD amounts consistent with stated net worth.
- Risk tolerance must be *triangulated* (stated / prior behaviour / capacity / psychology) — see `concepts/wealth_management.md`.
- Mandate choice (DPM vs advisory) justified, not assumed.
- Regulatory context (AI status, FATCA, CRS, MAS 626) referenced where it bears on the plan.

## After writing

- Verify the SAA percentages sum to 100%; verify USD allocations sum to client's stated net worth.
- Check product links resolve to existing `products/*.md` files.
- Propose a commit message: `docs(cases): add case NN - <slug>`.
