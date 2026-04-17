# CIO Drill — Market Views, Conviction Trades, Second-Level Thinking

> **For PM-Assistant / EAM-Junior interviews specifically.** When the CIO is the hiring manager, the interview has a distinct final round that differs from the HR / RM conversation: it is a **market-and-judgement drill**. The CIO is filtering for "can this person think about markets *with* me" rather than "does this person have the CV to be a PB candidate." This page is the preparation architecture for that round.

## 直覺理解

CIO 面試不是在考你「知不知道 S&P 現在多少」，而是在測「**你對市場有沒有自己的第二層想法**」。第一層是 consensus：「Fed 要降息、AI 是長期 theme、中國房地產壓力大」——這些 CNBC 已經講過 1000 次，你說了沒加分。第二層是：**consensus 哪裡可能錯？什麼沒被 price in？如果你的看法錯了，最可能是因為什麼？** 一個能答「我認為 risk asset 12M 有 15% 回檔空間，原因是 X，但我最擔心的 blind spot 是 Y，會改變我看法的訊號是 Z」的候選人，比一個能背 10 張 CIO 投影片的候選人強 100 倍。

CIO 也會試探：「AI 現在可以做很多分析，你這個 job 不會被取代嗎？」**正確答案不是「我會用 AI」，也不是「AI 做不到情感連結」**——是具體講出 AI 做不到的**那幾件 framing / 判斷 / 非對稱思考 / 客戶行為讀空間**的事情。

> 💡 **Bottom line for interviews:** CIO screens test (1) do you have a *current, written, defensible* market view; (2) can you see around corners — name what consensus is missing; (3) are you honest about your blind spots; (4) do you know why an experienced human still beats a model in this role.

---

## Before anything else — write your market view

You cannot fake a market view in an interview. If you walk in with borrowed phrases from your target firm's CIO letter, a good CIO will find the seam in under 60 seconds. **Before you do anything else on this page, go rewrite [`../market_view.md`](../market_view.md) in your own words.** Aim for 6–8 short paragraphs covering:

1. **Rates** — Fed / MAS / PBoC / BoJ — where, why, what's the gap to market pricing
2. **USD / FX** — DXY direction, the 2–3 crosses you care about, the drivers
3. **US equities** — valuation, earnings path, tech-concentration state, key asymmetries
4. **Asia equities** — China / HK / Japan / TW / India / SEA — relative picks with reasons
5. **Credit** — IG vs HY, spread levels, duration preference, bank subordination view
6. **Gold / commodities / oil** — role in portfolio, geopolitical premium
7. **Key risks / blind spots** — what could break your view
8. **Your 2–3 conviction trades today** with thesis / entry / stop / size (see below)

Print it. Read it out loud. Time yourself walking through it (aim 4–5 minutes). If you cannot defend a number in it to yourself at 11pm the night before the interview, that line shouldn't be in it. Vague wins the CIO over 100% of the time over fake specificity.

---

## The "conviction trade today" format

**What the CIO is testing:** can you operationalise a view into a specific, actionable trade — with entry / exit / sizing — rather than narrating abstract theme.

**The expected format:**

> "I'd pitch `[specific trade]` today. The thesis is `[one-sentence case]`. Entry at `[specific level / zone]`. Stop at `[specific level]`, which corresponds to `[reason the thesis is wrong]`. Size around `[specific % of a client portfolio]`. The thing I'd watch most closely is `[specific indicator]` — if that turns, I'd reconsider."

**Worked examples (illustrative — use these as structure, not as your actual answer):**

### Example A — rates trade

> "I'd be long the belly of the US Treasury curve — 5–7Y — against a 2Y underweight. Thesis: the market is pricing one-to-two more Fed cuts in 2026; I think services inflation staying sticky means the Fed pauses, which bear-steepens the front end but the belly holds on growth decay. Entry: 5Y around 4.0% yield. Stop if 5Y yield breaks above 4.45% on two consecutive closes — that's the thesis failing, most likely because Q1 inflation re-accelerated. Size maybe 8% of portfolio duration. I'd watch services-ex-housing CPI closest."

