# Derivatives

> **Day 1 of the 7-day study path.** Everything in `structured.md` (DCI, ELN, FCN, autocallable, accumulator) is a repackaging of what's on this page. If a concept here is shaky, the structured-products deep dive will collapse — re-read this first.

## 直覺理解

選擇權 (option) 是**權利**不是義務——買方付權利金換未來成交的選擇。期貨與遠期 (futures / forwards) 則是雙方都必須履約的合約，用來**鎖定**未來價格。把這兩者排列組合，就是私人銀行所有結構型商品的文法。

---

## Mechanism

### Options — the basic four

An **option** is a contract that gives the *buyer* the right (but not the obligation) to transact an underlying asset at a fixed price (the *strike*), on or before a fixed date (the *expiry*), in exchange for a **premium** paid upfront to the *seller* (also called the *writer*).

There are only two option types and two sides, giving four primitive positions:

| Position | Buyer's view | Seller's view |
|---|---|---|
| **Call (買權)** | "I want the right to BUY at the strike." Bullish. | "I receive premium; I must DELIVER the underlying at the strike if exercised." |
| **Put (賣權)** | "I want the right to SELL at the strike." Bearish / hedging. | "I receive premium; I must BUY the underlying at the strike if exercised." |

Every product in `structured.md` is built from these four primitives (long call, short call, long put, short put) plus bonds and cash.

**Style (行使方式):**
- **European** — exercisable only at expiry. Most OTC options booked by PB desks (and all vanilla structured-product embeddeds) are European for pricing simplicity.
- **American** — exercisable any time up to expiry. More common for listed single-stock options.
- **Bermudan** — exercisable on a schedule of discrete dates. Relevant for autocallables (observation dates).

**Moneyness (價內 / 價外):**
- **ITM (in-the-money, 價內)** — exercise has positive intrinsic value *now*. Call ITM if spot > strike; put ITM if spot < strike.
- **ATM (at-the-money)** — spot ≈ strike. Time value is maximised here, which matters for why DCI strikes tend to be ATM-ish.
- **OTM (out-of-the-money, 價外)** — exercise has zero intrinsic value now. Call OTM if spot < strike; put OTM if spot > strike.

**Premium decomposition:**

```
Premium = Intrinsic value   +   Time value
            ↑                     ↑
   max(0, S-K) for call    option-of-optionality,
   max(0, K-S) for put     driven by vol, time-to-expiry, rates
```

At expiry, time value collapses to zero — only intrinsic value remains. This is why every short-option strategy you'll see in PB (DCI, ELN, covered call) is fundamentally *selling time value* and pocketing it as coupon.

### Payoff diagrams (described in text — no images needed)

Think of each diagram as the P&L at expiry plotted against the spot price (S) of the underlying. Strike = K, premium paid/received = P.

**Long call** (buyer of a call — paid premium P for the right to buy at K):
- Left of K (S < K): you won't exercise; your P&L is flat at **-P** (you lost the premium).
- At K: still -P (just break-even on intrinsic, still down the premium).
- Above K: diagonal line going up 1-for-1 with S. P&L = **(S - K) - P**.
- **Breakeven**: S = K + P.
- **Max loss**: -P (capped). **Max gain**: unbounded as S → ∞.

**Short call** (writer — received premium P, obligated to deliver at K):
- Mirror image of long call. Flat at **+P** when S ≤ K, then slopes DOWN 1-for-1 above K.
- **Max gain**: +P (capped). **Max loss**: unbounded as S → ∞.
- This is the tail that bit Barings / UBS / many individual investors; naked shorts can blow up a book overnight.

**Long put** (buyer of a put — paid P for the right to sell at K):
- Above K (S > K): won't exercise; flat at **-P**.
- Below K: diagonal line going up as S falls. P&L = **(K - S) - P**.
- **Max loss**: -P. **Max gain**: K - P (if S crashes to 0).
- This is **portfolio insurance**.

