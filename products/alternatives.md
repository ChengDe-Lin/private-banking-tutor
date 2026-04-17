# Alternatives

> **Day 3 of the 7-day study path — light-depth reference.** Alternatives (HFs, PE, private debt, RE, infra) are how UHNW books earn the illiquidity premium and access manager alpha beyond public markets. On a PB interview you don't need fund-of-fund due-diligence depth, but you must be able to (a) distinguish the major strategy families in one sentence each, (b) speak to J-curve / commitment dynamics of PE, (c) explain why feeder-fund structures exist, and (d) honestly answer "should the client put 20% in PE?"

## Mechanism

### The alternatives shelf — six families

**1. Hedge funds (HFs).** Active, lightly-regulated (Cayman / Delaware) pooled vehicles, typically 2-and-20 fee structure (management + performance fees), monthly or quarterly liquidity, capacity-constrained. Strategy families you must recognise on sight:

| Strategy | One-line thesis | Typical drawdown profile |
|---|---|---|
| **Long / Short Equity** (L/S) | Long undervalued names, short overvalued; market-neutral or directional tilt | Beta-dependent; good ones drawdown 10–20% in sell-offs; beta-heavy ones more |
| **Global Macro** | Top-down views on rates, FX, commodities, equities via liquid futures / options | Lumpy — big gains in trend episodes (2022), flat in chop; drawdowns 10–15% |
| **Event-Driven** (merger arb, activist, distressed) | Corporate-event-specific alpha | Merger-arb low vol (5–8% drawdown); distressed high vol (30%+ possible) |
| **Multi-Strategy** (multi-strat) | Capital allocated across multiple PMs / strategies under one platform | Lowest-vol of the lot — Millennium / Citadel / Point72 drawdowns 5–10% |
| **Quant / CTA (managed futures)** | Systematic trend-following, mean-reversion, or stat-arb | Very strategy-dependent; CTAs 15–25% drawdowns; stat-arb less |
| **Credit / Fixed-Income Arb** | Long/short credit, capital-structure arb, rates-RV | Moderate vol; blow-up risk in liquidity events (e.g. LTCM, 2020) |

