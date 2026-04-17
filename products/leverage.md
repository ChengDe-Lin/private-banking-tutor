# Leverage — Lombard / Securities-Backed Lending

> **Day 3 of the 7-day study path.** Lombard is the PB's quiet revenue engine. Every UHNW client of size will have a pledge line; on many books the net-interest-margin on Lombard matches or exceeds structured-product revenue. You **cannot** interview well without being fluent on LTV mechanics, margin-call workflow, and why haircuts change in stress.

## 直覺理解

Lombard（又稱 Securities-Backed Loan / SBL, 證券抵押貸款）的本質：客戶把已有的投資組合 (債券、股票、基金) 抵押給銀行，銀行按資產品質打折後借錢給客戶——通常是借**美元**，拿去再投資、買房、週轉、或做 carry。對銀行而言，這是低違約率、利差穩定的生意；對客戶而言，這是不用賣資產就能擴大資金動能的工具。**但風險不是利率，是 haircut (折扣率)**：市場下跌時，抵押品市值先跌，然後銀行可能同時收窄 LTV——這是「雙殺」，2008、2015 (港股 HSCEI)、2020 (疫情)、2022 (升息 + 股債雙殺) 都出現過。能不能活過這種 stress，才是 Lombard 決策的真正關鍵。

---

## Mechanism

### What it actually is

A **Lombard loan** (欧洲传统名称) or **Securities-Backed Loan (SBL)** is a revolving credit line from the bank to the client, secured against a pledged portfolio of marketable securities held in the client's custody account at the bank. Legally it's a pledge (担保) agreement — the client continues to own the assets, receives coupons and dividends, votes the proxy; but the bank has a first-lien security interest and can liquidate on default.

Three critical points:

1. **It is NOT a margin account.** Margin (Reg T, brokerage) is trading leverage with a narrow set of eligible collateral and strict intraday maintenance. Lombard is broader collateral, corporate-style documentation, and typically daily (not intraday) margin monitoring, with workout windows that give the client time to respond.
2. **It is revolving, not term.** The client draws what they need, repays anytime, redraws. Interest accrues on the drawn balance only.
3. **It is typically multi-currency.** Client can pledge USD bonds and draw SGD, or pledge HKD equities and draw USD. The bank's treasury runs the resulting FX position; the client just specifies the draw currency. This is how Lombard becomes an FX-carry vehicle (see `fx.md`).

### LTV — the single most important table in PB

**LTV (Loan-to-Value, 貸款成數 / 質押成數)** is the percentage of an asset's market value the bank will lend against. Equivalently, **haircut** = 100% – LTV. A 70% LTV asset has a 30% haircut.

Approximate industry-typical ranges (vary by bank, jurisdiction, issuer concentration, and market conditions):

| Asset class | Typical LTV | Notes |
|---|---|---|
| **Cash / T-bills (USD, SGD, EUR, GBP)** | 95–100% | Near-perfect collateral |
| **AAA / AA sovereign bonds (USTs, SGS, Bunds, Gilts)** | 90–95% | Floor of the collateral stack |
| **IG corporate bonds (rated A / BBB)** | 75–85% | Workhorse collateral for the bond-carry trade |
| **BBB– / crossover IG** | 65–75% | Single-name concentration cuts materially |
| **High-yield bonds** | 40–60% | Reduced, and often per-issuer cap (e.g. max 10% of pledged assets) |
| **Perpetuals / AT1 / sub-debt** | 40–65% | Post-CS AT1 (March 2023), haircuts widened sharply; some banks set to 0% for extended periods |
| **Blue-chip large-cap equities** (S&P 500 names, Hang Seng, STI) | 60–70% | Single-name caps typically 10–20% of portfolio max |
| **Mid-cap equities** | 40–55% | |
| **Small-cap / illiquid / concentrated single-name** | 0–30% | Concentration adjustments can drive LTV to zero |
| **ETFs (broad index)** | 65–75% | Treated like equity underlying with a modest discount |
| **Mutual funds (daily NAV, open-end)** | 50–70% | Varies by underlying; illiquid mandates much lower |
| **Hedge funds / private equity / illiquid alternatives** | 0–30% | Many banks won't lend at all; if they do, often fund-specific bespoke LTV |
| **Structured notes** | 30–60% | Haircut reflects embedded option risk; PP-variants higher |
| **Single-stock concentration > 10% of pledged portfolio** | haircut applied on the excess | Every bank has a policy; ask yours |

