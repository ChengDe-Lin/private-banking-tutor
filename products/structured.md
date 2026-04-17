# Structured Products

> **Day 2 of the 7-day study path.** This is the interview's centre of gravity. Every product below is an option position wrapped in a deposit or zero-coupon sleeve; if [`derivatives.md`](derivatives.md) is shaky, re-read it before proceeding. For regulatory treatment (Accredited Investor, Specified Investment Product, MAS 626 / ABS PB Code suitability), see [`../regulation/accredited_investor.md`](../regulation/accredited_investor.md) and [`../regulation/mas_notice_626.md`](../regulation/mas_notice_626.md).

## 直覺理解

結構型商品 = **存款 / 零息債券 + 選擇權** (option) 的組合包裝。所謂「增強收益 (enhanced yield)」，本質上是**客戶把波動率賣給銀行**，收到的權利金 (premium) 包裝成誘人的 coupon。當市場照常運作，客戶拿到高於存款利率的配息；當市場走反方向 (下跌穿過 strike、敲入 (knock-in) 障礙觸發)，客戶就要吃下自己賣掉的那個部位的尾端風險——通常是被迫以 strike 價買進已經大跌的標的，或被交割外幣而承擔匯損。一句話：**coupon 不是利息，是保費；你是保險公司，不是儲戶。**

> 💡 **Bottom line for interviews:** Yield-enhancement structured notes (DCI, ELN, FCN, autocallable, accumulator) all make the client **net short optionality** — the high coupon is premium for warehousing tail risk, not interest for lending money.

---

## Mechanism

### The general structure — two halves

Every structured product on a PB shelf decomposes into two building blocks:

```
Structured note = (1) Deposit or zero-coupon bond sleeve  +  (2) Option position
                      ↑                                       ↑
             provides principal return                pays the "enhanced" coupon
             (par at maturity, roughly)               (premium the client receives
                                                     for short option, or pays for
                                                     long option in PP variants)
```

- The **deposit/ZCB sleeve** guarantees (or mostly guarantees) the par redemption at maturity, assuming the issuer is solvent. For a 1-year note at 5% risk-free, about **95** of every **100** notional is used to buy a zero-coupon bond that grows back to 100 at maturity.
- The remaining **~5** of every 100 notional is the **option budget**. The structuring desk either (a) *sells* an option (short put on a stock, short USD call on an FX pair) and combines the premium received with the ZCB leg to produce a higher coupon — this is the **yield-enhancement** family (DCI, ELN, FCN, autocallable, accumulator), **where the client is net short optionality**; or (b) *buys* an option (call spread, knock-in put) so the client participates in a market move while principal stays protected — this is the **participation / principal-protected** family, **where the client is net long optionality** and the coupon is therefore lower.
- The RM's job is to be explicit about which half pays the client: in yield-enhancement products the client is the insurance *seller*; the "high coupon" is just the premium that would otherwise accrue to a market-maker. There is no free lunch embedded in the wrapper — just a re-labelling of short-vol P&L as "coupon".

### Suitability and regulatory wrapping (SG)

Structured notes distributed in Singapore are **Specified Investment Products (SIPs)** under the Securities and Futures Act (SFA) and, by construction, **Capital Markets Products**. Most PB structured flows are sold exclusively to **Accredited Investors** (AI — S$2M net personal assets, S$1M financial assets, or S$300k income; see [`../regulation/accredited_investor.md`](../regulation/accredited_investor.md)) under the AI exemption, which waives the prospectus requirement and certain disclosure rules. Retail-distributed variants exist for principal-protected and capital-guaranteed notes but require a capital-markets-services-licensed distributor and a full product-highlights-sheet; the AI-only route is what you will sell 95% of the time at a PB. Regardless of investor class, **suitability documentation per trade** (not per relationship) is the expectation under MAS 626 and the ABS PB Code — a fact that becomes load-bearing every time a knock-in or accumulator hurts a client.

### Common mechanics vocabulary (中文 annotated)

| Term | Traditional-Chinese | What it means | Which products use it |
|---|---|---|---|
| Strike | 履約價 | The reference price at which conversion / settlement / assignment happens | all |
| Knock-in (KI) | 敲入 | A lower barrier; if breached, a short put becomes "live" and the client is exposed to stock delivery at the strike | ELN-KI, FCN, autocallable |
| Knock-out (KO) | 敲出 | An upper barrier; if breached, the structure terminates early (usually favourably to the client — they get coupon + par back) | ELN-KO, accumulator, autocallable (autocall event IS a KO event) |
| Worst-of | 最差表現標的 | In a multi-underlying basket, the payoff is driven by whichever underlying has performed *worst* | autocallable, worst-of FCN |
| Observation date | 觀察日 | Scheduled dates when autocall / KO / KI tests are run (daily, monthly, quarterly) | autocallable, range accrual, accumulator |
| Memory coupon | 記憶型配息 | Missed coupons accrue and are paid in the first period a coupon condition is met | autocallable |
| Principal protected | 保本 | Issuer guarantees par return at maturity; client gives up most of the option premium to fund this guarantee | PP-ELN, capital-guaranteed notes |
| Issuer call | 發行人贖回權 | The issuer (bank) has the right to redeem the note early at par | callable range accrual / CDRAN, callable deposits |
| Bonus level | 紅利觸發水準 | Upside threshold at maturity; if underlying closes at/above, client receives a conditional bonus coupon | BEN |
| Participation rate | 參與率 | In bonus / PP variants, the fraction of above-strike upside paid to the client at maturity | BEN, PP-ELN |

All of these are option-theoretic primitives covered in [`derivatives.md`](derivatives.md) — I am not re-deriving barriers, parity, or Greeks here. Pull that page up in another tab.

---

### 1. DCI — Dual Currency Investment (雙貨幣投資 / 雙元存款)

**Mechanism.** A DCI is a short-dated (typically 1-week to 1-month) deposit where the client commits to *potentially* convert the deposit into a second currency (the *alternate / linked currency*) at a pre-agreed strike FX rate on maturity. On the settlement date, if the alt currency has weakened past the strike vs the base currency, the client is converted into the alt currency at the (now unfavourable) strike; otherwise, they receive their base-currency principal back. In both cases, they receive an elevated interest rate (the "enhanced yield") paid in the base currency.

**In option terms.** The client is **short a put on the alternate currency** (equivalently, **short a call on the base currency**) struck at the DCI strike, for the DCI tenor. The "enhanced interest" = base-currency money-market rate + **the option premium** the client earns by writing that short FX option. Put formally: an *n*-day DCI yield ≈ *n*-day deposit rate + (annualised premium of the short FX put). When the spot ends ITM for the put buyer (bank), the client is assigned — they deliver base currency and receive alt currency at the strike, which is worse than spot.

**Illustrative numeric example.** A Taiwanese AI client has **US$1,000,000** sitting in their USD PB account. USD deposits pay **4.0% p.a.**; they'd like more. The RM structures a **2-week DCI** linked to **USD/SGD** with these terms:

- Base currency: **USD**. Alt currency: **SGD**. Spot: **1.3500**.
- Strike: **1.3400** (i.e. conversion happens if USD/SGD ≤ 1.3400 at maturity → USD has weakened).
- Tenor: **14 days**.
- Enhanced yield: **8.00% p.a.** paid in USD, regardless of outcome.
- Over 14 days, enhanced interest received = 1,000,000 × 8.00% × 14/365 = **$3,068**.

Two states of the world at maturity (fixing day):

| Spot at fixing | Outcome | What the client receives |
|---|---|---|
| **Above 1.3400** (say 1.3520) | Not converted | $1,000,000 principal + $3,068 interest in **USD**. Net yield ≈ 8.00% annualised. **Happy.** |
| **At or below 1.3400** (say 1.3200) | Converted into SGD at the strike | (1,000,000 × 1.3400) = **S$1,340,000** + USD interest of $3,068. At the prevailing spot 1.3200, the SGD is worth $1,015,152 in USD terms. Client has lost $1,000,000 − $1,015,152 + $3,068 − $0 = … wait, they are *above* water in USD terms here, because the strike 1.3400 is *stronger SGD* than spot 1.3200. Let me invert the example — DCI "hurts" only when the alt currency *weakens* past strike. |

