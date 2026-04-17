# Private Banking Tutor — Design Spec

**Date:** 2026-04-17
**Owner:** chengde_lin
**Primary user:** friend preparing for a Singapore private-banking interview
**Target role:** Relationship Manager (lateral, with existing book) and/or Investment Counselor / Product Specialist
**Timeline:** ~1 week to interview

## 1. Problem

A friend has ~1 week to prepare for a Singapore private-banking interview targeting an RM (lateral) and/or Investment Counselor role. They specifically flagged that **client wealth products are complex — options, futures, structured products**. Generic interview-prep resources don't match the PB domain; bank-specific materials are scattered across MAS notices, IBF syllabi, bank CIO decks, and behavioral coaching blogs.

We need a **single curated knowledge base** that:

- Fits a 1-week study schedule (ruthlessly prioritized by interview ROI)
- Treats derivatives and structured products as the centerpiece (not a side chapter)
- Provides practice artifacts the friend will actually be asked to produce (business plan, case studies, BQ stories)
- Renders as a browsable static site on GitHub Pages (continuing the pattern of `system-design-tutor` and `interview-prep-tutor`)

## 2. Goals

1. Deliver a markdown-first knowledge base the friend can read on GitHub **from Day 1** (no site build required).
2. Cover the 10 domains below at the depth each deserves for a week-long sprint.
3. Include a **7-day study path** as the default on-ramp.
4. Ship a minimal Vite + React + Tailwind static site mirroring the `system-design-tutor` pattern, published via GitHub Pages, by the end of the build.
5. Provide 3-5 custom slash commands that let the owner quickly add products, cases, and BQ stories as the friend encounters gaps.

## 3. Non-goals (out of v1)

- **Certification prep** (CACS, CMFAS modules, WMI CPB) — needed to *start the job*, not to pass the interview. Parking lot.
- **Per-bank deep research** (UBS / JPM / BOS / Citi / DBS / Julius Baer etc.) — add only if/when target banks are known.
- **Confusion ledger content** — we scaffold the file but populate only after the first mock session.
- **Mock-interview transcripts** — per standing user preference, we do Q&A knowledge curation, not mock interviews.
- **Fully bilingual notes** — we do not maintain side-by-side English/Chinese for every sentence. See §4 for the targeted-Chinese policy.

## 4. Target-user profile (assumptions)

- **Native Traditional-Chinese speaker (Taiwanese)**, comfortable English, interviewing in English.
- Some finance baseline (equities/bonds/funds) but not necessarily derivatives-fluent.
- Targeting **RM-lateral** and/or **Investment Counselor** — both need serious product depth; RM also needs business-plan + AUM pitch.
- No existing notes; starting from zero in this repo.

**Language policy — targeted Chinese annotation:**

- **English is the primary language** for all content (headings, structure, product specs, interview Q&A).
- **Traditional Chinese annotations** are added for:
  - Complex / counterintuitive concepts where a short Chinese rephrase accelerates comprehension (e.g. "short put embedded", "make-whole call", "J-curve", "knock-in / knock-out").
  - The *mental model* line at the top of each deep product page (one short 中文 paragraph, plain language).
  - Key regulatory terms and the **intent** behind them (e.g. "source of wealth (資金來源)").
- Chinese does **not** appear for baseline/equities/funds content, simple definitions, or BQ stories.
- Format: inline `(中文: …)` for terms; or a ```tip``` / ```note``` block with the header `直覺理解` for mental-model paragraphs.

If any of these assumptions turn out wrong, the spec should be revisited before writing content.

## 5. Knowledge domain map

Ordered by 1-week interview ROI. Depth column is the writing target.

| # | Domain | Depth | Rationale |
|---|---|---|---|
| 1 | **Derivatives fundamentals** — options (call/put, payoffs, vol, Greeks at intuition level), futures/forwards, swaps | Deep | Friend explicitly flagged complexity; foundation for #2. |
| 2 | **Structured products** — DCI, ELN, FCN, autocallables, accumulators/decumulators, principal-protected notes, knock-in/knock-out mechanics | Deep | Core PB product; all are option-based. |
| 3 | **Fixed income** — govt / IG corp / HY / perpetuals / convertibles; yield, duration, credit spread; callable & make-whole | Medium | Largest typical client allocation. |
| 4 | **Equities + FX + Funds/ETF/REIT** | Light | Baseline; friend likely solid here; keep as reference. |
| 5 | **Credit & leverage** — Lombard / securities-backed lending, LTV table by asset class, margin-call mechanics | Medium | Every HNW client uses leverage. |
| 6 | **Alternatives** — HF strategies (L/S, macro, event-driven, multi-strat), PE, private debt, real estate, infra, feeder funds, lock-ups, J-curve | Light | Name-drop + mechanism level is enough for interview. |
| 7 | **Wealth-management concepts** — SAA vs TAA, risk profiling, suitability, core-satellite, CIO house view, goals-based vs total-return | Medium | Frames every product recommendation; interviewer will probe. |
| 8 | **Regulation essentials** — MAS Notice 626 (AML/CFT), Accredited/Expert Investor definitions, ABS PB Code of Conduct highlights, FATCA/CRS, SOW/SOF, PEP, sanctions, COSMIC | Medium | Post-1MDB / BSI / Falcon, this is heavily tested. |
| 9 | **Macro & market-view prep** — rates cycle, USD, Asia equity, key themes as of interview week (living doc) | Light but current | Must speak fluently on current markets. |
| 10 | **Industry & career landscape** — SG PB players, revenue model (fees / transaction / NIM), client segments (HNW ≥ US$1M, UHNW ≥ US$30M, family office), RM book economics | Light | Framing context; quick scan. |