**Pledged Portfolio Value (PPV)** = Σ (market value × LTV) across all pledged assets. The client can draw up to PPV.

**Example:** a client pledges:
- US$3M IG corporates @ 80% LTV → $2.4M collateral
- US$2M large-cap equity @ 65% LTV → $1.3M collateral
- US$0.5M cash @ 100% LTV → $0.5M collateral

**PPV = $4.2M**. Against a $5.5M nominal portfolio, the client can draw up to $4.2M. Effective leverage = $4.2M / $1.3M (own equity after drawing) ≈ 3.2x, which sounds dramatic but is lower than a margin equity account and substantially lower than hedge-fund prime-brokerage leverage.

### Margin / maintenance mechanics

Unlike margin brokerage, Lombard uses:

- **Initial margin** — at trade inception / first drawdown, ensures the client starts with collateral buffer above draw. Typically PPV/draw ratio ≥ 1.0 (i.e. you can draw up to PPV, but no further).
- **Maintenance margin** — the ongoing ratio of PPV / drawn balance. Typical trigger level: **1.0** (PPV falls below drawn) begins the margin-call process. Some banks set an earlier "watchlist" level (e.g. 1.05 or 1.10) for monitoring.

**Margin-call workflow (typical — varies by bank):**

1. **Day 0 (T): Breach** — portfolio MTM drops, drawn balance now > PPV.
2. **T+1 notification** — RM (or credit desk) formally notifies the client.
3. **T+2 to T+5 cure period** — client can: (a) top up cash or securities, (b) partially repay the loan, or (c) allow the bank to sell selected pledged securities.
4. **Beyond cure period** — bank-led liquidation begins. The bank has discretion over what to sell (prospectus / pledge agreement says so), and will usually start with the most liquid and least volatile assets, but in practice sells what clears the breach fastest.

Cure periods can be shortened or eliminated during acute stress — **the pledge agreement almost always allows the bank to act intraday in extreme market conditions**. March 2020 saw several PB banks force-liquidate pledged books before the cure period ended because equity markets were gapping down 5–8%/day. Clients who thought "I have 5 days" discovered they didn't.

### Cross-collateral vs ring-fenced

- **Cross-collateral / omnibus pledge** — all drawn balances secured against the entire pledged pool. Standard for most PB clients.
- **Ring-fenced pledge / trade-specific facility** — for specific transactions (IPO finance, bridge, margin-call isolation) where the client wants the collateral pool bounded to that deal. More documentation, more operational overhead, but limits contagion risk across the book.

**Covenants and fees**

- **Commitment fee** — usually 10–30 bps on the undrawn portion for committed facilities. Most PB Lombard lines are uncommitted (no commitment fee, but bank can decline to advance without cause).
- **Draw interest rate** — typically SOFR / SORA / relevant IBOR successor + margin. PB-clients with AUM leverage their relationship: margin can range 50–150 bps above the base depending on book size, relationship depth, draw amount, and whether the facility is cross-collateralised.
- **Minimum facility size** — often US$500k or US$1M to open.
- **Documentation** — pledge agreement, account charge, sometimes personal guarantee for UHNW clients who structure through offshore entities.

---

## Payoff / Economics

### Worked example — bond-carry Lombard trade (the PB bread-and-butter)

Setup: client has **US$10M** in IG USD bonds yielding **5.5%** pledged. LTV 80% → PPV US$8M. Client draws **US$6M** (75% of PPV — a reasonable ~0.75 coverage ratio for prudent Lombard sizing) at **SOFR + 100 bps = 5.20%** (with SOFR at 4.20%). Uses the drawn USD to buy another **US$6M** of similar IG bonds.

Book after the trade:
- Assets: US$16M IG bonds yielding 5.5% × 16M = **$880k/yr coupon**.
- Liabilities: US$6M Lombard loan costing 5.20% × 6M = **$312k/yr interest**.
- Net: **$568k/yr** against US$10M own equity = **5.68% ROE**.
- Versus unlevered: 5.5% ROE. Pickup of ~18 bps for running 1.6x gross leverage on the bond book.

**That "18 bps" is the honest answer to "why would I lever a 5.5% bond to earn 5.2% financing?"** The spread is thin because the curve is inverted and credit spreads are tight. Historical carries (pre-2022) of 200+ bps produced meaningfully better ROE; current regime makes this trade a marginal proposition unless the client has a specific spread or curve view.

