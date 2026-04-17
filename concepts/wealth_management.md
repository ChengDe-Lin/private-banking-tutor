# Wealth Management — Fundamentals

> **Day 4 of the 7-day study path.** If products are the vocabulary, wealth management is the grammar. Every interview answer that doesn't connect back to a client's goals, risk profile, horizon, and the SAA/TAA frame sounds like you're selling — which is exactly the thing the PB Code was written to stop. A strong answer here quietly reassures the interviewer that you understand the shape of the job, not just the names of the products.

## 直覺理解

Wealth management (財富管理) 是**客戶目標**和**銀行產品架**之間的橋樑。客戶帶來的是活在真實世界的需求 (照顧家人、退休、買房、教育、傳承、避險、成長)；銀行端有的是一堆中性的工具 (基金、債券、衍生、保險、信託、槓桿)。WM 這層是把 A 翻譯到 B——**不是翻譯成哪個產品最好賣，而是翻譯成哪個產品真的解決客戶的問題**。SAA (策略資產配置)、TAA (戰術調整)、risk profile、suitability 都是這個翻譯工作的工具。離開這個翻譯架構，任何產品推薦都只是「我賣什麼給誰」——那就是 PB Code 要治的病。

---

## SAA vs TAA — the two-horizon architecture

**Strategic Asset Allocation (SAA, 策略資產配置)** is the long-horizon target weights across asset classes, set for the client's specific goals, risk tolerance, and liquidity needs. Horizon 5–10+ years. Set by the investment committee / CIO function per risk profile (conservative / balanced / growth / aggressive). Reviewed annually; changed only when the client's circumstances change materially (retirement, liquidity event, generational transfer).

**Tactical Asset Allocation (TAA, 戰術資產配置)** is short-to-medium-horizon tilts around the SAA baseline, in response to market conditions and views. Horizon 3–12 months. Set by regional CIO / portfolio manager in coordination with the investment committee. Typically constrained to ±5–10 percentage points around each SAA asset-class weight.

**How they combine — the core-satellite frame:**

```
Portfolio  =  Core (SAA-driven, 70–85%)  +  Satellite (TAA tilts + thematic, 15–30%)
                ↑                             ↑
     low-turnover, low-cost,              higher-turnover, view-driven,
     index / core bonds / core eq         thematic ETFs, structured sleeves,
                                          alpha managers, alternatives overlay
```

The core gets the client to the long-horizon return target at minimum cost. The satellite tries to add alpha or express specific tactical views; it's the place where structured products, thematic ETFs, and TAA tilts live. If the satellite underperforms, the core still delivers the long-horizon goal — the architecture is resilient.

**Worked example — balanced SAA for a HNW SGD/USD client, age 55:**

| Asset class | SAA target | TAA range | Current tilt (illustrative) |
|---|---|---|---|
| Cash & short-dated | 5% | 3–10% | 5% (neutral) |
| USD IG fixed income | 30% | 25–35% | 28% (slight underweight, rate risk) |
| SGD / Asia fixed income | 10% | 7–13% | 10% (neutral) |
| DM equity (US / Europe / Japan) | 25% | 20–30% | 26% (slight overweight) |
| EM / Asia-ex-JP equity | 10% | 7–14% | 12% (overweight, valuation view) |
| Alternatives (HF, PE, RE, infra) | 15% | 12–18% | 14% (neutral-to-underweight, illiquidity concern) |
| Commodities / gold | 5% | 3–8% | 5% (neutral) |

The SAA column survives across multiple market cycles; the TAA column adjusts monthly. Both are documented in the client's investment-policy statement (IPS).

---

## Risk profiling — regulatory form vs practical reality

There are two layers, and a good RM / IC never confuses them:

**Regulatory layer — the risk-profiling questionnaire.** Required under MAS / ABS frameworks. Classifies clients into categories like Conservative / Balanced / Growth / Aggressive based on stated objectives, time horizon, and a series of "would you accept a 20% drawdown?"-style questions. The answers are documented, signed, and form the suitability baseline. Must be refreshed periodically (typically annually or on material change).

**Practical layer — actual behavioural risk tolerance.** What the client does when the portfolio drops 20% in six months. Clients systematically overestimate their own risk tolerance during bull markets and underestimate in bear markets. The RM/IC's job is to triangulate:

