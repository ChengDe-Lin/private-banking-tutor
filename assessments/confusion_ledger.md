# Confusion Ledger

> **Purpose.** A running record of things I got wrong, almost got wrong, or couldn't fully explain while studying this material. Blind spots don't go away by avoidance — they go away by naming them and drilling the fix. Revisit before Day 7 and before the interview.
>
> **How to use.** When you stumble while reading a page, studying a concept, or attempting a mock answer — log it here. Invoke `/project:confusion` to add a new row via the tutor. After resolving, mark Status: resolved and capture the *correct* explanation so next-time-you can find it fast.

## Ledger

| Date | Topic | What I got wrong | Correct explanation | Status |
|---|---|---|---|---|
| 2026-04-17 | YTC vs YTW on callable perp | Confused which one is the issuer-friendly number and which one is the conservative investor quote | YTW (yield-to-worst) is the conservative investor quote — min of YTM and all YTCs. Issuer will only call when it's bad for you (rates fell), so YTC is often *lower* than YTM. Always quote YTW to a client on callable paper. | resolved |
| 2026-04-17 | DCI is "short a put on alt currency" | Kept inverting which currency the put is on | Client deposits USD, agrees to be converted to SGD at strike if USDSGD drops below it at expiry. Economically: short a USDSGD put. If SGD strengthens (USDSGD drops), client is converted to SGD (the "alt" from the USD-base perspective) at a worse rate than market. The "alt" is the currency you end up receiving. | resolved |
| | Example: vega on the RM-sold DCI to the client | | | |
| | | | | |
| | | | | |

---

**Template row to copy when adding:**

`| YYYY-MM-DD | <topic — specific, not "options" but "ITM vs ATM put on a bearish view"> | <what you got wrong, specifically> | <correct explanation, in your own words> | open / resolved |`

---

## Patterns to watch for

As you accumulate entries, look for patterns. Common areas of confusion that tend to cluster:

- **Option direction / sign** — which side is the client on; which way the payoff tilts.
- **Rate mechanics** — forward points vs. forecasts; YTM vs YTW; duration vs convexity.
- **Product embedding** — structured-product decomposition into deposit + option; which side of the option the client is on.
- **Regulatory scope** — what waves what; what applies to whom (FATCA vs CRS, AI vs EI).
- **Suitability nuance** — capacity vs willingness; stated vs practical risk tolerance.
- **Cross-border** — tax residency vs citizenship; sending country vs receiving country rules.

If three or more entries cluster in one area, spend 30 minutes re-reading the relevant page and the related material; the confusion is structural, not incidental.

---

## Related

- [`/project:confusion`](../.claude/commands/confusion.md) — slash command that appends entries interactively.
- [`../products/`](../products/) — primary source material to re-read when a confusion entry sits in a product area.
- [`../regulation/`](../regulation/) — re-read when confusion entries cluster in regulatory topics.
- [`../concepts/wealth_management.md`](../concepts/wealth_management.md) — the suitability framework that many confusion entries relate back to.