**Short put** (writer — received P, obligated to BUY at K):
- Above K: flat at **+P**. You keep the premium; counterparty walks.
- Below K: diagonal sloping DOWN as S falls. P&L = **P - (K - S)**.
- **Max gain**: +P. **Max loss**: K - P (if S crashes to 0 — this is what happens inside a DCI / ELN when the stock tanks).

**The single most important sentence on this page:** A DCI investor is a **short-put seller**. An ELN / FCN / autocallable investor is a **short-put seller**. An accumulator investor is a **leveraged short-put seller**. If you internalise short-put P&L, you've internalised half the PB product shelf.

### Put-call parity and synthetic identities

The fundamental identity linking the four primitives (European, same K and T, no dividends):

```
C - P  =  S - K·e^(-rT)
```

In plain words: **long call + short put = long the underlying (forward-financed)**.

Rearrangements you must know cold:

| Synthetic | = | Built from |
|---|---|---|
| Long call | = | Long underlying + Long put |
| Long put | = | Long call + Short underlying |
| Long underlying | = | Long call + Short put |
| Short underlying | = | Short call + Long put |

**Protective put / married put:** "Long underlying + long put = long call" is the client-facing translation of the first row. Economically identical to buying a call, but framed as "I already own the stock; I'm buying insurance" — which sells far better to concentrated-stock clients than "let's close your position and rebuy a call".

### Forwards and futures

A **forward** is a bilateral OTC contract to buy/sell an asset at a pre-agreed price on a future date. A **future** is an exchange-traded, standardised forward with daily margining.

| | Forward | Future |
|---|---|---|
| Venue | OTC, bilateral | Exchange |
| Contract terms | Bespoke (amount, date, underlying) | Standardised |
| Counterparty risk | Your counterparty directly (usually the bank) | Exchange clearinghouse (CCP); initial + variation margin |
| Cash flow | Single settlement at maturity | Daily marking-to-market; variation margin posted/received each day |
| Liquidity | Depends on the dealer's appetite | Deep, continuous |
| Typical PB use | FX hedges, long-dated commodity/NDFs, customised tenors | Rarely booked directly for clients |

**Why PB desks prefer forwards for clients:** a client hedging (e.g.) US$5M of known USD income against SGD doesn't want daily margin calls bleeding their account every time USDSGD twitches. A forward has one cash flow at maturity and the bank manages the intra-life P&L on its own book. The bank's treasury back-to-backs the client forward into the interbank market, so operationally the bank is running the futures-like hedge, not the client.

**Cost-of-carry intuition:** The forward price F for a non-dividend, non-storage asset is

```
F = S · e^((r - q)·T)
```

where r is the funding cost and q is the yield (dividend / convenience / foreign-currency interest rate). In FX this is what you know as **covered interest parity**: the forward points reflect the interest-rate differential between the two currencies. If SGD rates are below USD rates, USDSGD trades at a **discount** in the forwards — the high-yield currency sells at a forward discount. Clients sometimes misread this as "the market expects USDSGD to fall"; it doesn't — it's pure carry arithmetic.

**Convergence to spot:** At expiry, F → S by arbitrage. Any forward you book lives its life being pulled toward spot, with daily P&L = change in forward price × notional × sensitivity.

### Swaps

A **swap** is an exchange of cash flows over multiple dates. Three flavours you must speak to:

**Interest Rate Swap (IRS, 利率交換):**
- One leg pays a **fixed rate**, the other pays a **floating rate** (historically LIBOR; now SOFR in USD, SORA in SGD, HONIA in HKD post-IBOR reform).
- Notional is *not* exchanged — only the net interest-rate difference changes hands each coupon date.
- PB use: a client with a floating-rate Lombard loan who worries about rising rates can pay-fixed / receive-floating to lock in financing cost. The bank's treasury desk books it; client sees it as a bundled "rate hedge".