1. **Stated tolerance** (questionnaire)
2. **Prior behaviour** (what did they do in 2008 / 2020 / 2022?)
3. **Financial capacity** (can they actually absorb the drawdown without hitting lifestyle / liability pain?)
4. **Psychological capacity** (will they sleep at night? will they call you every morning?)

A true "Aggressive" client is someone who (a) says they want aggressive, (b) held through 2008 without selling, (c) has enough cushion that a 40% drawdown doesn't threaten their goals, and (d) doesn't micromanage the portfolio in stress. If any of the four is missing, the practical profile is softer than the stated one.

**The risk-capacity vs risk-willingness tension.** A young tech exec (age 32, USD 8M net worth, stable high income, 20Y horizon) has *high capacity* for volatility (huge time, big future earnings, no liabilities). If he's also psychologically steady, we align on Aggressive. But if he panics in drawdowns, even with the capacity, we dial him to Growth — documenting that it's his *willingness* that constrained the allocation. Conversely, a retired 68-year-old with USD 5M (low capacity — he can't re-earn it) may be psychologically very calm, but we still dial him back regardless — the capacity is the binding constraint.

### The four canonical risk profiles (example weightings)

| Profile | Typical SAA shape | Max drawdown acceptable | Horizon | Client stereotype |
|---|---|---|---|---|
| **Conservative** | 10% cash, 70% fixed income, 15% equity, 5% alts | 8–12% | < 5 years | Retiree, near-term liabilities, inherited wealth to preserve |
| **Balanced** | 5% cash, 45% FI, 40% equity, 10% alts | 15–20% | 5–15 years | Mid-career, approaching retirement |
| **Growth** | 3% cash, 25% FI, 55% equity, 17% alts | 25–30% | 10–20 years | Early / mid-career HNW, post-exit with long horizon |
| **Aggressive** | 2% cash, 10% FI, 65% equity, 23% alts | 35–45% | 20+ years | Young HNW, legacy / generational wealth, sophisticated |

These are illustrative; each bank has its own risk-policy exact numbers. Don't memorise these specific percentages — memorise the *shape* and *direction* of the gradient.

---

## Suitability — the MAS framework in practice

Under **MAS Securities and Futures Act (SFA)** and the **ABS Private Banking Code of Conduct** (see [`../regulation/mas_notice_626.md`](../regulation/mas_notice_626.md) and [`../regulation/pb_code_of_conduct.md`](../regulation/pb_code_of_conduct.md)), suitability rests on four pillars:

1. **Know Your Client (KYC)** — financial situation, investment experience, objectives, risk tolerance, horizon. Documented at onboarding, refreshed periodically, and anchored to the Accredited Investor / Expert Investor classification (see [`../regulation/accredited_investor.md`](../regulation/accredited_investor.md)).
2. **Know Your Product (KYP)** — the RM/IC must understand the product's mechanics, risks, fees, and how they would behave in various market scenarios *before* recommending. Not a checkbox.
3. **Reasonable Basis for Recommendation** — there must be a documented, product-client match that a reasonable advisor would reach given the same KYC and KYP.
4. **Fair Dealing and Disclosure** — clear, non-misleading explanation; fee and conflict disclosure; client acknowledgement in writing for higher-risk products (most structured products, derivatives, alts).

**Post-1MDB and post-CS AT1, the operational bar has risen:** suitability is documented **per trade, not per relationship** for structured products, derivatives, HY bonds, perps/AT1, alternatives. Enhanced CDD (continuous monitoring, not just at onboarding) applies to higher-risk clients and higher-risk products. See the regulation pages for details.

---

## Goals-based vs total-return frameworks

**Total-return framework** — maximise risk-adjusted return given the SAA mandate. One pool of money, one set of constraints, one success criterion (e.g. beat the benchmark by X net of fees over 5 years).

**Goals-based framework** — break the client's wealth into purpose-specific buckets, each with its own SAA, horizon, and success criterion:

| Bucket | Purpose | Typical SAA |
|---|---|---|
| **Lifestyle reserve** | 1–3 years of spending | Cash + short-dated bonds |
| **Safety net / liquidity** | Contingency for shocks | Short-dated IG + some cash |
| **Goal-matched** | Known future outflows (tuition, property, gift) | Liability-matched FI (see below) |
| **Growth portfolio** | Long-horizon wealth growth | Equity-heavy, alts-inclusive SAA |
| **Legacy / generational** | Multi-decade wealth transfer | Highest-risk, longest-horizon SAA; often illiquidity-heavy |

Advantages of goals-based: clients psychologically tolerate a 40% drawdown in the "legacy" bucket much better than a 15% drop in "my portfolio". Disadvantages: operationally heavier, and the total-portfolio risk/return trade-off is less optimally expressed.

**Liability-matching** — specifically sizing and laddering instruments to match a known future cashflow need. A client needs US$200k in 18 months for tuition (see `products/fx.md` worked example) — liability-matching the instrument to the cashflow (short-dated USD bond or forward-hedged USD reserve) removes the market-timing risk for that specific purpose. Not the right framing for open-ended growth goals; very right for discrete known outflows.

---

## Mandate types — Advisory vs Discretionary (DPM) vs Execution-only

**This distinction is load-bearing in interviews. Get it precisely right.**

| Dimension | **Advisory** | **Discretionary (DPM)** | **Execution-only** |
|---|---|---|---|
| Decision authority | Client decides on each trade; bank advises | Bank makes all decisions within the agreed mandate | Client decides; bank does not advise |
| Suitability duty | Yes — every recommendation must be suitable | Yes — the mandate must be suitable at the portfolio level | Minimal — client self-directs |
| Fee model | Transaction-based: commission + load + retrocession | Flat % of AUM (usually 50–150 bps/yr) | Execution commission only |
| Client engagement | Higher touch — meetings per recommendation | Lower touch — quarterly reports, annual review | Low touch — transactional |
| Typical client | Wants to be involved, likes to trade, values the relationship advice | Delegates, wants professional management, values the passive simplicity | Self-directed, institutional-style, high-information clients |
| Regulatory burden on RM | Highest — suitability per trade, per product, documented | Medium — suitability at the mandate level plus manager-level documentation | Low — confirm client understands no advice is given |

**The incentive alignment question — why this matters for PB clients.**

- Advisory mandates carry embedded conflict because the bank's revenue is linked to trade volume and product mix. Trailer fees / retrocessions on mutual funds create "steering bias". Structured-product issuance fees create issuance-bias. All legal with disclosure, but the conflict is real.
- DPM mandates realign: the bank earns a flat % on AUM regardless of what's traded, so the bank's interest is purely to grow the AUM (via performance + service) over time. Trailer fees are typically passed back to the client (clean share classes) or not earned. **This is the honest pitch for DPM**: it removes the transaction-driven conflict.
- The downside of DPM: the client relinquishes decision authority and must trust the bank's investment process. For UHNW clients with their own investment views, this is often unacceptable. For clients who want to delegate, it's simpler and often cheaper over time.

**Cost comparison worked example** (illustrative, not prescriptive):

- **Advisory** — US$10M portfolio, typical fee drag: 1.2–1.8% p.a. (trailer + commissions + structured-issuance fees across 5–10 trades/yr).
- **DPM (clean)** — US$10M portfolio, flat 75 bps = 0.75% p.a.
- **Execution-only** — ~20–50 bps p.a. on traded volume.

Advisory isn't worse than DPM in every situation — it's worse *when the client doesn't trade much* or *when the RM recommends conflict-heavy products*. For active traders valuing per-trade advice, advisory economics are fine. The interview point: **know the tradeoff and be able to speak it both ways**.

---

## Core-satellite construction and rebalancing policy

### Core-satellite

- **Core (70–85%)** — passive / index ETFs, core FI, core equity mutual funds. Low cost, low turnover. This is what gets the client to the long-horizon benchmark return.
- **Satellite (15–30%)** — higher-turnover, view-driven, alpha-seeking. Structured-product sleeves fit here. Thematic ETFs, TAA tilts, single-name tactical positions, alternatives overlays. This is where the RM/IC actually *does* stuff to earn fee.

### Rebalancing

Three standard policies:

- **Calendar rebalancing** — rebalance every N months (typically monthly or quarterly) regardless of drift. Operationally simple; forces discipline but ignores information.
- **Threshold / band rebalancing** — rebalance when any asset class drifts outside its TAA band (e.g. ±5 percentage points from target). Responsive to market moves; can over-trade in volatile periods.
- **Hybrid** — calendar review (quarterly), but only trade if drift exceeds threshold. Most banks use this in practice.

Tax and transaction-cost considerations: rebalancing generates realised gains and costs; tax-sensitive clients and high-fee products should be rebalanced less frequently. A jurisdiction like SG (no capital-gains tax on individuals) is easier than HK / US / TW (tax considerations).

### Fee models in depth

- **Transaction commission** — per-trade fee; the "meter-running" model. Default for advisory mandates. Creates incentive to trade more.
- **Management fee (% AUM)** — flat %, ongoing. Default for DPM and some advisory-plus mandates. Aligns incentive to AUM growth over time.
- **Performance fee** — paid only above a hurdle and high-water mark. Common in alternatives, rare in core PB mandates.
- **Retrocession / trailer fees (回佣)** — ongoing payments from fund managers to distributors. Widely banned or required-to-be-rebated in the UK (RDR 2012) and EU (MiFID II for independent advisers); in SG / HK / APAC, required to be disclosed but not banned outright. MAS has moved toward stronger disclosure but stops short of outright prohibition.

**Interview-test:** explain how you'd handle a client asking "are you paid more if you recommend Fund A over Fund B?" Answer: truthfully. "Fund A has a 30 bp trailer back to the bank; Fund B does not. Our recommendation is based on fit to your mandate, and I want you to know the economics of both before we decide." That answer survives the PB Code, survives the regulator, and often wins the client's trust.

---

## Interview questions you should be able to answer

### Q1. "A new client walks in — US$20M cash in USD, retired, Singapore resident. Walk me through the first meeting."

**Answer.** First meeting is mostly listening. I'd structure it in five parts, around 60 minutes. **Intro (5 min):** rapport, bank overview, frame that today is about understanding him, not pitching. **KYC — the conversation, not the questionnaire (20 min):** family structure (wife, children, where they live, any existing PB relationships), life situation (retired from what, what's next, spending lifestyle), specific goals — current spending need, legacy wishes, charitable intentions, any known outflows (property, gift, tuition). **Financial picture (15 min):** the US$20M in USD is one piece; what else? SG property, CPF, onshore investments, any business holdings, other PB accounts. Source of wealth narrative — how the US$20M accumulated (career, sale of business, inheritance). FATCA / CRS status. **Risk framing (10 min):** not the formal questionnaire yet — a conversation about 2008 / 2020 / 2022, what he held, what he did, what he'd do now. This is the *practical* risk-tolerance read. **Next steps (10 min):** set up the second meeting to walk through a proposed IPS (Investment Policy Statement), initial SAA, and mandate choice (advisory vs DPM). Leave him with a short written summary of what we discussed and nothing to sign today — builds trust that we're not rushing him. Internal next: the compliance/AML review and documentation kick off from my side.

