Log a new entry to the confusion ledger, or review existing entries.

## Input
- If the user describes a specific confusion or misconception, log it.
- If the user says "review", walk through the open entries.

## Log mode

1. Read the current `assessments/confusion_ledger.md`.
2. Interactively ask the user (only what's missing):
   - **Topic** — specific concept, not a broad area. Good: "YTC vs YTW on callable perps"; bad: "bonds".
   - **What you got wrong** — the misconception, in your own words. Specific enough that reading it later will jog the memory.
   - **Correct explanation** — the right answer, in 1–2 sentences. Precise enough to be self-sufficient.
3. Append a new row to the ledger table with today's date and status `open` (or `resolved` if the user confirms they now understand).
4. If the user has ≥ 3 entries in the same topic area (e.g. three separate option-direction confusions), flag the cluster and recommend re-reading the relevant page.

## Review mode

When the user says "review":

1. Show the current open ledger entries (status = open).
2. Pick 2–3 entries and ask targeted questions to check if the user has internalized the corrections.
3. If the user answers correctly, mark the entry `resolved` (keep the row for reference).
4. If the user struggles, suggest a specific re-read (e.g. "go back to `products/derivatives.md` §Greeks and re-read the delta/gamma intuition block").

## Ground rules

- Be specific — never log vague entries.
- The correct-explanation column must be self-contained.
- Use English as the primary language; Traditional Chinese inline-annotation `(中文: …)` only if the concept is TC-clearer.

## After writing

- Commit message: `docs(assessments): log confusion on <topic>` or `docs(assessments): resolve <topic> in confusion ledger`.
