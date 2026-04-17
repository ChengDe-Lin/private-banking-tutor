# Fixed Income

> **Day 3 of the 7-day study path.** Bonds are the largest single line item on most private-banking balance sheets — on a UHNW book you will often see 40–60% in fixed income, even for "aggressive" clients once Lombard leverage and carry are layered on. Every RM / IC interview will push on duration, callable/perpetual mechanics, and the 2023 Credit Suisse AT1 writedown. Know the numbers.

## 直覺理解

一張債券 = **未來一串固定現金流的打包票據**。你付現在的錢 (price)，換未來一系列的利息 (coupon) + 本金 (principal) 回流。同一組現金流可以用三種方式看價：殖利率 (yield) 倒推出折現率、信用利差 (credit spread) 看超出無風險利率多少、存續期 (duration) 看利率漲 1 個百分點價格會掉多少。**價格與殖利率反向移動** (interest rate 漲 → 舊券變不香 → 價格跌)，這是所有債券直覺的起點。

---

## Mechanism

### The four prices of the same cashflow

A straight fixed-coupon bond is just a contract that pays you coupon C each period for T periods, then returns par (100) at maturity. The same cashflow can be priced four ways; you need to recognise all four instantly.

| Quoted as | What it means | Where you see it |
|---|---|---|
| **Clean price** (乾淨價) | Price ex-accrued interest. This is what's shown on Bloomberg and on client statements. | Trade tickets, client confirms |
| **Dirty price** (全價 / 結算價) | Clean + accrued interest since last coupon. This is what actually changes hands on settlement. | Settlement ledger |
| **Yield-to-maturity (YTM, 到期殖利率)** | The single discount rate that makes PV of all remaining cashflows = dirty price, assuming the bond is held to maturity with all coupons reinvested at YTM. | Default yield quote for bullet bonds |
| **Yield-to-worst (YTW, 最差殖利率)** | The lowest of {YTM, YTC at each call date, YTP at each put date}. For callable bonds this is the conservative assumption because the issuer will only call when it's *bad* for you (rates fell). | Callable IG, perpetuals, AT1 |

**Accrued interest intuition:** if a bond pays 5% annually and we're 73 days past the last coupon, accrued = 5 × 73/365 ≈ 1.00 per 100 notional. The buyer pays the seller this 1.00 on top of clean, because the buyer will receive the full coupon at the next payment date.

### Duration and convexity — at intuition level

**Modified duration (D_mod, 修正存續期)** is the first-order answer to "what happens if yields move 1 bp?" — price change ≈ –D_mod × Δy × price. A 5-year IG bond with D_mod ≈ 4.5 loses roughly 4.5% on a +100 bp parallel shift.

Rules of thumb worth memorising:

| Bond | D_mod ballpark |
|---|---|
| 2Y UST (bullet) | ~1.9 |
| 5Y UST | ~4.6 |
| 10Y UST | ~8.7 |
| 30Y UST | ~18–20 |
| AT1 perp (to next call) | 3–6 (behaves like a ~5Y bond until call expectations break) |
| Zero-coupon 10Y | ~10 (= maturity, since no intervening coupons) |

**Convexity (凸性)** is the second-order correction. Positive convexity means the bond gains more on a rate cut than it loses on an equal rate hike — the curve bends in the bondholder's favour. Vanilla bullet bonds have positive convexity; **callable bonds have negative convexity near the call price** (the call ceiling caps the upside but not the downside), which is why callable perps look "cheap" until you notice the asymmetry.

**Macaulay duration** (the weighted-average time to receive cashflows, in years) is conceptually clean but less directly useful for MTM thinking. Modified duration = Macaulay / (1 + y/n). Interviewers rarely drill this; if asked, give both definitions and move on.

### Credit spread — the extra yield for issuer risk

For a risky bond:

```
YTM_bond  =  risk-free rate  +  credit spread  +  (liquidity / optionality premia)
```

The **credit spread** is the market's compensation for taking on default risk over the benchmark curve (USTs for USD-denominated; SGS for SGD; Bund for EUR). Two measures you should separate:

