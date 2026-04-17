# Private Banking Tutor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Singapore Private Banking interview-prep knowledge base for a Taiwanese friend (RM-lateral / Investment Counselor target) — a markdown-first repo with a 7-day study path, practice artifacts, custom slash commands, and a Vite/React/Tailwind static site published on GitHub Pages, ready within one week.

**Architecture:** Markdown content under topic folders readable directly on GitHub; `study_path.md` at root as default entrypoint; `.claude/commands/*` for slash commands; `web/` mirrors `~/system-design-tutor/web` (Vite + React + Tailwind) and renders the markdown with a sidebar index; GitHub Actions workflow publishes `web/dist` to `gh-pages`.

**Tech Stack:** Markdown (GitHub-flavoured), Vite, React, Tailwind CSS, TypeScript, GitHub Actions, GitHub Pages.

**Spec reference:** `docs/superpowers/specs/2026-04-17-private-banking-tutor-design.md`

**Repo root:** `~/private-banking-tutor/` (already exists — contains only the `docs/superpowers/` folder).

---

## File Structure

### Created by this plan

```
private-banking-tutor/
├── README.md                                   # Task 1
├── CLAUDE.md                                   # Task 1
├── LICENSE                                     # Task 1 (MIT)
├── .gitignore                                  # Task 1
├── study_path.md                               # Task 1
├── industry.md                                 # Task 8
├── market_view.md                              # Task 8
├── products/
│   ├── derivatives.md                          # Task 2
│   ├── structured.md                           # Task 3
│   ├── fixed_income.md                         # Task 4
│   ├── fx.md                                   # Task 4
│   ├── equities_funds.md                       # Task 4
│   ├── leverage.md                             # Task 5
│   └── alternatives.md                         # Task 5
├── concepts/
│   ├── wealth_management.md                    # Task 6
│   └── cio_house_view.md                       # Task 6
├── regulation/
│   ├── mas_notice_626.md                       # Task 7
│   ├── pb_code_of_conduct.md                   # Task 7
│   ├── accredited_investor.md                  # Task 7
│   ├── fatca_crs.md                            # Task 7
│   └── sow_sof_sanctions.md                    # Task 7
├── cases/
│   ├── 01_hnw_income.md                        # Task 9
│   ├── 02_concentrated_equity.md               # Task 9
│   ├── 03_aggressive_growth.md                 # Task 9
│   ├── 04_liquidity_event.md                   # Task 9
│   └── 05_cross_border_family.md               # Task 9
├── bq/
│   ├── README.md                               # Task 10
│   └── stories/
│       ├── 01_relationship_win.md              # Task 10
│       ├── 02_ethical_aml_flag.md              # Task 10
│       ├── 03_market_volatility_client.md      # Task 10
│       ├── 04_difficult_client.md              # Task 10
│       ├── 05_cross_sell_success.md            # Task 10
│       ├── 06_lost_client_recovery.md          # Task 10
│       ├── 07_product_conflict_specialist.md   # Task 10
│       ├── 08_missed_target_learning.md        # Task 10
│       ├── 09_cold_outreach_win.md             # Task 10
│       └── 10_regulatory_change_adapt.md       # Task 10
├── business_plan/
│   └── template.md                             # Task 11
├── assessments/
│   └── confusion_ledger.md                     # Task 11
├── .claude/
│   └── commands/
│       ├── product.md                          # Task 12
│       ├── case.md                             # Task 12
│       ├── bq.md                               # Task 12
│       ├── market.md                           # Task 12
│       └── confusion.md                        # Task 12
├── web/                                        # Tasks 13-14
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── components/Sidebar.tsx
│       ├── components/MarkdownPage.tsx
│       └── content-index.ts
└── .github/
    └── workflows/
        └── deploy.yml                          # Task 15
```

### Already exists (do not recreate)

- `docs/superpowers/specs/2026-04-17-private-banking-tutor-design.md`
- `docs/superpowers/plans/2026-04-17-private-banking-tutor.md` (this file)

---

## Content conventions (apply to every markdown file)

**Every product deep-dive must contain these sections in this order:**

1. `# <Product name>`
2. `## 直覺理解` — one short Traditional-Chinese paragraph (2-4 sentences) explaining the product as a mental model, plain language, no jargon
3. `## Mechanism` — how the product is constructed (in English)
4. `## Payoff / Economics` — what the client gets in each market scenario, with a simple numeric example
5. `## When to recommend (client fit)` — client profile, horizon, risk appetite, FX base; state explicitly when NOT to use it
6. `## Risks` — include at minimum: market, credit/counterparty, liquidity, FX, early-termination where relevant
7. `## Interview questions you should be able to answer` — 4-6 Qs with short answers
8. `## Related products` — links to sibling pages

**Every case study must contain:**

1. `# Case NN: <slug>`
2. `## Client profile` (net worth, age, occupation, family, FX base, current holdings, liquidity needs)
3. `## Constraints & objectives`
4. `## Recommended allocation` (SAA, then TAA tilts) — table format
5. `## Product picks with justification` — each product linked to a page under `products/`
6. `## Risks to flag to the client`
7. `## Interview follow-ups` — 3-5 questions the interviewer may drill

**Every BQ story (STAR) must contain:**

1. `# <Category>: <one-line title>`
2. `## Situation`
3. `## Task`
4. `## Action`
5. `## Result` (with a number where possible)
6. `## What this demonstrates` — one line mapping to PB competency (relationship, integrity, judgement, resilience, commercial, cross-cultural)

**Every regulation page must contain:**

1. `# <Regulation>`
2. `## What it is` (1 paragraph)
3. `## Why it exists` — the real-world trigger (1MDB, FATCA origin etc.) so the rule sticks
4. `## Who it applies to`
5. `## Key obligations` (bulleted)
6. `## Red flags / practical application`
7. `## Interview questions`

**Chinese annotation rule (per spec §4):** use `(中文: …)` inline for complex/counterintuitive terms; `直覺理解` block only on product deep-dive pages.

**Source-of-truth note:** each file states "Last reviewed: YYYY-MM-DD" at the top where content is time-sensitive (market_view, regulation).

---

## Tasks

### Task 1: Repo scaffolding

**Files:**
- Create: `~/private-banking-tutor/README.md`
- Create: `~/private-banking-tutor/CLAUDE.md`
- Create: `~/private-banking-tutor/LICENSE`
- Create: `~/private-banking-tutor/.gitignore`
- Create: `~/private-banking-tutor/study_path.md`

