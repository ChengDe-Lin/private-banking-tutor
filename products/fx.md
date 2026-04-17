# Foreign Exchange

> **Day 3 of the 7-day study path.** FX is the second-largest revenue line on most PB desks after structured products, and unlike structured it flows through the book *daily* — every client who has multi-currency assets, an offshore property, children overseas, or a cross-border inheritance creates FX work. Singapore PBs in particular see heavy USD / SGD / HKD / CNY / JPY / AUD / EUR flow; Taiwanese clients add TWD NDF into the mix.

## 直覺理解

外匯 (FX) 本質上就是兩種貨幣的相對價格。PB 客戶碰 FX 通常不是為了投機——是為了**把未來一筆已知或半已知的跨幣別現金流鎖定在今天可以接受的匯率**（小孩留學學費、海外房產尾款、家族跨境繼承、外幣收息 hedging）。Spot 是當下價格；forward 是用兩邊利率差 (interest-rate differential) 鎖定的未來價；NDF 是流動性受限貨幣 (如 CNY / KRW / TWD) 的現金結算版本。選擇權 (FX option) 則讓客戶在鎖價和保有彈性之間取捨。**forward 不是市場對未來匯率的預測，是 carry 算出來的**——這是第一句話客戶最容易誤解的。

> 💡 **Bottom line for interviews:** Forward points = interest-rate differential (covered interest parity), **not** a market forecast of direction. NDFs exist for restricted currencies (CNY, KRW, TWD, INR) and settle against a fixing — not spot. Most PB FX work is hedging known liabilities, not speculation.

---

## Mechanism

### Quoting convention — which way is "up"?

An FX rate is always a *pair*: base / quote (also written base / term, or sometimes the slash is implicit).

```
USDSGD = 1.3500
       ↑
  1 USD = 1.3500 SGD
  (USD is BASE, SGD is QUOTE)
```

Rate moves **up** → base currency strengthens → quote currency weakens.

**Major-currency convention (USD-centric):** most G10 pairs quote as X / USD or USD / X by convention, not alphabetically:

| Pair | Base | Why this way |
|---|---|---|
| EURUSD | EUR | Historical seniority of EUR (ex-ECU legacy); 1 EUR = X USD |
| GBPUSD | GBP | Sterling seniority; 1 GBP = X USD |
| AUDUSD, NZDUSD | AUD, NZD | "Commonwealth commodity" convention |
| USDJPY | USD | USD dominance in Asia; 1 USD = X JPY |
| USDCHF, USDCAD | USD | Standard |
| USDSGD, USDHKD, USDCNH, USDTWD | USD | Asia-pair convention |

**Why this matters in interviews:** a client saying "EURUSD went up" means EUR strengthened (and USD weakened against EUR). A client saying "USDSGD went up" means USD strengthened (and SGD weakened). Same directional words, different underlying currency story. Mis-reading this is the #1 source of mis-communicated hedging decisions.

**Pips and the 4th-decimal convention.** Most pairs quote to 4 decimals (EURUSD 1.0875 → 1 pip = 0.0001 = smallest increment). JPY pairs quote to 2 decimals (USDJPY 152.30 → 1 pip = 0.01). "Big figure" = the hundredths; "pips" = the final basis-point-like increment.

**Bid / ask / spread.**

```
USDSGD   1.3498 / 1.3502
         ↑        ↑
         bid      ask
      (bank buys  (bank sells
       USD here)   USD here)
```

Client sells USD at the bid; client buys USD at the ask. Spread (4 pips = 0.04% here) is the dealing desk's margin. On majors in liquid size PB typically shows 3–8 pips; on Asia pairs 10–20 pips; on NDFs 20–50 pips; on exotic-tenor FX options 50+ pips-equivalent.

### Spot, forward, swap, NDF — the four instruments

**Spot (即期)** — settlement T+2 for most pairs, T+1 for USDCAD and RUB. This is the "cash" leg.

**Outright forward (遠期)** — single cash flow at a pre-agreed future date at a pre-agreed rate. No upfront cash. Used for hedging a known future flow (tuition payment, property settlement).

**FX swap (換匯)** — combination of spot + offsetting outright forward. You buy X USD spot and simultaneously sell X USD forward (or vice versa). Net cash flow today = 0 (beyond the swap points). Used to roll existing FX positions and to fund multi-currency portfolios. The "swap points" (difference between spot and forward) embed the interest-rate differential.