**Fee levers:** high-water mark (manager can't earn performance fee until reclaiming prior peak), hurdle rate (must beat a benchmark before performance fee accrues), clawback (unusual in HFs; common in PE). A "2 and 20 with high-water mark and 5% hurdle" is client-friendlier than plain "2 and 20".

**Liquidity mechanics:** redemption notices typically 30–90 days; payment 1–3 months after notice. Gates (a % cap on monthly or quarterly redemptions) activate in stress — 2008 saw widespread gates. Side-pockets isolate illiquid positions from the main fund; investors at the time of side-pocketing retain pro-rata exposure, but new investors don't inherit it.

**2. Private equity (PE).** Limited-partnership structures (LP) investing in private companies over a 10-year fund life. Three main sub-flavours:

- **Buyout** — acquire mature companies via leveraged buyout (LBO), operate 4–7 years, exit via sale or IPO. Targets ~2x MOIC, ~15–20% IRR.
- **Growth equity** — take minority stakes in fast-growing private companies; less leverage, less control. Targets ~3x MOIC on the winners.
- **Venture capital (VC)** — earliest-stage; power-law returns where <20% of companies drive ~80% of fund value.
- **Secondaries** — buy existing LP commitments from sellers wanting early liquidity; compresses the J-curve (start with a seasoned portfolio, not a blank fund).

**J-curve intuition (J 曲線):** in the first 2–4 years, the fund is drawing capital from LPs to make investments but isn't yet distributing proceeds back; fees are being charged on committed capital (or drawn, depending on the fund); reported NAV often drops below cost as early writedowns occur before mark-ups materialise. By year 5–7 the "up" portion of the J kicks in as exits distribute. **Total cash-on-cash return is NOT 15% every year** — it's lumpy, and the IRR number hides the reinvestment reality.

**Commitment vs called capital:** client commits, say, US$5M to a PE fund. The fund doesn't take US$5M upfront. Instead it calls capital over 4–5 years as it makes investments — typical pacing is 15%, 25%, 25%, 20%, 15% per year of the commitment, or lumpier. The client must have liquidity to fund capital calls on short notice (usually 10–15 business days). Failure to fund a capital call is a default and can forfeit the entire commitment. **This is the single operational point most often missed by PB clients new to PE.**

**IRR vs MOIC:**
- **IRR (Internal Rate of Return)** — annualised return of the fund's cashflows including capital calls and distributions. Sensitive to timing — a fund that returns money fast has a high IRR even if total return is modest.
- **MOIC (Multiple On Invested Capital, aka TVPI)** — total distributed + residual NAV divided by paid-in capital. A simpler "how many times my money did I get back" figure. Ignores timing.
- A fund can have a great IRR (30%+) and a mediocre MOIC (1.5x) if it exits fast but small. Clients should look at both.

**3. Private debt (PD).** Direct lending by funds to mid-market private companies. Three segments:

- **Direct lending / senior secured** — first-lien loans to private companies, floating rate (SOFR + 500–700 bps typically). Yield 8–12%, moderate default risk, senior recovery.
- **Mezzanine** — subordinate debt with equity kickers; yields 12–18% in base coupon plus warrant upside.
- **Distressed debt** — buying debt of companies in or near default at a discount, hoping for recovery or restructuring upside. High vol; 15–20%+ IRR targets historically.

Why private debt grew dramatically post-2010: banks retreated from mid-market lending under Basel III / Dodd-Frank, private funds filled the gap with longer lock-ups and higher fees. Current market: US$1.5–2T AUM, competing heavily with bank direct lending.

**4. Real estate (RE).** Four routes on a PB shelf:

- **Direct property ownership** — client buys a building / condo / commercial; managed by family office or property manager. Illiquid; concentrated; jurisdictional.
- **Public REITs** — covered in `equities_funds.md`. Liquid, daily-traded, regulated.
- **Non-listed PE real estate funds** — similar to PE buyout in structure (LP, 10Y life, capital calls, J-curve), but investments are real estate (core, core-plus, value-add, opportunistic). Often US$1M+ minimum for AI.
- **Private real estate debt (CRE lending)** — funds lending against commercial real estate. Yield 7–11%.

**SG-specific RE considerations for SG / cross-border clients:** ABSD (Additional Buyer's Stamp Duty — up to 60% for foreigners buying residential as of 2023), CPF rules for SG citizens, property-cooling measures. Structuring via corporate entity or trust affects all of the above. Don't assume direct-property recommendations without understanding ABSD for the client's passport status.

**5. Infrastructure.** Investments in long-duration, essential-services assets: toll roads, airports, regulated utilities, renewable-energy generation, telecom towers, data-centre campuses.

- **Listed infra** — proxy via infrastructure equity funds / ETFs.
- **Unlisted / private infra funds** — LP structures like PE; 10–15Y life; inflation-linked cashflows in many cases (regulated assets with CPI-indexed revenue). Target IRR 8–13%.
- **Attractive to:** long-horizon clients (family offices, pension-style allocations) seeking stable cash yield with inflation hedging and diversification from public equity.

**6. Commodities.** Gold (monetary hedge, crisis asset), oil & gas (cyclical, geopolitical), agricultural / softs (weather-driven), metals (industrial cycle). Accessed via ETFs (e.g. GLD for gold, broad commodity baskets), commodity HFs, or — rarely — direct physical holdings (physical gold via banks' vaulting services). PBs often have a 0–5% gold allocation as portfolio ballast.

### Why feeder-fund structures exist

Most PE / HF / private debt funds accept only sophisticated institutional LPs at high minimums (often US$10M+ commitment). PB clients typically can't and shouldn't commit that individually. **A feeder fund** is a pooled vehicle (usually Cayman LP or Luxembourg SICAV-SIF) that aggregates multiple PB clients' subscriptions into a single LP commitment in the master fund.

```
PB clients ($500k each, 50 clients) → Feeder fund (US$25M) → Master fund (global LP base)
```

**Client economics in a feeder:**
- Minimum ticket reduced (US$250k–US$1M typical for PB feeders vs $10M+ direct).
- Adds a layer of fees (the feeder's own operating fee, maybe 10–25 bps plus pass-through of master-fund fees). Total fee burden for the client rises.
- Master-fund capacity may be limited → feeders often get allocated late or smaller.
- Legal / tax wrapping is simpler (single tax line from feeder; client doesn't get K-1 from master).

Subscription and redemption windows: feeders usually replicate master-fund windows (quarterly for many HFs; no redemption for PE, only distributions). Some feeders have additional "feeder-level" gates.

### Illiquidity premium — the honest version

**Illiquidity premium** (流動性溢酬) is the incremental return alternatives are supposed to pay for locking up capital. Academic estimates vary — historically 200–400 bps over comparable liquid exposure for PE, less for private debt, debatable for some HF strategies. The premium is *realised* only by investors who can actually hold through the full lockup without needing early liquidity. For an RM's framing: "this 5% yield pickup requires you genuinely not needing this money for 7–10 years. If you'll need it earlier, you'll pay more than 5% in discounts / secondary-market spreads to get out."

---

## Payoff / Economics

### Worked example — PE commitment cash-flow timing

Client commits US$5M to a buyout fund. Typical paid-in / distribution schedule over 10 years (stylised):

| Year | Capital call (paid-in) | Distribution (returns) | Net cashflow to client | Cumulative |
|---|---|---|---|---|
| 1 | US$750k | 0 | –US$750k | –US$750k |
| 2 | US$1,250k | 0 | –US$1,250k | –US$2,000k |
| 3 | US$1,250k | US$250k | –US$1,000k | –US$3,000k |
| 4 | US$1,000k | US$500k | –US$500k | –US$3,500k |
| 5 | US$750k | US$1,000k | +US$250k | –US$3,250k |
| 6 | 0 | US$1,750k | +US$1,750k | –US$1,500k |
| 7 | 0 | US$2,500k | +US$2,500k | +US$1,000k |
| 8 | 0 | US$2,500k | +US$2,500k | +US$3,500k |
| 9 | 0 | US$1,750k | +US$1,750k | +US$5,250k |
| 10 | 0 | US$1,500k | +US$1,500k | +US$6,750k |

- **Total paid-in:** US$5,000k. **Total distributed:** US$11,750k. **MOIC:** 2.35x.
- **IRR:** computed from the cashflow stream → approximately **17%** (illustrative; depends on exact timing).
- **J-curve trough:** year 4, cumulative net-out US$3.5M. Interim "paper NAV" drops below paid-in before mark-ups materialise.

**Critical observation:** client never had US$5M "invested" at any single moment; peak paid-in was ~US$3.5M in years 4–5 (before early distributions began). Committed capital ≠ invested capital at a point in time.

### Worked example — HF fee compounding

**HF fund return before fees:** 12% gross over a year.
- Mgt fee: 2% of NAV = –2%. Net gross: 10%.
- Perf fee: 20% of (10% – 0% hurdle) = 2%. Net to investor: **8%**.

Over 10 years, gross 12% compounds to 3.11x; net 8% compounds to 2.16x. The fee drag is ~31% of terminal wealth. Similar long-only funds net 2x – 2.3x; the HF's "alpha" needs to exceed the excess fee drag to justify the allocation.

---

## When to recommend (client fit)

| Client profile | Alt allocation shape | Rationale |
|---|---|---|
| UHNW, 20Y+ horizon, can absorb 7–10Y illiquidity | 15–25% alts: 8–12% PE + 4–8% private debt + 2–5% HF (multi-strat) + 2–5% RE / infra | Captures illiquidity premium; diversifies public-market beta |
| HNW retiree, income-first, moderate horizon | 5–10% alts at most: avoid long-lockup PE; use private debt funds + multi-strat HF | Illiquidity is a cost, not a feature, at this life stage |
| Family office with pension-like liabilities | 20–35% alts: heavy infra + private debt + secondary PE | Cashflow matching across multi-generation horizon |
| Tech-exec post-exit, high-conviction, global | 10–15% PE (including growth equity, secondaries); 5% VC if appetite | Personal network gives deal flow; domain knowledge in growth / VC |
| Cross-border family, FATCA-sensitive | Stick to UCITS-wrapped alts, avoid US LP structures | Reduces US tax reporting complexity |
| Concentrated-stock client | Alts help diversify away from single-name, but timing-mismatch needs care | PE commits today get called as the concentration risk is still live |

**Where NOT to recommend alternatives:**

- **Client who may need the capital in < 7 years** — PE and most PD are simply the wrong instrument.
- **Client who can't fund capital calls reliably** — forfeiting a PE commitment is a catastrophic outcome; don't set it up if the cashflow plan is wobbly.
- **Feeder fund where fee stack is > 300 bps/yr** — often not justified by strategy alpha; find a cleaner structure.
- **HF with capacity-raising "new share class"** at moment of the strategy's peak capacity — style drift and weakened returns often follow.
- **Alts as a "diversification sleeve" when client has high-vol public-market tech-stock concentration** — you're not really diversifying if the PE is mostly tech growth equity.

---

## Risks

**Illiquidity risk — the defining one.** You cannot get out when you need to. Secondary-market discounts on PE LP stakes in stress: typically 15–40% below NAV for buyout funds, worse for harder-to-value strategies. A client who must unwind in a bad market eats this discount.

**Manager selection risk.** Dispersion in alts is massive — top-quartile vs bottom-quartile PE funds over 10Y can be 1000+ bps of IRR. Due-diligence matters more here than in liquid markets. PB banks that "approve" funds onto their shelf don't remove this risk; they narrow the universe.

**J-curve / capital-call risk.** Early paper losses are normal; clients unfamiliar with this see the mark-down and want to exit (can't). Funding defaults on capital calls are severe — clients can lose their full commitment.

**Fee drag.** 2-and-20 compounded over 10 years is materially dilutive to gross returns; clients often don't appreciate the math until later.

**Valuation lag and gaming.** Private-market NAVs are stale and manager-smoothed. In a public-market sell-off, private NAVs often don't mark down for 1–2 quarters — creates a false sense of low correlation that evaporates on the next reporting cycle.

**Concentration in feeder funds.** If a feeder holds a single master fund and that fund blows up or gates, the feeder is trapped too. Multi-manager / multi-fund feeders mitigate this at the cost of another fee layer.

**Regulatory risk.** MAS and peer regulators periodically tighten distribution rules for alts. AI-only status means compliance paperwork scales. Recent years have seen stricter "retail-crossover" rules blocking certain structures.

**FATCA / CRS / reporting risk.** US-domiciled LPs create K-1 obligations for US-person investors and reporting friction for non-US investors. UCITS-wrapped alternatives avoid most of this but at some performance cost.

**Tail / blow-up risk.** Distressed HFs, leveraged credit HFs, and concentrated PE can have strategy-ending losses. LTCM (1998), Amaranth (2006), MF Global (2011), Archegos (2021), and various credit-HF implosions in 2020 are case files.

---

## Interview questions you should be able to answer

### Q1. "Client asks 'should I put 20% of net worth in PE?' — how do you respond?"

**Answer.** I'd start by decomposing "should" into three questions. First, *can* he? Does he have the 7–10Y illiquidity tolerance, the reliable cashflow to fund capital calls over 4–5 years, and the net worth where 20% is a diversifying sleeve rather than a concentrated bet? For a UHNW client with a well-funded liquidity bucket and a 20Y+ horizon, 20% in PE is defensible and near-standard in the endowment / family-office playbook. For a HNW client with cashflow constraints or shorter horizon, 20% is too much. Second, what flavour of PE? Twenty percent equally distributed between buyout, growth, secondaries, and private debt is very different from 20% in one large-buyout fund with one vintage year. I'd advocate vintage-year diversification (commit 20% over 4 years, not year-one 20%) and strategy diversification. Third, what's the implementation — direct LP, feeder fund, or fund-of-funds? Fee stack matters. I'd also stress-test: if public markets drop 30%, capital calls keep coming, and he can't fund them — does the plan still work? If the answer is "we'd default on commitments," we're over-allocated. Net answer: 15–20% PE is often right for the UHNW profile, but *how* you get there matters more than the headline number.

### Q2. "Explain the J-curve to a client in 60 seconds."

**Answer.** "When you commit to a private equity fund, you're committing, say, US$5M. But the fund doesn't take all 5M at once — it calls it over 4 to 5 years as it finds investments. In those early years you're paying in and not getting much back, and the fund's reported NAV often drops below what you've paid in, because early writedowns happen before the winners pay off. If you plotted your cumulative cash position, it looks like the letter J — you go into the hole for the first 4–5 years, then the distributions start kicking in from year 5 onwards, and the curve rises steeply above water by year 7–8. The total return is good — targeting 2–3 times your commitment — but you need to be comfortable that you'll see red on paper for the first few years before you see the shape turn positive."

### Q3. "A client wants HF exposure but can't tolerate gates. What do you recommend?"

**Answer.** Three structures can help. First, a UCITS-wrapped HF (usually a strategy-liquid-enough version, e.g. L/S equity, global macro) — UCITS rules mandate at-least-bi-monthly redemption with no gates permitted, at some performance cost vs the unconstrained offshore fund. Second, a listed HF fund or "alternatives" closed-end fund that trades on an exchange — liquidity is via secondary-market trading at a potential discount, but the NAV-level gate risk is removed. Third, a multi-strat HF from a top-tier platform (Millennium / Citadel) where gates have historically not been triggered because the strategies are liquid and the platform's book is deliberately constructed to handle redemptions without fire-sale — this is the option that best preserves strategy integrity, at the cost of capacity-constraint access (often hard to get into). I'd also separate out "gate risk" from "side-pocket risk" — gates cap redemptions, side-pockets isolate illiquid positions; the client needs to know both are in the fund's prospectus. If the client absolutely cannot tolerate any illiquidity risk, HFs may not be the right product at all — they'd be better served by a liquid-alternatives mutual fund / ETF, accepting the style drift that typically brings.

### Q4. "What's the single biggest risk in a private-debt allocation today?"

**Answer.** Default-and-recovery risk in a recession scenario. Private debt grew from roughly US$400B to US$1.5T+ AUM in the last decade — most of that growth occurred during a benign default environment, so the track record for "what happens to private debt in a real recession" is thin. Underwriting standards may have loosened at the margin as funds competed for deal flow. Typical fund marks are based on DCF and comparable-deal valuations that don't fully reflect stress scenarios. In a recession, default rates could spike from the historical ~2–3% to 8–10%, and recovery on private loans is very senior-secured-dependent — often only first-lien senior has strong recovery; unitranche and second-lien compress fast. Related risks: the Fed-cut scenario where floating-rate coupons reset lower, compressing the yield proposition. I'd recommend clients sized for a drawdown assumption — say 15–20% realised loss in a severe scenario — rather than the historical 5%. And I'd advocate diversifying across managers and vintages, avoiding concentration in any one sponsor or sector (CRE-heavy PD funds, for example, are a specific risk right now given commercial real estate's post-2020 shifts).

---

## Related products

- [`fixed_income.md`](fixed_income.md) — private debt vs public credit comparisons; HY-corp is the public analogue of private-debt direct lending.
- [`equities_funds.md`](equities_funds.md) — mutual-fund / ETF side is the liquid counterpart to HFs.
- [`leverage.md`](leverage.md) — most alternatives are not eligible Lombard collateral (0–30% LTV when accepted); implications for funding capital calls.
- [`structured.md`](structured.md) — some funds wrap alternative exposures in structured notes; understand the wrapper tradeoffs.
- [`../concepts/wealth_management.md`](../concepts/wealth_management.md) — how alternatives fit inside SAA, liquidity budgeting, and the endowment-style model.
- [`../regulation/accredited_investor.md`](../regulation/accredited_investor.md) — alternatives distribution is AI-only for most structures.
- [`../cases/03_aggressive_growth.md`](../cases/03_aggressive_growth.md) and [`../cases/04_liquidity_event.md`](../cases/04_liquidity_event.md) — case studies that use alternatives allocations.