Let me redo the arithmetic crisply, because this is exactly where interviewers trip candidates. A DCI where the client deposits **USD (base)** and is willing to be converted into **SGD (alt)** at strike 1.3400 is short a **USD put / SGD call** at 1.3400. They get hurt when SGD *strengthens* (i.e. USD/SGD *falls*) — at a lower USDSGD, their USD principal is worth more SGD than the strike gives them. So the "bad state" is actually USD/SGD *below* 1.3400, not above.

Cleaner restatement of the two states:

| Spot at fixing | Outcome | What the client walks away with (USD-equivalent) |
|---|---|---|
| **USD/SGD stays above 1.3400** (say 1.3500, i.e. SGD didn't strengthen past strike) | No conversion | $1,000,000 + $3,068 interest = **$1,003,068 in USD**. |
| **USD/SGD falls below 1.3400** (say 1.3200 — SGD strengthened) | Converted at 1.3400 into SGD | Receive S$1,340,000. Market value in USD at spot 1.3200 = **$1,015,152**, plus $3,068 USD interest = **$1,018,220-equivalent** — but only if they convert back immediately at market. If they were a natural SGD buyer (e.g. the client *wanted* SGD for a property purchase), this was a win. If they were a USD investor with no SGD use-case, they either hold SGD (new FX position) or sell it back at market, crystallising a smaller USD principal than they started with, because the strike was **worse for them** than the new spot. |

**The key insight:** a DCI makes the client a forced FX-buyer at an above-market rate in the "bad" state. The "enhanced yield" is fair compensation for this embedded short FX option, no more, no less. If the client is a natural buyer of the alt currency anyway (has SGD liabilities, for instance), the short option is nearly free — they would have bought SGD at spot anyway; now they buy it at 1.3400 with extra interest thrown in. **This is who DCI is for.**

**Sweet-spot client.** A HNW who (a) holds the base currency (e.g. idle USD cash), (b) is neutral-to-mildly-bearish on the base currency over the next 2–4 weeks, and (c) is a *natural buyer or indifferent holder* of the alt currency at the strike level. Typical example: a SG family with USD surplus and upcoming SGD obligations (property, tuition, local tax), willing to take SGD at a rate slightly worse than current spot in exchange for a fatter coupon.

**How it hurts the client.** The canonical disaster: client with no need for the alt currency books serial DCIs because "yield is high". One tenor the alt currency gaps against them — delivered at strike, forced to hold a currency they don't want. If they sell it back at market, they eat a spot-to-strike loss that dwarfs the 8% annualised coupon they've been collecting. Worse variants: the client rolls the converted alt currency into *another* DCI at a new strike against the base, effectively doubling down on the trend that just bit them. This is a real pattern and interviewers will describe it — you should recognise it as a leveraged short-vol trade and say so plainly.

---

### 2. ELN — Equity-Linked Note (股票掛鉤票據)

**Mechanism.** An ELN is a short-to-medium-dated note (1-6 months typical) where the client lends the bank par in exchange for (i) a coupon or a discounted purchase price, and (ii) a contingent payoff linked to a single underlying equity. At maturity, if the underlying closes **at or above the strike**, the client receives par back (plus the coupon, if a coupon ELN); if it closes **below the strike**, the client is delivered the underlying in physical stock at the strike price — worth less than par at market. Three main variants:

- **Fixed / vanilla ELN (無敲入).** Strike is typically ATM or slightly OTM; client is short a European put struck at strike for the tenor. Simple single-observation payoff at maturity only.
- **Knock-in ELN (KI-ELN, 敲入式).** Adds a lower *knock-in barrier* (e.g. 80% of spot). The short put is "live" only if the underlying has touched or closed below the barrier at some point during the tenor (American-style KI observation is common in Asia). If the barrier is never breached, the ELN settles at par (effectively the client collected coupon for nothing). If it is breached, the maturity settlement works like the vanilla ELN — stock is delivered at strike if the final price is below strike. Popular because the "barrier never breached" path produces a clean, happy-client outcome; the tail is correspondingly nastier (gap-through-KI → unavoidable equity delivery).
- **Knock-out ELN (KO-ELN, 敲出式).** Adds an upper *knock-out barrier*; if hit, the note terminates early at par + accrued coupon. Sometimes the payoff is called an "upside barrier" and caps the client's benefit from an up-move — but that's fine, the client already gave up upside to be a put-seller.

**Principal-protected ELN (PP-ELN, 保本).** A variant where the issuer guarantees par at maturity, built as ZCB + a long call spread on the underlying (no short put). The coupon or participation rate is **dramatically** lower — often 10-30% of a standard ELN's coupon — because the client is no longer selling vol, only buying a bounded upside call spread. "PP" is not a free upgrade; you are paying for it with all the yield. Useful to know the label exists; rarely the right recommendation vs. just buying the stock and a listed put.

**In option terms.** Vanilla / KI / KO ELN client is **short a put** (European for vanilla; down-and-in European for KI; cancellable / knock-out for KO) on the underlying struck at the ELN strike. Coupon = the option premium (annualised) plus the deposit rate. PP-ELN client is **long a call spread** on the underlying, principal-protected, no short position.

**Illustrative numeric example (KI-ELN).** Underlying is a SG-listed blue-chip **DBS** at spot **S$40**. RM structures a 6-month KI-ELN:

- Notional: **S$500,000**.
- Strike: **S$40** (100% ATM).
- Knock-in barrier: **S$32** (80% of spot), observed continuously.
- Coupon: **12% p.a.**, paid at maturity.
- Tenor: **6 months**.

Three paths:

| Path | Description | Client outcome |
|---|---|---|
| **A. Never touches 32; closes ≥ 40** | Market calm or rallying; barrier never hit | Par back: **S$500,000** + coupon 6% of par = **S$30,000**. Total **S$530,000**. Annualised return 12%. |
| **B. Never touches 32; closes between 40 and 32** | Say close at 35. Barrier was never breached intraday | Par back: **S$500,000** + **S$30,000** coupon = **S$530,000**. KI was the gate; because it never opened, the short put never went live. |
| **C. Touches 32 at some point; closes at 30** | Sharp drawdown and partial recovery | KI triggered → short put is live → final close 30 < strike 40 → **delivered 12,500 DBS shares at S$40** (notional/strike = 500,000/40 = 12,500 shares), worth 12,500 × 30 = **S$375,000** at market. Plus coupon S$30,000 = **S$405,000 equivalent**. Loss of **~S$95,000 (−19%)** on a 6-month trade. |

**Sweet-spot client.** A HNW client who already has a long-term constructive view on DBS, would be genuinely happy to own more DBS at S$40 (or at the stock-delivery price post-KI), has enough liquidity to absorb the delivery without forced selling, and values a fat coupon over unlimited upside. The classic description: "I'd be a buyer of DBS if it dropped 20%, so let me be paid to put in a low-ball limit order". The KI-ELN literally is that trade.

**How it hurts the client.** The bad tapes are (1) sharp intraday gap through KI in stress — client cannot "do something" about the barrier once it's touched, the put is live for the rest of the tenor, and they are on the hook for any price path below strike at maturity; (2) "KI then recover" — barrier touched in week 2, stock recovers by week 24 but only to 38 (below strike 40) — client still takes delivery at 40 and loses 2 per share despite the V-shape, because the barrier was once-and-done; (3) concentration stacking — client books ELNs on the same underlying month after month, chasing coupon, and one drawdown takes out the entire stacked position because all of it knocks in together.

---

### 3. FCN — Fixed Coupon Note (固定配息結構型票據)

> **Hero product for PM-Assistant / EAM-Junior roles.** At an EAM or boutique whose daily investment activity is dominated by structured-product flow (e.g. the CW Asset Management target-firm profile), the **FCN is the single most-booked product**. Expect the CIO interview to drill the full lifecycle — not just mechanics, but observation-date decisions, KI response, autocall reinvestment, sizing against the client's total book, and issuer-credit discipline. The sub-sections under "**FCN lifecycle management**" below are written specifically for this role.

**Mechanism.** A close cousin of the KI-ELN and a first-generation autocallable. The FCN pays a **guaranteed, fixed coupon** (the "fixed" in the name) on scheduled dates regardless of the underlying's path. Principal, however, is at risk: at maturity, if the underlying is above the strike (or, in worst-of variants, if the worst-performing underlying is above its strike), par is returned; if below (or if a knock-in barrier was breached during the tenor), the client is delivered stock at strike — same short-put economics as the ELN. Most FCNs include an **autocall / knock-out feature** where, if the underlying (or worst-of) closes at or above an autocall level (often 100% of initial) on a scheduled observation date, the note terminates early with par + the accrued coupons paid through.

**Typical Asian PB shelf specs.** The textbook FCN is 12-month single-underlying, but the **dominant form on Asian EAM shelves is a 6-month worst-of-2 or worst-of-3**, with 2–3 liquid names (US mega-caps or HK blue-chips) in the basket. Coupons typically **10–13% p.a.** at current vol regimes; quarterly observation is standard; KI barrier 65–70% of initial; autocall at 100% of initial from month 3 or 6. Issuers dominant in this market: **BNP Paribas, UBS (pre- and post-CS), Julius Baer** — each with different pricing edges and credit profiles (see the Issuer credit note below).

**In option terms.** Client is **long a coupon stream** (the fixed coupon) + **short a down-and-in put** on the underlying, struck at the strike with a KI barrier. The autocall adds an **issuer-favourable up-and-out trigger** on the short put (if spot rallies back up, the bank cancels the short put and the note dies at par — the bank wants this because their hedge gets cleaner and they recycle capital). From the client's view the autocall is a *nice-to-have*: they get their money back early with the coupons they were entitled to.

**Illustrative numeric example.** 12-month single-underlying FCN on **Apple** at spot **US$180**:

- Notional: **US$500,000**.
- Strike: **US$180** (100%).
- KI barrier: **US$126** (70%), continuously observed.
- Fixed coupon: **10% p.a.**, paid quarterly (2.5% per quarter).
- Autocall: on any quarterly observation date (months 3, 6, 9), if closing price ≥ US$180, note is called early at par + coupons received.
- Tenor: 12 months if not called.

Path examples:

| Path | What happens |
|---|---|
| **Autocalled at month 3** | AAPL closes at 185 on first obs. Client receives par + Q1 coupon (2.5% = $12,500). Realised return: 2.5% in 3 months ≈ 10% annualised. Bank keeps the rest of the premium it would have paid. |
| **No autocall, KI never breached, final close 150** | Final price 150 < strike 180 but KI (126) never touched. Result: note pays par + all four coupons (10% total = $50,000). Client does not take delivery — the KI was the gate. **Maximum happy path for a non-called FCN.** |
| **KI breached at month 6 (close 120), final close 100** | Short put is live. At maturity, final 100 < strike 180 → client delivered 500,000/180 = 2,778 shares of AAPL at strike. Market value at 100 is $277,800 vs notional $500,000 → capital loss ~$222,200. Coupons received: 4 × $12,500 = $50,000. **Net loss: ~$172,200 (−34.4%)** despite "10% coupon". |

**Sweet-spot client.** A client looking for a fixed, bond-like cashflow stream on a name they genuinely like, willing to own the underlying at the strike price, with a time horizon of 1-2 years that can absorb an early autocall (otherwise they need to redeploy on short notice). Often pitched to moderate-risk equity income seekers — **but the "bond-like" description is misleading**, and the RM's job is to resist that mental framing.

**How it hurts the client.** The characteristic FCN disaster: the underlying trades sideways for 9 months, client happily collects 3 coupons thinking "this is just a bond", then the name gaps down through KI on a single earnings miss in month 10. From there it recovers to 150 at maturity — above KI but below strike. Client takes delivery at 180, stock is worth 150, books a 17% capital loss on delivery that the 10% coupon does not cover. The lived experience is: *one bad earnings print in month 10 wiped out nine months of apparent safety*, because the short-put risk was dormant the whole time until suddenly it wasn't. Worse variant: client had booked three different FCNs on correlated tech names; all three knock in in the same drawdown, all three deliver stock at strikes 25% above market. That's a credit event in the client's book without a credit event.

---

#### FCN lifecycle management (for PM-Assistant / EAM-Junior roles)

The five sub-sections below are the **operational knowledge** a PM assistant is hired to own. At an EAM, the PM / CIO sets direction; the assistant runs the week-to-week workflow on booked structures. Be able to talk through all five in plain English.

##### (a) When to use an FCN — the vol-and-client gating test

An FCN makes sense only when **all three** conditions hold at trade date:

| Condition | Concrete check | Why |
|---|---|---|
| **Elevated implied vol on the basket** | Headline coupon 10–13% p.a. on 6M worst-of-3 implies ~25–35% avg IV on the basket names, worst-of correlation ~0.4–0.6. If indicative coupons are below 7–8% for the same tenor/barriers, vol is too cheap — the coupon won't compensate for the tail. | The coupon **is** the short-vol premium. In a calm regime, the bank's hedging cost is low, so the client earns little for the embedded short put. Sit out; wait for a vol spike. |
| **Client genuinely willing to own the worst-of at strike** | Ask name-by-name: "if we get delivered AAPL at $180 after it fell to $120, are you holding or selling at loss?" If answer is "selling," the name does not belong in the basket. | The FCN **is** a conditional forced purchase of the weakest basket name. A client who would panic-sell on delivery has bought an instrument incompatible with their behavioural profile. |
| **Portfolio concentration allows it** | Post-delivery worst-case — if KI triggers AND worst-of delivers at strike — would this position bring any single-name exposure above ~10% of the client's total investable, or any sector exposure above ~25%? If yes, downsize or reject. | The KI-delivery leg turns notional into live equity. Stacking multiple FCNs on correlated basket names (all US mega-cap tech is one basket in a drawdown) creates concentration the client didn't intend to take. |

**Vol-regime heuristic.** VIX < 15: FCN coupons are structurally thin; prefer DCI/ELN or just wait. VIX 18–28: sweet spot for FCN flow — coupons fat enough, vol mean-reversion is the baseline. VIX > 30: be cautious — the fat headline coupon may be compensating for a real drawdown underway; the KI you think is 30% OTM may be 15% OTM by Monday. Size smaller, pick less-volatile basket members.

##### (b) How to manage a live FCN — the weekly / monthly workflow

Once booked, the assistant's job is to monitor and to brief the PM / client at scheduled and exception-driven touch points:

- **Weekly:** check spot levels for each basket name vs (i) KI barrier, (ii) autocall level, (iii) coupon-barrier (if present). Flag any name within 10% of its KI. Track realised-vs-implied vol if the issuer provides that on the term sheet.
- **Each observation date:** know in advance whether an autocall is likely. If worst-of ≥ 100% of initial on the obs date, the note will autocall — the client needs to be told *before* the cash lands ("we expect FCN-0078 to be called Tuesday; I'll propose three reinvestment options at that time"). Do NOT let the client be surprised by par cash appearing in their account with no plan.
- **On any KI breach:** immediate call to the PM, same-day. Do not wait for monthly review. Prepare the KI-response deck (see section (c) of §3 of this page's "Interview questions" for the canonical conversation — the Q3 answer is literally this job).
- **Two weeks before final maturity:** prepare the final-settlement brief for the PM / client: probability of par return vs delivery, delivery amount at strike in shares, any listed-put hedge to consider, the cash redeployment plan if par is returned.
- **Document everything.** MAS 626 / PB Code suitability requires a paper trail *per trade* — not per relationship. Each observation decision, each client conversation, each rejection-to-pitch-a-second-FCN-because-concentration should be logged. This is the PM-assistant's audit backbone.

##### (c) Autocall and KI responses — the two scripted conversations

**Autocall triggered.** The client gets par + accrued coupon back early. This is a "good" outcome at the trade level but a **reinvestment problem** at the portfolio level. Default PM-assistant brief: "FCN-X autocalled this morning at par + 2.5% coupon. Options: (1) roll into a similar 6M worst-of on the same basket at current vol — indicative coupon 10.5%; (2) step out of the theme if vol has compressed — hold in USD MMF at 4.8% until next opportunity; (3) rotate into a different basket — I've run indicatives on `[alt names]` and coupons are `[x%]`." The client decides; you prepare the documentation.

**KI triggered (the hard call).** Near-verbatim script — memorise this until you can deliver it without hesitation:

> "The `[underlying]` touched the KI barrier this morning at `[level]`. That means the structure's short-put leg is now active through final maturity, currently `[X]` months away. We have not realised a loss yet — nothing has settled. Three paths remain:
> 1. `[Underlying]` recovers above strike `[strike]` by maturity → full par + all remaining coupons. This is roughly a `[P]` percent path based on current `[IV/skew]`.
> 2. `[Underlying]` closes between strike and its current level → delivery at strike; capital loss = strike − final spot, offset partially by coupons received.
> 3. `[Underlying]` falls further → bigger delivery loss.
>
> Three things you can do now: hold, unwind at the issuer's mid-mark (currently indicated at `[price]` — note this crystallises the loss now), or hedge the remaining short-put exposure with a listed put on the same underlying to cap the delivery loss. I don't recommend rolling this into a new structure — that's doubling the short-vol book in the wrong direction."

This is the single most-tested FCN interview question. Nail the honesty, the math, and the refusal-to-double-down.

##### (d) Position sizing — how much is too much

A reasonable sizing framework for an EAM client's structured-product sleeve:

| Check | Rule of thumb | Reason |
|---|---|---|
| **Structured-product sleeve as % of total investable** | ≤ 20% | Structured products are illiquid and short-vol; they shouldn't dominate a UHNW book |
| **Single-issuer exposure within the sleeve** | ≤ 40% of sleeve (i.e. ≤ 8% of total) | Issuer default risk is real (Lehman 2008, CS AT1 2023) |
| **Single-basket-name exposure** across all booked FCNs + any direct holdings | ≤ 10% of total on worst-case delivery basis | KI-delivery is conditional long equity; count it as such in concentration math |
| **Correlated-basket exposure** (e.g. all US mega-cap tech) | ≤ 25% of total on worst-case delivery basis | In a drawdown, correlated baskets all KI together |
| **Maximum number of live FCNs per client** | 5–8 | Above this, exception-monitoring breaks down; fewer larger positions beat many small ones |

The CIO test question is typically: "Client has US$10M. Run me through how much FCN notional you'd write and across how many names over the next quarter." Answer with the sizing math explicit, not vibes.

##### (e) Coupon-vs-vol sanity check — is the quote fair?

Before booking, sanity-check the indicative coupon against the implied vol it corresponds to. Rough heuristic for a 6M worst-of-3 at 100% strike, 70% KI:

- **Each 1% of annualised coupon ≈ 3–4 vol points on the worst-of-basket at these barrier levels** (this ratio is not stable across tenors/strikes, so calibrate to your issuer's indicatives over time).
- If indicative coupon = 11% and you believe basket avg IV ≈ 28% with worst-of correlation 0.5, that's roughly consistent. If coupon = 7% at the same IV, the issuer is pricing in more margin — push back or shop elsewhere.
- If coupon = 15% on the same parameters, ask why — either the KI is deeper than you think (risk you're missing), or there's idiosyncratic risk embedded in one basket name, or the issuer is desperate to move flow (legitimate but rare).

At minimum, be able to price a single-name ELN's coupon against listed-option alternatives: "I could sell a 6M 80% strike put on AAPL on the listed market and earn roughly `[Y]%` annualised — is this FCN's incremental coupon worth the worst-of basket risk and the bespoke illiquidity?" The answer is often yes, but only if you've checked.

##### (f) Issuer credit discipline

A structured note's par-return leg is **unsecured senior debt of the issuer**. Before picking an issuer for a client's FCN, check (at minimum):

- **Issuer senior CDS and credit rating** — is it consistent with the client's credit-quality expectations for their bond allocation? A client unwilling to hold subordinated bank debt should not book an FCN from an issuer trading wide.
- **Franchise-specific fault lines** — UBS integrated Credit Suisse in 2023 and now carries CS-era legal tail risk; BNP is a French SIB with strong equity-derivatives franchise; JB has no investment-banking balance sheet but smaller capital base. Each has a different "what would a bad year look like" profile.
- **Diversify across issuers** — as above, single-issuer exposure should be capped. At an EAM with BNP + UBS + JB relationships, distribute FCN notional across all three rather than concentrating with the cheapest quote.
- **Watch the AT1 / senior spread** — post-March 2023 CS AT1 write-down, the market re-priced bank subordination risk. If an issuer's AT1-senior spread is widening rapidly, it's a leading signal that their senior unsecured is next to re-price — which directly affects the par leg of any structured note you've booked with them.

The interview question here is: "why not just use the cheapest issuer every time?" Answer: the cheapest quote usually reflects either worse credit (client pays for it in stress) or a squeeze to move year-end inventory (OK for tactical but not a long-term relationship default). Good issuer discipline is spread across counterparty relationships for the same reason you diversify a bond book.

---

### 4. Autocallable (自動贖回結構型商品 / 自動提前終止)

**Mechanism.** The autocallable is the workhorse structured product of Asian PB — the single highest-revenue SKU at most banks across the 2010s and early 2020s. Structure: a multi-year note (typically 1–3 years) linked to a **basket of 2–4 underlyings**, with three defining features:

1. **Autocall schedule.** On each scheduled observation date (commonly quarterly or semi-annually), if the **worst-performing** underlying is at or above an autocall level (usually 100% of initial), the note terminates early and pays par + accrued coupons.
2. **Coupon mechanism.** Quarterly or monthly coupons are paid if the worst-of is at or above a **coupon barrier** (commonly 65–75% of initial). Two flavours:
   - **Non-memory coupon.** A coupon is missed if the condition fails on that observation date; the skipped coupon is gone forever.
   - **Memory coupon (記憶型).** Missed coupons accrue; when the condition is next met, all previously-missed coupons are paid in a lump. Better for clients; more expensive to the bank; more common in 2020s vintage deals.
3. **Knock-in barrier on the worst-of.** A continuously (or European, depending on structure) observed lower barrier — typically 50–65% of initial — which, if breached by the worst-of, "arms" a short put at the strike (usually 100%). At final maturity (if never autocalled), settlement on the worst-of: if above strike, par; if below and KI was breached, delivery of the worst-performing underlying at the strike; if below but KI never breached, par.

**In option terms.** The client is **long a stream of contingent coupons** (calls on the worst-of being above coupon barrier, knock-out cancellable on autocall observation) and **short a down-and-in worst-of put** struck at 100%. The short "worst-of" basket put is the risk engine — the bank is effectively buying the **minimum of 2–4 correlated puts**, which is materially cheaper (to the bank) than buying a single-name put because any one name crashing triggers the whole basket. Hence the fat coupon.

**Illustrative numeric example.** 2-year autocallable on **worst-of (AAPL, MSFT, GOOGL)** at their respective spots on trade date, with memory coupon:

- Notional: **US$500,000**.
- Coupon: **8% p.a.**, paid quarterly (2% per quarter), **memory**.
- Coupon barrier: **70%** of each initial (tested quarterly on the worst-of).
- Autocall level: **100%** of each initial (tested quarterly starting month 6, worst-of must be ≥ 100%).
- KI barrier: **50%** of each initial (continuous, worst-of).
- Strike at final maturity: **100%** of each initial (applies only if never autocalled AND KI was breached).

Path A: **autocalled month 6.** All three names at ≥ 100% of initial on the month-6 observation date. Note dies. Client receives par + 4% cumulative coupon = **$520,000**. 6-month return 4%, annualised ~8%. **Best vanilla outcome.** Note terminates before any of the interesting risk kicks in.

Path B: **no autocall, KI never breached, worst-of at maturity is 75% (above coupon barrier).** Say AAPL is 90%, MSFT 110%, GOOGL 75% (GOOGL is the worst). KI at 50% never touched. Coupons: if coupon barrier 70% was respected at each quarterly observation (worst-of always ≥ 70%), client gets 8 × 2% = 16% in coupons. At maturity: par + coupons = $500k + $80k = **$580,000**. **16% over 2 years.** Acceptable.

Path C: **GOOGL breaches KI 50% in month 14 (closes at 48%); worst-of at final maturity is GOOGL at 55%.** KI breached → short put armed. Final worst-of 55% < strike 100% → client delivered **GOOGL at strike 100% of initial**. Capital loss on the delivered stock: −45% of notional = **−$225,000**. Coupons collected in the path (say coupon barrier was also breached a few times, so 6 of 8 coupons paid with memory = 12% = $60,000). **Net: $500,000 − $225,000 + $60,000 = $335,000 final**, or **−33% over 2 years**, despite an apparent "8% coupon".

Path D: **the 2008 / 2022 tape.** Worst-of in the basket (one broken name like META in 2022) crashes 65% while the other two rise 30%. Non-breached names irrelevant. The basket **is** the worst-of; the client loses just as badly as if they had been long META outright, but with a misleadingly steady coupon stream until the KI was touched.

**Sweet-spot client.** An aggressive-yield-seeking AI client with:
- A moderately bullish-to-neutral view on all basket names at the trade date,
- Tolerance for being stuck in a 2-3Y note (autocall is a *maybe*, not a *promise*),
- Enough diversified liquidity elsewhere that being delivered the worst-of at a loss is annoying, not ruinous,
- Ideally, a natural long-term holder of whichever underlying most likely to be the worst-of (so delivery is "forced DCA into names I like anyway").

**How it hurts the client.** Three classic failure modes. **(1) Worst-of concentration risk:** one name underperforms badly while the other two soar; the client experiences all the downside of the bad name with none of the upside of the good names. The whole basket is economically a single-name short put on the weakest link. **(2) Coupon barrier miss with no memory:** non-memory coupons skipped on a drawdown are lost forever; even if the underlyings recover, those coupons are gone. **(3) Near-final KI breach:** the KI is live for the entire tenor; a barrier breach at month 30 of a 36-month tenor kills the entire cumulative happy-case P&L in a single event. Historical Asia examples include the 2015–2016 China equity breakdown and the 2022 tech drawdown — autocallables tied to Hang Seng names and US tech mega-caps delivered worst-of stock to clients at 50-70 cents on the dollar.

---

### 5. Accumulator / Decumulator (累計期權 / "I-kill-you-later")

**Mechanism.** An accumulator is a forward contract series, typically with daily observations over 3–12 months, that obliges the client to **buy a fixed daily quantity** of an underlying at a discounted strike price — with **two critical amplifiers**:

- **Knock-out (KO) cap.** If the underlying closes at or above a knock-out level on any daily observation, the contract terminates. The bank's upside is capped.
- **Leverage / double-down feature.** If the underlying closes **below the strike**, the client is obligated to buy **2× (sometimes 3×) the daily quantity** at the strike. This is the detail that destroys portfolios.

Sample structure (equity accumulator, historically offered on HK blue-chips 2006–2008):

- Spot: **HK$100**. Strike: **HK$95** (5% discount). KO: **HK$105**.
- Daily quantity: **1,000 shares** if spot between strike and KO.
- **Double-quantity: 2,000 shares** if spot < strike.
- Tenor: **12 months** of daily observations.
- No upfront premium paid by the client; the discount and the double-quantity feature are what pays for the KO option the bank has and the "free" entry.

**In option terms.** The client has **sold a strip of daily short puts** (roughly 252 of them over a year) at the strike, each of 2× the daily notional, and simultaneously **sold the right to cancel** all of this if the stock rallies past KO. Net: a **leveraged short-put book** with a bank-owned knock-out. This is a fundamentally different risk profile from the ELN / FCN family, because the short-put exposure *grows* as the underlying falls (the 2× leverage on down days stacks daily positions on top of each other).

**Decumulator (逆向累計).** Mirror image: obligation to *sell* a daily quantity at a premium to spot; knock-out if the underlying drops far enough; 2× sell-quantity if the underlying rises above the strike. Used by clients (rarely) to distribute a concentrated long position; more dangerous than it looks because a melt-up forces accelerated selling into strength.

**Illustrative numeric example.** 6-month accumulator on **HSBC (HK listing)** at spot **HK$60**:

- Strike: **HK$57** (5% discount to spot).
- KO: **HK$63** (5% premium).
- Daily quantity: **1,000 shares** at strike when HK$57 ≤ spot < HK$63; **2,000 shares** at strike when spot < HK$57.
- Observations: daily, 120 trading days. No premium paid.

Good case: HSBC drifts in a HK$58–62 range for 3 weeks, then closes above HK$63 → KO → contract dies. Client has accumulated 15 days × 1,000 shares = 15,000 shares at HK$57, worth HK$63 at market = **gain HK$90,000** for 3 weeks' patience. Coupon-equivalent return excellent.

Bad case (2008-style): HSBC gaps from HK$60 to HK$42 over 2 months. Daily observations keep dragging the client into **2,000 shares/day at HK$57**. After 40 trading days of 2× accumulation at strike HK$57: client owns **80,000 shares acquired at HK$57 = HK$4,560,000 of cost basis**. Market price is HK$42 → mark-to-market value HK$3,360,000 → **unrealised loss HK$1,200,000** (−26%) and **still accumulating 2,000 more shares every day at HK$57**. The contract does *not* knock out on the downside; there is no floor. The client must continue to post cash or borrow against portfolio to settle the daily purchases. In a Lombard-leveraged book, this cascades into a margin spiral — exactly the 2008 HK HNW experience.

**Sweet-spot client — if such a client exists.** A client with (a) a deeply-held conviction that the underlying will trade in a narrow band or grind higher within the tenor, (b) enough pre-pledged cash to absorb 2× accumulation for the full tenor without margin pressure, (c) a pre-existing long-term mandate to accumulate the name and ample balance-sheet headroom, and (d) full written understanding of the 2× leg — i.e., a client who explicitly understands and wants a leveraged short-put position. These clients are vanishingly rare. A suitability-compliant RM says **no** far more often than **yes**.

**How it hurts the client — and the "I-kill-you-later" legacy.** The nickname **I-kill-you-later (IKYL)** was coined in Hong Kong during the 2008 global financial crisis, when HNW investors (many introduced through private banks) had booked accumulators on HK blue-chips — HSBC, China Mobile, Cheung Kong — at strikes around 2007 highs. Through the autumn 2008 crash, these names halved. Clients were contractually obliged to keep buying daily at strikes far above market, at 2× the daily quantity once the stock was below strike. Losses of tens to hundreds of millions of HKD accumulated per HNW client. Several private banks faced extensive litigation and settlement; the product became a cautionary tale and, in many markets, effectively unsellable to clients below a UHNW suitability threshold.

**What interviewers want you to say.** When asked about accumulators, the answer is not "they offer great yield"; it is: "accumulators are a leveraged short-put strip with no downside floor; in 2008 HK they became known as 'I-kill-you-later' for this reason; I would only consider one for a client who has explicitly signed off on the 2× leverage mechanic, holds the cash to settle daily through a full drawdown, and understands this is not an income product — it's a directional leveraged trade dressed as one. For an ordinary HNW seeking yield, DCI, ELN, or FCN are strictly better choices."

---

### 6. Range Accrual and Callable Range Accrual / CDRAN (區間計息票據)

> **CDRAN (Callable Daily Range Accrual Note)** is the common PB-shelf acronym for the callable-variant below. Same product, same mechanics; just the Asian-PB naming convention. If a term sheet says "CDRAN on 3M SOFR," it is exactly the callable range accrual described here.


**Mechanism.** The client earns a high coupon that accrues **daily**, but only on days when a reference rate or index closes **within a pre-agreed range** (e.g., 3M USD SOFR between 4% and 5.5%; or USD/SGD between 1.32 and 1.38). Days outside the range contribute zero to the coupon. Tenors are typically 1–5 years. The **callable** variant adds an **issuer call** — the bank can redeem the note early at par on scheduled call dates, which it will rationally do when the structure becomes unfavourable to the bank (i.e., when rates stay stubbornly in range and the bank is paying a rich coupon).

**In option terms.** Client is effectively **long a strip of daily digital options** on the reference rate staying in range (each pays a fraction of the daily coupon) and — in the callable variant — **short a Bermudan issuer call** (the bank's right to cancel). The issuer call is what drops the expected coupon below what a non-callable version would pay: in exchange for a higher headline coupon, the client accepts that the bank will kill the trade exactly when it was working.

**Illustrative numeric example.** 3-year callable range accrual on **3M USD SOFR**:

- Notional: **US$1,000,000**.
- Accrual range: **4.00% ≤ SOFR ≤ 5.50%**.
- Daily coupon rate: **6.5% p.a. × (days in range / days in period)**.
- Callable quarterly by issuer at par + accrued coupon.
- Benchmark: a 3Y USD IG corporate bond yielding ~5.3%.

If SOFR stays at 4.5% for a year: accrual ratio ≈ 100% → 6.5% coupon earned. Bank rationally calls the note at quarter 5 or 6 because it's paying 6.5% for risk-free money. Client gets par + 1.5 years of coupon back and has to redeploy in a rate environment that has been flat — likely into a lower-coupon note. **Reinvestment risk crystallised.**

If SOFR rips above 5.5% (Fed hikes): accrual ratio drops; client earns partial coupon. Bank does NOT call — it's happy to keep paying a reduced coupon on a note that's now below-market. **Negative convexity:** the client owns the bad-state exposure and the bank owns the good-state optionality.

**Sweet-spot client.** Retail-adjacent PB clients who want a bond-like income stream and have a strong view that a specific rate or FX pair will stay in a defined band. The profile is rarer than the sales flow suggests — most range accruals are sold on yield headline without a forward rates view.

**How it hurts the client.** Three characteristic ways. **(1) Range breach on a macro surprise** (rate shock, FX gap) → accrual collapses to near-zero for many days → realised coupon far below headline. **(2) Callable cancellation in the favourable state** → bank calls when the trade was paying the client well → client reinvests into a deteriorated rate environment at a lower coupon. **(3) Term mismatch** → client bought a 5Y range accrual expecting 5 years of coupon, got called in year 2 with no guaranteed replacement product available at the same yield.

---

### 7. BEN — Bonus Enhanced Note (紅利增強型票據)

**Mechanism.** A BEN is a medium-dated note (typically 6–18 months) combining **downside short-put economics with a conditional upside bonus**. Three payoff regions at maturity define it:

1. **Underlying (or worst-of) closes at or above an upside "bonus level"** (typically 100–110% of initial) → client receives par **plus a bonus coupon** (fixed % paid at maturity, often 5–10% of notional) and, in participation variants, any additional upside above the bonus level at a defined participation rate (e.g. 50%). This is the "best path."
2. **Underlying (or worst-of) closes between a strike (typically 60–80% of initial) and the bonus level**, AND the KI barrier was **never breached** intra-tenor → client receives par back. No bonus, no loss. The KI never armed, so the short put never activated.
3. **KI breached at any point during the tenor AND underlying closes below strike at maturity** → client delivered underlying (or worst-of) at strike, identical to an ELN / FCN loss profile.

The defining difference vs FCN: **BEN does not pay fixed coupons on scheduled dates** — it pays **only at maturity**, and only conditionally. The attraction is the bonus kicker + sometimes upside participation; the risk is that a client sitting on a BEN for 12 months earns nothing if the underlying drifts sideways and closes just below the bonus level — this is the "zero-coupon drought" risk that distinguishes BEN from FCN.

**In option terms.** Client is **long a digital cash-or-nothing call** (pays the bonus if underlying ≥ bonus level at maturity) + possibly **long a call** above the bonus level (participation variants) + **short a down-and-in put** on the underlying at strike (the KI-armed short put). The short put is the same risk engine as in ELN/FCN; the digital-call bonus replaces FCN's fixed-coupon stream.

**Illustrative numeric example.** 12-month single-underlying BEN on **Tesla** at spot **US$250**:

- Notional: **US$500,000**.
- Strike: **US$175** (70% of spot).
- KI barrier: **US$150** (60% of spot), continuously observed.
- Bonus level: **US$275** (110% of spot).
- Bonus coupon: **12%** of notional paid at maturity, if final close ≥ bonus level.
- Participation above bonus: **50%** of any upside above $275, if final close is there.

Paths:

| Path | Final close | KI touched? | Outcome |
|---|---|---|---|
| **A. Bonus hit** | $290 | No | Par + 12% bonus + 50% × (290-275)/250 × notional = $500k + $60k + $15k = **$575,000** (+15% over 12M) |
| **B. Middle / sideways** | $200 | No | Par only: **$500,000**. Zero return for 12 months — the "coupon drought." |
| **C. KI breach then recovery** | $190 | Yes (touched $145 in month 4) | Short put armed; final close 190 > strike 175 → **par returned**: **$500,000**. The KI scare was harmless because close is above strike. |
| **D. KI breach and final below strike** | $140 | Yes | Delivered TSLA at strike 175 → receive 500,000/175 = 2,857 shares worth 2,857 × 140 = **$400,000**. Net loss ~20%. |

**Sweet-spot client.** Constructive on the underlying over 12M, willing to own at strike, but specifically wants **asymmetric upside** — accepts giving up the fixed FCN coupon in exchange for a shot at bonus + participation if their view plays out. Typical pitch: "You want exposure to TSLA with a 30% downside buffer and a 12% kicker if it rallies — the BEN gives you that; the FCN pays you quarterly regardless but doesn't participate in the upside." The trade-off is explicit — buyer of BEN sees FCN as "leaving rally upside on the table."

**How it hurts the client.** The "coupon drought" path is the underrated risk: the underlying trades sideways for 12 months, closes just below the bonus level, KI is never breached, client gets par back and realises they locked up capital for a year for literally zero return. This is often worse than an FCN on the same basket, because an FCN would have paid fixed coupons along the way. Worse variant: client books two BENs on correlated names, both drift sideways, the assistant now has two years of zero-return drag on the portfolio-level PnL review.

**vs FCN — decision-tree-line.** If the client wants **predictable periodic income**, FCN. If the client wants **upside participation + downside buffer + accepts zero-return path**, BEN. If the client wants both, the answer is usually "split the sleeve" — half FCN for coupon stream, half BEN for optionality.

---

## Payoff / Economics — cross-product comparison

All numbers illustrative. "Worst-case" assumes the adverse-path scenarios described in each sub-section.

| Product | Typical tenor | Typical headline coupon (p.a.) | Worst-case capital outcome | Liquidity | Typical client fit | Option decomposition (client's position) |
|---|---|---|---|---|---|---|
| **DCI** | 1 week – 1 month | 6–15% (function of implied vol, strike moneyness) | Converted into alt currency at above-spot rate; mark-to-market loss to base-currency value (−1% to −10% per tenor in a sharp move) | None, but short tenor means natural roll-off | HNW with idle cash in base currency AND a use-case for alt at the strike | Short FX put on alt currency |
| **PP-ELN (principal-protected)** | 1–3 years | 1–3% | Par returned, but coupon may be zero and opportunity cost of idle capital | None, early unwind at issuer's mark | Conservative client who wants equity-flavoured return with absolute par guarantee (but probably misallocated — buy stock + listed put) | Long bounded call spread on underlying |
| **Vanilla ELN** | 1–6 months | 6–15% | Delivered stock at strike; loss = strike − final price + coupon offset | None | Client who'd buy the underlying at strike anyway | Short European put |
| **KI-ELN** | 3–12 months | 8–20% | Stock delivery after KI breach; loss same shape as vanilla but conditional | None | Client constructive on underlying, wants larger coupon, understands KI is a cliff | Short down-and-in European put |
| **FCN** (single or worst-of-2/3) | 6–24 months (6M worst-of-3 dominant on Asian EAM shelves) | 7–13% (fixed, guaranteed) | Stock delivery at strike on worst path; coupons received are booked but don't offset delivery loss fully | None | Client wanting bond-like cashflow on names they like; vulnerable to the "bond-like" misframe | Short down-and-in put (or worst-of put) + autocall (up-and-out cancellable) |
| **BEN (Bonus Enhanced Note)** | 6–18 months | 0% interim; 5–12% conditional bonus at maturity + possible upside participation | Same delivery loss shape as FCN on KI-breach; "coupon drought" if underlying drifts sideways and closes below bonus level | None | Client constructive on underlying, wants asymmetric upside, accepts zero-return sideways path | Long digital cash-or-nothing call + (variant) long call above bonus level + short down-and-in put |
| **Autocallable (worst-of basket)** | 1–3 years | 8–15% (worst-of basket lifts the coupon) | Worst-of basket breaks below KI; delivery of weakest underlying at 100% strike; potential 30–50% drawdown | None; illiquid mid-tenor | Aggressive AI client constructive on ALL basket names, willing to own the worst-of at the bottom | Short down-and-in worst-of put + long contingent coupon stream |
| **Accumulator** | 3–12 months daily | Effective yield hard to quote — it's a trade, not a coupon | Unlimited downside accumulation at 2× at strike; the 2008 HK disaster shape | None; mark-to-market gets worse as stock falls | Narrow — explicitly understands 2× leg, has cash, wants the underlying at strike regardless of path | Short strip of daily 2×-leveraged puts + short issuer knock-out option |
| **Range Accrual / CDRAN** | 1–5 years | 5–10% (headline; realised can be much lower) | Reinvestment risk if called early; coupon collapse if range is breached; negative convexity | None | Client with a specific range view on a rate or FX pair, happy to accept reinvestment risk | Long strip of daily digitals + (callable variant:) short Bermudan issuer call |

**The single unifying statement:** every yield-enhancement product in this table is the client selling an option. The coupon size and the worst-case loss size scale together, because they are the same quantity viewed from the two halves of the distribution.

---

## When to recommend (client fit)

The decision tree below is the starting heuristic. Real recommendations layer on MAS 626 / ABS PB Code suitability, AI / EI status, FX base, concentration, existing Lombard leverage, and the client's *prior experience* with short-option products.

```
Client has idle base currency (e.g. USD) and wants higher-than-deposit yield
│
├── Does the client have a use-case or indifference to the alt currency at the strike?
│     ├── Yes  → DCI (short-dated, smallest commitment, easy to explain)
│     └── No   → stop; do NOT pitch DCI (they don't understand the conversion leg)
│
Client wants equity-flavoured yield and has a specific underlying they like
│
├── Absolute par guarantee required (capital-at-risk unacceptable)?
│     └── Yes → PP-ELN — but confirm they understand the coupon is ~1/5 of vanilla
│
├── Willing to own the underlying at strike / at KI?
│     ├── Low volatility / high conviction they'd buy anyway → Vanilla ELN
│     └── Want bigger coupon, tolerate KI cliff risk → KI-ELN
│
Client wants fixed, predictable coupon (bond-like framing) on equity exposure
│
├── Single-name, 6-12 month tenor → FCN (single underlying)
├── 2-3 names, 6M tenor (dominant Asian EAM form) → FCN (worst-of-2 or worst-of-3)
└── Willing to take longer tenor / larger basket for bigger coupon → Autocallable
│
Client wants asymmetric upside with a downside buffer and accepts zero-return sideways path
│
└── → BEN (Bonus Enhanced Note) — not a substitute for FCN; fundamentally different payoff profile. Consider splitting sleeve: half FCN (for coupon stream), half BEN (for optionality).
│
Client wants the maximum possible coupon and accepts multi-underlying basket risk
│
├── Understands worst-of concentration risk and memory-coupon mechanics? → Autocallable (memory)
└── If uncertain about worst-of → do NOT up-sell; stop at FCN
│
Client wants to accumulate a specific stock over time and has deeply-held in-the-band view
│
└── Understands and wants 2× leg at strike on down days AND has settlement cash for full tenor?
      ├── Yes AND UHNW AND written sign-off → Accumulator (exceptional cases only)
      └── Anything else → Do NOT pitch accumulator. Offer monthly DCA, or a series of ELNs at
          tiered strikes, which achieves accumulation without the leveraged leg.
│
Client has a specific rate or FX-range view
│
└── Willing to accept reinvestment risk from issuer call? → Range Accrual (callable preferred —
    rate distorts less) or non-callable version at a lower coupon.
```

**Hard "don't sell" list:**

- Never pitch an **accumulator** to a client who doesn't already understand short-put economics cold. The 2008 HK litigation wave happened *because* of exactly this mismatch between product shape and client comprehension.
- Never stack multiple **KI-ELNs or FCNs** on correlated underlyings without a concentration-aware sizing framework. Correlated short puts behave like one big short put in a drawdown, and client's Lombard book cannot hedge that.
- Never describe a structured note as "like a bond, but with higher yield". It is not a bond. The language itself embeds a suitability violation.
- Never pitch a **worst-of autocallable** where any basket member has fundamental idiosyncratic risk the client hasn't separately digested. The worst-of will be that name, with certainty.

**Cross-refs:** [`derivatives.md`](derivatives.md) for option primitives and Greeks; [`fx.md`](fx.md) for DCI / FX-linked variants in detail; [`leverage.md`](leverage.md) for how Lombard interacts with structured-note margining; [`fixed_income.md`](fixed_income.md) for the "it's not a bond" conversation and the callable-bond cousin structures; [`../concepts/wealth_management.md`](../concepts/wealth_management.md) for the SAA/TAA frame within which a structured sleeve has to sit.

---

## Risks

**Market direction risk.** By construction, every yield-enhancement product is short a put (explicit or knocked-in). A large down-move in the underlying produces a capital loss that the coupon cannot fully offset. The deeper the move below strike, the bigger the loss — linearly for ELN/FCN, with leverage for the accumulator.

**Knock-in cliff risk.** The short put in a KI structure is dormant until the barrier is touched — at which point it switches on with no re-set. A single intra-tenor barrier touch arms the structure for the remainder, even if the underlying recovers. Clients often misunderstand this as "as long as it closes above KI at maturity I'm fine" — wrong. The observation style (continuous vs end-of-day vs end-of-period) is material and should always be called out in the term sheet discussion.

**Worst-of concentration risk.** Multi-underlying baskets (autocallable in particular) pay out on the **minimum** of correlated underlyings. This is economically equivalent to being short the weakest-link's put. Basket diversification argument is **false** — the worst-of is always concentrated, by definition, at the trade date's most vulnerable name. In a stress, this is precisely the name that breaks.

**Issuer credit risk.** Structured notes are **unsecured senior debt** of the issuing bank. In an issuer default (Lehman-style tail), par is not recovered; recovery works through bankruptcy waterfall. This was driven home by the 2008 Lehman mini-bond scandal in HK/SG, where retail investors in Lehman-issued principal-protected notes lost most of their principal despite the "PP" label. Always know *who* the issuer is on a structured note; prefer G-SIB issuers and avoid notes linked to issuers with credit deterioration.

**Liquidity and early-unwind risk.** There is no secondary market for bespoke structured notes. Mid-tenor unwind is a bilateral bid from the booking bank — typically 100–400 bps wide in calm markets, 500+ bps wide in stress. Clients expecting to "exit if it moves against me" cannot; the mark-to-market statement is a reference, not a tradeable price.

**FX risk on the wrapper.** A structured note denominated in one currency but linked to an underlying in another carries embedded FX exposure. A USD-denominated ELN on a HK-listed underlying marks in USD but the underlying's payoff depends on HKD stock prices. Client sees net P&L drift from FX even without spot moves.

**Reinvestment / autocall risk.** Autocall / issuer-call features cut the note short on the favourable path, forcing the client to redeploy cash into (usually) a less favourable product environment. The client loses the compound benefit of the remaining coupons.

**Suitability / conduct risk.** Under MAS Notice 626 and the ABS PB Code, RMs are responsible for ongoing suitability — not just point-of-sale. Repeated books of the same structured product in a client account without periodic review, or books that aggregate into short-put concentration the client can't handle, are the pattern that triggers regulatory action. This is the mechanism through which *individual* RM compensation and *regulatory* exposure are linked.

---

## Interview questions you should be able to answer

### Q1. "A client wants higher yield on her USD cash. Walk me through DCI vs ELN — which to pitch, why, what you'd warn her about."

**Answer.** They're two different products for two different client situations. **DCI** is short-dated (1-4 weeks), FX-linked, and mechanically a short FX put — she earns the option premium as enhanced interest and the worst case is being delivered into the alternate currency at a slightly unfavourable strike. It's the right pitch if she has a genuine need or tolerance for holding the alt currency — e.g. a SGD property completion coming up, or general indifference to USD vs SGD at these levels. **ELN** is medium-dated (1-6 months), equity-linked, and mechanically a short equity put — the worst case is being delivered the underlying stock at strike, which is potentially a much larger capital drawdown than an FX conversion. ELN is appropriate only if she has a specific stock she'd happily buy at the strike price and the liquidity to absorb that delivery. So: if she's asking for yield on idle USD with no equity view, DCI is the cleaner answer; pick a short tenor, a strike close enough to spot that conversion is genuinely a possibility (not a too-OTM "free yield" structure that mis-sets her expectations), and size it so the worst-case FX conversion isn't more than, say, 10–20% of her liquid USD. I'd warn her specifically: this is not a CD, it's a short option position; the "enhanced yield" IS the option premium; when the alt currency strengthens, she will receive alt currency, not her USD back; and the *most dangerous* behaviour is serially rolling DCIs without reassessing — that turns a short-dated yield play into a chronic short-FX-vol position that looks fine until the tape moves.

### Q2. "Explain an autocallable to a moderate-risk client in 60 seconds."

**Answer.** An autocallable is a two-to-three year note linked to a small basket of stocks. It pays a high coupon while the weakest stock in the basket stays above a coupon threshold — typically around 65-70% of where it started. Every quarter, if the weakest stock has recovered to its starting level, the note terminates early and you get your money back plus the coupons you've accrued. That's the nice path. The risk path is this: there's a **knock-in** barrier down around 50-60% of where each stock started. If any one stock in the basket ever touches that barrier during the life of the note, then at final maturity — two or three years in — if the weakest stock is still below its starting price, you don't get cash back; you get delivered the weakest stock at its starting price, and your capital loss mirrors however far that stock has fallen. So the coupon looks attractive because you are effectively selling downside insurance on the single weakest name in a basket; when it's working, you collect premium; when it breaks, you own the stock at a loss. I would never recommend this to you without specifically making sure you'd be genuinely willing to own the weakest basket name at its initial price, because in a bad scenario that's what you will own.

### Q3. "Your client's FCN just knocked in. What's the conversation?"

**Answer.** First, concrete: "the underlying touched the knock-in barrier, which means the structure's short put is now active for the remainder of the tenor — we haven't realised a loss yet, but the structure's payoff at maturity now depends on where the underlying closes, not whether it recovers above the knock-in." Second, lay out the three paths remaining: (a) the stock recovers above the strike by maturity — full par + coupons, as if the KI had never happened; (b) the stock closes between the KI and the strike at maturity — client is delivered shares at strike, capital loss = strike minus final spot; (c) the stock falls further — bigger delivery loss. Third, options — and this matters because the knee-jerk "can I get out?" question is always about to be asked: early unwind is a bilateral bid from the booking bank, currently wide because the note is in the worst part of its distribution; the implied unwind price will be roughly the note's theoretical value, which is probably at a discount to par; unwinding now crystallises a loss that may or may not materialise at maturity. Fourth, what this means for how we treat the position going forward: it's now effectively a concentrated short put on the underlying with the coupon stream still paying, not a "bond-like" product. I'd ask whether she wants to stay in, unwind at the current bid, or — in some cases — hedge the remaining short-put exposure with a listed put on the same underlying to cap the downside. And honestly: I'd apologise if the "bond-like" framing was ever used, because this moment is exactly when that framing reveals itself as wrong, and regaining her trust starts with naming that.

### Q4. "Why don't we pitch accumulators to everyone — the coupon looks great?"

**Answer.** Because there is no coupon — the "yield" on an accumulator is not a coupon, it's the fair compensation for writing a strip of leveraged daily short puts with no floor and a bank-owned knock-out. Specifically, an accumulator obliges the client to buy a fixed quantity of the underlying every day at a discounted strike, and typically **double that quantity every day** the stock closes below the strike. There is no lower barrier that limits the damage. If the underlying crashes, the client keeps accumulating 2× daily at a price well above market, for the full remaining tenor, with no way to stop except mid-tenor unwind at a punitive bid. The knock-out is above spot, so the bank terminates the trade exactly when it's working in the client's favour — the client only earns the "good" accumulation for as long as the stock stays in a narrow band. The product famously became known in Hong Kong as "I-kill-you-later" after the 2008 crash, when HNW investors ended up owing enormous sums on 2× daily buy-ins of HK blue-chips as the market halved. The regulatory and conduct environment post-2008 has tightened accordingly; most PB shelves restrict accumulators to clients with explicit sign-off on the leveraged leg, full settlement cash in place, and a documented understanding that this is a leveraged directional trade and not an income product. For an ordinary HNW seeking yield — even an aggressive one — a stack of DCIs, ELNs, or an autocallable will deliver the same "yield" narrative with a capped, comprehensible downside. The accumulator is the product you have to actively protect clients from, not sell them into.

---

## Related products

- [`issuers.md`](issuers.md) — Issuer-side perspective: BNP / UBS / JB franchise notes, post-CS AT1 read-through, how an EAM picks between issuers, diversification caps. Companion page to this one for PM-Assistant / EAM-Junior candidates.
- [`derivatives.md`](derivatives.md) — Option primitives (call/put, barrier, knock-in/knock-out, worst-of), Greeks, payoff diagrams, put-call parity, forward pricing. Every page on this page inherits from that one; if anything above felt opaque, the answer lives there.
- [`fx.md`](fx.md) — DCI-as-FX mechanics (spot/forward points, covered interest parity, NDF variants for restricted currencies), FX options and barriers, FX hedging use-cases.
- [`fixed_income.md`](fixed_income.md) — Callable and puttable bonds (the "callable" cousin of the range accrual), perpetuals with call features, make-whole mechanics, and the "structured note vs bond" suitability conversation.
- [`leverage.md`](leverage.md) — Lombard / securities-backed lending. Any structured-note book sized with Lombard leverage needs to understand that KI-triggered deliveries are counted at collateral-haircut values, not at strike; a concentrated KI event can trigger a margin call independently of the underlying's recovery path.
- [`../concepts/wealth_management.md`](../concepts/wealth_management.md) — SAA/TAA placement of structured-note sleeves (satellite, not core), suitability framework, mandate type (DPM vs advisory) implications for who's authorising the trade.
- [`../regulation/accredited_investor.md`](../regulation/accredited_investor.md) — SFA AI/EI definition, opt-in regime, Specified Investment Product classification, retail-distribution carve-outs for PP notes.
- [`../regulation/mas_notice_626.md`](../regulation/mas_notice_626.md) — Suitability-documentation-per-trade expectation; the regulatory frame that turns an accumulator mis-sale into a bank-level finding.
- [`../regulation/pb_code_of_conduct.md`](../regulation/pb_code_of_conduct.md) — ABS PB Code expectations on product-complexity disclosure, client categorisation, and ongoing suitability review.
