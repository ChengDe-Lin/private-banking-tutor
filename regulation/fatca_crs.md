# FATCA and CRS — Tax Transparency Regimes

> **Last reviewed: 2026-04-17.** FATCA is US-origin and US-person-specific; CRS is OECD-led and multilateral. Both are orthogonal to AML (which addresses the legitimacy of funds) — these regimes address tax-residency reporting. Interviewers test both the mechanics and the "walk me through what changes if the client becomes a US person" scenario.

## What each regime is

**FATCA — Foreign Account Tax Compliance Act** (US, enacted 2010, effective 2014). A US law requiring foreign financial institutions (FFIs) to identify US-person accounts and report them to the US Internal Revenue Service (IRS), either directly (via FFI agreement) or through the FFI's home-country tax authority (via an intergovernmental agreement, IGA). Non-compliant FFIs face a 30% withholding tax on US-source payments to them.

**CRS — Common Reporting Standard** (OECD, adopted 2014, first reporting 2017). A multilateral framework under which participating jurisdictions' financial institutions identify non-resident account-holders and report them to their local tax authority, which then exchanges the information with the account-holder's tax-residency jurisdiction. Over 100 jurisdictions participate; Singapore, Hong Kong, all major PB centres are signed up.

**Key structural difference:**

| | FATCA | CRS |
|---|---|---|
| Origin | Unilateral US law | Multilateral OECD agreement |
| Scope | US-person accounts only | All non-resident accounts (for each jurisdiction) |
| Reporting flow | FFI → IRS (direct) or FFI → local tax authority → IRS (via IGA) | FI → local tax authority → other jurisdiction's tax authority |
| Enforcement | 30% withholding on US-source payments to non-compliant FFIs | Jurisdictional enforcement, peer pressure, blacklisting |
| Trigger | US-person status (citizenship, green card, substantial presence) | Tax residency (typically 183+ days or permanent home) |

## Why they exist — the real-world triggers

**FATCA — the UBS case (2009).** US DoJ and IRS investigation found UBS had helped US clients evade US tax by concealing Swiss accounts. UBS paid US$780M settlement in 2009, delivered 4,450 client names under deferred-prosecution arrangement, and the episode ended Swiss banking secrecy for US clients. Similar cases against Credit Suisse (2014, US$2.6B settlement), Wegelin (2013, forced into liquidation), and dozens of Swiss and international banks followed. FATCA was designed to end offshore US-person tax evasion by making it operationally impossible — FFIs that don't comply face 30% withholding tax on US-source payments (which for banks with US trading operations is effectively unworkable). The 2010 FATCA statute + 2014 implementation + subsequent IGAs established the modern regime.

**CRS — the multi-jurisdictional extension.** Governments outside the US watched FATCA with interest and pressure from their own tax-transparency advocates. The OECD formalised a multilateral version that avoided the US-centric unilateralism. Political triggers: Panama Papers (2016), LuxLeaks (2014), Swissleaks (2015) — all exposed offshore tax evasion at scale. CRS implementation followed: G20 endorsed it in 2014, first exchanges happened in 2017–2018 among early-adopter jurisdictions.

**Where Singapore sits.** SG signed a FATCA Model 1 IGA with the US in 2014 (in force from 2015). Under Model 1, SG financial institutions report US-person accounts to IRAS (Inland Revenue Authority of Singapore), which then transmits to the IRS. SG joined CRS with first reporting in 2018. Both regimes are operational through IRAS as the central exchange point for SG financial institutions.

## Who is a "US person" for FATCA purposes

The definition is **wider than citizenship**:

1. **US citizens** — including dual citizens. Includes "accidental Americans" born in the US to non-US-resident parents who never lived in the US after birth.
2. **US green-card holders** — lawful permanent residents, including those who have maintained the green card while living abroad (a trap for many Asian UHNW clients who got green cards decades ago and kept them active).
3. **Substantial presence test** — days physically present in the US across a 3-year window. Formula: current year days + (1/3) × prior year days + (1/6) × year-before-prior days ≥ 183. Catches clients who spend extensive time in the US without formal residency.
4. **US-incorporated entities** or entities controlled by US persons (in some contexts).
5. Certain other categories (US trusts, US tax-resident estates).