### Worked example — the LTV squeeze scenario

Same setup. A credit shock (say global recession + China property contagion) drives IG spreads +150 bps. Bond prices drop ~7.5% (modified duration ~5). Portfolio now marks at:

- Market value: 16M × 0.925 = **US$14.8M**
- LTV might widen from 80% to 70% (concentration or quality adjustment) → new PPV = 14.8M × 0.70 = **US$10.36M**
- Drawn: still US$6M → coverage ratio = 10.36 / 6 = 1.73, above the 1.0 trigger.

So far OK. But now add an equity-component draw:

Alternative setup: client has $5M IG bonds + $5M large-cap equity, draws $6M. Equity market drops 20%; bond market drops 5%; LTVs narrow by 5 percentage points (75%→70% on bonds, 65%→60% on equities).

- Bonds: 5M × 0.95 × 0.70 = $3.325M
- Equity: 5M × 0.80 × 0.60 = $2.40M
- New PPV: **$5.725M**
- Drawn: still $6M → **coverage 0.95, BREACHED**.

The client must top up ~$275k of cash or repay $275k of the draw — or face forced liquidation. Note that the equity dropped 20% MTM but the LTV-adjusted loss is much worse because the haircut widened. **That is the "double whammy" that defines Lombard risk.** Mitigation: size drawings conservatively (coverage ≥ 1.3–1.5 buffer), diversify pledged assets across asset classes, keep some cash or T-bills in the pledged pool so cure-period top-up is easy.

### Margin-call cure-period maths

If a client's coverage drops to 0.95 on a $6M draw, meaning shortfall = $6M × (1/0.95 – 1) ≈ $316k of PPV deficit. To cure:

- **Cash top-up**: add $316k of cash (100% LTV) → PPV rises by $316k → covered.
- **IG bond top-up**: add $316k / 0.80 = **$395k** face value of IG bonds.
- **Equity top-up**: add $316k / 0.65 = **$486k** of blue-chip equity.
- **Loan repayment**: pay down $316k of the draw directly.

The cure-period top-up requirement is why clients who run close to their LTV limit are fragile in stress — they may not have liquid assets available to top up at precisely the moment markets are dropping.

---

## When to recommend (client fit)

| Use case | Why Lombard works | Watchpoints |
|---|---|---|
| **Investment diversification** — client wants to add an asset class (EM equity, alternatives sleeve) without selling existing holdings | Preserves tax basis and embedded gains; expands allocation without forced realisation | Stress-test combined portfolio — adding a correlated asset worsens drawdown risk |
| **Real-estate bridge financing** — pending sale of one property, purchasing another | Fast execution; avoids mortgage-underwriting delays; portfolio collateral is easier than property-based loan | Ensure the pending sale is *contracted*, not hoped-for |
| **IPO / private-placement financing** — subscribing to an allocation ahead of exit | Time-limited opportunity; collateral-backed loan clears quickly | IPO lock-ups, valuation risk, allocation may not come through |
| **Tax optimisation** — deferring a capital-gain realisation by borrowing against holdings | Legitimate for long-horizon holdings; preferred in jurisdictions with high CGT | Sustainable only if underlying yield covers the interest cost; not a "tax avoidance" scheme |
| **FX carry** — pledging SGD-denominated assets, drawing USD, deploying into USD products | Captures rate differential; common way UHNW clients generate book-wide USD income | FX risk is explicit, not implicit; client must understand the carry-reversal scenario |
| **Family liquidity events** — gift, university fee tranche, divorce settlement, medical | Bridges without portfolio sell-down; tax and estate benefits | Clarify repayment source upfront |
| **Leverage trading strategies** — bond ladder carry, structured-product overlay, convertible arb | Generates incremental yield | Net spread must cover the cost + stress scenario; see the 18-bp example above |

**Where NOT to use Lombard — the honest list:**

- **Levering a speculative equity conviction to "double down"** — compounds the error when wrong; PB books have high-profile examples of HNW clients wiping out on Lombard-financed bets.
- **Maximising LTV right at facility opening** — leaves zero buffer; one MTM move triggers a margin call.
- **Multi-asset leverage where collateral is correlated with drawn use** — levering an oil-and-gas portfolio to buy more oil-and-gas is not diversification.
- **Client who cannot articulate the interest cost vs income covered back to you** — suitability fail under MAS 626 and ABS PB Code.
- **Clients who mistake Lombard for "the bank's approval" of their strategy** — the bank's credit appetite is about collateral quality, not investment thesis validity.

