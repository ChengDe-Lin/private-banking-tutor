# Confusion Ledger — JiaJia's CW Asset Management Interview Prep

> **How this file works.** Claude automatically appends an entry here whenever JiaJia struggles with a concept, gets a fact wrong, or asks the same question twice during a drill session. Each entry has: date, topic, what she said vs what's correct, and a status (`open` / `resolved`). At the start of every session, Claude re-reads this file and offers to re-test anything still marked `open`.
>
> **For JiaJia:** you don't need to edit this file — Claude maintains it. Your job is to pay attention when Claude flags a confusion, ask follow-ups until you actually get it, and trust that Claude will re-test you on it next session.
>
> **Format for Claude (follow exactly):** append new entries to the "Ledger" section below in table format. When resolving an item, change Status to `resolved` and add one sentence to the Resolution column about what finally clicked. Never edit historical What-I-got-wrong entries — they are the training signal.

---

## Session log

At the start of every session, Claude adds a one-line marker here with the date and primary topic:

| Session | Date | Primary focus | Duration (approx) |
|---|---|---|---|
| 1 | _to fill_ | _to fill_ | _to fill_ |

---

## Ledger

| # | Date | Topic | What JiaJia got wrong / couldn't explain | Correct explanation | Status | Resolution (what clicked) |
|---|---|---|---|---|---|---|
| _example_ | 2026-04-18 | Short-put direction in DCI | Said "client is long a put on the alt currency" | Client is SHORT a put on the alt currency / SHORT a call on the base currency — she collects premium as the enhanced coupon. Direction memory trick: the one getting paid coupon is the one writing the option. | open | _to fill on resolution_ |

---

## Patterns to watch

Claude: as entries accumulate, flag clusters. Common areas where PM-Assistant-track candidates trip:

- **Option direction / sign** — who's short, who's long, which way payoff tilts. If 2+ entries cluster here, re-read `products/derivatives.md` with JiaJia.
- **Worst-of mechanics** — how the basket concentrates on the weakest name. If entries cluster here, drill `products/structured.md` §4 autocallable.
- **FCN lifecycle** — observation-date decisions, KI response, autocall reinvestment. If entries cluster, drill `products/structured.md` §3 sub-sections (a)–(f).
- **Issuer credit logic** — why cheaper isn't always better. If entries cluster, re-read `products/issuers.md`.
- **Regulatory scope** — which rule covers what, AI vs EI, FATCA vs CRS.
- **Suitability nuance** — capacity vs willingness, stated vs practical risk tolerance.
- **Numbers freezing** — JiaJia can explain concepts verbally but goes blank when asked for concrete percentages (SAA, position sizing, coupon-vs-vol ratios). If this pattern appears, schedule a "numbers-only" drill session.

**Threshold rule:** if 3+ entries sit in one cluster and remain `open` for 2+ sessions, tell JiaJia explicitly "this is a structural gap, not an incidental one — let's spend a dedicated 30 minutes on it" rather than hoping it resolves incidentally.

---

## Related

- [`../CLAUDE.md`](../CLAUDE.md) — the tutoring protocol that drives this file.
- [`../CHEAT_SHEET.md`](../CHEAT_SHEET.md) — the companion artefact where *resolved* items get distilled into one-line recall prompts for pre-interview review.
- [`../products/`](../products/) — primary material when a confusion sits in a product area.
- [`../regulation/`](../regulation/) — re-read when confusion clusters in regulatory topics.