**Cross-Currency Swap (CCS, 貨幣交換):**
- Exchanges principal + interest in one currency for principal + interest in another. Principals ARE exchanged at start and end at the initial FX rate.
- Differs from FX forwards in that CCS has *periodic interest exchanges*; a forward has only one terminal cash flow.
- PB use: a client with USD assets funding SGD liabilities (or vice versa) over multiple years — locks the FX and the rate.

**Credit Default Swap (CDS):**
- Protection buyer pays a periodic premium; protection seller pays par minus recovery if the reference entity defaults. Economically: insurance on a bond.
- Rarely sold directly to PB clients post-2008 (reputational + suitability), but you should be able to define it in one line. It occasionally shows up as the hedging instrument inside credit-linked notes.

---

## Greeks (intuition only)

Greeks are partial derivatives of the option price with respect to market variables. You don't need the formulas; you need to answer "if this moves, what happens to the option, and what does the client feel?"

| Greek | One-line definition | Why a PB client cares |
|---|---|---|
| **Delta (Δ)** | How much the option price moves per $1 move in spot. Long call Δ ∈ (0, +1); long put Δ ∈ (-1, 0). ATM ≈ ±0.5. | Delta IS the hedge ratio. If your client holds a 0.3-delta call on 100k shares, she's economically long ~30k shares — that's what her P&L will do on a $1 spot move. |
| **Gamma (Γ)** | Rate of change of delta. How "convex" the exposure is — biggest near ATM and near expiry. | Why short-dated ATM short options (DCI, accumulator knock-in territory) get violent fast. Delta swings from 0.5 → 0.9 as spot drops through the strike; your client's paper loss accelerates. |
| **Theta (Θ)** | Time decay per day. Long options bleed theta; short options earn it. Non-linear — biggest in the last month. | Why clients who *buy* protection (long puts) hate calm markets: they pay theta every day. Why clients who *sell* options (DCI, ELN) "earn coupon" — they are being paid to warehouse theta. |
| **Vega (ν)** | Sensitivity to a 1-vol-point change in implied volatility. Both calls and puts are long vega (buying either is long vol). | When VIX / underlying IV jumps, option values rise — long puts the client bought as a hedge actually mark up *before* spot has moved. Conversely, a DCI client short an embedded put sees its mark-to-market go **against** them when vol spikes, even if spot is flat. |
| **Rho (ρ)** | Sensitivity to interest rates. Usually small for short tenors. | Mostly ignored for < 1Y structured trades; matters for long-dated FX / rates products. |

**Greeks at a single glance — directional cheat sheet:**

|  | Long call | Short call | Long put | Short put |
|---|---|---|---|---|
| Delta | + | – | – | + |
| Gamma | + | – | + | – |
| Theta | – | + | – | + |
| Vega | + | – | + | – |

Every line in that table matters. "DCI client is short put" therefore means: long delta (hurt on drops), **short gamma** (pain accelerates), long theta ("earns the coupon"), **short vega** (hurt when vol spikes). That single row of four signs *is* the DCI risk profile.

---

## Payoff / Economics

All numbers below are **illustrative** — hand-picked to be plausible, not Black-Scholes-exact.

### Worked examples — each primitive at expiry

**Setup**: underlying XYZ, spot = $100, 3-month options, implied vol = 25%, zero dividends, ~0 rates. A 3M ATM call premium is roughly **$5.00**; a 3M ATM put is also roughly **$5.00** (by put-call parity at zero rates/divs). We'll use these for the four examples.

**1. Long call, K = 100, P = $5 paid**

| Spot at expiry | Exercise? | P&L per share |
|---|---|---|
| $85 | No | **–$5** (lost premium) |
| $100 | No (no intrinsic) | **–$5** |
| $105 | Yes | $5 intrinsic – $5 premium = **$0** (breakeven) |
| $115 | Yes | $15 – $5 = **+$10** |
| $130 | Yes | $30 – $5 = **+$25** |

Loss capped at $5; upside unbounded. Breakeven at K + P = $105.

**2. Short call, K = 100, P = $5 received**