**NDF — Non-Deliverable Forward (無本金交割遠期)** — for currencies with capital controls (CNY onshore, KRW, INR, TWD, PHP, BRL, IDR, MYR historically). Settled in USD based on the difference between contract rate and a fixed spot reference (the "fixing", e.g. SAFE CNY fix, KFTC KRW fix) on settlement date. No local-currency movement ever occurs.

**Key NDF subtleties:**
- **CNY vs CNH** — CNY is the onshore yuan (controlled fixing, traded inside China); CNH is the offshore yuan (freely traded, primarily Hong Kong). USDCNH is deliverable offshore; USDCNY for non-CH residents is effectively NDF-only. The two track each other within ~50–200 pips but diverge sharply in stress.
- **TWD NDF** — for Taiwanese clients holding USD assets against TWD liabilities (or vice versa), or for Singapore booking of TWD-linked flows. No onshore TWD forwards market; offshore NDF in SG / HK is the only access.
- **Fixing risk** — NDF settles on the official fixing, which can gap on a policy announcement. Don't let a client hedge a real flow with an NDF without explaining that settlement happens at whatever rate the fix publishes, not where the market trades 5 minutes later.

### Forward points = interest-rate differential (covered interest parity)

The forward rate is **not** a market forecast. It is arbitrage:

```
F  =  S × (1 + r_quote × T) / (1 + r_base × T)          (simple-interest form)
```

where r_base and r_quote are interest rates on the base and quote currencies for tenor T. For USDSGD specifically:

```
USDSGD forward  =  USDSGD spot × (1 + r_SGD) / (1 + r_USD)
```

If USD rates > SGD rates (the 2023–2025 regime), the fraction (1+r_SGD)/(1+r_USD) < 1, so **forward USDSGD trades at a discount** to spot (e.g. 1.3500 spot → 1.3400 at 1Y forward). This is what covered interest parity forces: if it weren't true, you could borrow USD, buy SGD spot, invest at SGD rate, and sell forward, locking a risk-free gain.

**The client misunderstanding this looks like:** "USDSGD forward is at 1.3400, so the market thinks USDSGD will drop — maybe I should wait." Wrong. The forward tells you nothing about direction; it's pure carry. The correct client-facing framing: "Forwards reflect the interest-rate difference between the two currencies. If you're hedging a known USD receivable in 12 months, you'll lock in 1.3400 — which reflects the fact that USD has higher rates, so USD-holders are effectively paying that rate to rent the currency forward."

**Forward points table (illustrative, for intuition):**

| Pair | 1M | 3M | 6M | 12M | Rate differential driving it |
|---|---|---|---|---|---|
| USDSGD (USD rate > SGD) | –50 pips | –150 pips | –300 pips | –600 pips | SGD is the "lower-yielder" → forward discount |
| USDJPY (USD rate >> JPY) | –40 pips | –120 pips | –250 pips | –500 pips | Massive yield gap; big discount |
| USDHKD (pegged; HKD tracks USD rate) | ~0 | ~0 | ~0 | ~0 | Peg-driven; forwards flat |
| USDTWD NDF | –10 pips | –30 pips | –60 pips | –110 pips | Moderate TWD-USD gap |

### FX options — vanilla and barrier

**Vanilla FX option** — a call or put on a currency pair, same mechanics as any option. A "USDSGD put" = right to sell USD (buy SGD) at the strike. A "USDSGD call" = right to buy USD (sell SGD). Premium quoted in pips of quote currency, or as a percentage of notional.

