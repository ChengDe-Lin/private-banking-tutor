# Account Opening & KYC — the Custodian Pipeline

> **For PM-Assistant / EAM-Junior roles specifically.** At a bank PB, account opening sits with the onboarding team and your involvement is passive. At an **EAM or MFO**, the firm sits *between* the client and the custodian bank — so the assistant often owns the day-to-day shepherding of a new client through the custodian's KYC process. This page covers: the EAM-custody operating model, realistic Singapore timelines (spoiler: 3–6 months, not 2–6 weeks), the main custodian banks' opening thresholds, SoW/SoF documentation load, and the failure modes that kill onboarding.

## 直覺理解

在銀行 PB 面試，開戶流程是 onboarding team 的事，你只要知道有哪些步驟就夠。**但在 EAM 工作邏輯完全不同**——客戶的資產實際上是放在 LGT / JB / UBS / BNP 等 custodian bank，EAM 並沒有 banking licence，不能直接持有客戶資金。所以當 EAM 簽到一個新客戶，**真正的開戶是在 custodian bank 那邊做的**——EAM 要幫客戶準備資料、陪著跑 KYC、處理 SoW/SoF 詢問、面對「為什麼這筆錢從這裡進來」的反覆追問。

這個流程在新加坡通常**拖 3–6 個月**（post-1MDB 規定緊了很多），不是 2–6 週。每一家 custodian bank 的門檻、流程強度、速度都不一樣：LGT 最高端、JB 強調 private、UBS 大型 global、BNP 強 European。面試時 CIO 可能直接問：「如果客戶有 US$30M 在台灣，想過來新加坡開戶，你會推薦哪家 custodian 為什麼？多久會開完？客戶需要準備什麼？」——答不出就是不知道這 job 實際在做什麼。

> 💡 **Bottom line for interviews:** At an EAM, new-client onboarding is a **multi-month operational project** with the custodian bank as the gatekeeper. The assistant's role is shepherding, not signing off — but the quality of shepherding determines whether the deal closes or dies in KYC.

---

## The EAM-custody operating model

An EAM has a **Capital Markets Services (CMS) licence** for fund management and is usually an **Exempt Financial Adviser**. It does NOT have a banking licence. So:

| Function | Who actually does it |
|---|---|
| **Custody of cash and securities** | Custodian private bank (LGT / JB / UBS / BNP / Pictet / Lombard Odier / etc.) |
| **Account opening, KYC, SoW/SoF collection, sanctions screening** | Custodian bank (the onboarding team and compliance) |
| **Investment advice and portfolio construction** | EAM (the PM + PM-Assistant + CIO) |
| **Trade execution** | Either the custodian or an executing broker; instruction typically flows EAM → custodian |
| **Reporting (consolidated across custodians)** | EAM (often via Addepar, Etops, or similar multi-custody platform) |
| **Client relationship primary ownership** | EAM (the PM / lead banker) |
| **Signing authority over client accounts** | EAM holds a Limited Power of Attorney (LPOA) granted by the client — advisory or discretionary depending on mandate |

The client therefore has **two contractual relationships**: with the custodian bank (for banking and custody services) and with the EAM (for investment advisory). This is the structural reason an EAM is "independent" — no retrocession from a single product shelf, no NIM lending P&L to optimise against the client.

**Implication for account opening.** The EAM cannot onboard the client unilaterally. The custodian bank's KYC process has to clear, and only then does the EAM's LPOA become usable. A "signed the EAM agreement" client is **not yet a client** operationally until the custodian's account is funded and the LPOA is lodged.

---

## Singapore timeline — 3 to 6 months is the default

The pre-2016 assumption that a new UHNW account opens in 4–6 weeks died with **1MDB (2015–2016)**, which triggered two effective PB licence revocations (BSI 2016, Falcon 2016) and a step-change in MAS expectations around source-of-wealth corroboration and ongoing monitoring. Post-CS / post-Archegos / post-FTX, requirements tightened further.

**Realistic timeline for a fresh Greater-China UHNW onboarding at a top-tier SG custodian:**

