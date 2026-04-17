Create or update a product deep-dive for the product name the user specified.

## Input
The product name (e.g. "DCI", "autocallable", "convertible bond", "private debt"). If ambiguous, ask the user to specify.

## Output file

Slug the product name, then target `products/<slug>.md`:

- If the file exists, **update** it — preserve user edits, extend missing sections.
- If the file doesn't exist, **create** it.

If the product conceptually belongs inside an existing file (e.g. a specific ELN variant belongs in `products/structured.md`), prefer extending that file with a new sub-section rather than creating a stub.

## Required section structure (seven sections)

Follow the template from `CLAUDE.md` ground rules and `docs/superpowers/plans/2026-04-17-private-banking-tutor.md` "Content conventions" block:

1. `# <Product name>`
2. `## 直覺理解` — one short Traditional-Chinese paragraph (2–4 sentences) explaining the product as a mental model, plain language, no jargon.
3. `## Mechanism` — how the product is constructed, in English.
4. `## Payoff / Economics` — what the client gets in each market scenario; include a simple numeric example.
5. `## When to recommend (client fit)` — client profile, horizon, risk appetite, FX base; state explicitly when NOT to use it.
6. `## Risks` — minimum: market, credit / counterparty, liquidity, FX, early-termination where relevant.
7. `## Interview questions you should be able to answer` — 4–6 Qs with short answers.
8. `## Related products` — cross-links to sibling `products/*.md` pages.

## Ground rules (from `CLAUDE.md`)

- Every product claim has a **mechanism**, not a vibe — e.g. "ELN client is short a put" not "ELN gives high yield."
- Every recommendation names the **client profile** it fits — liquidity need, horizon, FX base, concentration, objective.
- Honest about where clients get hurt in practice.
- Chinese annotation rule — `(中文: …)` inline for complex / counterintuitive terms; `直覺理解` block only at the top.
- Numeric examples must be specific and illustrative.

## After writing

- Verify section count with `grep -c "^## " products/<slug>.md`; should be ≥ 7 (or 6 if `直覺理解` is legitimately omitted for a light-depth page per plan §3).
- Propose a commit message in conventional-commit format: `docs(products): add <product> deep dive` or `docs(products): extend <product> with <sub-topic>`.