| Spot at expiry | Assigned? | P&L per share |
|---|---|---|
| $85 | No | **+$5** (keep premium) |
| $100 | No | **+$5** |
| $105 | Yes | $5 received – $5 delivered-at-loss = **$0** |
| $115 | Yes | $5 – $15 = **–$10** |
| $130 | Yes | $5 – $30 = **–$25** |

Gain capped at $5; loss unbounded. A naked short call is what can blow up a book — the writer must deliver stock they don't own, at any price.

**3. Long put, K = 100, P = $5 paid**

| Spot at expiry | Exercise? | P&L per share |
|---|---|---|
| $115 | No | **–$5** |
| $100 | No | **–$5** |
| $95 | Yes | $5 intrinsic – $5 premium = **$0** (breakeven) |
| $85 | Yes | $15 – $5 = **+$10** |
| $60 | Yes | $40 – $5 = **+$35** |

Loss capped at $5; max gain at spot → $0 is (K – P) = $95. Breakeven at K – P = $95.

**4. Short put, K = 100, P = $5 received**

| Spot at expiry | Assigned? | P&L per share |
|---|---|---|
| $115 | No | **+$5** |
| $100 | No | **+$5** |
| $95 | Yes | $5 – $5 = **$0** |
| $85 | Yes | $5 – $15 = **–$10** |
| $60 | Yes | $5 – $40 = **–$35** |

Gain capped at $5; worst case (spot → 0) is –(K – P) = –$95. **This is the shape of a DCI / ELN payoff.** The "enhanced coupon" is $5; the tail is the client buying stock at $100 while market clears at $60.

### Synthetic identity — protective put ≡ long call

A concentrated-stock client owns 10,000 shares of XYZ at $100. She buys 100 ATM 3M puts at $5 each, paying $5,000 (5% of portfolio).

| Spot at expiry | Stock P&L | Put P&L | Net position value | Net P&L vs $1,000,000 start |
|---|---|---|---|---|
| $130 | +$300,000 | –$5,000 (unexercised) | $1,300,000 – $5,000 | **+$295,000** |
| $110 | +$100,000 | –$5,000 | $1,100,000 – $5,000 | **+$95,000** |
| $100 | 0 | –$5,000 | $1,000,000 – $5,000 | **–$5,000** |
| $95 | –$50,000 | $0 (exercised, breakeven) | $950,000 + $0 | **–$50,000** (floor ≈ K·shares – premium = $995,000 – wait, recheck below) |
| $70 | –$300,000 | $25,000 net (exercised at K=100) | $700,000 + $25,000 | **–$275,000**? |

Let me redo the floor cleanly. With long put at K=100, at any spot ≤ 100 the put pays (100 – S) per share, exactly offsetting the stock loss below $100. So:

- **Upside**: unlimited participation minus the $5 premium cost (–50 bps per year of portfolio drag in this example).
- **Floor**: portfolio value cannot fall below (K × shares) – premium = $1,000,000 – $5,000 = **$995,000**, no matter how far XYZ crashes.

Compare to: sell all stock, buy a long 3M ATM call for $5,000. Same payoff shape (floor at cash, unlimited up, minus premium). **Long stock + long put ≡ long call.** Tell the client which framing they prefer; don't argue the math.

---

## When to recommend (client fit)

Match client objective → primitive. The table below is the starting heuristic; real recommendations layer on FX base, tax, liquidity, existing concentration, and Accredited-Investor status (see `regulation/accredited_investor.md`).