**Barrier options:**
- **Knock-in (KI, 敲入)** — the option only becomes live if spot touches the barrier.
- **Knock-out (KO, 敲出)** — the option dies if spot touches the barrier. Cheaper premium than vanilla (because you're giving up the scenario where the barrier knocks you out).
- **One-touch / no-touch** — pay a fixed amount if the barrier is (or is not) touched during the life.

**FX options in PB client flows — three common use cases:**

1. **Cheaper hedging than outright forward** — buy a protective put with a KO above, client pays less premium but loses protection if spot rallies past the KO. Sensible when the client wants insurance against a down-move but is comfortable self-hedging above certain levels.
2. **Target-redemption structures (TRF / TARN)** — client receives enhanced coupons but accumulates FX at worse-than-spot levels until a cumulative P&L target is hit, then knocks out. This is the FX cousin of the accumulator in `structured.md`, and the 2008/2015 episodes of FX-TARN losses on CNH are well-documented. PB desks offer them; you should be able to explain exactly how a client gets hurt.
3. **Collars (risk reversals)** — client buys a protective option and funds it by selling the opposite tail. Same structure as equity collars. Popular for offshore-income clients who want "sleep-at-night" FX protection without paying upfront premium.

### Carry trade — the engine behind a lot of PB FX P&L

If you borrow in a low-yielder and park in a high-yielder, you earn the rate differential *provided the FX doesn't move against you by more than that*. Historical carry favourites: borrow JPY/CHF, park in AUD/NZD/EM. Key variants on PB desks:

- **Lombard-funded USD holdings for SGD-base clients** — the client's SGD is on deposit (earning SGD rate), but their Lombard-financed portfolio is USD; net they're "long USD carry" by construction. When USDSGD rallies (as in 2022–2023), this is a tailwind; when it drops, it bites.
- **Cross-currency loan structures** — borrow in a low-rate currency against collateral in a high-rate one; common for ultra-HNW who want low-cost financing against bond portfolios.

**Carry is not a free lunch.** It's the rate differential in exchange for the FX tail risk. `leverage.md` covers how this compounds when Lombard is involved.

---

## Payoff / Economics

### Worked example — tuition hedge

Setup: SGD-base client, daughter starts a 2-year US graduate programme in September 2027 (~18 months from today, 2026-04-17). Total USD tuition + living estimate: **US$200,000/year × 2 = US$400,000**, paid in two tranches: **US$200k on 15 Sep 2027**, **US$200k on 15 Sep 2028**.

Current spot: USDSGD = **1.3500**. 18M forward ≈ **1.3410** (i.e. ~90 pips discount for the ~100 bps rate differential). 30M forward ≈ **1.3310**.

**Option A — do nothing, pay at prevailing spot.**

- Budget today in SGD at 1.3500: 200k × 1.3500 = S$270k per tranche; total S$540k.
- Risk: USDSGD rallies to 1.4500 before tuition date → total cost rises to 200k × 1.4500 × 2 = S$580k (+ S$40k = 7% over-budget). USDSGD drops to 1.2800 → total cost S$512k (S$28k savings, ~5% under).

**Option B — outright forward for both tranches, done today.**

- Tranche 1 locked at 1.3410; tranche 2 at 1.3310. Total cost S$(200k × 1.3410 + 200k × 1.3310) = S$268.2k + S$266.2k = **S$534.4k**.
- No FX uncertainty. Client pays exactly this, full stop. Downside: if USDSGD crashes, the client paid ~1.3360 average while spot is (say) 1.25 — opportunity cost of "S$17k" (mark-to-market on the forward, not real cash).
- **This is the most common PB answer for a known liability-matched flow.**

**Option C — 50% forward + 50% spot when due.**

- Half-hedged; captures half of a favourable move, cushions half of an unfavourable one. Good compromise for a client who is emotionally split.

**Option D — buy USDSGD call (right to buy USD at a strike), pay premium.**

- Strike 1.3500, 18M, premium ~2.5% of notional = ~S$6.75k per tranche (illustrative). If USDSGD rallies, exercise and buy at 1.3500. If USDSGD drops, walk away from the option and buy at spot.
- Works if the client is willing to pay for asymmetry. In practice, for education hedges, the premium drag usually makes a forward strictly better unless the client genuinely sees >50% upside case for USDSGD.

### Worked example — offshore dividend income (ongoing)

Setup: SG-based client owns US$5M of US equities yielding ~1.5% = **US$75k/yr** in dividends, base currency SGD.

- **Unhedged:** S$ value of dividends = 75k × USDSGD-spot at each pay date. Variance ~5–8% per year.
- **Rolling 3M forwards**, re-hedged quarterly: locks each pay date at the then-prevailing forward. Reduces variance to near-zero at the cost of slight carry cost (~100 bps/yr at current rate differentials = ~S$1k/yr). For a pure income-matching mandate, this is standard.
- **Natural hedge:** SGD-base client also holds some USD expenses (travel, a USD loan, or SG condo costs denominated partly in USD through Lombard financing). Net SGD currency need may be much smaller than US$75k — hedge only the "net USD short" position.

---

## When to recommend (client fit)

| Client objective | FX instrument | Rationale |
|---|---|---|
| Known foreign-currency outflow in 3–36 months (tuition, property settlement, scheduled gift) | **Outright forward** | Locks the rate; simple; no margin calls; one cash flow |
| Ongoing foreign-currency income stream (offshore dividends, rental, royalties) | **Rolling forwards** (3M or 6M, rolled) | Smooths variance; cheap; operationally well-understood |
| Client has directional view and wants asymmetric payoff | **FX option (vanilla)** | Pay premium for optionality; avoids forced exit at the wrong price |
| Client willing to sell at a better level in exchange for yield | **DCI (Dual Currency Investment)** | Short-put via deposit wrapper; see `structured.md`. Good for clients with genuine appetite to switch currency at the alt-strike |
| CNY / KRW / TWD / INR exposure for a non-resident | **NDF** | Only operational route; explain fixing risk clearly |
| Cross-border multi-year balance sheet (USD assets, HKD mortgage, long tenor) | **Cross-currency swap** | Hedges both FX and rate for tenors that a chain of forwards would make operationally messy |
| Large lump-sum repatriation after a liquidity event | **Staged forwards / DCA** | Splits into 4–12 tranches; reduces timing risk; `cases/04_liquidity_event.md` walks through it |

**Where NOT to use FX instruments:**

- **Hedging a speculative position** — if the client is buying US equities as a view-driven punt, hedging the FX separately often adds noise; let them carry the embedded FX risk as part of the trade. PB desks sometimes sell FX hedges that make no strategic sense — resist.
- **Very long-dated hedges on a thin market** — 10Y forwards on NDF currencies are wide and illiquid; cross-currency swap is cleaner.
- **FX-TRF / accumulators for clients who "just want more yield on my USD"** — structurally identical to the HK accumulator episode (see `structured.md`). The coupon looks high; the tail scenario is forced accumulation at bad levels.

---

## Risks

**Transaction / market risk.** Spot moves; unrealised MTM on forwards moves. For a hedging instrument this is a *feature* (it offsets the underlying exposure), but clients will still ask about unrealised forward P&L. Frame: "if the forward is marked down 2% against you, your underlying exposure is marked up 2% in your favour — that's the whole point of the hedge."

**Counterparty risk (OTC).** Forwards, NDFs, swaps, FX options sit on the bank's balance sheet. A Lehman-type stress puts the unrealised MTM at risk. Mitigated by CSA collateral for large clients; for typical PB flows, accept and monitor.

**Liquidity risk.** Majors are deep 24/5; Asia pairs have thinner windows (London / NY hours for some EM pairs). NDFs can gap on policy announcements — FX fixing manipulation investigations (MAS-led settlements 2013–2015) specifically targeted NDF fixes, so the market has tightened operationally but fixings remain a pinch point.

**Fixing risk (NDF).** Settlement at the official fix, not the market rate at expiry. Can diverge sharply on capital-control announcements, reference-rate reforms, or one-off policy events.

**Carry-reversal risk.** Every long-running carry trade ends badly at some point. AUDJPY crashed 30% in Q3 2008, CNY-NDF outright depreciated in Aug 2015 and again Aug 2023. Clients compounding carry into their portfolio should size to survive a one-year 20–30% adverse move.

**Regulatory / capital-controls risk.** Onshore currencies (CNY, INR, KRW) are policy instruments of their central banks. MAS is clean; PBoC, RBI, BoK occasionally aren't. Do not assume a currency remains convertible in client-friendly ways indefinitely.

**Documentation risk.** Cross-border forward trades require KYC, AML, and often FATCA/CRS review of the ultimate beneficial owner. Under MAS 626, an FX trade for a client whose source-of-funds story shifts (e.g. a Taiwanese client suddenly wiring TWD-equivalent from a mainland-linked entity) is a trigger for enhanced due diligence. Tie this to `regulation/sow_sof_sanctions.md`.

---

## Interview questions you should be able to answer

### Q1. "A SGD-base client's daughter is doing her master's in the US starting in 2 years. Tuition is US$200k/yr for 2 years. How do you hedge?"

**Answer.** This is a classic liability-matched flow — US$200k in ~18 months, another US$200k in ~30 months. My first recommendation is two outright forwards, both done today, tranche 1 at the 18M forward (around 1.34 against current 1.35 spot — that ~100 bp discount reflects the USD-SGD rate gap), tranche 2 at the 30M forward. Client pays a known SGD total, full stop. Pros: no FX uncertainty for a family-priority outflow; no margin; one cash flow per tranche. Cons: if USDSGD crashes in the next two years the client paid a higher rate than spot — but for a known-spend priority like tuition, the point is removing variance, not optimising carry. If the client insists on upside participation, I'd propose a 50/50 structure: half forward, half left open, with a buy-USD-on-drawdowns plan. If they're rate-view-driven and willing to pay, a USDSGD call option locks a ceiling while leaving the downside open — but the premium drag usually makes the forward strictly better for education hedges.

### Q2. "Explain the difference between USDCNY and USDCNH to a client."

**Answer.** CNY is the onshore yuan — traded inside Mainland China, subject to the PBoC's daily fixing and the 2% trading band around it. Non-Chinese residents generally cannot settle CNY directly, so for offshore clients USDCNY exposure is via NDF (non-deliverable forward, cash-settled in USD based on the official fix). CNH is the offshore yuan — introduced in Hong Kong in 2010, freely traded, fully deliverable. In calm markets the two track each other within maybe 50–200 pips; in stress (2015 devaluation, 2023 capital-outflow episodes) the gap can widen to 500+ pips as offshore selling pressure outruns the PBoC's onshore management. For a PB client with RMB exposure, CNH is the instrument they can actually settle; USDCNY NDF is for clients specifically needing the onshore fix. I'd also warn them that the CNY fix is policy-managed, so NDFs can gap on a policy announcement.

### Q3. "Client says 'the forward tells me USDSGD will drop in a year, so let me wait and buy spot later.' What do you say?"

**Answer.** Politely, that's not what the forward is telling him. The forward is pure arbitrage: USD rates are higher than SGD rates, so holders of USD forward-sell to SGD holders, and the forward price reflects that rate gap — not any market forecast of direction. If he waits, he's taking outright spot risk for the full year, and the expected spot in a year (by the rate differential alone) is roughly where the forward is quoted today, not where current spot is. So "waiting" doesn't give him the forward price for free; it gives him the spot-at-that-date, whatever it turns out to be. If his conviction is "I think USDSGD will drop beyond what forwards already price in," he's taking an outright FX view, and I'd make sure he sizes it as speculation, not as a hedging decision. For the underlying obligation we're actually hedging, the forward is still the right instrument.

### Q4. "A Taiwanese client wants to invest US$2M of his TWD-equivalent wealth in US equities via a Singapore booking. Walk me through the FX setup."

**Answer.** Step one is the TWD → USD conversion. TWD isn't freely deliverable offshore, so the client would either (a) wire USD from a Taiwan-based USD account he already holds, which is the simplest, or (b) sell TWD onshore in Taiwan (via his TW bank) for USD and wire the USD to SG. Option (b) is subject to Taiwan's CBC annual quota of US$5M for individuals, which is fine for US$2M but requires documentation. Once USD is in the SG account, he's long USD against an effective TWD base — so anything we do in USD has embedded FX risk from his perspective. If he wants to hedge that back (say he'll eventually repatriate to TWD for retirement), we'd use offshore TWD NDFs through our SG desk — cash-settled in USD based on the TWD fixing. I'd flag: (1) TWD NDF liquidity is moderate, tenors out to 1Y are fine, beyond that spreads widen; (2) source-of-funds documentation is load-bearing given the Taiwan cross-border angle — tie back to MAS 626 enhanced CDD expectations; (3) if he's a US person by any definition (green card, substantial presence), FATCA reporting kicks in and we structure the account accordingly.