### Q2. "Pitch DPM vs advisory to a client who's undecided."

**Answer.** Frame it as a tradeoff between decision-ownership and cost alignment. "Advisory means every trade, every recommendation, comes to you for approval. I bring you ideas, you decide. Good if you enjoy being involved and have views you want to express — a lot of our most successful clients love this — and if you trade enough to get value from the per-trade advice. The cost shape is per-transaction plus fund / product fees. Discretionary means you give me, within agreed guardrails — your SAA, your risk profile, your constraints — the authority to run the portfolio day-to-day. I report to you quarterly and we meet annually to review. Good if you'd rather delegate and focus on your business / family / retirement, and good if you value knowing the bank's incentive is simply to grow your AUM over time, because we charge a flat fee on assets regardless of what's traded. The downside of DPM is you give up trade-by-trade control; the downside of advisory is that the bank's revenue depends partly on what and how often we trade, so there's inherent conflict of incentives that disclosure manages but doesn't eliminate. For most clients who don't actively trade, I'd lean DPM; for clients with specific views they want to express, advisory. We can also do a hybrid — DPM on the 70% core, advisory on a 30% satellite where you want to be hands-on. Let's talk about which fits you."

### Q3. "What's the difference between strategic and tactical asset allocation, and how do they interact?"

**Answer.** SAA is the long-horizon target — 5 to 10 years — expressed as weights across asset classes, set to match the client's goals, risk profile, and liquidity constraints. It's reviewed annually and only changed when the client's situation changes materially. TAA is short to medium horizon — 3 to 12 months — tilts around the SAA in response to market conditions and the bank's CIO view. Typically constrained to ±5 to ±10 percentage points from each SAA weight. They interact in a core-satellite frame: the SAA-driven core (70–85% of the portfolio) is low-turnover, low-cost exposure to the target weights; the satellite portion (15–30%) expresses the TAA tilts plus any thematic or tactical ideas. The discipline is: don't let TAA drift quietly into permanent changes — that's when clients end up with an SAA they never signed up for. Rebalancing policy enforces this: either calendar-based, threshold-based, or hybrid, with the SAA weights as the baseline target.