## 6. Practice artifacts (beyond knowledge content)

- **Business plan template** (`business_plan/template.md`) — AUM target, transferable-assets % per client tier (100% / 60% / 20%), product-mix plan, Year-1 milestones. Critical for RM final round.
- **Case-study bank** (`cases/`) — ≥ 5 realistic suitability scenarios (e.g. "HNW client US$20M, moderate risk, 70% USD, wants income"). Each case lists: client profile, recommended allocation, product picks with justification, risks to flag.
- **BQ story bank** (`bq/`) — 10-12 STAR-format stories tuned to PB themes: relationship wins, ethical dilemma / AML red flag, handling market volatility with a client, lost-client recovery, cross-sell success, conflict with product specialist.
- **Market view** (`market_view.md`) — single page, one short paragraph each on: rates, USD, Asia equities, China, credit, gold, key risks. Refreshed just before interview.
- **Confusion ledger** (`assessments/confusion_ledger.md`) — empty template; populated after first mock.

## 7. Directory structure

```
private-banking-tutor/
├── README.md
├── CLAUDE.md                           # AI tutor persona & ground rules (see §9)
├── LICENSE
├── .gitignore
├── study_path.md                       # 7-day schedule (default entrypoint)
├── products/
│   ├── derivatives.md                  # D1
│   ├── structured.md                   # D2  (DCI/ELN/FCN/autocallable/accumulator)
│   ├── fixed_income.md                 # D3
│   ├── fx.md                           # D3
│   ├── equities_funds.md               # D3 (light)
│   ├── leverage.md                     # D3 (Lombard / SBL)
│   └── alternatives.md                 # D4
├── concepts/
│   ├── wealth_management.md            # SAA/TAA, suitability, risk profiling
│   └── cio_house_view.md               # what it is, how to use it in a client conversation
├── regulation/
│   ├── mas_notice_626.md               # AML/CFT essentials
│   ├── pb_code_of_conduct.md
│   ├── accredited_investor.md          # AI / EI definitions
│   ├── fatca_crs.md
│   └── sow_sof_sanctions.md            # source-of-wealth, SOF, PEP, sanctions
├── market_view.md                      # living doc, refreshed weekly
├── industry.md                         # SG PB landscape, revenue model, segments
├── cases/
│   ├── 01_hnw_income.md                # US$20M, moderate, income-seeking
│   ├── 02_concentrated_equity.md       # founder with concentrated stock position
│   ├── 03_aggressive_growth.md
│   ├── 04_liquidity_event.md           # post-IPO planning
│   └── 05_cross_border_family.md
├── bq/
│   ├── README.md                       # BQ categories → story index
│   └── stories/
│       ├── 01_relationship_win.md      # (STAR)
│       ├── 02_ethical_aml_flag.md
│       ├── ... (10-12 total)
├── business_plan/
│   └── template.md                     # AUM target + transferable-% + product mix
├── assessments/
│   └── confusion_ledger.md             # empty template, populated post-mock
├── .claude/
│   └── commands/
│       ├── product.md                  # /project:product  <name>
│       ├── case.md                     # /project:case     <scenario>
│       ├── bq.md                       # /project:bq       <situation>
│       ├── market.md                   # /project:market   (refresh market_view)
│       └── confusion.md                # /project:confusion
├── web/                                # Vite + React + Tailwind static site
│   └── ... (mirrors system-design-tutor/web)
├── .github/
│   └── workflows/
│       └── deploy.yml                  # build web/ → publish to gh-pages
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-04-17-private-banking-tutor-design.md
```

## 8. 7-day study path (default on-ramp)

| Day | Focus | Artifacts created / read |
|---|---|---|
| **D1** | Derivatives fundamentals — options intuition, payoff diagrams, vol, futures/forwards, swaps | `products/derivatives.md` |
| **D2** | Structured products deep dive — DCI, ELN, FCN, autocallable, accumulator; "when would you recommend this?" heuristics | `products/structured.md` |
| **D3** | Fixed income + FX + equities recap + Lombard/leverage | `products/fixed_income.md`, `fx.md`, `equities_funds.md`, `leverage.md` |
| **D4** | WM concepts (SAA/TAA, suitability) + alternatives overview + case studies × 3 | `concepts/`, `products/alternatives.md`, `cases/01-03` |
| **D5** | Regulations + macro/market view + industry landscape | `regulation/*`, `market_view.md`, `industry.md` |
| **D6** | BQ story bank + business plan + rehearse AUM pitch | `bq/stories/*`, `business_plan/template.md` |
| **D7** | Mock pass + confusion-ledger entries + revise weakest topic | `assessments/confusion_ledger.md` |