---

## Risks

**Interest-rate risk (carry reversal).** Lombard interest is floating (SOFR/SORA + margin). A 100 bp rate rise on a $6M draw = $60k/yr more interest — wipes out 10%+ of the coupon income on the levered book in many scenarios. 2022's rate cycle flipped many bond-carry Lombard trades into negative net income overnight.

**LTV squeeze (the double whammy).** In stress, asset values drop AND haircuts widen. Historical case files: March 2020 COVID — equity haircuts widened 10–15 percentage points on concentrated single names; 2015 HK equity sell-off — H-share LTVs cut from 60% to 40% intra-day; 2023 CS AT1 episode — perp LTVs to zero for many banks within hours. Stress-test the book assuming market MTM down 25% AND haircuts narrowing 10 percentage points.

**Concentration / name-specific cuts without notice.** Pledge agreements grant the bank discretion to adjust LTVs on specific names or sectors with as little as same-day or next-business-day notice. A single-stock concentration above 10–20% of pledged portfolio can see its LTV haircut discretely.

**Liquidity risk on pledged assets.** If the bank has to liquidate to cure a margin call, and the pledged assets are illiquid (small-cap, HY corporate bonds, bespoke structured notes), execution is wide-spread and the client's mark-to-market loss is crystallised at the bad print.

**Counterparty & operational risk.** In a bank-solvency event, pledged assets are technically still client assets but are operationally entangled. The SIPC / deposit-insurance schemes may or may not cover pledged positions. Lehman-prime-brokerage-style stories are rare but should be part of UHNW due-diligence on the bank.

**FX risk when pledging and drawing in different currencies.** A client pledging USD bonds and drawing SGD is implicitly short USD / long SGD to the extent of the draw; USDSGD move affects their drawn-debt cost in collateral terms.

**Behavioural / overconfidence risk.** Access to cheap, revolving credit invites lifestyle debt accumulation that's hard to unwind. RMs have a duty (per ABS PB Code suitability) to revisit the use-of-proceeds logic periodically, not just at origination.

---

## Interview questions you should be able to answer

### Q1. "Client has a US$10M portfolio, wants to buy a US$3M property in cash. Walk me through the Lombard conversation and the risks."

**Answer.** First, establish: why Lombard instead of a mortgage? Usually three reasons — speed (Lombard closes in days; mortgage 30+ days), flexibility on prepayment (no prepayment penalty), and preserving the investment portfolio's tax basis. Second, size the facility: if the US$10M is balanced across IG bonds and equities, LTV blend maybe 70% → PPV US$7M. A US$3M draw is comfortable, leaving US$4M of headroom. Third — and this is the most important part — stress-test: can the client service the interest (US$3M × ~6% = US$180k/yr) from income, or are we relying on portfolio dividends? Can the portfolio withstand a 25% MTM drawdown AND a 10-point LTV narrowing while still keeping coverage > 1.0? Run the numbers. Fourth, structure the repayment source clearly: is this a bridge until a liquidity event (sale of another property, option exercise, performance fee), or a term hold with no clear repayment? If the latter, ask hard — is the client slowly lifestyle-debting? Fifth, document the use of proceeds, confirm the property purchase is not a speculative flip, and file the suitability memo. I'd also note to the client that if rates rise 150 bps the interest jumps to ~7.5% / ~US$225k/yr — make sure their cashflow covers that scenario.

### Q2. "Why did AT1 LTV haircuts jump to 100% (zero LTV) in many PB books after the Credit Suisse writedown?"

**Answer.** The CS AT1 writedown on 19 March 2023 wiped CHF 16bn of loss-absorbing capital to zero while equity received partial UBS stock consideration — violating the usual creditor-hierarchy intuition. Overnight, PB credit committees had two reactions: first, the recovery on AT1 in a *resolution* scenario is not just idiosyncratic to the issuer but depends on the jurisdiction's resolution regime (Swiss FINMA framework vs EU CRD IV vs UK PRA), so LTV on AT1 couldn't be modelled as a simple percentage of face. Second, the market-price dislocation that week saw some AT1 prices drop 30–50% — so any existing LTV suddenly represented a much higher LTV against current value, triggering internal margin pressure at the bank itself (not just the client). Many PBs responded by setting LTV on AT1 to zero for a period (weeks to months), forcing clients holding AT1 as collateral to either top up with other collateral or sell into a weak market. The long-term LTV for AT1 has since normalised somewhere in the 40–65% range, but with explicit per-issuer concentration caps and written acknowledgement from the client of the writedown / PONV risk. The lesson that generalises: Lombard LTV is a bank-policy parameter, not a client right, and it can change faster than the client can react.