- [ ] **Step 1: Initialise git repo**

```bash
cd ~/private-banking-tutor && git init -b main
```

Expected: "Initialized empty Git repository in /Users/chengde_lin/private-banking-tutor/.git/"

- [ ] **Step 2: Write `.gitignore`**

Contents:
```gitignore
# Node
node_modules/
dist/
.vite/

# macOS
.DS_Store

# Editor
.vscode/
.idea/

# Private preparation materials
company_research/
mock_sessions/
assessments/drafts/
```

- [ ] **Step 3: Write `LICENSE` (MIT)**

Use the standard MIT template with `Copyright (c) 2026 chengde_lin`.

- [ ] **Step 4: Write `README.md`**

Contents:
````markdown
# Private Banking Tutor

A personal knowledge base for Singapore private-banking interviews (RM-lateral / Investment Counselor). AI-assisted curation with a 7-day study path, product deep-dives, suitability case studies, a behavioral story bank, and a business-plan template.

## Quick Start

Start with **`study_path.md`** — the 7-day on-ramp.

```bash
# Browse content as a website
cd web && npm install && npm run dev
# then open http://localhost:5173
```

## Directory Structure

```
private-banking-tutor/
├── study_path.md          # 7-day study schedule — start here
├── products/              # Product deep-dives (derivatives, structured, FI, FX, ...)
├── concepts/              # Wealth-management concepts (SAA/TAA, CIO view)
├── regulation/            # MAS 626, PB Code, AI/EI, FATCA/CRS, SOW/SOF
├── cases/                 # Suitability case studies
├── bq/                    # Behavioral (STAR) story bank
├── business_plan/         # RM business plan template + AUM pitch
├── industry.md            # SG PB landscape
├── market_view.md         # Living doc — refresh before interview
├── assessments/           # Confusion / blind-spot ledger
├── .claude/commands/      # Custom slash commands
└── web/                   # Vite + React + Tailwind review site
```

## Slash Commands

| Command | Purpose |
|---|---|
| `/project:product <name>` | Add or update a product deep-dive |
| `/project:case <scenario>` | Generate a suitability case study |
| `/project:bq <situation>` | Add a STAR behavioral story |
| `/project:market` | Refresh `market_view.md` |
| `/project:confusion` | Log a blind spot |

## Ground Rules

1. Every product claim has a **mechanism** — not a vibe.
2. Every recommendation names the **client profile** it fits.
3. Every regulation is tied to its **real-world trigger**.
4. Market-view claims are dated.
5. No mock interviews — this is a Q&A knowledge curator.
````

- [ ] **Step 5: Write `CLAUDE.md` (AI tutor persona)**

Contents:
````markdown
# CLAUDE.md — Private Banking Tutor

You are a rigorous Singapore private-banking interview coach. The user is a Taiwanese candidate targeting an RM-lateral or Investment Counselor role with ~1 week to prepare.

## Ground rules

1. **Every product claim has a mechanism.** Don't say "ELN gives high yield" — say "the investor is short a put on the underlying; the coupon is the option premium plus the short-rate deposit."
2. **Every recommendation names the client profile it fits.** "Aggressive" is not enough — specify liquidity need, horizon, FX base, existing concentration, and the *client's objective* (income, growth, wealth transfer, hedging).
3. **Every regulation is tied to a real-world trigger.** MAS 626 and the ABS PB Code exist in the shape they do because of 1MDB, BSI, Falcon. FATCA exists because of the UBS case. Rules without context don't stick.
4. **Current over theoretical.** Market claims cite a date and source, or are labelled "as of <date>, from CIO deck".
5. **No mock interviews.** The user prefers Q&A knowledge curation; do not simulate interviews.
6. **Language.** English is primary. Use Traditional-Chinese annotation only for complex / counterintuitive concepts: inline `(中文: …)` for terms; a `## 直覺理解` block at the top of deep product pages; otherwise keep content English.
7. **Be specific, numeric, and honest about tradeoffs.** If a product has a downside that gets clients hurt in practice, state it plainly.

## Output structure

When writing a product page, follow the seven-section template in `docs/superpowers/specs/2026-04-17-private-banking-tutor-design.md` §5 and the plan's "Content conventions" block.

## What to avoid