| Client situation | Primitive that fits | Rationale |
|---|---|---|
| HNW USD-income seeker, neutral-to-mild-bullish on a name they already know, willing to own more of it at a lower price | **Sell cash-secured put (via DCI)** | Earn premium as coupon; take delivery only if it breaks the strike. Requires the cash already parked. |
| Holds an appreciated single stock, happy to sell some above a target price | **Sell covered call (yield enhancement)** | Gives up upside above K in exchange for premium. Common for founder / restricted-stock clients. |
| Concentrated single-stock position, wants to stay long but sleep at night | **Buy put (protective put)** | Pays for insurance; preserves upside. Alternative: collar (sell call to fund the put) — removes both tails for zero premium but caps upside. |
| Known future USD receivable (e.g. dividend income, property sale), SGD/HKD base | **Short USD forward** | Locks the FX rate for a known date; no margin drag on the client; bank hedges internally. |
| Floating-rate Lombard loan, rising-rate environment, 3Y+ horizon | **Pay-fixed IRS** or **fixed-rate refinance** | Hedges funding cost without forcing deleverage. |
| Multi-currency balance sheet with multi-year maturity mismatch | **Cross-currency swap** | Hedges both FX and rate for the full tenor; operationally heavier than a chain of forwards but cleaner. |

**What PB desks will NOT typically offer, and you should say so in interviews:**

- **Naked short options** — the tail risk is unacceptable and the firm's suitability framework blocks it. Short puts are only booked when **cash-secured** (collateral already parked, sized to accept assignment). Short calls are only booked when **covered** (the client owns the underlying).
- **Speculative naked forwards/futures on leverage** — the client would need to post margin, take margin calls, and sign acknowledgements; this is prop-desk / hedge-fund territory, not PB.
- **Anything without a mechanism the client can explain back to you** — this is the MAS 626 / PB Code suitability bar.

Also flag: the "DCI looks like a 10% yield bond" mental model is exactly how clients get hurt. The 10% is option premium, not coupon; the client is running short-put risk. This is worth repeating every time (see `structured.md`).

---

## Risks

**Market risk**
- Long options: lose at most the premium — but that's still 100% of the premium, daily, via theta and vol moves.
- Short options: **unlimited** on naked calls; **bounded but large** (strike × notional) on naked puts. The 2008 Hong Kong accumulator episode — clients nicknamed the product "I-kill-you-later" — is the canonical example; many HNW Asian clients took multi-million-USD losses when Hang Seng names halved against pre-agreed accumulation strikes. Variants have reappeared as ELN knock-ins during every sharp Asia-ex-Japan drawdown since.

**Margin / financing risk (futures & leveraged forwards)**
- Daily mark-to-market means intraday moves can trigger variation-margin calls. Clients on Lombard + futures can be force-liquidated inside a gap move.

**Counterparty risk (OTC forwards, OTC options, swaps)**
- Your client's P&L sits on the bank's balance sheet. In single-name CDS-era or 2008-type stress, this matters. Mitigated by CSA collateral schedules, but not eliminated. ISDA / CSA terms are not client-negotiable for PB flows.

**Liquidity risk**
- OTC options and bespoke-tenor forwards have wide bid-offer in stress. Clients who need to unwind a 6-month DCI in week 2 because of a margin event will eat 200–400 bps of bid-offer.

**Gap risk**
- Between close and open, or across a halt (earnings, M&A, regulatory suspension), the underlying can jump past the strike with no opportunity to hedge. Short-gamma positions (short options) suffer the most; protective-put buyers are exactly who benefit.

**FX risk on the wrapper**
- A USD-denominated option on a HKD-listed stock carries embedded FX exposure. The product "looks" stock-only but clients see marks move on HKD strength/weakness too.

**Early-termination / unwind risk**
- OTC structures have no secondary market; unwind is a bilateral quote from the booking bank. Unfavourable timing = wide quotes.

**Behavioural / reputational risk**
- Clients who understood the coupon but not the tail call the RM the moment MTM goes red. Every PB bank has "morning-after" stories; suitability documentation is the only defence. Tie this directly to MAS 626 enhanced-CDD and the ABS PB Code expectation that RMs document suitability per trade, not per relationship (see `regulation/mas_notice_626.md` and `regulation/pb_code_of_conduct.md`).

---

## Interview questions you should be able to answer

### Q1. "A client holds US$5M of a single US stock. Walk me through three ways to manage concentration risk."