### Q3. "Walk me through what happens when a client gets margin-called during CNY holidays."

**Answer.** Most HK and SG PBs monitor Lombard intraday even during local market closures because their portfolios include US and European names that trade around the clock. If the breach crystallises during CNY or another SG/HK holiday, the standard workflow still applies — RM and credit desk notify the client; the cure period starts from the notification date. Bank operations run on reduced-staff mode but escalate through credit committees. In practice: (a) if the client is reachable and can wire cash or pledge additional assets, the breach can be cured across holidays; (b) if the client is unreachable or unwilling, the bank has contractual right to act on available markets (US, Europe trade while Asia is closed) — which means the pledged US bond or US equity positions are the first to get sold, not the client's Asia holdings. The client wakes up on day 1 post-holiday to find their US-dollar core book partially liquidated while their Asia positions are untouched — exactly the opposite of what they might have wanted. I'd always pre-warn clients before holidays to top up collateral proactively if their coverage ratio is thin.

### Q4. "How would you stress-test a client's Lombard book before recommending increasing the draw?"

**Answer.** Four scenarios, applied to the current PPV: (1) market MTM down 20% across equities + 5% on bonds — so-so stress, captures a moderate correction; (2) market MTM down 35% on equities + 10% on bonds + 100 bps rate rise — the 2008 / 2022-combined stress; (3) LTV schedule widens by 10 percentage points on equities, 5 on bonds, 15 on HY and perps — replicates crisis-era haircut cuts; (4) combine (2) and (3) simultaneously — the worst-case. For each, compute the new PPV and check coverage against the proposed new draw. I'd recommend maintaining coverage ≥ 1.3 under scenario (4). If the client wants to draw to coverage 1.1 under normal conditions, they're running 0.8 coverage under stress scenario (4) — that's forced-liquidation territory. I'd either refuse the incremental draw, or ask the client to first diversify the pledged pool (add T-bills, cash, or lower-haircut collateral) to widen the stress buffer. I'd document the stress test explicitly because it's exactly the suitability evidence MAS and the PB Code expect.

### Q5. "Client says 'Lombard is basically free money because my bonds yield more than the loan costs.' What's wrong with that?"

**Answer.** Three things. First, the yield-cost spread is thin right now — maybe 30–80 bps gross before management overheads — so the margin of safety is small; one rate move reverses it. Second, the "free money" frame ignores that the client's downside is asymmetric: the coupon is a known quantity but the tail (LTV squeeze, margin call, forced liquidation) can realise multi-year P&L in one stressed week. Third, and most importantly, Lombard is *leverage* — it multiplies both the income and the volatility. A client comfortable with US$10M unlevered is not necessarily comfortable with US$16M effective exposure after a $6M draw, even if they say they are today. I'd reframe the conversation as "what's the risk budget for this book, and how much of it are we using?" — not "what's the carry spread?" That's the conversation the regulator and the suitability file will want to see.

---

## Related products

- [`fixed_income.md`](fixed_income.md) — primary collateral class for Lombard; bond-carry is the most common leverage use case.
- [`equities_funds.md`](equities_funds.md) — equity haircut logic, single-name concentration adjustments.
- [`fx.md`](fx.md) — multi-currency Lombard creates FX carry; rate-differential mechanics live in the FX page.
- [`structured.md`](structured.md) — Lombard financing of structured-product purchases magnifies short-put exposure; combined position is harder to stress than either standalone.
- [`alternatives.md`](alternatives.md) — HF and PE are mostly non-eligible collateral; understand why.
- [`../concepts/wealth_management.md`](../concepts/wealth_management.md) — leverage sits inside SAA as an explicit risk-budget choice, not a separate bolt-on.
- [`../regulation/mas_notice_626.md`](../regulation/mas_notice_626.md) — MAS 626 suitability applies to leverage recommendations; enhanced CDD on clients using Lombard-funded flows.