| Phase | Calendar duration | What's happening |
|---|---|---|
| **Initial screen & referral call** | Weeks 1–2 | EAM pitches client; custodian decides whether to pursue; "preliminary" calls with the client's lead banker at the custodian |
| **Document collection (round 1)** | Weeks 2–4 | Passports, address, tax residency, corporate structure docs if entities involved, bank references, professional references |
| **Source-of-Wealth narrative drafting** | Weeks 3–6 | EAM drafts the SoW narrative with the client; compiles corroborating evidence (business sale docs, tax returns, past bank statements showing accumulation) |
| **Custodian KYC analyst review** | Weeks 4–8 | Custodian analyst works through the file; likely 2–3 rounds of follow-up requests |
| **Enhanced Due Diligence (if triggered)** | Weeks 6–12 | PEP nexus, high-risk jurisdiction, complex structure, unusual wealth narrative all push into EDD — additional documentation + senior sign-off |
| **Senior management sign-off** | Weeks 10–14 | Relationship manager → Team head → Head of Compliance → (for EDD) MLRO and senior committee |
| **Account opening live + funding** | Weeks 12–18 | Accounts active; client wires initial funding; funds received and cleared |
| **LPOA lodgement + EAM activation** | Weeks 16–20 | EAM's LPOA filed; trading authority live |
| **First transactions** | Weeks 18–24 | First trades executed under EAM advisory |

**Three to six months is the realistic range.** Clean files with transparent Greater-China corporate wealth land at the fast end (~3 months). Complex multi-jurisdiction structures, PEP adjacency, crypto-flavoured wealth, or slow client document production stretch to 6 months. Faster is occasionally possible but not normal.

**What slows it down:**

- **Client document production delays** — TW/HK/China clients often underestimate the documentation demand and take 2–4 weeks to produce what's asked. The EAM-assistant's job: push without souring the relationship.
- **SoW narrative-vs-evidence mismatch** — client tells a story the documents don't fully support; compliance asks for more; client feels interrogated.
- **Structure complexity** — trusts, holding vehicles, layered BVI / Cayman / Samoa entities all extend review.
- **Shifting regulatory weather** — occasional tightening cycles (e.g. late 2022–2023 FO-quality review) extend timelines industry-wide.
- **Team bandwidth at the custodian** — end-of-year / post-bonus turnover / integration events (UBS-CS) create queues.

---

## Major Singapore custodians — opening thresholds and positioning

Ordered roughly by EAM-flow frequency. All figures are indicative; verify before client conversations.

### LGT Bank

| Item | |
|---|---|
| **Typical minimum AUM to open** | ~US$5M (sometimes flex to US$3M for strategic relationships); UHNW-bias ⚠️ |
| **KYC timeline (clean file)** | 3–4 months |
| **Strengths** | Princely-family ownership (patient, no IB conflict); strong alternatives franchise; multi-generational relationship culture |
| **Weaknesses** | Smaller platform breadth vs UBS / JPM; structured-product shelf thinner than bulge-brackets |
| **Who it fits** | UHNW / FO-scale clients valuing independence and long horizon; ESG-aligned clients; multi-jurisdictional European-anchored families |

### Julius Baer

| Item | |
|---|---|
| **Typical minimum AUM to open** | ~US$2–3M for standard bookings; often higher in practice for Asia booking centre (US$5M+) ⚠️ |
| **KYC timeline (clean file)** | 3–4 months |
| **Strengths** | Pure-play PB model (no IB conflict); Asia booking centre experienced with Greater-China clients; mid-size EAM attention |
| **Weaknesses** | Smaller capital base; 2024 Signa exposure + governance reshuffle left operational scars; rating one notch below UBS/BNP |
| **Who it fits** | Asian UHNW clients valuing the "no IB" narrative; mid-size EAM relationships wanting attention; clients moving away from UBS post-CS |

### UBS (post-CS)