### Example B — equity trade

> "I'd underweight the Mag-7 on a vol-adjusted basis via selling 6M out-of-the-money calls against the exposure, rather than outright short. Thesis: AI capex has pulled forward earnings into 2024–2025; the monetisation gap widens into 2026 and multiple compresses. Entry: scale in on QQQ rallies to within 5% of ATH. Stop: abandon if hyperscaler capex in Q2 prints materially above consensus AND monetisation telemetry (copilot attach rates, inference-revenue breakouts) improves — that would break the overcapacity thesis. Size the call-overwriting at 30% of the Mag-7 exposure. I'd watch hyperscaler earnings commentary on utilisation rates."

### Example C — FX trade

> "I'd be long JPY against USD over 6M. Thesis: BoJ normalisation is under-priced relative to Fed cuts that are already priced; rate-differential compression plus safe-haven bid on Asia geopolitical risk. Entry: USDJPY 152+. Stop: 156 on a sustained break. Size around 3% of portfolio FX exposure. I'd watch BoJ meeting cadence and US services inflation — the trade loses if either disinflates too slowly or BoJ hesitates."

**What makes these work:**

- **Specific entry / stop levels** — not "around current" and "when the thesis is wrong."
- **The thesis-failure statement is concrete** — not "if I'm wrong about the thesis," but "if Q2 hyperscaler capex prints above X."
- **The indicator to watch is operational** — you could actually monitor it daily.
- **Sizing is realistic** — not "maximum conviction," but a plausible portfolio weight.

**Common mistakes:**

- "I like gold because it hedges everything." — theme, not a trade.
- "Long quality defensives." — not a trade; a factor tilt.
- "Short stuff that looks expensive." — not a trade; a wish.

Have **two or three** of these prepared. The CIO will typically ask for one, then ask a follow-up on your highest-conviction or ask you to sanity-check the sizing.

---

## Second-level thinking — the Howard Marks frame

The single most-tested dimension in a CIO interview. Howard Marks (Oaktree) articulated this cleanly: **first-level thinking is "X is good → buy X"; second-level thinking is "X is good and everybody knows it → the price reflects it, so the edge is somewhere else."** Applied to interview prep:

### Every view you have should survive the four "second-level" questions

| First-level thought | Second-level challenge | Good second-level answer |
|---|---|---|
| "Japan equities are cheap relative to US" | Is "cheap" the edge? Has been cheap for 20 years. | The second-level case is: corporate-governance reform (TSE prime-market pressure, unwinding of cross-shareholdings) is a multi-year structural flow; yen-policy divergence with Fed is a second leg; retail-participation from NISA 2.0 is a third. Valuation is the backdrop, not the trade. |
| "The Fed will cut rates, so buy long-duration" | Is cutting priced in already? | Market is pricing 75 bps of cuts in 2026. My edge is not "Fed cuts → bonds up"; it's either "market under-prices cuts" (why?) or "market over-prices cuts" (why?). I need a specific path gap. |
| "AI is the theme of the decade, so buy Nvidia" | Priced at 30x forward earnings; fully rated. Where's the edge? | Second-level: the edge isn't Nvidia directly; it's either (a) power-infrastructure picks-and-shovels, (b) application-layer names where monetisation telemetry is inflecting but multiples haven't caught up, or (c) the short leg — identifying which hyperscalers are over-investing relative to demand. |
| "China is uninvestable given geopolitics" | Everyone has said this since 2018. Is it now so reflected in price that the risk-reward has flipped? | Second-level: HSI at 10x P/E, dividend yield near decade highs, stimulus narrative building, retail flow negative-to-neutral. If your base case is "geopolitics bad but not catastrophic," the risk-reward is asymmetric — the question is sizing and timing, not direction. |

### The "what's not priced in" exercise

Pick any asset class. Write down:
1. **What is consensus today?** (From reading 3–5 sell-side notes and one CIO letter.)
2. **What are 2–3 things consensus is definitely ignoring?** (From your own synthesis — events, data, shifts in narrative.)
3. **Which of those, if they materialise, most moves price?** (This is your trade; the rest is footnotes.)