**Answer.** I'd frame three options along a cost-vs-protection axis. **One, protective put** — buy an OTM put (say 10% OTM, 6-month) for maybe 1.5–2% of notional; preserves all the upside above spot and caps downside at the strike. Good for a client who still believes in the name but wants to sleep at night. **Two, a zero-cost collar** — buy the same put and fund it by selling an OTM call (say 10% OTM); the premium from the call pays for the put, net zero, but the client gives up upside beyond the call strike. Right for a client who's willing to sell at a higher price anyway. **Three, an exchange fund or pre-paid forward** — diversifies the single-stock exposure into a basket while deferring the capital-gain event; the cleanest solution economically but has lock-ups (typically 7 years) and is AI-only. I'd ask about the client's tax basis, timing of any liquidity need, and emotional attachment to the stock before recommending — those three answers determine which of the three fits.

### Q2. "What's the difference between a forward and a future? Why does the bank usually book forwards not futures for clients?"

**Answer.** A forward is an OTC bilateral contract with bespoke terms and a single settlement at maturity; a future is exchange-traded, standardised, and marked-to-market daily with variation margin. Economically the P&L is similar — the forward just defers all cash flows to the end, where the future meters them out each day. The bank books forwards for clients because clients don't want daily margin calls bleeding their account when a hedge moves against them intraday — they want the hedge to just be there. The bank's treasury desk back-to-backs the client forward into the interbank or futures market and manages the margin on its own balance sheet; the client sees a clean single cash flow at maturity. Operationally it also simplifies the suitability and custody story — one trade ticket, one settlement, no margin-call documentation to chase from a private-banking client.

### Q3. "Explain Vega to a client in one sentence."

**Answer.** "Vega is how much your option gains or loses when the market gets more nervous — if implied volatility rises one percentage point, your long option is worth roughly Vega dollars more, even if the stock hasn't moved a cent." (If they want more: "so the put you bought for insurance can actually mark up in value before the crash arrives, because the market is already pricing a higher probability of one.")

### Q4. "Your client sold a covered call that's now ITM — walk me through the conversation."

**Answer.** First, reframe: the client has not lost money on the trade — they've sold the stock at the strike plus the premium they collected, which is exactly the economic outcome they signed up for when they wrote the call. If the strike was $110 on a $100 stock and they took $3 of premium, they're exiting at an effective $113 on a stock now at $118 — a good outcome, just not the best possible outcome. Second, acknowledge the feeling — "we gave up the last $5" is real even if it's not a loss. Third, options going forward: (a) let assignment happen and redeploy the cash — simplest, crystallises the gain; (b) roll the call up-and-out — buy back the short call and sell a higher-strike, later-dated call, usually at a net debit if the stock has rallied, which effectively means paying to "buy back" some upside; (c) if they no longer want the covered-call programme at all, close cleanly and move to an outright long position. I'd frame (a) as the default and (b) only if the client has a specific view that the rally continues. Finally, I'd remind them the covered-call income was their stated objective in the first place — this is the trade working.

---

## Related products

- [`structured.md`](structured.md) — DCI, ELN, FCN, autocallable, accumulator. Every one of these is a short put (sometimes plus knock-in/knock-out triggers) wrapped as a yield instrument. Read this page first; that one next.
- [`fx.md`](fx.md) — FX forwards, NDFs, FX options, DCI-as-FX (Dual Currency Investment in the FX form). Cost-of-carry / covered-interest-parity live there in detail.
- [`leverage.md`](leverage.md) — Lombard / securities-backed lending. Leverage sits under every aggressive option strategy; accumulator and margin-call mechanics cross-reference here.
- [`fixed_income.md`](fixed_income.md) — callable / puttable bonds have an embedded option; make-whole calls are an embedded short call the investor implicitly writes.
- [`../concepts/wealth_management.md`](../concepts/wealth_management.md) — suitability and the SAA/TAA frame within which any derivative recommendation has to sit.