**Substantial-presence example:** a client in the US 120 days in 2026, 150 days in 2025, 150 days in 2024 → 120 + 150/3 + 150/6 = 120 + 50 + 25 = 195 days → **substantial presence met**. This client is a US person for tax purposes even without a green card.

**The client may not realise their status.** Accidental Americans (born in US, left young, never lived there) are often unaware of the US tax obligation. Substantial-presence test can be tripped accidentally by a client spending extended time visiting family in the US. RMs should ask the question clearly at onboarding and at material life events.

## Who is tax-resident for CRS purposes

Tax residency is determined under each jurisdiction's tax law:

- **Physical presence** — typically ≥ 183 days in a year, though some jurisdictions use shorter thresholds or alternative tests.
- **Permanent home / centre of vital interests** — where the family lives, where economic activity concentrates.
- **Habitual abode** — where the person typically lives.
- **Nationality** — tiebreaker in some tax treaties.

A client can be tax-resident in multiple jurisdictions simultaneously. Tax-treaty tiebreaker rules resolve to a single primary jurisdiction for treaty purposes, but CRS reporting may go to multiple jurisdictions if the person is tax-resident in each under domestic law.

**Key point for UHNW clients:** many are genuinely multi-residency. The client self-certifies tax residency on CRS forms; the bank reviews for reasonableness. Self-certification that's inconsistent with known facts (client lives in one country but claims residency in another) is a red flag.

## Key obligations (for banks)

### FATCA

- **Client identification:** determine at onboarding whether the client is a US person. Obtain Form **W-9** from US persons (signed under penalty of perjury) or Form **W-8BEN** (for individuals) / **W-8BEN-E** (for entities) from non-US persons certifying non-US status.
- **Monitoring for indicia:** US place of birth, US mailing or residence address, US phone number, US PoA, standing US transfer instructions — any of these is a FATCA indicia requiring follow-up to verify US status.
- **Reporting:** for US-person accounts, file annual report with IRAS (under the SG Model 1 IGA) detailing account holder, balances, income, and account details. IRAS transmits to IRS.
- **Withholding:** for non-FATCA-compliant counterparties (rare in PB but possible in correspondent relationships), apply 30% withholding on US-source payments.
- **Closing non-cooperative accounts:** if a client refuses to provide FATCA certification and has US indicia, the bank may be required to close the account.

### CRS