- Generic interview-prep filler (matches, cliches, "tell me about yourself" tips — that's covered in the `interview-prep-tutor` repo, not here).
- Cert-exam cramming (CACS/CMFAS/WMI CPB). This repo is for interview prep, not the post-hire licensing path.
- Bilingual side-by-side everywhere — only where §4 of the spec says so.
````

- [ ] **Step 6: Write `study_path.md`**

Contents: the 7-day table from spec §8, with each file path rendered as a working markdown link (e.g. `[derivatives](products/derivatives.md)`). Add a "How to use this path" paragraph at the top: work through one day per sitting, use `/project:confusion` when something clicks wrong, revisit the weakest topic on Day 7.

- [ ] **Step 7: Verify + commit**

```bash
cd ~/private-banking-tutor
ls -la
# Expected files present: README.md, CLAUDE.md, LICENSE, .gitignore, study_path.md, docs/
git add -A
git commit -m "chore: scaffold repo with README, CLAUDE.md, study path, license"
```

Expected: one commit; `git status` clean.

---

### Task 2: Write `products/derivatives.md` (Day 1 core content)

**Files:**
- Create: `~/private-banking-tutor/products/derivatives.md`

- [ ] **Step 1: Create the folder**

```bash
mkdir -p ~/private-banking-tutor/products
```

- [ ] **Step 2: Write the content**

Follow the seven-section template. Coverage requirements:

- `## 直覺理解` — explain in Traditional Chinese: an option is a *right not an obligation*; forwards/futures *lock in* a price; the two together are the grammar of all structured products. Keep under 150 characters.
- `## Mechanism` —
  - **Options:** call/put definitions; intrinsic vs time value; long vs short payoff diagrams (describe each quadrant in text — no image needed); premium = intrinsic + time value; what moneyness means (ITM/ATM/OTM).
  - **Futures/Forwards:** definition, contract vs OTC, margin, marking-to-market, convergence to spot at expiry, cost-of-carry intuition.
  - **Swaps:** IRS (fixed vs floating), CCS (cross-currency), basic mechanics; one sentence on CDS for context.
- `## Payoff / Economics` — worked numerical example for: long call, short call, long put, short put at expiry. Then a synthetic identity: "long underlying + long put = long call" (protective put / married put).
- Greeks at *intuition* level (not derivation): Delta (how much option moves per $1 of spot), Gamma (how Delta changes), Theta (time decay — cost of holding), Vega (sensitivity to vol). One-line definition + one-line "why a PB client cares".
- `## When to recommend` —
  - Sell call = yield enhancement + willing to sell at a higher price
  - Buy put = portfolio insurance on concentrated stock
  - Forwards = FX hedging for known foreign income
  - Explicitly note: naked short options are generally NOT offered to PB clients.
- `## Risks` — unlimited downside on short options; margin calls on futures; counterparty on OTC forwards/swaps; gap risk.
- `## Interview questions` — include at minimum:
  - "A client holds US$5M of a single US stock. Walk me through three ways to manage concentration risk."
  - "What's the difference between a forward and a future? Why does the bank usually book forwards not futures for clients?"
  - "Explain Vega to a client in one sentence."
  - "Your client sold a covered call that's now ITM — walk me through the conversation."
- `## Related products` — link to `structured.md`, `fx.md`, `leverage.md`.

- [ ] **Step 3: Verify structure**

```bash
grep -c "^## " ~/private-banking-tutor/products/derivatives.md
```

Expected: ≥ 7 (seven section headers).

- [ ] **Step 4: Commit**

```bash
cd ~/private-banking-tutor
git add products/derivatives.md
git commit -m "docs(products): add derivatives fundamentals (options/futures/swaps)"
```

---

### Task 3: Write `products/structured.md` (Day 2 — the highest-leverage page)

**Files:**
- Create: `~/private-banking-tutor/products/structured.md`

- [ ] **Step 1: Write the content**

This is the single most important product page — take the time. Seven-section template, applied once at the top, then a sub-section per product. Products to cover **in this order** (increasing complexity):

1. **DCI (Dual Currency Investment)** — short-dated FX-linked deposit; client is effectively **short a put on the alt currency**; interest premium = option premium; conversion risk mechanics; illustrative numerical example (USD base, SGD alt, spot, strike, 2-week tenor).
2. **ELN (Equity-Linked Note)** — client is effectively short a put on the underlying; fixed vs knock-in vs knock-out variants; 1-line on Principal-Protected ELN and what "PP" actually costs in coupon.
3. **FCN (Fixed Coupon Note)** — close cousin of ELN, guaranteed coupon, principal at risk via short put; explain autocall (knock-out) trigger.
4. **Autocallable** — multi-underlying (worst-of basket); autocall schedule; memory vs non-memory coupon; knock-in barrier; why the worst-of is the risk engine.
5. **Accumulator / Decumulator** — "I-kill-you-later" nickname; daily accumulation at strike; knock-out cap; obligation to buy more if underlying drops (the feature that famously hurt HK HNW clients in 2008).
6. **Range Accrual / Callable Range Accrual** — coupon accrues per day in range; issuer call option → investor reinvestment risk.

For each, include:
- Mechanism in one paragraph
- "In option terms, the client is [long/short] a [call/put/basket of puts]…"
- Sweet-spot client scenario
- The specific way it hurts a client when markets move the wrong direction (*this is what interviewers probe*)

`## Interview questions` for the whole page:
- "A client wants higher yield on her USD cash. Walk me through DCI vs ELN — which to pitch, why, what I'd warn her about."
- "Explain an autocallable to a moderate-risk client in 60 seconds."
- "Your client's FCN just knocked in. What's the conversation?"
- "Why don't we pitch accumulators to everyone — the coupon looks great?"

- [ ] **Step 2: Verify coverage**

```bash
for term in DCI ELN FCN Autocallable Accumulator "Range Accrual"; do
  grep -q "$term" ~/private-banking-tutor/products/structured.md && echo "ok: $term" || echo "MISSING: $term"
done
```

Expected: all six "ok".

- [ ] **Step 3: Commit**

```bash
cd ~/private-banking-tutor
git add products/structured.md
git commit -m "docs(products): add structured products deep dive (DCI/ELN/FCN/autocallable/accumulator)"
```

---

### Task 4: Write `products/fixed_income.md`, `products/fx.md`, `products/equities_funds.md`

**Files:**
- Create: `~/private-banking-tutor/products/fixed_income.md`
- Create: `~/private-banking-tutor/products/fx.md`
- Create: `~/private-banking-tutor/products/equities_funds.md`

- [ ] **Step 1: Write `fixed_income.md`**

Seven-section template. Coverage:

- `## 直覺理解` — bond = a scheduled set of future cashflows; price moves inversely to yield; the same cashflows can be priced three ways (spot, discount-to-maturity, z-spread).
- Mechanism: coupon, par, yield-to-maturity, yield-to-call, yield-to-worst; accrued interest (clean vs dirty price); credit spread = issuer risk over benchmark; duration & convexity at intuition level.
- Product sub-pages: Government (USTs, SGS), Investment-Grade corporate, High-Yield, Perpetuals (bank AT1 / sub-debt, "callable" vs "extendable", extension risk), Convertibles, Sukuk (1 paragraph).
- Client fit: income-seeking moderate clients; retiree liability matching; HY only for aggressive/tactical.
- Risks: duration (rate) risk, credit risk, liquidity, call risk on perps (Credit Suisse AT1 writedown as precedent — note but don't moralise).
- Interview Q: duration math example, YTW vs YTM, "explain AT1 to a retail-crossover client after the CS episode".

- [ ] **Step 2: Write `fx.md`**

Seven-section template. Coverage:

- Spot, forward (outright + swap), NDF (for restricted currencies — CNY, KRW, TWD), FX options (vanilla + barriers).
- Quoting convention (majors vs Asia), pips, bid/ask.
- FX hedging use cases: offshore income hedging, property purchase, education planning, international family planning.
- Forward points = rate differential; carry trade basics.
- Interview Q: "client's child is studying in the US in 2 years, how do we hedge SGD→USD tuition?"

- [ ] **Step 3: Write `equities_funds.md`** (light-depth reference)

Six sections is fine — skip `直覺理解` since this is baseline content. Coverage:

- Cash equities vs margin account; short selling mechanics at a glance.
- Mutual funds (open vs closed-end, front vs back-end load, trailer fees — and how fee conflicts shape RM recommendations).
- ETFs (passive index, sector, thematic, smart-beta, leveraged/inverse warning).
- REITs (structural yield, gearing cap, development cap — SG S-REIT specifics).
- Fund due-diligence 10-second filter: manager, mandate, fees, tracking error, AUM, liquidity.
- Interview Q: "A client asks: ETF or mutual fund — which do I recommend? Under what conditions?"

- [ ] **Step 4: Verify all three exist and have content**

```bash
wc -l ~/private-banking-tutor/products/fixed_income.md \
      ~/private-banking-tutor/products/fx.md \
      ~/private-banking-tutor/products/equities_funds.md
```

Expected: each > 40 lines.

- [ ] **Step 5: Commit**

```bash
cd ~/private-banking-tutor
git add products/fixed_income.md products/fx.md products/equities_funds.md
git commit -m "docs(products): add fixed income, FX, equities & funds pages"
```

---

### Task 5: Write `products/leverage.md` and `products/alternatives.md`

**Files:**
- Create: `~/private-banking-tutor/products/leverage.md`
- Create: `~/private-banking-tutor/products/alternatives.md`

- [ ] **Step 1: Write `leverage.md`**

Seven-section template. Coverage:

- `## 直覺理解` — PB leverage = pledge the portfolio, borrow against it cheaply, redeploy; the bank's secret-sauce revenue line alongside product sales.
- Mechanism: Lombard / Securities-Backed Loan (SBL); pledge agreement; margin (initial) vs maintenance margin; LTV by asset class table — approximate industry-typical ranges, e.g. cash ~95%, IG bonds ~80%, blue-chip equities ~60-70%, HY bonds ~50%, HF/alternatives ~0-30%, concentrated single-name severely haircut.
- Margin-call mechanics: LTV breach → top-up or forced liquidation; ageing (T+2 / T+5); cross-collateral vs ring-fenced.
- Use cases: diversification funding, real-estate bridge, IPO financing, tax optimisation, FX carry.
- Risks: rate rises (cost of carry), LTV squeeze in a correction (double whammy — collateral drops AND haircut may widen), concentration haircut changes without notice.
- Interview Q: "Client has US$10M portfolio, wants to buy a US$3M property in cash — walk me through the leverage conversation and risks."

- [ ] **Step 2: Write `alternatives.md`** (light-depth)

Six sections. Coverage:

- Hedge-fund strategies: L/S equity, global macro, event-driven (merger arb, distressed), multi-strategy, quant/CTA. For each: one-line thesis + typical drawdown profile.
- Private equity: buyout / growth / secondaries; J-curve intuition; commitment vs called capital; 10-year lock-up; IRR vs MOIC.
- Private debt: direct lending, mezzanine, distressed — yield advantage + illiquidity premium.
- Real estate: direct vs REIT vs non-listed PE RE fund; SG CPF / ABSD implications for SG clients at a glance.
- Infra: listed vs unlisted, inflation-linked cashflows.
- Feeder-fund structure (why PBs use it), minimum ticket, subscription/redemption windows.
- Interview Q: "Client asks 'should I put 20% of net worth in PE?' — how do you respond?"

- [ ] **Step 3: Verify + commit**

```bash
wc -l ~/private-banking-tutor/products/leverage.md ~/private-banking-tutor/products/alternatives.md
cd ~/private-banking-tutor
git add products/leverage.md products/alternatives.md
git commit -m "docs(products): add leverage (Lombard/SBL) and alternatives pages"
```

---

### Task 6: Write `concepts/wealth_management.md` and `concepts/cio_house_view.md`

**Files:**
- Create: `~/private-banking-tutor/concepts/wealth_management.md`
- Create: `~/private-banking-tutor/concepts/cio_house_view.md`

- [ ] **Step 1: Create folder and write `wealth_management.md`**

```bash
mkdir -p ~/private-banking-tutor/concepts
```

Content coverage (medium depth):

- `## 直覺理解` — WM is the bridge between a client's goals and the product shelf; everything else in this repo is *how* you cross the bridge.
- SAA (Strategic Asset Allocation) vs TAA (Tactical) — horizons (5-10y vs 12m), who sets them (investment committee vs portfolio manager), how they combine (core-satellite).
- Risk profiling: regulatory (questionnaire) vs practical (behavioural, prior losses, liquidity pressure). Conservative / Balanced / Growth / Aggressive — what each looks like in allocation.
- Suitability framework (MAS SF&SF): know-your-client, know-your-product, recommendation reasoning, documentation.
- Goals-based vs total-return frameworks; liability-matching.
- Mandate types: **Advisory** (client decides, bank advises, transaction-based fee), **Discretionary Portfolio Management (DPM)** (bank decides within mandate, flat % fee), **Execution-only** (no advice, no suitability duty — rare for PB). This distinction is load-bearing in interviews.
- Fee models: transaction commissions, management fee (% AUM), retrocessions (trailer fees) and where they're banned/disclosed.
- Core-satellite construction; how structured-product sleeves fit as satellite enhancers.
- Rebalancing policy: calendar, threshold, hybrid.
- Interview Q: "A new client has US$20M cash in USD. Walk me through the first-meeting agenda." / "DPM vs advisory — pitch each."

- [ ] **Step 2: Write `cio_house_view.md`**

Content:
- What a CIO/house view is; the decision hierarchy (Investment Committee → regional CIO → RM/IC → client).
- Typical cadence: annual outlook, quarterly update, monthly brief, weekly note.
- How to use it in client meetings: reference the house view, not personal opinion.
- What to do when you disagree with the house view.
- Where to find each bank's CIO content (UBS Weekly, JPM Guide to the Markets, HSBC CIO Monthly — note as examples).

- [ ] **Step 3: Commit**

```bash
cd ~/private-banking-tutor
git add concepts/
git commit -m "docs(concepts): add wealth-management fundamentals and CIO house view"
```

---

### Task 7: Write regulation pages

**Files:**
- Create: `~/private-banking-tutor/regulation/mas_notice_626.md`
- Create: `~/private-banking-tutor/regulation/pb_code_of_conduct.md`
- Create: `~/private-banking-tutor/regulation/accredited_investor.md`
- Create: `~/private-banking-tutor/regulation/fatca_crs.md`
- Create: `~/private-banking-tutor/regulation/sow_sof_sanctions.md`

- [ ] **Step 1: Create folder**

```bash
mkdir -p ~/private-banking-tutor/regulation
```

- [ ] **Step 2: Write `mas_notice_626.md`**

Six-section regulation template. Coverage: scope (banks in SG), core obligations (CDD / enhanced DD for high-risk / ongoing monitoring / STR filing), the "reasonable measures" standard, the COSMIC platform (since Apr 2024), penalty ranges. Trigger: 1MDB (BSI/Falcon MAS action 2016). Interview Q: "What's enhanced due diligence, and what triggers it for a PB client?"

- [ ] **Step 3: Write `pb_code_of_conduct.md`**

Coverage: the ABS PB Code (industry-led code, not MAS regulation strictly but supervised). Six pillars (competency, market conduct, confidentiality, cross-border, AML/KYC, transparency). Relationship to CACS competency. Interview Q: "Tell me one thing the PB Code says about cross-border marketing."

- [ ] **Step 4: Write `accredited_investor.md`**

Coverage: definition of Accredited Investor (AI) and Expert Investor (EI) under SFA; income/net-worth thresholds; opt-in regime since 2019; what regulatory protections the client waives by opting in; why PB typically deals only with AI/EI. Interview Q: "A client is AI-eligible but hasn't opted in — can you sell them a structured note?"

- [ ] **Step 5: Write `fatca_crs.md`**

Coverage: FATCA (US origin, UBS case as trigger, 30% withholding, W-8/W-9 forms, US-person definitions including green-card holders and "substantial presence"); CRS (OECD, multilateral, annual reporting, tax-residency-based); IGA model; client impact. Interview Q: "A client tells you they just got a US green card — walk me through what changes in the account."

- [ ] **Step 6: Write `sow_sof_sanctions.md`**

Coverage: SOW (source of wealth — how the total wealth was accumulated over life) vs SOF (source of funds — where this specific inflow came from); corroboration documents (tax returns, sale agreements, corporate records); PEP definition (domestic, foreign, IO) and EDD triggers; sanctions (OFAC, EU, UN, MAS) and screening; typology red flags (rapid buildup, round-trip trades, misaligned narrative). Interview Q: "Client says wealth came from 'family business' — what do you actually ask and document?"

- [ ] **Step 7: Verify + commit**

```bash
ls ~/private-banking-tutor/regulation/
# Expected: 5 files
cd ~/private-banking-tutor
git add regulation/
git commit -m "docs(regulation): add MAS 626, PB Code, AI/EI, FATCA/CRS, SOW/SOF/sanctions"
```

---

### Task 8: Write `industry.md` and `market_view.md`

**Files:**
- Create: `~/private-banking-tutor/industry.md`
- Create: `~/private-banking-tutor/market_view.md`

- [ ] **Step 1: Write `industry.md`** (light)

Coverage:
- SG PB landscape: top players (UBS post-CS, JPM, BOS, Citi, DBS PB, HSBC PB, Deutsche, BNP Paribas WM, Julius Baer, Lombard Odier, Pictet, LGT). Brief one-liner per bank: headline AUM region focus and strategic positioning.
- Client segmentation: Affluent (≥ US$250k), HNW (≥ US$1M), UHNW (≥ US$30M), Family Office (SFO vs MFO; SG VCC structure).
- Revenue model: transaction commission + management fee (% AUM) + net interest margin on Lombard + fund retrocessions (where allowed). ROA benchmark ~60-90 bps industry.
- Career ladder: ARM → RM → AD → D → ED → MD; the ARM→RM promotion bar; typical books; compensation ranges.
- Industry trends: digitalisation, rise of Asian UHNW, family-office influx into SG, regulatory tightening post-1MDB, ESG integration.

- [ ] **Step 2: Write `market_view.md`** (living doc, short)

Add a prominent `> Last reviewed: 2026-04-17` banner at the top.

One short paragraph each on:
- Rates (Fed & MAS SGD NEER stance)
- USD (DXY direction, carry dynamics)
- Asia equities (region-by-region one-liners: China, India, Japan, SEA)
- Credit (IG spreads, HY risk appetite, Asia dollar-bond market)
- Gold & commodities
- Key risk themes

The exact current-market content can be auto-filled by the `/project:market` command later; on first creation, seed with an acknowledgement that it's a template and the tutor will fill it the day before the interview.

- [ ] **Step 3: Commit**

```bash
cd ~/private-banking-tutor
git add industry.md market_view.md
git commit -m "docs: add SG PB industry landscape and market-view template"
```

---

### Task 9: Write case studies

**Files:**
- Create: `~/private-banking-tutor/cases/01_hnw_income.md`
- Create: `~/private-banking-tutor/cases/02_concentrated_equity.md`
- Create: `~/private-banking-tutor/cases/03_aggressive_growth.md`
- Create: `~/private-banking-tutor/cases/04_liquidity_event.md`
- Create: `~/private-banking-tutor/cases/05_cross_border_family.md`

- [ ] **Step 1: Create folder**

```bash
mkdir -p ~/private-banking-tutor/cases
```

- [ ] **Step 2: Write each case using the case-study template**

Case 01 — HNW income seeker: US$20M, age 62, retired, SGD/USD base, wants 4-5% p.a. income, moderate risk.
Case 02 — Concentrated equity: 48-year-old founder, 70% of net worth in one listed HK stock (~US$30M), seeks diversification without triggering the tax bill from outright sale — hedging via collars, prepaid forward, exchange fund concepts.
Case 03 — Aggressive growth: 35-year-old tech exec, US$8M, 20-year horizon, wants growth tilt, interested in alternatives.
Case 04 — Liquidity event: 42-year-old post-exit, US$50M new liquidity in USD, overwhelmed, needs staged deployment (dollar-cost, core-satellite) and estate planning start.
Case 05 — Cross-border family: Taiwanese family, assets in TW/HK/SG, three children studying/working in US/UK, needs SG booking strategy, FATCA-aware allocation, trust/PPLI consideration.

For each, use the case-study 6-part template. The "product picks with justification" section must link to the relevant `products/*.md` pages (e.g. `[DCI](../products/structured.md#dci-dual-currency-investment)`).

- [ ] **Step 3: Verify + commit**

```bash
ls ~/private-banking-tutor/cases/
# Expected: 5 files
cd ~/private-banking-tutor
git add cases/
git commit -m "docs(cases): add 5 suitability case studies"
```

---

### Task 10: Write BQ story bank

**Files:**
- Create: `~/private-banking-tutor/bq/README.md`
- Create: `~/private-banking-tutor/bq/stories/01_relationship_win.md` through `10_regulatory_change_adapt.md`

- [ ] **Step 1: Create folders**

```bash
mkdir -p ~/private-banking-tutor/bq/stories
```

- [ ] **Step 2: Write `bq/README.md`**

Contents: a mapping table of PB behavioural competencies → stories that demonstrate them. Competency categories to include: Relationship & Trust, Commercial Judgement, Integrity / Ethics, Resilience & Composure, Cross-cultural Sensitivity, Collaboration, Regulatory Awareness. Include a `## How to use this bank` note: stories are generic-mode templates; the user should make each one specific to their own career before the interview.

- [ ] **Step 3: Write each STAR story**

Each uses the BQ story template. Content seeds (these are **templates** — the friend fills in real specifics):

1. `01_relationship_win.md` — won a client by listening past their stated objection
2. `02_ethical_aml_flag.md` — spotted a red flag (inconsistent SOW documentation), escalated, client was later confirmed problematic
3. `03_market_volatility_client.md` — calmed a panicking client during a sell-off; reminded them of their SAA
4. `04_difficult_client.md` — difficult UHNW client with unrealistic return expectations; reframed conversation around risk
5. `05_cross_sell_success.md` — started with a simple FD, grew into DPM mandate by year 2
6. `06_lost_client_recovery.md` — client left for another bank; re-won via a specific product capability
7. `07_product_conflict_specialist.md` — disagreed with a product specialist on suitability; held the line
8. `08_missed_target_learning.md` — missed an AUM target one year, diagnosed why, changed approach, exceeded next year
9. `09_cold_outreach_win.md` — cold-started a referral chain via one satisfied client
10. `10_regulatory_change_adapt.md` — adapted the book when a regulation changed (e.g. retrocession disclosure)

Each story's Action section must show **specific, measurable steps** — no "I communicated effectively". Result section must include a **number** (AUM won, retention %, etc.) even if templated (`US$[X]M`).

- [ ] **Step 4: Verify + commit**

```bash
ls ~/private-banking-tutor/bq/stories/ | wc -l
# Expected: 10
cd ~/private-banking-tutor
git add bq/
git commit -m "docs(bq): add 10 STAR story templates and index"
```

---

### Task 11: Write business-plan template and confusion-ledger seed

**Files:**
- Create: `~/private-banking-tutor/business_plan/template.md`
- Create: `~/private-banking-tutor/assessments/confusion_ledger.md`

- [ ] **Step 1: Create folders**

```bash
mkdir -p ~/private-banking-tutor/business_plan ~/private-banking-tutor/assessments
```

- [ ] **Step 2: Write `business_plan/template.md`**

Sections:

1. Executive summary — one-paragraph positioning and Year-1 AUM target.
2. Existing book & transferable assets — a table with columns: Client code, segment (HNW/UHNW/FO), current AUM, relationship depth (family / senior / warm / cold), transferable %, expected AUM, confidence. Include the rubric (100% family / 60% warm / 20% cold) per the research.
3. New-client acquisition strategy — referral chains, centre-of-influence (lawyers/accountants/PE partners), existing network map, digital/events strategy.
4. Product mix and revenue plan — % split across mandate (DPM vs advisory), product revenue lines (transaction, management fee, SBL/Lombard, structured products, alternatives, FX), illustrative ROA calculation.
5. Year-1 milestones by quarter — AUM ramp, new client count, product-mix evolution.
6. Competitive positioning of the hiring bank — "why your bank is the right platform for my book" (booking centres, product shelf, credit appetite, regional coverage).
7. Risks and dependencies — referee calls, regulatory approval timelines, non-solicitation clauses.
8. Appendix — one-slide pitch to a prospect.

Include a **coaching note** at the top: "Fill this in before the final round. The interviewer will probe every number — be ready to defend each transferable-% assumption by name."

- [ ] **Step 3: Write `assessments/confusion_ledger.md`**

A simple table with columns: Date | Topic | What I got wrong | Correct explanation | Status (open/resolved). Seed with one example row (e.g. "Confused between yield-to-call and yield-to-worst on callable perps") so the format is concrete.

- [ ] **Step 4: Commit**

```bash
cd ~/private-banking-tutor
git add business_plan/ assessments/
git commit -m "docs: add business plan template and confusion-ledger seed"
```

---

### Task 12: Write custom slash commands

**Files:**
- Create: `~/private-banking-tutor/.claude/commands/product.md`
- Create: `~/private-banking-tutor/.claude/commands/case.md`
- Create: `~/private-banking-tutor/.claude/commands/bq.md`
- Create: `~/private-banking-tutor/.claude/commands/market.md`
- Create: `~/private-banking-tutor/.claude/commands/confusion.md`

- [ ] **Step 1: Create folder**

```bash
mkdir -p ~/private-banking-tutor/.claude/commands
```

- [ ] **Step 2: Write `product.md`**

Use the same structure as `~/system-design-tutor/.claude/commands/trade-off.md` (inspect that file first for format). The command takes an argument (product name), and instructs the tutor to:
- Check `products/<slug>.md` — create if missing, update if present.
- Apply the seven-section product template from the plan's Content-conventions block.
- Include Traditional-Chinese `直覺理解` block at the top.
- End with 4-6 interview Q&A and sibling-product links.

- [ ] **Step 3: Write `case.md`**

Takes a scenario (free-text). Creates the next-numbered file in `cases/`. Applies the 6-part case-study template. Product-pick links must point to real `products/*.md` entries.

- [ ] **Step 4: Write `bq.md`**

Takes a situation description. Creates the next-numbered file in `bq/stories/`. Applies the STAR template. Adds the new story to `bq/README.md` index.

- [ ] **Step 5: Write `market.md`**

No argument. Prompts the tutor to rewrite `market_view.md`: asks the user for current macro data (or pulls if available), then rewrites each paragraph (rates / USD / Asia equities / credit / gold / risks) with a fresh `Last reviewed` date.

- [ ] **Step 6: Write `confusion.md`**

No argument. Appends a row to `assessments/confusion_ledger.md` after interactively asking: date (auto), topic, what went wrong, correct explanation.

- [ ] **Step 7: Verify + commit**

```bash
ls ~/private-banking-tutor/.claude/commands/
# Expected: 5 files
cd ~/private-banking-tutor
git add .claude/
git commit -m "feat(commands): add product, case, bq, market, confusion slash commands"
```

---

### Task 13: Scaffold `web/` from the system-design-tutor template

**Files:**
- Create: `~/private-banking-tutor/web/package.json`
- Create: `~/private-banking-tutor/web/vite.config.ts`
- Create: `~/private-banking-tutor/web/tsconfig.json`
- Create: `~/private-banking-tutor/web/tailwind.config.js`
- Create: `~/private-banking-tutor/web/postcss.config.js`
- Create: `~/private-banking-tutor/web/index.html`
- Create: `~/private-banking-tutor/web/src/main.tsx`
- Create: `~/private-banking-tutor/web/src/App.tsx`
- Create: `~/private-banking-tutor/web/src/components/Sidebar.tsx`
- Create: `~/private-banking-tutor/web/src/components/MarkdownPage.tsx`
- Create: `~/private-banking-tutor/web/src/content-index.ts`

- [ ] **Step 1: Inspect the reference template**

```bash
ls ~/system-design-tutor/web/
cat ~/system-design-tutor/web/package.json
cat ~/system-design-tutor/web/vite.config.ts
ls ~/system-design-tutor/web/src/
```

Expected: files listed; note the exact dependency versions.

- [ ] **Step 2: Copy the reference scaffold, then tailor**

```bash
cp -r ~/system-design-tutor/web ~/private-banking-tutor/web
rm -rf ~/private-banking-tutor/web/node_modules ~/private-banking-tutor/web/dist
```

Expected: a fresh `web/` directory without build output.

- [ ] **Step 3: Update `package.json`**

- Change `name` to `private-banking-tutor-web`.
- Keep versions from the reference (Vite/React/Tailwind/TS/markdown renderer).
- Scripts: `dev`, `build`, `preview`, plus `build:pages` if the reference has it.

- [ ] **Step 4: Rewrite `web/src/content-index.ts`**

Replace the system-design content tree with this repo's tree. Types:

```ts
export type ContentNode =
  | { type: 'file'; title: string; path: string }  // path relative to repo root
  | { type: 'section'; title: string; children: ContentNode[] };

export const contentTree: ContentNode[] = [
  { type: 'file', title: 'Study path', path: 'study_path.md' },
  {
    type: 'section', title: 'Products', children: [
      { type: 'file', title: 'Derivatives',       path: 'products/derivatives.md' },
      { type: 'file', title: 'Structured',        path: 'products/structured.md' },
      { type: 'file', title: 'Fixed income',      path: 'products/fixed_income.md' },
      { type: 'file', title: 'FX',                path: 'products/fx.md' },
      { type: 'file', title: 'Equities & funds',  path: 'products/equities_funds.md' },
      { type: 'file', title: 'Leverage',          path: 'products/leverage.md' },
      { type: 'file', title: 'Alternatives',      path: 'products/alternatives.md' },
    ],
  },
  {
    type: 'section', title: 'Concepts', children: [
      { type: 'file', title: 'Wealth management', path: 'concepts/wealth_management.md' },
      { type: 'file', title: 'CIO house view',    path: 'concepts/cio_house_view.md' },
    ],
  },
  {
    type: 'section', title: 'Regulation', children: [
      { type: 'file', title: 'MAS Notice 626',    path: 'regulation/mas_notice_626.md' },
      { type: 'file', title: 'PB Code of Conduct', path: 'regulation/pb_code_of_conduct.md' },
      { type: 'file', title: 'Accredited Investor', path: 'regulation/accredited_investor.md' },
      { type: 'file', title: 'FATCA / CRS',       path: 'regulation/fatca_crs.md' },
      { type: 'file', title: 'SOW / SOF / Sanctions', path: 'regulation/sow_sof_sanctions.md' },
    ],
  },
  {
    type: 'section', title: 'Markets', children: [
      { type: 'file', title: 'Market view',       path: 'market_view.md' },
      { type: 'file', title: 'Industry landscape', path: 'industry.md' },
    ],
  },
  {
    type: 'section', title: 'Cases', children: [
      { type: 'file', title: 'HNW income',        path: 'cases/01_hnw_income.md' },
      { type: 'file', title: 'Concentrated equity', path: 'cases/02_concentrated_equity.md' },
      { type: 'file', title: 'Aggressive growth', path: 'cases/03_aggressive_growth.md' },
      { type: 'file', title: 'Liquidity event',   path: 'cases/04_liquidity_event.md' },
      { type: 'file', title: 'Cross-border family', path: 'cases/05_cross_border_family.md' },
    ],
  },
  {
    type: 'section', title: 'Behavioural (BQ)', children: [
      { type: 'file', title: 'Index', path: 'bq/README.md' },
      { type: 'file', title: '01 Relationship win',       path: 'bq/stories/01_relationship_win.md' },
      { type: 'file', title: '02 AML red flag',           path: 'bq/stories/02_ethical_aml_flag.md' },
      { type: 'file', title: '03 Market volatility',      path: 'bq/stories/03_market_volatility_client.md' },
      { type: 'file', title: '04 Difficult client',       path: 'bq/stories/04_difficult_client.md' },
      { type: 'file', title: '05 Cross-sell success',     path: 'bq/stories/05_cross_sell_success.md' },
      { type: 'file', title: '06 Lost-client recovery',   path: 'bq/stories/06_lost_client_recovery.md' },
      { type: 'file', title: '07 Product-specialist conflict', path: 'bq/stories/07_product_conflict_specialist.md' },
      { type: 'file', title: '08 Missed target',          path: 'bq/stories/08_missed_target_learning.md' },
      { type: 'file', title: '09 Cold outreach',          path: 'bq/stories/09_cold_outreach_win.md' },
      { type: 'file', title: '10 Regulatory adaptation',  path: 'bq/stories/10_regulatory_change_adapt.md' },
    ],
  },
  {
    type: 'section', title: 'Business plan', children: [
      { type: 'file', title: 'Template', path: 'business_plan/template.md' },
    ],
  },
  {
    type: 'section', title: 'Assessments', children: [
      { type: 'file', title: 'Confusion ledger', path: 'assessments/confusion_ledger.md' },
    ],
  },
];
```

- [ ] **Step 5: Update `App.tsx` and components to use the new content tree**

Make sure any hard-coded titles ("System Design Tutor") are replaced with "Private Banking Tutor". Sidebar renders `contentTree` recursively; `MarkdownPage` fetches the markdown file and renders with the existing markdown renderer used by the reference (likely `react-markdown` with `remark-gfm`).

- [ ] **Step 6: Configure Vite to load markdown from the repo root**

Vite dev: serve the markdown via a static fileserver plugin or by symlinking/copying. The reference template does this — **preserve the same approach**. If the reference uses a Vite plugin to glob markdown files, adjust the glob to point at the new repo's folders.

- [ ] **Step 7: Install and dev-run**

```bash
cd ~/private-banking-tutor/web && npm install && npm run dev
```

Expected: dev server starts; open http://localhost:5173 and confirm the sidebar lists all sections and at least 3 pages render without error.

- [ ] **Step 8: Commit**

```bash
cd ~/private-banking-tutor
git add web/
git commit -m "feat(web): scaffold Vite/React/Tailwind site with content index"
```

---

### Task 14: Build the site and fix any breakage

**Files:**
- Modify: `~/private-banking-tutor/web/` as needed to get `npm run build` green

- [ ] **Step 1: Run the production build**

```bash
cd ~/private-banking-tutor/web && npm run build
```

Expected: `dist/` produced, no TypeScript errors, no Vite errors.

- [ ] **Step 2: Locally preview**

```bash
npm run preview
```

Open the preview URL and click through every section in the sidebar. Each page must render.

- [ ] **Step 3: Fix any broken links or missing pages**

If any page 404s, fix the path in `content-index.ts` or the markdown loader.

- [ ] **Step 4: Commit fixes if any**

```bash
cd ~/private-banking-tutor
git add -A
git commit -m "fix(web): resolve build and page-rendering issues"
```

---

### Task 15: Publish to GitHub + GitHub Pages

**Files:**
- Create: `~/private-banking-tutor/.github/workflows/deploy.yml`

- [ ] **Step 1: Confirm GitHub auth**

```bash
gh auth status
```

Expected: authenticated. If not, stop and ask the user to run `gh auth login`.

- [ ] **Step 2: Ask the user one decision**

Ask: "Should the repo be **public** or **private**? If private, GitHub Pages requires a paid plan to serve a private Pages site — public is the default for a portfolio-style repo."

Wait for the user's answer before proceeding. Default: public.

- [ ] **Step 3: Create the GitHub repo and push**

```bash
cd ~/private-banking-tutor
gh repo create private-banking-tutor --public --source=. --remote=origin --description "Singapore private-banking interview-prep knowledge base"
git push -u origin main
```

Expected: repo created, initial push succeeds.

- [ ] **Step 4: Write `.github/workflows/deploy.yml`**

Contents:

```yaml
name: Deploy web to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: web/package-lock.json

      - name: Install
        working-directory: web
        run: npm ci

      - name: Build
        working-directory: web
        run: npm run build

      - uses: actions/configure-pages@v5

      - uses: actions/upload-pages-artifact@v3
        with:
          path: web/dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 5: Configure Pages source**

```bash
gh api -X POST "repos/:owner/:repo/pages" -f "build_type=workflow" || gh api -X PUT "repos/:owner/:repo/pages" -f "build_type=workflow"
```

Expected: Pages configured for workflow deployment (idempotent).

- [ ] **Step 6: Commit workflow and push to trigger deploy**

```bash
cd ~/private-banking-tutor
git add .github/workflows/deploy.yml
git commit -m "ci: deploy web to GitHub Pages"
git push
```

- [ ] **Step 7: Watch the deploy**

```bash
gh run watch
```

Expected: workflow succeeds; a `page_url` is emitted in the deploy job output.

- [ ] **Step 8: Update README with the live URL**

Edit `~/private-banking-tutor/README.md` to add a `**Live site:** <url>` line under the Quick Start section.

```bash
cd ~/private-banking-tutor
git add README.md
git commit -m "docs: link live GitHub Pages URL in README"
git push
```

- [ ] **Step 9: Manual verification**

Open the live URL in a browser. Click through sidebar. All sections render.

---

## Self-Review

**Spec coverage:**

- §2 goals 1-5 → covered by Tasks 1-15 (markdown Day 1 via Task 1-8; 10 domains via Tasks 2-8; 7-day path in study_path.md in Task 1; Vite/Tailwind site in Tasks 13-14; GitHub Pages in Task 15; slash commands in Task 12). ✓
- §3 non-goals — explicitly excluded (no cert pages, no per-bank folder, no mock sessions). ✓
- §4 language policy — codified in CLAUDE.md (Task 1), product template (conventions block), and referenced in every product task. ✓
- §5 ten domains — derivatives (T2), structured (T3), FI/FX/equities (T4), leverage/alternatives (T5), concepts (T6), regulation (T7), industry/market (T8). ✓
- §6 practice artifacts — cases (T9), BQ (T10), business plan + confusion ledger (T11). ✓
- §7 directory layout — matches the File Structure block exactly. ✓
- §8 7-day path — `study_path.md` generated in Task 1 per the table. ✓
- §9 CLAUDE.md rules — Task 1 writes all six rules verbatim. ✓
- §10 slash commands — Task 12 creates all five. ✓
- §11 web scope — Tasks 13-14. ✓
- §12 GitHub publishing — Task 15 (asks public/private before creating). ✓
- §13 acceptance criteria — coverage verification baked into steps (grep counts, wc line counts, manual sidebar walk-through). ✓
- §14 content-first approach — tasks 2-11 all write content before site scaffolding begins (Task 13+). ✓
- §15 risks — deferred per-bank research, market-view dating, content depth reviewed during execution. The spec's "owner + Codex both review derivatives + structured" mitigation is lightweight here; since the user opted out of Codex review on the spec, they will review content tasks in-session before commit.

**Placeholder scan:**

- No TBDs or TODOs in task steps.
- Each content step specifies the exact sections required and example language, not "write about X".
- Slash-command steps reference the existing `system-design-tutor` template for format — concrete source, not a placeholder.
- Two items intentionally left to user judgement during execution (and flagged inline): (a) market-view initial content is a template that the `/project:market` command fills in later; (b) BQ stories are template-shaped since only the friend can provide real specifics.

**Type / naming consistency:**

- File paths consistent across File Structure block, content-index.ts, and task steps.
- Content-conventions headings match between Task 2 (derivatives) and Task 3 (structured) and the product.md slash command.
- Case-study link anchors like `#dci-dual-currency-investment` match the heading format used in `structured.md` (Task 3).

No gaps; plan ready for execution.