Do this for rates, USD, US equities, Asia equities, and credit. Now you have the spine of a second-level market view. A CIO can hear second-level thinking inside 30 seconds of a candidate speaking; they can also hear its absence.

---

## "What would change your mind?" — the honesty test

**What the CIO is testing:** are you someone who holds views firmly but updates on evidence, or are you someone who either (a) holds no view strongly enough to have change-mind conditions, or (b) holds views too rigidly for a team-investment process.

**For every conviction you state, prepare the change-mind condition.** Format:

> "I believe `[X]`. I would change my mind if `[specific, observable event Y]`. I would *reduce conviction but not abandon* if `[marginal signal Z]`."

**Worked example.**

> "I'm constructive on US large-cap tech over 12 months. I'd change my mind if Q2 hyperscaler capex prints 20% above consensus without corresponding evidence of inference-revenue monetisation — that would tell me the AI-capex-vs-revenue gap is widening in a way the market will re-price. I'd reduce conviction — not abandon — if the equal-weight S&P 500 starts leading the cap-weighted index for a sustained period, because that signals the tech concentration is resolving via rotation rather than via a tech drawdown."

**Why this matters in a CIO-level team.** An EAM's investment committee runs on shared conviction plus disciplined updating. A candidate who cannot articulate their change-mind conditions cannot be a useful voice in the committee — they're either a parrot of the CIO (no additive value) or a contrarian-for-its-own-sake (disruption without substance). The good answer is "I have a view; here's how I'd know I'm wrong; here's the signal I'm watching."

**Bad answers:**

- "I'm always open to changing my mind." → vague; says nothing.
- "I'd change my mind if the market proved me wrong." → tautological; the market *is* the outcome.
- "I'm very convicted; I don't think I'm wrong." → a red flag for a team-investment process.

---

## "What can AI not do?" — the differentiation narrative

This question will come, explicitly or implicitly, in any 2026 CIO screen. The CIO has watched the same tools you have — an LLM can now synthesise a CIO letter, build a spreadsheet, write a client deck, summarise an earnings call. The question is specifically: **what does a human PM-Assistant with market judgement still do that this tooling can't?**

**Weak answers:**

- "AI can't build relationships / doesn't have emotional intelligence." → Cliché; not responsive to market-judgement question; the CIO knows you outsource the emotion to the PM/RM anyway.
- "AI makes mistakes." → So do humans; this is not a differentiating answer.
- "I use AI every day to speed up work." → Fine, but doesn't answer the question.

**The five specific things an experienced human still beats the tooling on (as of early 2026):**

1. **Second-level thinking at decision-point speed.** LLMs can reproduce second-level frames in writing, but sitting across from the CIO at 9:15am and saying "here's what consensus has wrong about today's CPI print, and here's the trade" — that real-time synthesis under pressure with judgement about *this firm's clients* is still a human skill.
2. **Reading the room in a client review.** When you're presenting FCN-0078's KI breach to a family-office principal and the principal asks "what would you have told me in February" — the answer has to carry the client's specific history, temperament, family dynamic, and what you told them in February. No model has that state.
3. **Non-obvious connections across the book.** "Client A's FCN knock-in, Client B's same basket, and today's earnings surprise all rhyme — we should call Client C who has similar exposure, not wait." Cross-book pattern spotting with the humans-who-own-these-relationships context beats any automated flag.
4. **Judgement on what *not* to do.** The model is biased toward "there is a recommendation"; experienced humans know that **doing nothing** is often the right answer, and have the political capital to recommend it inside an active-revenue firm.
5. **Being wrong well.** A human who misjudges a trade can explain to a client face-to-face *why they were wrong* and earn trust through it. A tool that's wrong is just wrong. This is load-bearing in a long-horizon UHNW relationship.

**The structural answer:**