- **Self-certification of tax residency** at onboarding. Client completes CRS self-certification form specifying tax-resident jurisdictions, TIN (taxpayer identification number), and underlying reasoning.
- **Reasonableness check:** bank reviews self-certification against known facts (address, birthplace, employment, travel patterns).
- **Change-of-circumstances monitoring:** if the bank becomes aware of changes (client's address changes, residency changes, new jurisdictional links), re-verify tax residency.
- **Reporting:** annual reporting to IRAS of accounts held by tax-residents of other CRS-participating jurisdictions. IRAS exchanges with each jurisdiction annually.
- **Entity accounts:** identify "controlling persons" of passive non-financial entities; report their tax residencies.

### Records

Typically 6+ years retention of certifications, supporting documentation, and reporting records.

## Red flags / practical application

- **Client doesn't realise US-person status** — common for accidental Americans and long-term green-card holders. Ask directly, even if the client is surprised.
- **US indicia present but client claims non-US status** — requires written explanation and documentation (e.g. copy of renounced citizenship certificate, expired / abandoned green card proof).
- **Substantial-presence threshold approaching** — client with extensive US travel; flag to ensure they understand the tax implications of extending stays.
- **Self-certification inconsistent with profile** — client with long-term SG residence claiming tax residency elsewhere; warrants verification.
- **Reluctance to provide tax-residency documentation** — itself a red flag.
- **"I'll get the paperwork later"** — if FATCA certification is missing at account opening for a client with US indicia, account opening should not proceed or should be limited.
- **Life events that change status** — marriage to a US person, receiving green card, starting long-term US posting, acquiring US real estate with dependents in tow — all trigger re-verification.
- **Changes in tax residency** — client moves from SG to HK, or from TW to SG — must re-certify, bank re-reports.
- **Renunciation of US citizenship** (the "covered expatriate" regime, IRC §877A) — wealthy renouncers face exit tax on unrealised gains; post-renunciation tax residency re-verification; bank updates records.

### Practical onboarding for Taiwanese clients booking in SG

A Taiwanese client without US connections is straightforward: CRS self-certifies Taiwan tax residency (Taiwan is not a CRS participant, which historically meant no CRS reporting on TW residents — but the bank still collects the self-certification for its records and for any multi-jurisdictional complications). FATCA: completes W-8BEN certifying non-US status. If the client has any US connections — children studying / working in US, US property, extended US visits — additional due-diligence on whether US-person criteria are met.

## Interview questions

### Q1. "A client tells you they just got a US green card — walk me through what changes in the account."

**Answer.** Getting a US green card makes the client a US person for FATCA and US tax purposes from the date of issuance — even if he continues to live in Asia. Immediate changes to the account: first, collect Form W-9 from him instead of the previously-filed W-8BEN. Second, flag the account internally as a US person account — triggers FATCA reporting to IRAS annually, which flows to the IRS. Third, FATCA reporting includes account balances, interest, dividends, capital gains, account numbers, and account holder identification. Fourth, tax-compliance implications for him personally: he now has US federal income tax obligation on worldwide income, including investment income earned in his SG account. He needs US tax filings (Form 1040) and potentially FBAR (foreign bank account report, FinCEN Form 114) for any foreign accounts over US$10k aggregate. Fifth, I'd have a frank conversation with him — this is often news to clients who think the green card is just a travel / residency benefit — and suggest he consult a US tax advisor specifically. Sixth, product shelf implications: many US-compliant mutual funds have complex PFIC tax treatment for US persons holding foreign funds; we'd review the portfolio and consider repositioning to avoid PFIC traps, ideally into US-domiciled funds. Also consider whether the account should be re-booked or restructured — some clients choose to move US-connected assets to a US-based adviser, though the SG booking remains compliant. Document everything in the file; the green card is a material change requiring a full review, not a minor update.

### Q2. "What's the difference between FATCA and CRS?"

**Answer.** Four main differences. First, origin: FATCA is a unilateral US statute from 2010, enforced via 30% withholding tax on non-compliant foreign financial institutions; CRS is a multilateral OECD framework adopted in 2014, enforced via jurisdictional peer pressure and blacklisting. Second, scope: FATCA targets US persons specifically — citizens, green-card holders, substantial-presence individuals; CRS targets all non-resident accounts for each participating jurisdiction, covering over 100 countries' tax residents. Third, reporting flow: for FATCA in Singapore under the Model 1 IGA, SG banks report US-person accounts to IRAS, which transmits to the IRS; for CRS, SG banks report non-SG-tax-resident accounts to IRAS, which exchanges bilaterally with the other jurisdictions' tax authorities. Fourth, identification trigger: FATCA is triggered by US-person status, which is relatively narrow but with broad definitions (citizens, green-card holders, substantial-presence); CRS is triggered by tax residency, which is determined under each jurisdiction's tax law and can be multiple simultaneously. In practice for a SG PB client, I'd collect both: a FATCA certification (W-8BEN or W-9) and a CRS self-certification at onboarding, and maintain both. The two regimes are complementary — FATCA catches US tax evasion; CRS catches most other jurisdictions' tax evasion.

### Q3. "A client says his tax residency is in Hong Kong, but he spends 200 days a year in Singapore. What do you do?"

**Answer.** This is a classic self-certification inconsistency that requires follow-up. Under SG tax law, 183+ days in SG in a year generally makes you SG tax-resident. If he's in SG 200 days, he likely *is* SG tax-resident under SG domestic law, regardless of what he self-certifies. Under CRS, he should be reported as SG tax-resident, not HK. I'd have a conversation — "I notice you've said HK for tax residency, but based on what you've shared about your time in SG, it looks like you'd meet SG tax residency as well. Tax residency can be multiple jurisdictions at once under domestic laws; the treaty tiebreakers determine the primary residency for tax treaty purposes, but for CRS reporting, we report to each jurisdiction where you're tax-resident under that jurisdiction's law." If he insists on HK-only and refuses to acknowledge SG status, I'd: (a) document the self-certification and my follow-up, (b) flag to compliance for review, (c) if clear inconsistency, either require re-certification or the bank will report to both jurisdictions based on the known facts regardless of the self-certification, because the reasonableness check bites. I wouldn't treat his self-certification at face value when it contradicts obvious facts. I'd also suggest he consult a tax advisor — this is a complex multi-jurisdictional situation that affects his total tax exposure, not just our account.

### Q4. "Can FATCA apply to a client who's never set foot in the US?"

**Answer.** Yes — this is the "accidental American" scenario. If he was born in the US to parents who were there temporarily, he became a US citizen automatically at birth under the 14th Amendment. Even if his family left the US when he was months old and he's never been back, he's a US citizen for FATCA purposes. He has US tax filing obligations on worldwide income, despite never having worked or earned in the US. The fix options are: (a) come into compliance — file late tax returns (usually through the IRS Streamlined Filing Compliance Procedures), catch up on FBAR filings, and continue compliance going forward; or (b) renounce US citizenship, which requires: an appointment at a US embassy / consulate (8-month+ wait in many Asian markets), a US$2,350 fee, satisfying 5 years of US tax compliance first, and dealing with potential exit tax if he's a "covered expatriate" under IRC §877A (net worth > US$2M, or tax liability threshold, triggers tax on unrealised gains at renunciation). Accidental Americans often don't know about any of this until an FATCA onboarding question surfaces it. As an RM I'd raise the topic carefully — "by any chance were you born in the US?" — and refer him to specialist US-tax counsel if the answer is yes. Failing to raise it means the bank's own FATCA process may fail downstream when US-indicia flags trigger.

### Q5. "A client renounces US citizenship to avoid FATCA — what's your response?"

**Answer.** Professionally neutral — his citizenship decisions are his own, and plenty of people renounce for legitimate personal / logistical / tax reasons (long-term non-residents, dual-citizens simplifying administrative burden, post-exit wealth events). But three practical points. First, renunciation doesn't retroactively remove US tax obligations — he remains subject to US tax on his final-year income and potentially to exit tax under the "covered expatriate" rules (IRC §877A) if his net worth exceeds US$2M or he has a high average US tax liability over the preceding 5 years. The exit tax treats renunciation as if he'd sold all his assets at fair market value, taxing unrealised gains. This is a meaningful cost and often surprising to clients. Second, he needs 5 years of US tax compliance before renunciation — if he's been non-compliant, he must catch up first. Third, from the bank's side — post-renunciation, he can certify non-US status on W-8BEN, his account is re-classified non-US, and FATCA reporting stops for future years. Existing historical FATCA reports are not erased. The renunciation itself is documented with his CLN (Certificate of Loss of Nationality) from the US State Department, which the bank retains as evidence. I'd strongly recommend he works with a specialist US-tax advisor through the renunciation process — it's complex, expensive, and irreversible, and I'm not going to freelance tax advice. From the bank's perspective, operating correctly through the transition — stop FATCA reporting at the right time, update self-certifications, maintain documentation — is what the Code requires.

---

## Related

- [`mas_notice_626.md`](mas_notice_626.md) — AML regime, parallel and orthogonal to FATCA/CRS; both typically handled at onboarding.
- [`sow_sof_sanctions.md`](sow_sof_sanctions.md) — source-of-wealth / source-of-funds and sanctions screening, complementary KYC activities.
- [`pb_code_of_conduct.md`](pb_code_of_conduct.md) — confidentiality obligations that interact with tax-reporting: statutory reporting overrides confidentiality.
- [`accredited_investor.md`](accredited_investor.md) — AI classification operates independently of FATCA/CRS but is collected at the same onboarding pass.
- [`../cases/05_cross_border_family.md`](../cases/05_cross_border_family.md) — case study where FATCA/CRS drives structuring decisions.