| Item | |
|---|---|
| **Typical minimum AUM to open** | ~US$5M for WM segment; US$50M+ for UHNW dedicated coverage ⚠️ |
| **KYC timeline (clean file)** | 3–4 months; longer in segments still integrating CS-legacy systems |
| **Strengths** | Largest APAC wealth platform; deepest product shelf; most extensive booking centres (SG / HK / Switzerland / UK / US); post-CS integration creates scale |
| **Weaknesses** | Integration friction through 2026; CS-legacy legal tail; onboarding can feel bureaucratic; documentation rigorous-to-a-fault |
| **Who it fits** | Large-ticket clients needing full-service platform; clients wanting US / European cross-border; any client where balance-sheet size matters |

### BNP Paribas Wealth Management

| Item | |
|---|---|
| **Typical minimum AUM to open** | ~US$3–5M for general WM; UHNW-tier US$25M+ ⚠️ |
| **KYC timeline (clean file)** | 3–4 months |
| **Strengths** | Strong European UHNW heritage; structured-product franchise (especially Asian worst-of baskets); growing APAC team |
| **Weaknesses** | Smaller APAC footprint than UBS/HSBC; US cross-border thinner |
| **Who it fits** | European cross-border families; clients with Euro-denominated liabilities; structured-product-heavy portfolios |

### Others on the shelf

- **Pictet Wealth Management** — Swiss independent; typical threshold US$10M+; conservative positioning; 3–5 month KYC; family-office bias.
- **Lombard Odier** — similar profile to Pictet; Swiss independent; FO-focus; slightly more alternatives-comfortable.
- **JP Morgan PB** — top-tier UHNW; typical threshold US$25M+ for full advisory, US$10M+ for limited services; clients expect institutional quality.
- **Citi Private Bank** — UHNW / FO bias; typical threshold US$10M+; global markets access.
- **Bank of Singapore (OCBC)** — Asia regional; typical threshold US$2M+ at the general HNW tier; strong for Asian UHNW with OCBC corporate-bank linkage.
- **DBS Private Bank** — SG local flagship; typical threshold US$3M+; strong digital platform; good for SG-domiciled clients needing integrated corporate-private banking.
- **HSBC Global Private Banking** — Asia / ME / global; typical threshold US$5M+; strong China / HK corridor.
- **Standard Chartered Private Bank** — Asia / ME / Africa EM corridor; typical threshold US$5M+.
- **Deutsche Bank International Private Bank** — Germany-anchored; typical threshold US$5M+ at IPB tier; European cross-border strong.

All thresholds are the stated / typical minimums — **the real minimum to get serious service attention at any of these is 2–3× the stated figure** (a US$5M client at a US$2M-stated-minimum bank gets materially less attention than a US$15M client at the same bank). This is a pricing-of-service reality, not a written rule.

---

## SoW/SoF documentation — what actually gets asked for

The regulatory frame sits in [`mas_notice_626.md`](mas_notice_626.md) and [`sow_sof_sanctions.md`](sow_sof_sanctions.md). The operational reality at Singapore custodians, in descending order of typical ask:

**Source of Wealth — the narrative + evidence.** SoW is the story of **how the client accumulated their wealth over time**. The document stack typically required:

1. **Biographical narrative** — 1–2 pages on career, major liquidity events, business ownership, inheritance. Written in plain language, not a CV.
2. **Corporate / business evidence** — if wealth came from business ownership/sale: articles of incorporation, shareholder registers, sale/purchase agreements for liquidity events, audited financials for at least 3 years pre-sale.
3. **Tax returns** — typically 2–3 years of personal tax returns (home jurisdiction); shows income consistent with the wealth narrative.
4. **Prior bank statements** — typically 6–24 months of statements from primary accounts at previous banks, showing the accumulation / holding pattern.
5. **Inheritance evidence** (if relevant) — will, probate documents, estate settlement statements.
6. **Investment gains evidence** (if relevant) — brokerage statements showing realised gains consistent with the narrative.
7. **Bonus / options income** (if relevant) — employer letters, vesting schedules.

**Source of Funds — the specific inflow.** SoF is about **this specific inflow** — the wire coming in on Tuesday, not the wealth history. Typically asked:

