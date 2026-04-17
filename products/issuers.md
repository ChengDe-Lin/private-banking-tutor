# Structured-Product Issuers — Picking the Counterparty

> **For PM-Assistant / EAM-Junior roles specifically.** At a bank PB, the bank is both distributor and issuer — you almost never think about counterparty choice. At an **EAM or Multi-Family Office**, the firm sits between the client and 3–5 issuer banks; picking the right issuer is part of the daily job. This page is the issuer-side view that a bank-PB study path does not provide.

## 直覺理解

在銀行 PB 做事的時候，結構型商品的發行人幾乎永遠是「自家銀行」（UBS 的 RM 賣 UBS 發的 note，BNP 的 RM 賣 BNP 發的 note）。**在 EAM 工作的邏輯完全相反**——客戶的資產託管在銀行，但產品建議由 EAM 給，EAM 要**主動挑**一家銀行當發行人。這一層選擇就是 EAM 價值的一部分：不被單一銀行的產品價格綁架、分散發行人信用風險、在不同資產類別挑各家強項。

面試時 CIO 會問：「如果 BNP 報 11.5% 而 UBS 報 11.0%，你選誰？」這題**正確答案不是 BNP**——正確答案是「看 client 的 issuer exposure 現況、兩家的 senior CDS spread、兩家在這個標的的 hedging 強項、以及 firm 對 counterparty 的 concentration cap」。這頁就是幫你答這一題。

> 💡 **Bottom line for interviews:** An EAM's structured-note book has two separable risks — the **payoff risk** (the underlying / KI / coupon mechanics) AND the **issuer-credit risk** (the ZCB leg is unsecured senior bank debt). A good PM-Assistant owns both.

---

## Why issuer choice matters at an EAM

Three reasons, in order of PM-Assistant drill-ability:

1. **Issuer credit is a real risk, not a footnote.** The par-return leg of any structured note is **unsecured senior debt of the issuing bank**. Lehman 2008 proved this in HK/SG retail. CS AT1 2023 re-proved it at the institutional level. At an EAM, the firm does not share the client's upside from the payoff but does share the reputational downside if the issuer defaults — so the EAM's interest is *more* aligned to credit-conservative issuer selection than a bank's distribution desk, which gets the margin regardless.

2. **Pricing edge varies by franchise and underlying.** No single bank is best at everything. BNP tends to print Asia-heavy equity worst-of baskets well; UBS tends to win on single-name US mega-cap and FX structures; JB is weaker on balance sheet but sometimes aggressive on mid-size tickets to win flow. An EAM that shops three issuers on every ticket extracts 20–80 bps of coupon improvement per trade vs a single-issuer captive flow.

3. **Post-trade relationship mechanics differ.** Mid-tenor unwind bids, KI-response handling, observation-date clarity, and term-sheet language quality all vary. A PM-Assistant learns over time which desk returns a tight unwind bid at 9am in stress vs which desk goes radio-silent until their APAC open.

---

## Major issuers on Asian PB / EAM shelves (as of 2024–2026)

Ordered by approximate Asia equity-derivatives flow ranking. All ratings are as of recent reporting; verify before use — bank credit moves.

### BNP Paribas