`study_path.md` at repo root will render this table with links to each file, so the friend opens the repo and has a click-through guide.

## 9. CLAUDE.md (tutor persona — outline)

Ground rules, mirroring `system-design-tutor`'s "no hand-waving" tone:

1. **Every product claim has a mechanism.** Don't say "ELN gives high yield" — say "the investor is short a put on the underlying; the coupon is the option premium."
2. **Every recommendation names the client profile it fits.** "Aggressive, moderate, or conservative" isn't enough — specify liquidity need, horizon, FX base, existing concentration.
3. **Every regulation is tied to a real-world trigger.** MAS 626 exists because of X; FATCA because of Y. Rules without context don't stick.
4. **Current over theoretical.** Market-view claims must cite a date and source or be labeled "as of [date, from CIO deck]".
5. **No mock interviews** (per owner's standing preference — Q&A knowledge curation only).
6. **English primary, targeted Traditional-Chinese annotation for complex concepts and mental models** (per §4). Do not bilingual-ize simple content.

## 10. Custom slash commands

| Command | Purpose | Output |
|---|---|---|
| `/project:product <name>` | Deep-dive on a product (e.g. "autocallable", "perpetual bond"). | New or updated `products/<name>.md`, structured: mechanism → payoff → suitability → risks → interview Qs. |
| `/project:case <scenario>` | Generate a suitability case study. | New `cases/NN_<slug>.md`. |
| `/project:bq <situation>` | Add a STAR-format BQ story. | New `bq/stories/NN_<slug>.md` + index update. |
| `/project:market` | Refresh the market view with current data (user provides inputs; command structures them). | Rewrites `market_view.md`. |
| `/project:confusion` | Log a blind spot from a discussion. | Appends to `assessments/confusion_ledger.md`. |

## 11. Static site (web/)

**Scope:** minimal, mirror `system-design-tutor/web`. Renders markdown files with a sidebar index grouped by section (products / concepts / regulation / cases / bq / business-plan). No client-side search in v1. Dark-mode optional if free from the template.

**Stack:** Vite + React + Tailwind, matching the existing tutor repos for consistency.

**Deploy:** GitHub Pages via `.github/workflows/deploy.yml` on push to `main`.

**Deferred:** product calculator widgets, payoff-diagram interactivity, search. Stretch only.

## 12. GitHub publishing

- New public repo: **`private-banking-tutor`** under the owner's GitHub account.
- `main` branch protected (no force-push) once live.
- GitHub Pages served from `gh-pages` branch via the deploy workflow.
- `README.md` explains directory structure, study path, and slash commands (mirrors existing tutor READMEs).

## 13. Acceptance criteria

The build is "done" when:

1. All 10 knowledge-domain markdown files exist with content at the depth specified in §5.
2. `study_path.md` renders the 7-day schedule with working links.
3. `business_plan/template.md` + ≥ 3 case studies + ≥ 10 BQ stories exist.
4. Five custom slash commands in `.claude/commands/`.
5. `web/` builds without errors and renders all markdown pages.
6. GitHub Pages site is live and linked from the README.
7. Owner reviews the content and can answer "does this teach my friend what they need?" with yes.

## 14. Build approach — recommended: content-first

1. **Scaffold repo + CLAUDE.md + README + directory skeleton + study_path.md** (D0, ~30 min).
2. **Write D1-D5 content** in markdown — friend can read it on GitHub immediately while the site is still a placeholder.
3. **Write practice artifacts** (business plan template, cases, BQ stories).
4. **Scaffold web/** from the `system-design-tutor/web` pattern and wire up the content listing.
5. **Deploy to GitHub Pages.**
6. **Set up slash commands last** (they're for the owner's future use, not the friend's immediate study).

Rationale: the friend's markdown is usable on GitHub from step 2 onward. The site and slash commands don't block their study.

## 15. Risks & open questions

| Risk | Mitigation |
|---|---|
| Content depth misses the bar for senior RM/IC interviewers | Owner plus Codex both review derivatives + structured-products pages before declaring D2 done. |
| Market-view section goes stale fast | Mark "as of [date]" at top of file; refresh via `/project:market` right before interview. |
| Friend's target banks turn out to be obscure / boutique | Skip per-bank research; add later if surfaced. |
| 1-week timeline for friend slips | Study path is sequenced by ROI; dropping Day 6-7 still leaves the most interview-load-bearing content intact. |
| Owner uses mock-session pattern by mistake | CLAUDE.md §5 codifies the "no mock interviews" rule. |

Open questions to confirm before implementation:

- Target banks (if known) → enables per-bank research folder.
- Does the friend want the repo **private** (share via invite) or **public** (for their own portfolio)?
- Is GitHub Pages OK, or does the owner prefer another host?
