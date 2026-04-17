# START HERE — 7-Day Prep Plan for CW Asset Management Interview

> **Who this is for:** the candidate preparing for an **Assistant to Portfolio Manager / Investment Analyst** role at **CW Asset Management (華馳投資)** in Singapore, reporting to the CIO. This repo is built around that specific target. Other PB interview prep (bank RM / bank IC / commercial banking) is adjacent but not the centre of gravity.
>
> **How to use:** 7 numbered days below. Follow them in order. Each day has a 2–4 hour read + drill load. Day 7 is a consolidation pass, not new material.

## 直覺理解

這個 repo 是為 **CW Asset Management 這個職位**量身訂做的，**不是通用的 PB 面試教材**。你只有大約一週時間，材料又多，所以關鍵是**按順序讀、該出聲練的要出聲練**。Day 1–4 是知識，Day 5 是監理 + 你自己的 market view，Day 6 是 interview openers 的逐字稿演練，Day 7 是壓力測試 + 48 小時前的最後檢查。

**最重要的三件事，從第一天就要放心上：**
1. **FCN 是你實際上會每天碰的商品**——不是 ELN、不是 accumulator、是 FCN。優先讀 `products/structured.md` 第三節。
2. **Harry Chen 是 founder 兼 CIO**——他會親自面你，他是 23+ 年的 PB 老將，**不要用背的、不要講空話**——他 60 秒內就會看穿。
3. **「為什麼新加坡」「可以待多久」會被問**——這題你答不好，前面答再好都沒用。

---

## How to use Claude Code for daily drill practice

This repo is designed to work **two ways in parallel**:

1. **Reading** — content lives on the live site (your friend will send the URL). Read the current day's assigned reading there.
2. **Drilling** — open this local folder in **Claude Code**. Claude becomes your tutor: asks you questions, corrects mistakes, tracks what you're shaky on in `assessments/confusion_ledger.md`, and progressively builds `CHEAT_SHEET.md` as you lock things down.

### First-ever session (do this once)

After installing Claude Code and opening this folder (see `INSTALL_FOR_JIAJIA.md`), start with:

> "Hi Claude — I'm JiaJia, day 1 of my CW prep. Please read START_HERE.md and CLAUDE.md first, then drill me on today's topic. Don't lecture — quiz me and correct what I get wrong."

Claude will read the CLAUDE.md setup (which knows your context) and the confusion ledger (empty on day 1), then start drilling.

### Typical daily session (30–60 min, 5–10 days in a row)

1. **Open session:** "Claude, it's day N — what was I shaky on last time that we should re-test?"  
   (Claude reads `assessments/confusion_ledger.md` and proposes 1–2 re-tests from open items.)
2. **New-material drill:** "Today's topic is `[today's focus from the 7-day plan]`. Quiz me on it."  
   Claude asks structured questions; you answer; Claude corrects and **logs anything you get wrong** to the confusion ledger.
3. **Close session:** "Give me the daily handoff block to send to my friend."  
   Claude prints a ~150-word summary — copy that and send it to your friend via WeChat / LINE / WhatsApp.

### Sample prompts by use case

| You want to... | Say to Claude |
|---|---|
| Drill FCN mechanics | "Drill me on FCN — explain what happens in each of the three paths. Correct anything I miss." |
| Rehearse an opener | "Quiz me on the 'Why Singapore' question. When I answer, mark every generic sentence and tell me to make it more specific." |
| Pressure-test your market view | "I'm going to walk through my market view for 4 minutes. After each paragraph, interrupt me if the view is consensus or if I've hedged. Make me commit to numbers." |
| Understand a confusing concept | "I don't get the post-CS AT1 lesson as it applies to structured notes. Ask me what I think I know, then fill the gaps, and log the gaps to the confusion ledger." |
| Build the cheat sheet | "We've tested issuer-selection twice now. Can you distil it into the cheat-sheet format in CHEAT_SHEET.md §4?" |
| Review what's stuck | "Show me all `open` items in the confusion ledger and suggest which to prioritise for today." |

**Rule:** never ask Claude to "do a full mock interview." This repo's CLAUDE.md explicitly disables that (per JiaJia's preference). Drill individual questions, not 45-minute role-plays.

### Daily handoff ritual