1. **Wire-origin documentation** — where is the wire being sent from, and is that consistent with SoW?
2. **Purpose of the transfer** — investment / consolidation / specific purchase / other?
3. **Transaction trail** — if the funds are moving from one bank to another, is the chain clean?
4. **Currency conversion history** — if funds were converted (e.g. RMB → USD via HK), is the conversion lawful (quotas, proper corporate channels)?

### Taiwanese-client-specific context

Worth knowing because it's the frequent case at CW Asset Management and similar Greater-China-oriented EAMs:

- **TW's US$5M annual outward-remittance quota** (CBC rule) — a Taiwanese individual can send up to ~US$5M per year through the banking channel. Larger initial transfers require CBC approval and take longer; or are structured via corporate remittance with proper business purpose documentation.
- **TW estate-planning context** — if the client is offshoring TW wealth to SG for succession reasons (the 20% estate-tax driver), the SoW narrative should reference this; custodians are familiar with it and will not raise it as a red flag.
- **Pre-existing PB relationships** — many TW UHNW already banked in HK or TW private-banking arms; prior bank statements from those accounts are typically the cleanest SoW corroboration.
- **Business-sale liquidity events** — TW has an active family-business-sale ecosystem; documentation is usually available but often in Mandarin and requires translation for SG custodian review.

---

## The PM-Assistant's operational role

What the assistant actually does during the 3–6 month process:

1. **Week 1–2: warm handoff.** Introduce the client to the custodian's lead banker in person or on a call; brief the custodian in advance on the client's background and the ask; set expectations with the client on the timeline.
2. **Week 2–4: document collection shepherding.** Translate the custodian's document request into a plain-language checklist; follow up twice a week with the client; sense-check documents before forwarding; identify gaps early.
3. **Week 3–6: SoW narrative drafting.** Work with the client (or their accountant / lawyer) to produce the narrative; ensure it is factually correct and that the documentary evidence supports each claim; flag any gaps.
4. **Week 4–12: compliance follow-up rounds.** The custodian will come back with 2–4 rounds of follow-up questions ("can you clarify the 2018 transaction?"; "we don't see the source of the 2019 RMB 40M receipt"). Each round gets responded to within 3–5 business days; the assistant owns the tracking.
5. **Week 10–16: pre-approval coordination.** Stay close to the custodian's RM on internal approvals; anticipate what the senior committee may push back on; prepare rebuttal material in advance.
6. **Week 14–20: account activation + funding.** Confirm account numbers, wire instructions, test the LPOA lodgement, coordinate the initial funding wire timing with the client.
7. **Week 18–24: first-trade readiness.** Ensure the client's IPS (typically drafted by the PM in parallel) is signed; the model portfolio is approved; the first trades can execute cleanly on Day 1 of live advisory.

**The discipline:** weekly written status updates to the client, regardless of whether there is news. Silence is what makes the client reconsider the EAM. The update can be as short as: "Status this week: custodian compliance has not yet come back with round-3 questions; we expect them by Friday; no action needed from you; next meaningful milestone is senior-committee sign-off, expected week of X."

---

## Common failure modes and recovery

### SoW narrative-vs-evidence mismatch

**Failure pattern.** Client says the wealth came from a 2015 company sale; documents show the 2015 sale generated US$8M but the current wealth is US$35M — where did the other US$27M come from? Custodian flags it; client feels interrogated; relationship frays.

**Recovery.** The assistant pre-empts this. Before submitting the narrative, run a quick consistency check: does the story plausibly produce the current wealth? If there are gaps (compound investment returns, secondary liquidity events, inheritances not mentioned), name them explicitly in the narrative with supporting docs. "US$8M from 2015 sale → invested in TW equity index ETFs; compound return 2015–2024 of ~12% p.a. grew it to ~US$22M per attached brokerage statements; 2021 inheritance from father of US$9M per attached probate document; currently US$31M aligned."

### Client impatience with document asks

**Failure pattern.** Client (especially first-generation wealth) views the KYC depth as intrusive or insulting. Starts to disengage. Begins to wonder whether to go elsewhere.