- **G-spread** — YTM minus the YTM of an on-the-run govie of matched maturity. Simple, widely quoted.
- **Z-spread** — the constant spread added to the *entire* zero-coupon Treasury curve such that discounted cashflows = dirty price. Handles the curve's shape, not just its maturity-matched point. Standard for IG and HY trading.
- **Asset-swap spread (ASW)** — spread over floating (SOFR / SORA) after swapping fixed coupons to floating. This is what a bank carrying the bond against floating funding actually earns.

Ratings ladder (Moody's / S&P / Fitch — memorise the cutoffs):

| Tier | S&P | Moody's | Notes |
|---|---|---|---|
| **Investment Grade (IG)** | AAA → BBB– | Aaa → Baa3 | The "BBB– / Baa3 cutoff" is load-bearing — drops below here and many institutional mandates force-sell |
| **High Yield (HY) / "junk"** | BB+ → CCC and below | Ba1 → Caa and below | Higher coupon, higher default; requires AI in PB distribution |
| **Distressed** | CCC– / D | Caa3 / C | Often priced as a % of par recovery, not as a yield |

---

### Sub-categories a PB interview expects you to separate

#### 1. Government bonds

- **USTs** (United States Treasuries) — global risk-free benchmark. 2Y / 5Y / 10Y / 30Y are the quoted tenors; TIPS (inflation-linked) for real-yield exposure.
- **SGS** (Singapore Government Securities) — AAA-rated (one of very few AAA sovereigns), issued by MAS, used by SG clients for SGD duration and by Lombard books as high-LTV collateral.
- **Local-currency Asia govies** — China CGB, India Gsec, Indonesia, Thailand, Malaysia. Often FX-risk the real driver, not the rate; clients typically access via funds rather than direct lines.

#### 2. Investment-grade corporates

- USD-denominated IG is the dominant building block for a HNW income sleeve. Typical book: mix of US / European financials, Asian IG (bank seniors, top-tier China SOE, Korean chaebol, Indian IG).
- Senior unsecured vs senior secured vs subordinated — capital stack position determines recovery and spread. Always check the prospectus for the ranking, not the ticker.

#### 3. High-yield (HY) corporates

- Coupons 6–12% territory (as of the 2023–2025 environment); default rates ~3–5% through-the-cycle, multiples higher in stress.
- **Asia HY** — historically dominated by China property (Evergrande, Kaisa, Country Garden) through 2020–2022; a generation of PB clients was marked down 60–90% in that sector. Still a category in interviews: "would you have held China property HY in 2020 — at what portfolio weight?"
- For PB distribution, HY is AI-only and typically sleeve-sized at single-name positions of **<2% of the book** for prudent RMs.

#### 4. Perpetuals (永續債) — the highest-yield "IG" you'll be pitched

Perpetual bonds have no fixed maturity. Most are **callable** on a schedule (e.g. every 5Y after first-call); the coupon resets to a new level (often "5Y mid-swap + original spread") if not called. They sit in bank capital stacks as **AT1 (Additional Tier 1)** or **Tier 2**, and in corporate capital stacks as hybrid/sub-debt.

**Extension risk (延展風險)** is the first-order trap. The market prices most AT1s **to the first call date** — so a 5% coupon, 5Y to next call, is quoted like a 5Y 5% bond at ~5% YTC. If the issuer doesn't call (because refinancing cost is higher than the reset coupon), the bond suddenly behaves like a *very* long-duration instrument. MTM can drop 10–25% overnight on a missed call.

**Credit Suisse AT1 writedown (19 March 2023)** — the must-know precedent. When UBS acquired CS in the FINMA-directed rescue, CHF 16 billion of CS AT1 bonds were written down to zero *before* the equity was wiped out. This violated the usual creditor hierarchy intuition ("equity absorbs losses first"), because the specific AT1 prospectuses had a Viability Event / Permanent Writedown clause that FINMA triggered. Global AT1 spreads widened 100+ bp in days. Key PB takeaways:

1. "Investment grade" perps aren't senior debt — they're regulatory capital whose whole point is to absorb losses.
2. Read the prospectus for the trigger: CET1 ratio threshold, PONV (Point of Non-Viability) clause, permanent writedown vs temporary.
3. The recovery in the CS AT1 episode was driven by a specific CH / FINMA framework — EU AT1s (CRD IV) retain creditor hierarchy and bondholders rank ahead of equity. Jurisdiction matters.
4. Never sell an AT1 by quoting "it's issued by a G-SIB, it's safe" — your client will hand that line back to you in a lawyer's letter.

#### 5. Convertible bonds (可轉債)

A convertible = a straight bond + an embedded long call on the issuer's equity. The client owns the call (for free, in exchange for accepting a lower coupon). Price behaviour:

- When the stock is far below the conversion strike — the convert trades like a bond; duration-driven.
- When the stock is near the strike — equity-sensitive region (the "sweet spot"); delta is partial.
- When the stock is far above the strike — trades like equity; delta ≈ 1, the bond component is an OTM put against default.

Clients use convertibles as a "bond with equity kicker" — asymmetric exposure to a specific issuer. Fund-wrapped (convertible-arb HFs, convertible funds) is more common than single-line in PB.

#### 6. Sukuk (伊斯蘭債券)

Shariah-compliant. No interest coupon; instead, cashflows are rental income (Ijarah), profit-sharing (Mudarabah), or cost-plus (Murabahah) structured against an underlying asset. Economically similar to a secured bond with a specified cashflow schedule. Mainly relevant for Middle-East / Malaysia / Indonesia client flows and GCC sovereign issuance. One paragraph in an interview is enough unless the bank has a dedicated sukuk desk.

---

## Payoff / Economics

### Worked example — duration math

**Bond A:** 5Y USD corporate, 4% annual coupon, currently at par (price 100.00), YTM 4%.

- **D_mod ≈ 4.5** (close to the 5Y UST bullet figure because the coupon isn't very different from YTM).
- Rates move +100 bps parallel. Price change ≈ –4.5 × 1% × 100 = **–4.50**. New price ≈ **95.50**.
- Add convexity (~0.25): correction ≈ +½ × 0.25 × 1² = +0.125. New price ≈ **95.63**.
- Client bought at 100, now marked 95.63 — unrealised loss 4.4%. Coupon still flows at 4/yr. Break-even time ≈ 4.4 / 4 = ~1.1 years of carry (ignoring reinvestment).

### Worked example — yield-to-worst on a callable perp

**Bond B:** AT1 perp issued at 100, coupon 5.5%, first call in 5Y, reset thereafter to 5Y mid-swap + 350 bps.

- If currently priced at **100** and called on date: YTC = YTM-to-call = 5.5%.
- If priced at **92** and called on date: YTC ≈ 5.5% + (100–92)/5 / 0.96 ≈ 7.2%.
- If priced at **92** and **not called**, the next-reset coupon with 5Y MS at 4.0% = 4.0% + 3.5% = 7.5%; but extension risk means the bond trades on its new duration which could be 8–10Y+, so the MTM could drop further.
- **YTW** = min(YTC, YTM under non-call) — the number you quote to a client. Always less sunny than the headline coupon.

### Spread compensation worked out

**Bond C:** 10Y USD IG industrial, coupon 5.25%, priced at 99.00, G-spread +180 bps over the 10Y UST at 4.20%.

- Implied YTM ≈ 5.25 + (100–99)/10 = 5.35%.
- Spread decomposition: 4.20% risk-free + 1.80% credit = 6.00% gross; minus 0.65% (rough correction for coupon>YTM timing) ≈ 5.35%. (Illustrative — in practice you'd use Z-spread.)
- "180 bps for 10Y single-A industrial" is in the 2024–2025 range for IG; comparing it to the issuer's CDS (if traded) tells you whether bond-CDS basis is positive or negative.

---

## When to recommend (client fit)

| Client objective | FI sleeve that fits | Rationale |
|---|---|---|
| Retiree, USD income, preservation first | Short-dated USTs + AAA/AA IG corporates (2–5Y) | Low duration risk; predictable cash-matching to living expenses |
| HNW income seeker, moderate risk | IG laddered 3–7Y + 10–15% HY sleeve | Blended yield 5–7% in the 2024–2025 range; diversified issuers (min 20 names) |
| Aggressive / tactical, believes in issuer-name recovery | Stressed IG, selected HY, Asia HY basket | Only if client can sit through drawdowns; single-name caps at 1–2% of book |
| Wealth transfer / long-horizon UHNW | Perps (AT1 / bank sub-debt) + 30Y sovereign sleeve | Long duration for estate laddering; AT1 for carry — size small, read prospectuses |
| Liability-matched (funding a known future outflow: tuition, property settlement, gift) | Zero-coupon / bullet match by date | Locks the future value; removes reinvestment risk |
| Lombard-leveraged income strategy | IG bonds pledged @ 75–85% LTV, carry the spread | Very common PB play: bond yields 5.5%, SOFR-based loan costs 5.2%, nets 30 bps on levered notional — only viable when curve is positively sloped |

**Where NOT to use fixed income naively:**

- **Long-duration bonds into a rate-hiking cycle** — the 2022 episode (10Y UST returns –17%) wiped out years of coupon in one year. Not a theoretical risk; every client above 50 remembers 2022.
- **Single-name HY at >2% of book** — idiosyncratic blow-ups (Evergrande, CS AT1) can be recovery-zero events.
- **Perps marketed as "like a 5-year bond"** — they're not. Extension risk is the whole point.
- **High-coupon EM sovereign without FX hedging** — Argentina, Turkey, Egypt; coupon looks great, FX wipes it.

---

## Risks

**Interest-rate (duration) risk.** First-order loss on rate hikes. 2022's UST drawdown is the canonical recent example. Mitigation: duration budgeting (set a target portfolio duration consistent with horizon), laddering, floaters.

**Credit (default) risk.** Issuer fails to pay; recovery determined by position in the capital stack. For IG, historical losses are <0.5%/yr through-the-cycle; for HY, 2–5%/yr depending on vintage. Concentration is the killer — a 20-name IG portfolio behaves very differently from a 5-name one.

**Call risk / reinvestment risk.** When rates fall, issuers call their highest-coupon bonds first (the ones you most want to keep). You are forced to reinvest at lower rates. This is why YTW, not YTM, is the honest quote for callable paper.

**Extension risk.** The flip side for AT1s and perps: when rates rise and the issuer doesn't call, the bond's duration extends and the MTM drops. Can be 10–25% overnight.

**Liquidity risk.** On-the-run USTs and liquid IG trade tight; long-dated HY and small-issue IG widen 100–300 bps in stress. A client who must sell into a stressed market eats the bid-offer. Particularly relevant for 144A USD Asia HY.

**FX risk.** A USD bond held by a SGD-base client carries embedded FX. DXY moves can swamp the coupon over a year. Hedging (FX forward overlay) costs roughly the rate differential — which for SGD vs USD in a high-rate-differential period can be 100–200 bps/yr of "hedging cost" that's really just carry denial.

**Regulatory / capital-structure risk (AT1-specific).** Writedown clauses, PONV triggers, permanent vs temporary writedown — the CS AT1 lesson. Prospectus-level specificity matters; a client can't rely on issuer brand.

**Embedded-option risk.** Callable, convertible, and exchangeable bonds have optionality that belongs to the issuer, not the client. Convertibles are the exception — the option is long for the client. Read every indenture.

---

## Interview questions you should be able to answer

### Q1. "Client is 62, retiring next year, USD base, wants 5% income on US$15M. Walk me through the FI sleeve."

**Answer.** I'd target a 60–70% allocation to USD fixed income for this profile — roughly US$10M. Structure: a 60% core of IG corporates laddered 2–8Y (pulls ~5.0% YTM at current USD IG levels in the 4.5–5.5% range), 20% USTs for duration balance and Lombard-eligible AAA collateral, 15% short-dated IG floaters to hedge rate-rise risk, 5% sleeve of selective perps / sub-debt for carry enhancement. Minimum 25 issuers to cap single-name concentration at ~2% of the bond sleeve. I'd *not* pitch HY or EM to this client unless he explicitly asked — his objective is income *and* sleep-at-night, and HY drawdowns don't fit that. I'd also run a stress test: +200 bps parallel shift would mark the core down ~7–9% temporarily, but coupons keep flowing; we'd ride it out, and he'd know that going in.

### Q2. "Explain duration to a client in one sentence, then to me in two."

**Answer.** *Client:* "Duration is roughly how many percent your bond portfolio goes down if interest rates go up by one percent — so a portfolio with duration 5 drops about 5% on a one-percent rate rise, and gains about 5% on a one-percent rate fall." *Interviewer:* "Modified duration is the first derivative of price with respect to yield, expressed as a percentage — it gives the first-order MTM impact of a parallel yield shift. Convexity is the second-derivative correction; it's always positive for bullet bonds and negative near the strike for callable bonds, which is why callable perps look cheap until you notice the asymmetric payoff."

### Q3. "After the Credit Suisse AT1 episode, how would you reposition a client holding 15% of his FI sleeve in bank sub-debt?"

**Answer.** First, I'd separate two questions: *do* we keep bank sub-debt, and *how* do we hold it. On the first — yes, AT1 remains a legitimate carry enhancer for clients who can absorb a permanent-loss scenario on 1–2% of portfolio; the CS episode was a sharp reminder of tail risk, not a reason to blanket-exit a US$400bn market. On the second — I'd cut the 15% allocation to 5–7%, redirect the rest into senior bank paper and IG industrials (gives up ~150–200 bps of yield, which is the right "insurance premium" to pay). I'd diversify across jurisdictions: CS showed CH AT1 hierarchy is different from EU CRD IV or SG MAS Notice 637 capital rules. Cap single-name AT1 exposure at 1% of total portfolio. And I'd document: prospectus reviewed, writedown trigger noted, and the client acknowledged the loss-absorption feature — paperwork the RM needs anyway after that episode under the MAS 626 enhanced suitability posture.

### Q4. "YTM vs YTW — when would the two diverge meaningfully?"

**Answer.** They diverge on any bond where the issuer has an option against you: callable bonds, perps, make-whole callables, Bermudan-exercise structures. For a non-callable bullet they're equal. On a 5Y callable IG trading above par, YTM (assumes held to maturity) can be 5.5%; YTC (assumes called at next call) could be 3.8% — the gap is pure call-option value that accrues to the issuer. YTW is min(YTM, all YTCs) and is the conservative investor quote. Always the first yield I give a client.

### Q5. "A client reads that inflation is back; should we buy TIPS?"

**Answer.** TIPS (or SGS-linked equivalents) pay a real-yield coupon plus an inflation accretion tied to CPI. They hedge *unexpected* inflation, not expected — markets already price expected inflation into the breakeven. Current 10Y breakeven (as of 2026-04-17, CIO deck number) tells you what the market expects; buying TIPS beats nominal only if realised inflation exceeds breakeven. For a client worried about a *specific* inflation regime change (policy shift, commodity shock, FX passthrough), a 10–20% TIPS overlay on the FI sleeve is sensible. For a general "inflation is back" concern, I'd first ask whether the existing portfolio (equities, real assets, floating-rate bonds) doesn't already carry that exposure implicitly — often it does, and TIPS would be redundant duration in a different coat.

---

## Related products

- [`derivatives.md`](derivatives.md) — callable / puttable bonds have embedded options; convertible bonds are bond + long call. The primitives live there.
- [`fx.md`](fx.md) — cross-currency coupon hedging, NDFs for EM local-currency bonds.
- [`structured.md`](structured.md) — credit-linked notes (CLN) and principal-protected notes sit between FI and structured; mechanics cross-reference.
- [`leverage.md`](leverage.md) — bond-carry Lombard trades are the most common PB leverage strategy; LTV tables, haircut logic.
- [`../concepts/wealth_management.md`](../concepts/wealth_management.md) — FI as the anchor of most SAAs; liability-matched vs total-return framings.
- [`../regulation/accredited_investor.md`](../regulation/accredited_investor.md) — HY and AT1 distribution restrictions.