### Q5. "What would make you recommend an FX option over a forward?"

**Answer.** Three conditions, roughly in order: (1) the underlying cash flow is *conditional* — he might or might not actually make the purchase, so he wants the right to buy USD at a locked rate but not the obligation. A forward binds him; an option doesn't. (2) He has a directional view and is willing to pay premium to express it asymmetrically — say he thinks USDSGD has 70% probability of rallying but 30% of a sharp drop, and he's happy giving up the premium to keep the downside participation. (3) The hedge horizon is uncertain — an option gives flexibility on when to pull the trigger (if American-style) or at least preserves optionality through tenor. If none of those apply — he has a known USD outflow on a known date and wants to lock the rate cheaply — the forward is almost always the better instrument because there's no premium drag.

---

## Related products

- [`derivatives.md`](derivatives.md) — primitive option mechanics underlying vanilla and barrier FX options.
- [`structured.md`](structured.md) — DCI is the most common FX-linked structured product on a PB shelf; FX-TRFs / accumulators live there too.
- [`fixed_income.md`](fixed_income.md) — cross-currency bond holdings create embedded FX that you often end up hedging with rolling forwards or CCS.
- [`leverage.md`](leverage.md) — Lombard-funded multi-currency portfolios generate persistent FX exposure as a byproduct.
- [`../regulation/fatca_crs.md`](../regulation/fatca_crs.md) — cross-border FX flows trigger FATCA/CRS reporting considerations.
- [`../regulation/sow_sof_sanctions.md`](../regulation/sow_sof_sanctions.md) — FX flows across borders are typology red-flag territory; SOW/SOF documentation matters.