**Recovery.** Reframe early. "The MAS expectations after 1MDB in 2016 mean every top-tier bank in Singapore asks the same questions; the alternative is banking in a jurisdiction where the questions aren't asked, which comes with a different set of risks. I'd rather have a bank that does this properly now than have issues later. I'll consolidate the asks into fewer rounds so it's not death-by-a-thousand-emails."

### Structure complexity mid-process

**Failure pattern.** Client reveals a BVI holding company midway through KYC that wasn't in the initial narrative. Custodian restarts parts of the review. Timeline jumps from 4 months to 6.

**Recovery.** Don't hide it; flag it immediately. The custodian would rather discover the complexity early and adjust than discover it in a post-onboarding review. The assistant's job is to ensure the client discloses *everything* at the start — proactively asking the questions the custodian will eventually ask.

### Referee / prior-bank call goes badly

**Failure pattern.** The custodian calls the client's prior PB for a reference; the reference is lukewarm or raises a concern.

**Recovery.** Sometimes survivable. Honest conversation with the client: "The reference call surfaced X; can we talk through it so I can work with the custodian?" Often the issue is a billing dispute or a bonus-year-structured-product mis-sale from a decade ago that the client remembers differently from the prior bank. Rarely, it's a genuine integrity flag — in which case the deal dies and the EAM walks away.

### Red flags that kill the deal

These are not "slow it down" events; they are "stop the process" events:

- Narrative contains demonstrable false statements that the documents contradict.
- Client refuses to provide corroborating documentation without a plausible reason.
- Source of wealth traces to sanctioned individuals / entities / jurisdictions.
- PEP exposure that client actively concealed.
- Structure of payments/entities designed to obscure beneficial ownership.

The EAM's interest is aligned with the custodian's here: if the deal shouldn't close, the EAM should be the first to walk. A client with integrity concerns carries through the entire relationship and damages the EAM's reputation with the custodian for the next deal.

---

## Interview questions you should be able to answer

### Q1. "Walk me through opening a new account for a US$30M Taiwanese client — realistic timeline and what you actually do."

**Answer.** Three to four months if the file is clean, six months if it's complex. I'd start with a warm handoff to the custodian — call the LGT or JB relationship banker, brief them on the client's profile, and set up a meeting within two weeks. The client's first-round documents — passports, address, tax residency, bank references — we'd pull together in two to four weeks. In parallel, I'd start drafting the source-of-wealth narrative with the client, which for a Taiwanese client typically means walking through the business history, major liquidity events, and the pre-existing banking relationships. The CBC US$5M quota means the funding will need to come in via multiple wires if the full US$30M is transferring; we'd plan that with the client's local bank and the custodian's operations team. Compliance at the custodian will come back with two to four rounds of follow-up questions over the next couple of months — I'd own the tracking and ensure we respond within three to five business days each round. Senior sign-off adds another two weeks, and then we're live. My role throughout is shepherding — the custodian does the actual KYC, but the client needs a single point of contact at the EAM who's watching the process and translating between compliance-speak and client-language. Weekly status updates even when there's no news.

### Q2. "A client's prior-bank reference call comes back lukewarm. How do you handle it?"

**Answer.** Depends on the flavour of lukewarm. If it's "we don't have anything bad to say but also not very engaged" — typical for a client who left the prior bank over fee dispute or RM change — I'd call the client and frame it honestly: "the reference call was professional but not enthusiastic; can you walk me through what the prior relationship was like so I can explain the context if compliance asks?" Often the story is banal and the custodian moves on. If the reference raises a specific concern — e.g. "we had issues with AML documentation at exit" — that's a different conversation. I'd ask the client directly what happened and whether there's a paper trail showing how it was resolved. If the client can't explain or the documentation isn't clean, the honest action is to flag it to the custodian and, if needed, walk away from the deal. Better to lose a prospect than to onboard a client the custodian will unwind in 18 months.

### Q3. "Why does Singapore onboarding take 3–6 months and not 4–6 weeks?"