### Q4. "How would you handle a client who insists on a structured product you don't think is suitable for him?"

**Answer.** Don't fight him directly; reframe. Three moves. First, surface the mismatch explicitly — "let me share what concerns me about this product for your specific situation" — and walk through the mechanism, the scenarios where it pays, and the scenarios where it hurts, in his specific context (liquidity need, concentration, risk profile). The goal is to change his mind by informing, not by refusing. Second, if he still wants it, see if there's a *modified version* that addresses the suitability concern — shorter tenor, different underlying, lower notional, principal-protected variant — that preserves the upside he wants without the part that's wrong for him. Many insistent-client cases are really "I like the idea but I haven't thought through the details." Third, if he still wants the original, exactly as structured, and the mismatch is material — document it. Get his written acknowledgement of the risks. Depending on severity, escalate internally to my team head or suitability committee; there are products I won't book even with acknowledgement. The PB Code expects the RM to refuse when a trade is clearly unsuitable — "client insisted" is not a valid defence at MAS. Losing that trade is the right outcome. I'd frame the internal conversation as: "I'd rather lose this specific trade than spend the next two years in a complaints process after the product hurts him."

### Q5. "Client has US$5M, 10-year horizon, says 'aggressive growth'. How do you decide whether he's actually aggressive?"

**Answer.** Four triangulation points, and I'd probe all four. One, the stated tolerance — the questionnaire answers, the "would you accept a 30% drawdown" kind of question. Treat as baseline, not truth. Two, prior behaviour — what did he hold and what did he do in 2008, 2020, 2022? If he panic-sold in COVID at the low, his practical tolerance is not aggressive regardless of what he says. Three, financial capacity — does US$5M aggressive-growth even fit his life? If he needs this money for near-term expenses or has dependents relying on it, capacity is constrained. US$5M for a 35-year-old with high income and no dependents has very different capacity than US$5M for a 60-year-old about to retire. Four, psychological capacity — will he micromanage and call me every Monday after a bad week? If yes, he can't sit through an aggressive SAA even if capacity supports it. If all four check out — stated, prior, capacity, psychology — then genuinely aggressive, probably 65–70% equity, 15–20% alts, small cash and FI. If any of the four is softer than the stated aggressive, I'd dial back one profile level (Growth instead of Aggressive) and document why. The documentation matters because if the portfolio blows up and he sues, the question isn't "what did he say" but "what did you observe, and did you accommodate the softer signal." That's the MAS 626 / PB Code posture.

---

## Related

- [`cio_house_view.md`](cio_house_view.md) — how the bank's investment committee produces the views that drive TAA.
- [`../products/`](../products/) — every product page's "When to recommend" section uses the SAA / risk-profile frame from here.
- [`../regulation/mas_notice_626.md`](../regulation/mas_notice_626.md) and [`../regulation/pb_code_of_conduct.md`](../regulation/pb_code_of_conduct.md) — the suitability framework in regulation form.
- [`../regulation/accredited_investor.md`](../regulation/accredited_investor.md) — the AI / EI classification that gates much of the advisory product shelf.
- [`../cases/`](../cases/) — five case studies that walk through SAA / product selection in concrete scenarios.
- [`../roles.md`](../roles.md) — RM vs IC emphasis on this material.