> "Two things. First, the role at a firm like this is not to produce more analysis — modern tooling has made analysis abundant — it's to make *decisions* under ambiguity that are coherent with this firm's clients and their specific histories. That's still a human judgement layer. Second, the accountability layer — when a structure knocks in and a client asks 'what do we do now,' the answer has to be owned by a person, not a model. My job is to absorb that accountability for the PM and the CIO, freeing them to focus on the broader book. I use AI tooling daily to speed the analysis; I am not the analysis. I'm the person the client can call when the analysis has just told them something they didn't want to hear."

---

## Common CIO-drill question catalogue

Rehearse the answers out loud. Time them. 90 seconds per answer is typical.

### Markets / macro

1. "Walk me through your current market view in five minutes."
2. "What's your conviction trade right now? Entry, stop, size."
3. "What are you getting wrong, or most likely to get wrong, in your current view?"
4. "What's one consensus view you disagree with most strongly?"
5. "Where's the asymmetry right now — any asset class?"
6. "If rates move 100 bps against your expectation by year-end, what in your view breaks first?"
7. "Walk me through how you'd construct a 60/40 portfolio today — what's the actual mix inside the 60 and the 40?"
8. "What's the single thing you'd most want to own for a 5-year hold, and why is consensus wrong about it?"
9. "What's the single thing you'd most want to short for a 12-month hold, and what would force you to cover?"

### Judgement / process

10. "How do you form a view when sell-side research disagrees?"
11. "Describe a time you held a market view that was wrong — how did you figure out you were wrong?"
12. "How do you know when to trust a CIO's house view vs your own read?"
13. "What's the most useful piece of market research you've read in the last six months, and what did it change?"

### Product / portfolio

14. "A client's FCN just knocked in. Walk me through your day from the moment you see the alert." (See [`../products/structured.md`](../products/structured.md) §3 lifecycle.)
15. "Client wants a 10% yield. What do you structure and what do you refuse?"
16. "You get a quote from two issuers on the same structure — BNP 11.5%, UBS 11.0%. Which do you book?"
17. "Explain the difference between an FCN and a BEN as if you were explaining to a client in 30 seconds."

### Differentiation

18. "Why should I hire you over a sell-side research analyst who wants to move into PB?"
19. "What do you bring to this team that the CIO or I don't already have?"
20. "How do you use AI tooling in your daily work? Where does it stop and your judgement begin?"

---

## Rehearsal discipline

1. **Write your market view first.** All CIO-drill answers depend on it. 6–8 paragraphs, dated, defensible number-by-number.
2. **Record yourself answering the question catalogue.** 90 seconds each. Listen back. If you can't stand listening to yourself at 2x speed, your answer is too long or too vague.
3. **Pressure-test with someone senior.** Ideally someone who has been a CIO, PM, or senior IC. Absent that, a sell-side rates / credit / equity strategist friend. The point is to have your thesis poked at *before* the interview, not during.
4. **Update 48 hours before the interview.** Rates, FX, equity levels have moved. Inflation print may have landed. Your numbers need to be current. Stale numbers are a specific disqualifier — they signal you prepared once and haven't re-engaged.
5. **Separate your view from the target firm's CIO view — but know theirs.** You don't need to agree; you need to know what they've published and have a view on where you would respectfully differ. That is the CIO interview's ideal shape.

---

## Related

- [`../market_view.md`](../market_view.md) — the template to rewrite in your own words before this page is useful.
- [`../concepts/cio_house_view.md`](../concepts/cio_house_view.md) — what CIO offices actually produce and how to read a CIO letter critically.
- [`../roles.md`](../roles.md) — PM-Assistant / EAM-Junior track prep priorities, of which this page is the centrepiece.
- [`openers.md`](openers.md) — self-intro, "why PB," "why this firm," "why Singapore" — the round-one frame before you get to this round.
- [`firm_briefs.md`](firm_briefs.md) — target-firm and CEO / CIO background so you can calibrate which views you can respectfully differ on.
- [`../products/issuers.md`](../products/issuers.md) — issuer-selection drill that is typically a sub-section of the CIO screen if the firm is heavy in structured products.