At the end of every session, Claude prints a pre-formatted summary block. Your entire job is **copy → paste → send**. The format is already there; don't try to rewrite it.

```
📋 CW Prep — Day [N], [date]
Covered today: ...
New confusion entries: ...
Resolved this session: ...
Cheat sheet updates: ...
Gaps in the repo I noticed: ...
Next session suggested focus: ...
```

Your friend takes these daily messages to:
- Update the website if there are content gaps you surfaced.
- See what you're getting right and wrong.
- Adjust what tomorrow's drill should cover.

---

## The big picture — what the role actually is

You are interviewing to be an **Assistant to the Portfolio Manager** at a ~5-year-old SG Multi-Family Office / External Asset Manager. You will:

- **Not** have your own book of clients (no business plan, no AUM target, no book-transfer story).
- **Not** be primarily a relationship manager (no "cross-sell" metrics, no acquisition KPI).
- **Will** construct portfolios and structured-product combinations against client objectives.
- **Will** be the operational owner of FCN and other structured-note positions — monitoring, KI response, autocall handling, observation dates.
- **Will** prepare and co-deliver quarterly portfolio briefings to UHNW clients.
- **Will** maintain an active market view that aligns with (but can respectfully challenge) the CIO's.

The interview will therefore drill: **(1) product mechanics**, especially FCN, and issuer dynamics; **(2) a live market view with specific conviction trades**; **(3) judgement / second-level thinking**; **(4) "why this role, why Singapore, how long will you stay"**; and **(5) a light-touch BQ layer** on judgement + integrity + learning-from-mistakes.

Full role analysis and reading path: **[`roles.md` §"PM-Assistant / EAM-Junior emphasis path"](roles.md)**.

---

## Day 1 — Derivatives + structured-product fundamentals (3–4h)

**Goal:** Be able to draw an option payoff diagram, reason about barriers (KI / KO), explain worst-of mechanics, and talk about Greeks (delta / gamma / vega / theta) without translating from a textbook.

**Read:**
- [`products/derivatives.md`](products/derivatives.md) — full read. Greeks, parity, barriers, payoff diagrams.

**Drill:**
- [ ] Draw the payoff diagram for a short put at strike $100, with spot at $110, at maturity. Do it on paper. Do it three times until it's muscle memory.
- [ ] State put-call parity in one sentence.
- [ ] Explain "delta of a short ATM put" in one sentence.
- [ ] Explain what makes a **worst-of basket put** more valuable to the bank than a single-name put.

**If anything above felt shaky, stop and re-read that section of `derivatives.md` before Day 2.** This is the foundation — if it wobbles, FCN / BEN / autocallable all wobble too.

---

## Day 2 — FCN hero + BEN + CDRAN + autocallable (4–5h)

