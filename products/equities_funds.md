# Equities & Funds

> **Day 3 of the 7-day study path — light-depth reference page.** Cash equities, mutual funds, ETFs and REITs are table-stakes product knowledge; the interview won't spend long here but you will absolutely get asked "ETF or mutual fund — what do you recommend, and why?" and you must be able to speak to **fee conflicts, trailer fees / retrocessions, and the SG REIT regime** in particular.

## Mechanism

### Cash equities

- **Long cash (margin-free)** — buy stock, settle T+2 (T+1 in the US post-May 2024), own the share, receive dividends, vote the proxy. Simple. Booked via the PB's execution desk (rarely via client's direct online broker for UHNW flows).
- **Margin account** — broker lends against existing stock positions (overlaps `leverage.md`'s Lombard discussion; margin here is trading leverage specifically, typically at stricter haircuts than Lombard). Initial margin (e.g. 50% in the US under Reg T for equities) and maintenance margin (e.g. 25%) apply. A margin call triggers if equity / market value drops below maintenance; client must top up or positions are force-sold.
- **Short selling** — borrow shares, sell them, buy back later at (hopefully) lower price, return the shares. Cost = stock-borrow fee (in bps/yr, wildly variable by name) + financing on the short proceeds. Reg-S compliant shorting for PB clients is unusual; more common via L/S equity hedge funds (see `alternatives.md`).
- **Rights issues, stock splits, dividends (cash and stock), M&A events** — corporate-action handling is operationally meaningful for a PB book. A missed rights election on a key position is the kind of error that costs an RM a client.

### Mutual funds

A **mutual fund** is a pooled investment vehicle managed by a licensed asset manager under a stated mandate. Two structural variants, easy to confuse:

- **Open-end fund** — units are created and redeemed at NAV (usually daily; some alternative mandates weekly/monthly). This is the default for the overwhelming majority of PB-distributed funds.
- **Closed-end fund** — fixed number of shares issued at launch, then traded on an exchange at market price (which can differ from NAV, creating "discount to NAV" or "premium to NAV" dynamics). Less common in SG PB; more common in US as Business-Development Companies (BDCs) and listed PE trusts.

**Fee structure — the part interviews probe hardest:**

| Fee | What it is | Typical range |
|---|---|---|
| **Front-end load (initial sales charge)** | Paid when you buy; comes out of the subscription amount | 0–5%, often 1–3% at PB (negotiable for larger tickets) |
| **Back-end load (CDSC, contingent deferred sales charge)** | Paid only if you sell before a certain period; decreases over time | Typically 1–5%, scaling down to zero by year 5–7 |
| **Management fee (ongoing)** | Annual, charged within the fund NAV | Equity funds ~0.5–1.5%; alt ~1–2% |
| **Performance fee** | Manager takes a share of alpha above a hurdle | HFs historically 20%; long-only rarely has one |
| **Trailer fee / retrocession (回佣)** | Paid by the fund manager to the distributing bank ongoing, out of the management fee | Often 30–50% of management fee → 0.25–0.75% of fund NAV/yr |

**The trailer-fee conflict.** When an RM recommends Fund A (30 bps trailer) over Fund B (no trailer) with similar mandates, the bank earns 30 bps/yr forever on A and zero on B. Disclosed in principle under MAS and ABS PB Code; in practice the disclosure is thin. Post-2019, a material wave of funds has launched **"clean share classes"** (no trailer) for DPM mandates and institutional clients. Client-facing interview framing: know this exists, know the DPM mandate eliminates most of this tension by moving the RM's incentive from transaction to AUM fee, and explain it honestly when asked.

### ETFs (Exchange-Traded Funds)

**ETF vs mutual fund — the short version:**

| Dimension | Mutual fund | ETF |
|---|---|---|
| Trading venue | NAV subscription through fund admin | Exchange, continuous, market-price |
| Intraday price | One NAV at day-end | Live bid/ask, with creation/redemption keeping price near NAV |
| Management style | Mostly active (in the PB space) | Mostly passive, though active-ETF segment is growing |
| Expense ratio | 50–150 bps | 5–75 bps typically (S&P 500 ETF ~3 bps) |
| Trailers | Common | Rare |
| Tax efficiency (US) | Lower (forced distributions on redemptions) | Higher (in-kind creation mechanism) |
| Minimum | Often high for PB-distributed funds (US$10k–US$100k) | One share (maybe US$100–US$500) |

**ETF categories to speak to:**

- **Broad index** — S&P 500, MSCI World, MSCI EM, FTSE All-World. Core building block for a passive equity sleeve.
- **Sector / thematic** — tech, healthcare, clean energy, AI, robotics. Used for tactical tilts. The "thematic" wave (2020–2021) produced many funds that then drawdown 40–60% when the thesis faded — warn clients about chasing launch-hot themes.
- **Smart-beta / factor** — value, quality, momentum, low-vol, dividend. Academic basis is solid; implementation matters more than the label.
- **Leveraged / inverse (2x, 3x, –1x, –2x)** — daily-reset products that do **not** track the underlying index over periods longer than a day, because of compounding. A 2x S&P ETF in a flat-but-volatile year loses money even as the index is flat. **You should warn retail/AI crossover clients off these unless they specifically want a day-trading tool.**
- **Currency-hedged variants** — e.g. EWJ (Japan) vs DXJ (Japan currency-hedged). For SG-base clients buying Japan equities, DXJ-equivalent removes the USDJPY wobble; worth mentioning as the FX-aware default.

### REITs (Real Estate Investment Trusts)

REITs are listed trusts that hold income-producing real estate. Most countries' REIT regimes force **~90% of net income to be distributed annually as dividends** in exchange for trust-level tax exemption. This is why REIT yields look structurally high (4–7%+) versus equity yields — it's statutory distribution, not generosity.

**Singapore S-REIT regime — specifics worth knowing:**

- **Gearing cap** — 50% leverage cap set by MAS (previously 45%, raised to 50% in early 2020 during COVID). If gearing exceeds 50%, REIT cannot take on new debt without raising equity.
- **Development activity cap** — max 10% of deposited property value can be in development/property under construction (up from the historical 10% cap raised to 25% in certain circumstances per 2023 updates — specifics fluctuate with MAS guidance; check current rule before the interview).
- **Listed mainly on SGX** — the SG REIT market is the largest in Asia ex-Japan by market cap and diversity of exposure (retail, industrial, office, logistics, healthcare, hospitality, data centre).
- **Cross-border S-REITs** — many S-REITs hold assets outside SG (CapitaLand China Trust, Mapletree Pan-Asia, Frasers L&I). Currency and jurisdiction risk are baked in.
- **Dividend tax treatment** — S-REIT dividends to individual SG tax residents are tax-exempt at individual level. Non-resident unitholders receive distributions subject to different withholding treatments.

**Non-SG REIT regimes for context:** US REITs (pass-through taxation, ~90% distribution rule), Japan J-REITs (structural yield 3–4%), Australia A-REITs (staple structure), Hong Kong REITs (small market, historically discount-heavy). A cross-border REIT sleeve gives both yield and geographic diversification.

### Fund due-diligence — the 10-second filter

Before recommending a fund, run down this list in your head. If any raise a flag, dig deeper:

1. **Manager** — who runs it, how long have they been in seat, tenure stability. A fund with a rock-star PM who left six months ago is a trap.
2. **Mandate** — precisely what they're allowed to do (geographies, asset classes, leverage, currency). Drift is a common trap.
3. **Fees** — total expense ratio, trailer split, performance fees with / without hurdle and high-water mark.
4. **Tracking error / alpha** — for passive, TE vs benchmark; for active, alpha vs benchmark over 3Y / 5Y net of fees.
5. **AUM and growth** — very small (< US$100M) = capacity risk / potential closure; very large relative to market = may be too big to alpha in its segment.
6. **Liquidity** — daily vs weekly vs monthly redemption; gates / side-pockets / swing pricing mechanisms; last time they were triggered.
7. **Domicile** — UCITS (EU / Luxembourg / Ireland), Cayman, Delaware — each has tax and regulatory implications for SG clients.
8. **Investor base** — a fund dominated by a single large allocator is at risk from that allocator's redemption.
9. **Prior behaviour in stress** — how did it trade in March 2020, Q4 2022, SVB episode 2023.
10. **Holdings disclosure** — full transparency (monthly positions) vs opaque (quarterly summary only). Alternatives trend opaque; be careful recommending what you can't see into.

---

## Payoff / Economics

### Worked example — ETF vs active mutual fund over 10 years

Assume US$1,000,000 invested in global-equity exposure, 10-year horizon, gross market return of **8% p.a.** before fees.

**ETF:** expense ratio 0.15%; net return ~7.85%. Terminal value: 1,000,000 × 1.0785^10 ≈ **US$2,127,000**.

**Active mutual fund:** expense ratio 1.30%; trailer absorbed within that; say the manager delivers +0.20% gross alpha (generous historical net figure across the industry); net return = 8.20% – 1.30% = 6.90%. Terminal value: 1,000,000 × 1.069^10 ≈ **US$1,953,000**.

**Delta:** ~US$174,000 over 10 years, on US$1M — i.e. the active manager has to deliver roughly **+1.3% alpha gross, not +0.20%**, just to tie the ETF after fees. Academic evidence (SPIVA, Morningstar persistence studies) is that <20% of active equity funds beat their passive benchmark over 10Y net of fees. **This is the interview answer** — you concede the math, then explain when active *does* add value: (a) less efficient markets (EM small-cap, frontier), (b) thematic / niche expertise, (c) drawdown management where the client actually values smoothness over terminal value.

### Worked example — REIT yield vs bond yield

US$500k allocated to either a S-REIT sleeve at 6.0% yield, or to IG USD bonds at 5.0% yield. Same gross cash flow perspective:

- **S-REIT cash flow** = 500k × 6.0% = US$30k/yr, but this is *equity-like*: yield can be cut, the capital value floats with SG property cycle and interest rates, leverage embedded. Historical S-REIT drawdowns: 2008 –50%, 2020 –30%, 2022–2023 –20% on rate shock.
- **IG bond cash flow** = 500k × 5.0% = US$25k/yr, with more stable capital value for shorter-duration paper (see `fixed_income.md` for duration math).

The 100 bp yield difference is compensation for the equity risk, leverage exposure, and jurisdictional concentration in S-REITs — not a free lunch. Appropriate allocation depends on the client's ability to sit through a 20–30% temporary drawdown for the 1% yield premium.

---

## When to recommend (client fit)

| Client profile | Equity / fund recommendation |
|---|---|
| Passive-first, cost-conscious UHNW with a 20Y+ horizon | Core-satellite: 70% passive ETFs (MSCI World + EM); 20% selective active where alpha evidence is strong; 10% single-name tactical |
| Retiree SGD-base, seeking income + some equity upside | S-REIT sleeve (10–15%) + SG blue-chips (10%) + IG bonds (60%) + cash (10–15%) |
| HNW who wants "manager access" / prestige | DPM mandate with a select asset manager; avoids trailer-fee optics; fits the "professionally managed" want |
| Thematic / conviction-driven client | Target specific thematic ETFs (up to 10–15% of equity sleeve) but *within* a disciplined rebalancing rule; avoid chasing launch-hot themes |
| Concentrated-stock client (founder, exec) | Don't pile on more single-name risk; diversify via passive ETF + hedging existing holding (see `derivatives.md` collars, `structured.md` exchange fund) |
| Client wanting to short or hedge tactically | Typically not cash equities short — route via L/S HF (`alternatives.md`) or listed options (`derivatives.md`) |

**Where NOT to recommend these:**

- **Leveraged / inverse ETFs** for anything beyond a day-trade. Tracking error from compounding destroys long-term returns.
- **Trailer-heavy mutual funds for DPM-eligible UHNW clients** — use clean share classes; if your bank doesn't offer them, flag it upward.
- **Thematic-ETF rollover at the peak of a theme cycle** — 2021 ARK-style launches wiped out later subscribers.
- **Single-S-REIT over-allocation** — S-REIT market-cap concentration in a handful of names (the CapitaLand / Mapletree / Frasers families dominate) means "diversified S-REIT sleeve" of just 5 names isn't truly diversified.

---

## Risks

**Market risk.** Equities draw down; realised historical SG / US / global drawdowns of 30–50% occur roughly once a decade. Client must size exposure to withstand the tail.

**Concentration risk.** Single-stock concentration in the client's own holdings is a bigger risk than anything on the product side — covered in `cases/02_concentrated_equity.md`. Within fund choices, concentration happens when the "diversified" sleeve is actually 60% US mega-cap tech; run a look-through.

**Liquidity risk.** Open-ended mutual funds gate or swing-price during stress. ETFs can decouple from NAV in extreme moments (March 2020 credit ETFs traded at 5–8% discounts to NAV intraday). Closed-end funds trade persistent discounts that may or may not close.

**Fee drag / conflict risk.** Trailer-fee economics can and do skew RM recommendations. Declared on fact sheets but seldom challenged by clients. Know the honest answer.

**Manager risk (active funds).** Key-person risk, style drift, capacity issues. A fund that was great at US$500M can be mediocre at US$5B in the same segment.

**Currency risk.** Global equity and EM equity funds carry embedded FX; the base-currency-hedged vs unhedged share class choice materially affects client experience over 3–5Y.

**Jurisdictional / tax risk.** SG PB clients may face withholding tax on US dividends (15% under US-SG tax treaty), Japan dividends, etc. Fund of funds domicile matters (UCITS typically most tax-efficient for non-US persons).

**REIT-specific risks.** Interest-rate sensitivity (inverse relationship), property-cycle drawdowns, refinancing risk on high-gearing REITs, sector concentration (a SG retail REIT is not diversified by being "SG").

**Behavioural risk.** Clients buy thematic ETFs at the peak and sell passive cores in the trough. DPM mandates mitigate this by removing the client from the trade-by-trade decision. A well-placed argument for DPM.

---

## Interview questions you should be able to answer

### Q1. "A client asks: ETF or mutual fund — which do I recommend? Under what conditions?"

**Answer.** Default to ETFs for passive exposure — the 100+ bps fee drag from active mutual funds, on 10-year horizons, is hard to justify against SPIVA-type evidence that fewer than 20% of active equity funds beat their benchmark net of fees over a decade. So for the S&P 500 piece, MSCI World core, US IG bond index piece — ETF. Mutual funds earn a place in three conditions: first, when the mandate is in a less efficient market where active has evidence of alpha, think EM small-cap, frontier equity, some specific credit sub-segments; second, when the client values a specific manager's drawdown management over terminal alpha — a fund that limits downside in stress can be worth paying for even if it lags the index in bull years; third, when the exposure is structurally hard to replicate passively (certain alts, convertibles, specific themes where no liquid ETF exists or the passive implementation has known flaws). I'd also name the trailer-fee conflict honestly if the client asks — in DPM mandates we use clean share classes specifically to eliminate that distortion.

### Q2. "Walk me through the S-REIT regime in two minutes."

**Answer.** S-REITs are listed trusts on the SGX holding income-producing real estate, distributing at least 90% of net income annually in exchange for trust-level tax exemption. The largest REIT market in Asia ex-Japan by market cap, with sector diversity across retail, industrial, office, logistics, healthcare, hospitality, and data centres. Key regulatory parameters: a 50% gearing cap set by MAS — if the REIT's debt-to-total-assets exceeds 50%, it cannot take on new debt without raising fresh equity. Development activity cap of around 10% of portfolio value. Sponsor-driven model — each major S-REIT has an anchor sponsor (CapitaLand, Mapletree, Frasers, etc.) that handles pipeline and governance. Dividends to SG tax residents are tax-exempt at the individual level, which is the structural reason the yield is attractive to SG-resident wealth. Risks I'd highlight: rate sensitivity — S-REIT prices dropped ~20% in the 2022–2023 rate cycle — sponsor concentration, and jurisdictional mix (many S-REITs hold non-SG assets, creating embedded currency and regulatory risk clients often under-appreciate).

### Q3. "Why shouldn't I pitch a 2x leveraged ETF to a client who's bullish on tech?"

**Answer.** Leveraged ETFs achieve 2x exposure via daily rebalancing of futures or swaps — they promise 2x the *daily* return, not 2x the return over any longer period. Over longer horizons, compounding of daily rebalances causes significant tracking error against naive 2x expectations, and in flat-but-volatile markets they bleed value even as the underlying index goes nowhere. A 2x tech ETF over a year where tech is flat but vol is high can be down 10–20%. If the client wants leveraged upside conviction on tech, the honest tools are: Lombard-financed single-name or ETF equity on margin (see `leverage.md`), or a long-dated call option (cleaner economics, defined loss at premium). I'd say the 2x ETF is a day-trading instrument and mis-using it for a multi-month view is a common retail trap we shouldn't repackage for PB clients.

### Q4. "A client is switching banks and the old bank won't transfer a specific mutual fund — what's the issue?"

**Answer.** Most commonly it's a fund that's on the old bank's distribution agreement but not the new bank's. Mutual fund units are typically held through an omnibus nominee account specific to the distributor; to move, the client would need either the new bank to have the same distribution agreement with the fund manager, or to redeem and re-subscribe. Redeem-and-resubscribe means crystallising the current NAV (realising the tax event for US persons, paying any CDSC still applicable, losing days of market exposure during the transfer, and paying a front-end load at the new bank unless negotiated). I'd pre-negotiate the load waiver, time the redemption/re-subscription to minimise market gap, and document the transaction rationale especially if the client could be deemed to have received an inferior economic outcome — that's a suitability point under the PB Code. I'd also use the conversation to re-examine whether that fund is even the right recommendation now, or just an artefact of the prior bank's shelf.

---

## Related products

- [`derivatives.md`](derivatives.md) — options on individual equities (single-name collars, covered calls), index options, listed futures for hedging.
- [`structured.md`](structured.md) — equity-linked notes, autocallables, accumulators — all use equity underlyings and reference the same names as the cash-equity sleeve.
- [`fixed_income.md`](fixed_income.md) — REIT yield comparisons, bond-equity income tradeoff for retirees.
- [`alternatives.md`](alternatives.md) — L/S equity HFs, private equity for equity-like exposure with different liquidity profile.
- [`leverage.md`](leverage.md) — margin vs Lombard; haircut tables.
- [`../concepts/wealth_management.md`](../concepts/wealth_management.md) — active-vs-passive decision sits inside the advisory vs DPM mandate choice.