**Answer.** Post-1MDB. The BSI and Falcon licence revocations in 2016 were the industry signal that MAS expected source-of-wealth corroboration beyond "we trust the client" — you need documentary evidence that supports the narrative, and for UHNW clients that evidence is often in multiple jurisdictions and requires translation, corporate-structure walkthroughs, tax-return reviews. Each round of compliance follow-up takes the client two to three weeks to respond, and two to four rounds is typical. Layer on senior-committee approvals for any EDD case (PEP nexus, high-risk jurisdiction, complex structure, unusual narrative) and you're at three months minimum for a clean file, six months for a complex one. The tradeoff is real — four-week onboarding happens in jurisdictions where the KYC depth is shallower, and those jurisdictions have had different problems. A Taiwanese UHNW client choosing Singapore is explicitly choosing the thorough regime; our job is to shepherd them through it without it feeling adversarial.

### Q4. "Between LGT, Julius Baer, UBS, and BNP for a US$20M UHNW Greater-China client — who would you recommend as custodian and why?"

**Answer.** Depends on three client-specific factors. First, do they want alternatives access and multi-generational positioning? LGT's philosophy and alternatives franchise lean that way; a family-oriented client who wants "my grandchildren's bank" fits LGT well. Second, how important is the "no investment banking conflict" narrative to them? If the client is sensitive to that — especially post-CS — Julius Baer is the cleanest pitch, though the post-2024 Signa story means we'd want to discuss JB's capital position openly. Third, do they need US cross-border capability or large-ticket structured-product flow? UBS wins on both, with the caveat that the post-CS integration friction is still visible. BNP is my pick if the client has European cross-border needs or if the book is structured-product-heavy in Asian worst-of baskets. My default for a US$20M Greater-China UHNW client without specific constraints would be **Julius Baer as the primary custodian** — SG-experienced, appropriately sized for the client's ticket, good at multi-generational Greater-China relationships — **with a secondary relationship at LGT or UBS** for diversification and specific capability access. I'd frame the two-custodian setup as a post-CS best practice, not a paranoia move.

### Q5. "Client's onboarding has been stuck at 'pending senior approval' for six weeks. What do you do?"

**Answer.** First, call the custodian's relationship banker — not email, call — and ask directly what's stuck and what we can help with. "Stuck at senior approval" usually means one of three things: (a) specific compliance concern that hasn't been surfaced to the RM yet; (b) bandwidth at the senior-committee level; (c) an unrelated issue at the custodian creating a queue. Each needs a different response. If it's (a), ask what additional documentation would unblock; get it from the client within a week. If it's (b) or (c), set expectations with the client honestly — "we've delivered everything; the delay is internal at the bank; I'll call them weekly until we have a decision." The thing I wouldn't do is let the client wonder in silence — silence at this stage reads as "my EAM can't get it done," which is often why deals die at this specific inflection point.

---

## Related

- [`mas_notice_626.md`](mas_notice_626.md) — The regulatory foundation for the KYC / CDD / EDD discipline described on this page.
- [`sow_sof_sanctions.md`](sow_sof_sanctions.md) — The specific questioning framework for SoW / SoF and the sanctions layer.
- [`accredited_investor.md`](accredited_investor.md) — AI opt-in is typically done in parallel with the account opening at the custodian.
- [`fatca_crs.md`](fatca_crs.md) — Self-certification forms (W-8 / W-9 / CRS) are part of the standard document pack.
- [`pb_code_of_conduct.md`](pb_code_of_conduct.md) — ABS PB Code expectations on client onboarding quality.
- [`../concepts/client_lifecycle.md`](../concepts/client_lifecycle.md) Phase 3 — Generic bank-PB onboarding view; this page is the EAM-specific extension.
- [`../interview/firm_briefs.md`](../interview/firm_briefs.md) — Target EAM context; CW Asset Management's custody partners are listed as HK / SG / London / Liechtenstein / Zurich "premier private banks and brokerage firms" — likely Julius Baer and UBS given the CEO's background.
- [`../products/issuers.md`](../products/issuers.md) — Once onboarded, the custodian also becomes a structured-product issuer counterparty for the client's book.