**Goal:** Own the FCN lifecycle — when to use, how to monitor, what to do at observation dates, how to handle KI, how to size it. Second-priority: understand BEN and CDRAN well enough to distinguish them from FCN on the phone. Third-priority: autocallable and range-accrual at interview depth. **Skip accumulator** (rare at EAM suitability level; know the 2008 HK "I-kill-you-later" story but don't drill).

**Read:**
- [`products/structured.md`](products/structured.md) §1 DCI, §2 ELN, **§3 FCN (full read — the 7 sub-sections under "FCN lifecycle management" are the exam)**, §4 Autocallable, §6 Range Accrual / CDRAN, §7 BEN. Skim §5 Accumulator.

**Drill (out loud):**
- [ ] Explain an FCN to a moderate-risk client in 60 seconds. Time yourself.
- [ ] Walk through what happens on each of the three FCN paths (autocall, KI-never-breached, KI-breach-then-final-below-strike) with numbers.
- [ ] Memorise (not verbatim, but tight) the **KI-triggered client script** in `structured.md` §3(c). This is the single most-drilled interview question.
- [ ] Explain the difference between FCN and BEN in two sentences.
- [ ] **Coupon-vs-vol sanity check**: if a 6M worst-of-3 US-mega-cap-tech FCN quotes 11% coupon, what IV is roughly implied? (Answer rubric in §3(e).)
- [ ] Position-sizing: a US$15M client wants US$5M FCN notional — is that too much? Why? (Answer rubric in §3(d).)

**This day carries the most interview weight. Do NOT skimp.**

---

## Day 3 — FI + FX + equities + issuer selection (3h)

**Goal:** Refresh FI / FX / equity mechanics at interview-depth. Then read `issuers.md` carefully — issuer selection is a specific CIO drill that bank-PB prep doesn't cover.

**Read:**
- [`products/fixed_income.md`](products/fixed_income.md) — YTW / AT1 mechanics / duration / credit. The **CS AT1 2023 lesson** is specifically material because `issuers.md` will build on it.
- [`products/fx.md`](products/fx.md) — quick read; DCI FX mechanics refresher.
- [`products/equities_funds.md`](products/equities_funds.md) — quick read.
- **[`products/issuers.md`](products/issuers.md) — full read.** This is the issuer-side view. Know the BNP vs UBS vs JB franchise map.

**Skip:** `products/leverage.md`. At an EAM you don't structure Lombard — the custodian does.

**Drill:**
- [ ] Explain the post-CS AT1 write-down in one minute.
- [ ] Given three FCN indicatives (BNP 11.5%, UBS 11.0%, JB 11.8% on same terms), which do you book and why? (Model answer in `issuers.md` Q1.)
- [ ] Name two specific credit-watch signals you'd monitor for each issuer.

---

## Day 4 — Wealth management concepts + CIO view + 2 case studies (3h)

**Goal:** Portfolio construction vocabulary (SAA / TAA / IPS / suitability / mandate types) and the ability to read a CIO letter critically.

**Read:**
- [`concepts/wealth_management.md`](concepts/wealth_management.md) — SAA / TAA / DPM-vs-advisory / suitability frame.
- [`concepts/cio_house_view.md`](concepts/cio_house_view.md) — what a CIO office actually produces.
- Pick **2 of the cases** (not all 5):
  - [`cases/01_hnw_income.md`](cases/01_hnw_income.md) — classic HNW income problem.
  - [`cases/03_aggressive_growth.md`](cases/03_aggressive_growth.md) — structured-product-heavy allocation.

**Drill:**
- [ ] For each of the 2 cases, construct your own 1-page portfolio answer **before** reading the suggested solution. Then compare.
- [ ] "Client has US$20M, USD base, wants 5% income, 70% equity tolerance" — construct the SAA in 2 minutes without notes. (This is the single most common case-study prompt.)

---

## Day 5 — Regulation + account opening + your own market view + CIO drill (4–5h)

**Goal:** Regulation at interview depth (not exam depth). Operational understanding of the Singapore account-opening process you'll actually run. Then — the biggest single rehearsal of the week — **rewrite `market_view.md` in your own voice**.

**Read:**
- [`regulation/mas_notice_626.md`](regulation/mas_notice_626.md) — CDD / EDD / UBO.
- [`regulation/pb_code_of_conduct.md`](regulation/pb_code_of_conduct.md) — suitability / conflict disclosure.
- [`regulation/accredited_investor.md`](regulation/accredited_investor.md) — AI thresholds and opt-in.
- [`regulation/fatca_crs.md`](regulation/fatca_crs.md) — US-person + CRS mechanics.
- [`regulation/account_opening_kyc.md`](regulation/account_opening_kyc.md) — **EAM-specific onboarding process; 3–6 month timeline; bank-by-bank thresholds.**
- [`regulation/sow_sof_sanctions.md`](regulation/sow_sof_sanctions.md) — skim.
- [`industry.md`](industry.md) — quick refresh.
- [`interview/cio_drill.md`](interview/cio_drill.md) — **full read** — this is the architecture for the market-view drill below.

**Do (this is the biggest drill of the week):**
1. Open `market_view.md`. Set a 3-hour block. **Rewrite every paragraph in your own voice, with current levels.** Pull Fed funds / DXY / USDJPY / S&P / HSI / 10-year yield / gold / WTI from Bloomberg or Reuters. Write your view, not the repo's tutor-seed view.
2. End it with **ONE conviction trade** — entry / stop / target / size / change-mind condition. Worked example is in [`interview/sample_answers.md`](interview/sample_answers.md) §"Sample 7".
3. Read it **out loud**, time it — aim 4 minutes.
4. **Record yourself** doing the 4-minute walkthrough. Listen back. Where do you hedge, stutter, or lose specificity? Rewrite those paragraphs.

---

## Day 6 — Openers + Why-SG + Why-CW + portfolio briefing (4h)

**Goal:** Rewrite and rehearse the 5-minute opener block. This is the first impression that determines whether the interviewer listens carefully to the rest.

**Read:**
- [`interview/openers.md`](interview/openers.md) — **full read**. Especially §1 self-intro, §2 why PB, §4 why Singapore, §5 why you.
- [`interview/firm_briefs.md`](interview/firm_briefs.md) — **full read**. Harry Chen's career, CW's positioning, the three-pillar "why CW" drafts.
- [`interview/sample_answers.md`](interview/sample_answers.md) — **filled-in examples addressed to JiaJia with a fictional background.** ⚠️ The career facts in the samples (firm names, book size, certifications, rejected offers) are made up — do NOT deliver verbatim. Read for the *shape* (density of specifics, timing, pillar structure), then rewrite with your own real facts.
- [`concepts/client_lifecycle.md`](concepts/client_lifecycle.md) Phase 6 "Portfolio briefing" subsection — what the quarterly review deck looks like and how you narrate it.

**Do:**
1. Write your own **Self-intro** (target 75 sec). Rehearse out loud 5 times, timed. If over 90 sec, cut.
2. Write your own **Why PB** (target 60 sec). One example per pillar; 3 pillars only.
3. Write your own **Why Singapore / how long will you stay** (target 90 sec). Must include: a specific TW alternative you've turned down (or honest equivalent commitment signal), your actual visa situation, your real family circumstances.
4. Write your own **Why CW specifically** (target 75 sec). Must name Harry correctly and reference his career chronology (see `firm_briefs.md` for the verified sequence: WaMu → Citi IPB → SocGen → UBS → JB → founded CW 2021).
5. Write your own **Why you** (target 60 sec). Segment fit + technical rigour + long-horizon commitment.
6. Write your own **Why are you leaving current firm** (target 45 sec). Forward-framed, no badmouthing.
7. **Record a complete 5-minute opener run-through.** Listen back. Every fact should be specific. If any sentence could be any candidate's, rewrite it.

---

## Day 7 — BQ stories, pressure pass, confusion ledger (3h)

**Goal:** Polish the 5 BQ stories that actually apply, stress-test your weakest topic, re-refresh the market view with Friday/Monday's numbers.

**Read:**
- [`bq/README.md`](bq/README.md) — story-bank frame.
- **Prepare 5 STAR stories** from [`bq/stories/`](bq/stories/): **03** (market volatility client), **07** (product-specialist / team conflict), **02** (AML red flag / integrity), **10** (regulatory adaptation), **08** (missed target / learning). **Skip** stories 01, 05, 06, 09 — those are RM book-generation stories, not PM-Assistant-relevant.
- For each story: **Situation (2 sentences) → Task (1) → Action (4–5 specific steps) → Result (1 with a metric if possible)**.

**Do:**
1. For each of the 5 BQ stories, write 5–7 sentences against your own career. Rehearse out loud at least twice.
2. **Weakest-topic pass:** go back to whichever of Days 1–6 felt shakiest and do one more read.
3. **48-hour-before refresh:**
   - LinkedIn → search for Harry Chen's activity in last 30 days.
   - LinkedIn → CW Asset Management company page "People" tab — any recent hires?
   - Google News → "CW Asset Management" — any press since April 2026?
   - `market_view.md` → update each paragraph with the latest Fed print, Asia close, USD DXY.
4. **Logistics check:** office address is 138 Market Street CapitaGreen #05-01. Travel time from your SG stay.

---

## What must be out-loud, what can be silent

| Must be out-loud rehearsed, timed, recorded | Can be silent-read |
|---|---|
| Self-intro (75 sec) | All product mechanism sections |
| Why PB, Why SG, Why CW, Why you, Why leaving | Regulation pages (except the 5 memorable-facts per page) |
| 4-minute market view walkthrough | Case studies (read + think, not drill out loud) |
| ONE conviction trade (entry/stop/target/size/change-mind) | Industry / firm landscape sections |
| The FCN KI-triggered client script | Most of the BQ stories are one-time write-then-rehearse |
| Each of the 5 chosen BQ stories | Peer-landscape firms (know the names, no need to monologue) |

**Rule of thumb:** if the interviewer will ask it in a format where your answer has to flow as one paragraph, rehearse out loud. If you're just drawing on the knowledge to construct an answer in real time, silent read is enough.

---

## 48-hour-before-interview checklist

- [ ] Market view paragraph-by-paragraph refresh with current levels.
- [ ] Harry's LinkedIn activity in last 30 days — any posts you can reference?
- [ ] CW Asset Management LinkedIn "People" tab — headcount check.
- [ ] Google News "CW Asset Management" and "CW Asset Management 華馳投資".
- [ ] Re-read `interview/firm_briefs.md` and your own rewritten openers.
- [ ] One final out-loud run of the self-intro → why-PB → why-SG → why-CW → why-you chain.
- [ ] Logistics: address, dress code (suit, per Harry's ex-UBS/JB background), interview format (in-person / Zoom).
- [ ] Sleep. Do not study on the morning of — re-reading notes 2 hours before interview lowers performance.

---

## The things this repo can NOT do for you

These are personal and cannot be outsourced:

1. **Your actual market view.** The `market_view.md` file is a template seeded from tutor content dated January 2026. You must rewrite it with current levels and your own views.
2. **Your actual BQ stories.** The 5 stories must come from your real career, with real names (or anonymised) and real numbers.
3. **Your actual self-intro / why-SG / why-CW.** Samples in `interview/sample_answers.md` use a fictional candidate — do not deliver them verbatim.
4. **Rehearsal out loud.** Reading silently does not build the muscle memory required. You need to hear your own voice, ideally record it.

---

## If you have less than 7 days

| Days available | Priority order |
|---|---|
| **7 days** | Full plan above. |
| **5 days** | Skip Day 4 cases (do 1 instead of 2); compress Day 3 to FI + issuers only. |
| **3 days** | Day 1 (derivatives basics) + Day 2 (FCN hero) + Day 5 (market view rewrite + CIO drill) + Day 6 (opener block). That's the core; everything else is bonus. |
| **1 day** | `products/structured.md` §3 FCN + `interview/firm_briefs.md` + `interview/sample_answers.md`. Rewrite the 5 openers in your voice. Rehearse the FCN KI script. |

---

## Key file index

**Start with these four every time you open the repo:**
- [`INSTALL_FOR_JIAJIA.md`](INSTALL_FOR_JIAJIA.md) — one-time setup: how to open this folder with Claude Code, the daily handoff ritual, FAQ for non-technical use.
- [`roles.md`](roles.md) — role calibration (PM-Assistant track).
- [`START_HERE.md`](START_HERE.md) — this file; the 7-day plan.
- [`study_path.md`](study_path.md) — the reading schedule.

**The living artefacts Claude maintains for you:**
- [`assessments/confusion_ledger.md`](assessments/confusion_ledger.md) — what you got wrong, automatically logged by Claude.
- [`CHEAT_SHEET.md`](CHEAT_SHEET.md) — the one-pager Claude builds progressively as you lock down material.

**Interview-critical content, by topic:**
- [`products/structured.md`](products/structured.md) — FCN, BEN, CDRAN, autocallable mechanics + lifecycle.
- [`products/issuers.md`](products/issuers.md) — issuer selection, BNP vs UBS vs JB, post-CS AT1.
- [`interview/firm_briefs.md`](interview/firm_briefs.md) — CW / Harry Chen verified facts.
- [`interview/openers.md`](interview/openers.md) — opener question structures + Why-Singapore section.
- [`interview/sample_answers.md`](interview/sample_answers.md) — filled-in examples (fictional background, addressed to JiaJia).
- [`interview/cio_drill.md`](interview/cio_drill.md) — market-view, conviction-trade, second-level thinking.
- [`regulation/account_opening_kyc.md`](regulation/account_opening_kyc.md) — EAM onboarding process.
- [`concepts/client_lifecycle.md`](concepts/client_lifecycle.md) — quarterly portfolio-briefing mechanics (Phase 6).
- [`market_view.md`](market_view.md) — the file you must rewrite in your own voice.

---

Good luck. The material is here; the performance is yours.