| Item | |
|---|---|
| **Domicile / entity** | France; notes typically issued out of BNP Paribas SA or BNP Paribas Issuance BV (Netherlands SPV, guaranteed by BNPP SA) |
| **Senior unsecured rating (approx. 2025)** | A+ / A+ / Aa3 (S&P / Fitch / Moody's) ⚠️ verify current |
| **Franchise strengths** | Large equity-derivatives book globally; strong APAC equity flow desk in HK and SG; historically competitive on **Asia worst-of autocallables and FCNs**; solid FX-structured franchise; European rates strong |
| **Franchise weaknesses** | Less natural on US single-name mega-cap (UBS/GS stronger); limited US credit-linked product depth |
| **Post-2008 / post-2015 legal tail** | Manageable; 2014 US BSA / OFAC settlement (~US$9B) historical; nothing recent material |
| **EAM-relationship notes** | BNPP's SG booking centre is an active EAM counterparty; dedicated structuring support for multi-custody EAM flow; documentation workflow reasonably efficient |
| **When to prefer** | Asia worst-of equity baskets (HSCEI / Hang Seng Tech / Asia tech single names); FX-structured overlays; pan-European underlyings |

### UBS (post-Credit Suisse integration)

| Item | |
|---|---|
| **Domicile / entity** | Switzerland; notes issued out of UBS AG (parent) or UBS Jersey branch / UBS Europe SE for European distribution |
| **Senior unsecured rating (approx. 2025)** | A+ / A+ / A1 (S&P / Fitch / Moody's) ⚠️ verify current |
| **Franchise strengths** | Post-CS integration: the combined entity is the **dominant APAC wealth / equity-derivatives franchise** by a wide margin; deep **US single-name and index** flow; strongest **FX-structured** desk among the Swiss houses; integrated CIO / structuring / advisory workflow |
| **Franchise weaknesses** | CS-legacy legal tail is real — Archegos 2021 ($5.5B), Greensill 2021, the 2023 emergency merger itself, US$1.5B AT1 write-down (March 2023) left client-trust scars; **integration risk** continues to surface operationally through at least 2026 |
| **Post-2023 risks specifically** | AT1 write-down precedent means UBS subordinated debt carries a "this can happen" discount; senior unsecured (where structured notes sit) was **not** written down, but the event re-priced all bank subordination risk and spread-watching has become a standard EAM discipline |
| **EAM-relationship notes** | Very well-staffed APAC EAM desk; can produce aggressive quotes in cross-asset and US single-name; documentation rigorous but slow; CS-legacy systems may show through in term-sheet formatting |
| **When to prefer** | US single-name and index equity structures; cross-asset (FX × equity) baskets; any trade where APAC equity-derivatives execution quality matters; large-ticket flow where balance sheet is the constraint |

### Julius Baer (JB)

| Item | |
|---|---|
| **Domicile / entity** | Switzerland; Bank Julius Baer & Co. Ltd |
| **Senior unsecured rating (approx. 2025)** | A2 / A (Moody's / Fitch) ⚠️ verify current — JB is notch below UBS/BNP |
| **Franchise strengths** | Pure-play PB with **no investment-banking balance sheet** — philosophically aligned with UHNW client interests; light distribution capacity means structuring desk can be attentive to mid-size EAM tickets that get deprioritised at UBS/BNP; APAC booking centre in Singapore |
| **Franchise weaknesses** | **Smaller capital base**; does not originate its own equity-derivatives book at scale — often **back-to-backs with a larger issuer** (historically CS; relationships reshuffled post-2023); **single-name coverage thinner** than UBS/BNP; legal tail from 2024 Signa Holding exposure ⚠️ (~CHF 586M provision announced, subsequent management reshuffle) |
| **Post-2024 risks specifically** | Signa exposure was a real equity-value-destroying event; governance reshuffle still in motion; the "pure PB no IB" thesis took a reputational hit |
| **EAM-relationship notes** | Mid-size EAMs often get genuinely senior attention at JB that they wouldn't get at UBS — useful for building a product desk relationship. Watch for **back-to-back issuer pass-through** in the term sheet (if JB is intermediating a BNP-sourced structure, you have BNP credit underneath; read the docs) |
| **When to prefer** | Mid-size tickets where JB structuring will go the extra mile; UHNW clients where the "no IB conflict" narrative matters; when diversifying away from UBS concentration |

### The secondary tier (know the names)

Not primary for EAM flow but appear in specific niches. In alphabetical order:

- **Barclays** — UK SIB; FTSE / Euro Stoxx franchises; US rates-linked structures; European corporate exposure. Asian EAM presence lighter than BNP / UBS.
- **Deutsche Bank** — EUR-rates-linked and European single-name specialist; Asian flow rebuilding post-restructuring; rated Baa1 / BBB+ as of 2025 ⚠️ — one notch below the A-tier above, so credit-watch is warranted for bigger tickets.
- **Goldman Sachs** — US mega-cap single-name and index excellence; premium pricing; documentation is tight and fast; Asia EAM presence via HK / SG PWM flow; less volume in mid-ticket EAM work.
- **HSBC** — Strong Asia-corridor franchise; China / HK cross-border; mid-tier equity-derivatives depth; HK / SG booking.
- **Macquarie** — Australian SIB with quirky APAC equity / commodities / resources niches; boutique-structuring style; size-constrained.
- **Morgan Stanley** — Similar profile to Goldman; US-institutional quality; APAC PWM flow.
- **Société Générale** — European rates + structured-credit specialist; the **Lyxor (now Amundi)** heritage in index-arb is relevant; Asian equity-derivatives presence via the Paribas-Soc Gen duopoly of French structuring.
- **Standard Chartered** — SG-booked; emerging-market / Asia-Middle-East corridor; thinner structured-product shelf than the above.

---

## How to pick between issuers — the PM-Assistant's checklist

When a client approaches you for a 6M worst-of-3 FCN on US tech mega-caps, you send indicatives to **at least 2–3 issuers in parallel** and evaluate on the six dimensions below. The cheapest quote is rarely the answer; the best **risk-adjusted** quote usually is.

| Dimension | What to check | Why it matters |
|---|---|---|
| **1. Indicative coupon** | Gather quotes from 2–3 issuers on identical terms (strike, KI, tenor, basket, observation frequency). Record the spread. | The obvious metric; 30–80 bps of coupon difference is common between issuers. |
| **2. Client's current issuer exposure** | Total notional of live structured notes the client already has with each issuer, as % of client's total investable. | Concentration discipline — if client is already 35% exposed to UBS credit via three live FCNs, the next ticket goes to BNP even if UBS is 20 bps cheaper. |
| **3. Issuer senior-unsecured credit** | Senior CDS spread (5Y); senior unsecured rating; watch the AT1-senior gap (leading indicator). | You're buying unsecured senior debt for the par leg. Don't trade credit quality for 20 bps of coupon. |
| **4. Franchise-underlying fit** | Is the underlying / basket a natural strength of this issuer's flow? (BNP Asia vs UBS US single-name vs GS US mega-cap.) | A desk that warehouses natural flow on these names hedges more cheaply → tighter quote structurally; also better mid-tenor unwind bids. |
| **5. Post-trade service quality** | Historical quality of this issuer's KI-response, unwind bids in stress, observation-date clarity, term-sheet error rate. | A cheap quote that turns into a 3-week unwind negotiation in stress costs more than the coupon saved. |
| **6. Documentation language** | Settlement method (physical delivery vs cash settlement), KI observation style (continuous vs closing-only), memory-coupon language, cancellation rights. | Standardised language is not actually standardised. Two FCNs with "identical" terms can behave differently on edge cases. Read the docs. |

**The CIO test question:** "You have three quotes — BNP 11.5%, UBS 11.0%, JB 11.8% — on the same 6M worst-of-3. Which do you book and why?"

**Good answer shape:** "Depends on three things I don't know yet. First, what's the client's existing issuer concentration — if they're already 40% in BNP notes, I'm not adding more, and UBS at 11% beats JB's 11.8% on credit. Second, what's JB intermediating — if the 11.8% is back-to-backed through CS-legacy or a lower-rated issuer, I'm not getting the JB credit I'm being shown. Third, what's the senior-CDS ordering today — if one of the three has been widening rapidly, coupon differences inside 80 bps don't compensate. The default first answer is 'BNP or UBS, with the issuer diversified across the client's book'; JB's 11.8% is attractive but only if the underlying credit and intermediation are clean."

**Bad answers:** "BNP, because highest coupon" (misses credit, concentration, intermediation); "Always UBS, because largest platform" (misses pricing edge and concentration); "Whichever the CIO says" (sign you don't understand the job).

---

## Issuer credit risk — the post-CS AT1 lesson applied to notes

**What happened in March 2023.** Credit Suisse was merged into UBS over a weekend at FINMA direction. As part of the package, ~CHF 16B of CS Additional Tier 1 (AT1) contingent-capital bonds were written down to zero — even as equity holders recovered some value. This reversed the standard creditor-hierarchy expectation and produced a global bank-subordination repricing within 48 hours.

**Why it matters for structured notes.** Structured notes are **senior unsecured** — above AT1 in the creditor waterfall. In the CS/UBS resolution, **senior unsecured was NOT written down**. So the literal answer to "did CS structured-note holders lose par at the resolution?" is **no** — they were rolled into UBS obligations and continued performing. Good news.

**But the lessons are real and specific:**

1. **Bank subordination risk is not theoretical.** If you hold AT1, it can go to zero in a weekend. This applies even to G-SIBs. Any structured note you book with an AT1-heavy capital structure carries that repricing risk in its secondary market value, even if the senior leg is fine.
2. **Issuer widening is a leading indicator.** CS senior CDS widened materially for months before the resolution; AT1 pricing diverged from senior about 10 days before; equity held up until the end. A PM-Assistant watching a client's issuer's CDS widen toward 250–400 bps over 3 months should be asking questions, not waiting for the news.
3. **Resolution outcomes are political, not formulaic.** The AT1 write-down-before-equity-loss order surprised legal experts. In stress, resolution authorities optimise for systemic stability, not creditor hierarchy expectations. That means your probabilistic model of "how bad can it get" should have fatter tails than the rating letter suggests.
4. **"Too big to fail" is not a policy, it's a hope.** The CS resolution was handled because UBS absorbed the balance sheet — a specific deal that worked because a specific alternative existed. The next resolution may not.

**Operational response at the EAM:**

- Monthly check of each shelf issuer's **senior CDS spread trend** and **AT1-senior gap**. Flag at 50 bps widening over 3 months on a moving basis.
- Quarterly review of **client-by-client issuer exposure**. Flag any client above 25% of total investable in a single issuer's structured notes.
- Standing bias toward **issuer diversification** even at the cost of 10–30 bps of indicative coupon; cumulative over a book, this pays for itself the first time an issuer re-prices.

---

## Diversification discipline — the numbers

For a typical UHNW / high-HNW client with a structured-product sleeve of 10–20% of total investable:

| Concentration type | Recommended cap | Logic |
|---|---|---|
| **Single issuer** as % of structured-product sleeve | ≤ 40% | No more than 8% of total investable from one issuer's credit |
| **Single issuer** as % of total investable (including plain bonds + Lombard facility) | ≤ 15% | Avoids all-eggs-in-one-bank situations; Lombard counts because that facility sits with same entity |
| **Single basket name** across all booked structured products + direct equity | ≤ 10% (worst-case delivery basis) | Conditional concentration if KI triggers; count FCN-KI-delivery risk as equivalent to direct long exposure |
| **Cross-asset correlation cluster** (e.g. "all US mega-cap tech," "all HK Chinese banks") | ≤ 25% (worst-case delivery basis) | Correlated KI events; the whole cluster goes together in a drawdown |
| **Number of active structured positions per client** | 5–8 | Above this, exception-monitoring decays and the assistant-PM-CIO chain can't respond in real time |

These are guidance caps, not absolutes. Exceptional clients (UHNW with explicit short-put appetite, deep liquidity, written sign-off) can sit above. The discipline is that the exceptions are named, documented, and reviewed — not default behaviour.

---

## Interview questions you should be able to answer

### Q1. "Why would you ever pick the higher-priced issuer quote?"

**Answer.** Three reasons. First, **client issuer concentration** — if the client is already materially exposed to the cheaper issuer's credit, the incremental concentration risk is not compensated by 20–50 bps of coupon. Second, **credit quality** — the cheap quote may reflect that the issuer is trading wider than the expensive one; if the senior CDS ordering disagrees with the coupon ordering, the market is telling you something. Third, **franchise fit** — the issuer whose desk naturally warehouses the underlying will typically be more responsive on mid-tenor unwinds and KI calls; if the cheap issuer is out-of-franchise on the basket, you're saving coupon and buying service drag. The CIO doesn't want "always cheapest"; the CIO wants "cheapest within a discipline."

### Q2. "How did the CS resolution change how you pick issuers for client notes?"

**Answer.** Two changes. First, monitoring **senior CDS spread trends** became a standing discipline — not just a rating-letter check. CS AT1 went to zero in a weekend; the senior survived, but 2–3 months of spread widening had flagged the underlying stress. Any structured-note issuer widening materially over a quarter should trigger a client-book review. Second, the **AT1-senior basis** became an indicator we watch — the gap between AT1 and senior unsecured compressing or flipping is a signal that bank subordination risk is being re-priced, and since structured notes live on the senior leg but their secondary-market values are affected by the bank's overall risk perception, an EAM needs to see that coming, not react after. Neither of these was a change in the mechanics of the product — they were a change in the operational cadence around product issuers.

### Q3. "Your client is asking 'can't we just use the cheapest issuer every time?' How do you respond?"

**Answer.** I'd frame it as the same question as "can't we just use the cheapest bond every time?" — the answer in bonds is no, because the credit quality differs and the cheapest bond is often cheapest for a reason; the answer in structured notes is the same. The cheap quote is sometimes pricing (a) genuinely better franchise hedging — good, take it — and sometimes (b) issuer credit deterioration — bad, avoid it — and sometimes (c) year-end inventory pressure on that desk — tactical, use it selectively but don't build a long-term single-issuer concentration around it. The EAM's value-add here is actually *not* minimising coupon — it's making the credit / pricing trade-off consciously. If the client wants "just cheapest," they can get that at a distributor captive to one bank; what the EAM offers is a disciplined selection across 3–5 issuers, which over a multi-year relationship produces better risk-adjusted outcomes.

### Q4. "What's an issuer red flag you'd act on immediately?"

**Answer.** Three, in order of urgency. **(1) Senior CDS widening through 200 bps on a trend** (not a single-day spike on a rates-driven repricing). That's the market saying the issuer's senior unsecured is being re-priced as mid-A-minus rather than A, and the note I've booked for the client starts looking like a different risk than what I sold. **(2) AT1-senior gap compression** where AT1 is tightening relative to senior, which usually reflects equity-market-driven repricing of the whole capital structure. **(3) Governance / headline event** — resignation of key risk or finance leadership, unexpected provisioning, a large legal settlement materially changing the equity-value story. None of these automatically mean "sell the note on the secondary," but all three mean "stop booking new primary with this issuer until clarity, and review client-level concentration."

### Q5. "BNP vs UBS — which do you like as an issuer right now?"

**Answer.** Depends on trade type. For **US single-name FCNs** I lean UBS — the franchise hedging is deeper, execution is cleaner, and the senior-credit quality is comparable. For **Asia worst-of baskets** I lean BNP — same logic reversed; the APAC equity-derivatives desk is natural on the basket and the pricing reflects that. For **large single-ticket** (say, above US$5M notional on a single underlying), UBS's balance sheet makes it the default. For **mid-size tickets where structuring flexibility matters**, BNP or JB both win over UBS. What I don't do is pick a single issuer for everything — a book concentrated 60% in any one issuer's notes is a concentration position the CIO would quite rightly push back on.

---

## Related

- [`structured.md`](structured.md) — product-mechanics pages; every note here rides on the primitives described there.
- [`../interview/firm_briefs.md`](../interview/firm_briefs.md) — target-firm and competitor-landscape context; note that "Julius Baer" appears there as a *firm to work at* and here as an *issuer to source from* — the same name, two different operational roles to understand.
- [`../industry.md`](../industry.md) — broader bank-landscape context including the post-CS consolidation story.
- [`fixed_income.md`](fixed_income.md) — senior / subordinated / AT1 capital-structure primer; the CS AT1 lesson comes from here.
- [`../regulation/mas_notice_626.md`](../regulation/mas_notice_626.md) — suitability documentation per trade; the issuer-selection rationale should be captured in the trade memo, not just the coupon.
