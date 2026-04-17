# MAS Notice 626 — AML/CFT for Banks

> **Last reviewed: 2026-04-17.** The core MAS AML/CFT notice for banks. Structure and obligations are stable; specific thresholds, typology lists, and the COSMIC information-sharing platform are the areas that evolve — check for current details before the interview.

## What it is

**MAS Notice 626 — "Prevention of Money Laundering and Countering the Financing of Terrorism — Banks"** is the Monetary Authority of Singapore's primary regulatory notice setting AML/CFT obligations for licensed banks operating in Singapore. It operationalises the Financial Action Task Force (FATF) 40 Recommendations into binding rules for Singapore banks — covering customer due diligence, enhanced due diligence, ongoing monitoring, suspicious-transaction reporting, record-keeping, and internal policies / training.

It applies alongside: MAS Notice 1014 (merchant banks), MAS Notices for capital markets / insurance, the Corruption, Drug Trafficking and Other Serious Crimes Act (CDSA) which imposes the underlying criminal obligations, and the Terrorism (Suppression of Financing) Act. Notice 626 is the operating manual; CDSA is the statute behind it.

## Why it exists — the real-world triggers

Notice 626 in its current form was shaped by two generations of Singapore and global money-laundering scandals, each of which forced a tightening.

**1MDB (2015–2016)** — the Malaysian sovereign-wealth-fund scandal that touched several Singapore private banks (BSI, Falcon, UBS). In 2016, MAS took the extraordinary step of revoking BSI's merchant-bank licence (first revocation in 30+ years) and later revoked Falcon's. UBS and others received significant financial penalties. The 1MDB episode exposed that SG PBs had been booking flows with shallow SOW/SOF documentation, rotating accounts to obscure origin, and missing clear typology red flags. The regulatory response tightened **enhanced customer due diligence, senior-management approval for high-risk relationships, and SOW corroboration requirements.**

**Panama Papers (2016) and Pandora Papers (2021)** — global leaks of offshore-structuring documents showed how beneficial-ownership opacity enabled laundering. MAS and global peers responded with stricter beneficial-ownership identification and verification requirements.

**Credit Suisse / Archegos, Danske Bank Estonia, and post-2022 sanctions enforcement (Russia-related)** — have all pushed Notice 626 and its peers toward real-time monitoring, typology-based detection, and sanctions-screening integration.

**COSMIC (launched April 2024)** — the MAS-operated "Collaborative Sharing of Money Laundering / TF Information and Cases" platform. Enables SG financial institutions to share information on suspicious customer activity under a structured framework, addressing the long-standing problem that launderers exploit the silos between banks. Initial participants were six major SG banks; expanding over time.

## Who it applies to

- All banks licensed in Singapore — full banks, wholesale banks, qualifying full banks, and offshore banks.
- Relevant bank employees — directors, senior management, RMs, compliance officers, operational staff with customer-facing or transaction-approval roles.
- Applies to activities conducted from Singapore, including overseas client booking where the SG entity is the legal counterparty.

Private banking divisions within SG-licensed banks fall squarely inside this notice. Foreign banks' PB booking centres in SG are covered to the extent of their SG operations; the home-jurisdiction requirements may also apply in parallel (US FATCA, FINMA rules, etc.).

## Key obligations

- **Customer Due Diligence (CDD)** — identify the customer, verify identity, identify the beneficial owner (UBO — any individual owning ≥ 25% or otherwise exercising effective control), understand the nature / purpose of the relationship, conduct ongoing due diligence through the relationship.
- **Enhanced Due Diligence (EDD)** — additional measures for higher-risk relationships: politically-exposed persons (PEPs, domestic / foreign / international organisation), complex ownership structures, high-risk jurisdictions, large cash transactions, nested relationships, non-face-to-face onboarding with high-risk indicators, and clients with high-risk businesses (e.g. shell trading, virtual assets, certain high-cash sectors). EDD includes senior-management approval for account opening and enhanced ongoing monitoring.
- **Source of Wealth / Source of Funds (SOW / SOF)** — for higher-risk relationships, understand and document the origin of the client's overall wealth and the specific funds being introduced. Corroborate against independent evidence (tax returns, sale contracts, corporate records, public filings) — see [`sow_sof_sanctions.md`](sow_sof_sanctions.md).
- **Sanctions screening** — screen customers and beneficial owners against MAS-published sanctions lists (UN, EU, targeted Singapore lists) and global sanctions (OFAC, EU, UK HMT). Transactional screening for payments and beneficiaries.
- **Ongoing monitoring** — transaction monitoring against customer risk profile and typology red flags; periodic review of customer relationships (risk-rated: high-risk typically annual, medium ~2 years, low ~5 years or trigger-based).
- **Suspicious-transaction reports (STRs)** — file with the Suspicious Transaction Reporting Office (STRO) under CDSA. No minimum threshold; suspicion is the trigger. Tipping-off the customer is a criminal offence.
- **Record-keeping** — retain CDD records for at least 5 years after relationship termination, transaction records for at least 5 years.
- **"Reasonable measures" standard** — much of Notice 626 uses "reasonable measures" rather than prescriptive rules. This is both flexibility and risk — MAS assesses whether a bank's measures were reasonable *in the light of the specific risk*, and post-hoc inadequacy can result in enforcement action even if rules were nominally followed.
- **Internal controls, training, and audit** — designated AML/CFT compliance officer, board-level oversight, staff training, independent audit of the programme.

**Penalty ranges and enforcement tools:**

- Civil penalties up to S$1 million per breach (enhanced by amendments over time).
- Criminal offences under CDSA (tipping-off, structuring to evade) — jail terms possible.
- Licence revocation — BSI (2016), Falcon (2016) — demonstrates MAS will use this.
- Composition amounts for minor breaches.
- Public reprimand / prohibition order against individual bankers.

## Red flags / practical application

Typology red flags an RM / IC should recognise and escalate (not exhaustive):

- **Inconsistent SOW narrative** — client says wealth from "family business" but no documentary support of family business existing / being profitable at the stated scale.
- **Rapid account activity** — large inbound, quick outbound to unrelated parties or geographies.
- **Round-trip transactions** — money moving between client accounts at multiple institutions with no apparent economic purpose.
- **Mismatched profile** — retiree-profile client with high-volume trading activity inconsistent with stated investment intent.
- **Nominee arrangements** — account holder differs from apparent UBO; layered structures with opaque ownership.
- **Tax-evasion typology** — unreported income crossing borders, structures timed around tax-residency changes, unusual use of UHNW-specific structures.
- **Sanctions-adjacent connections** — family members of sanctioned individuals, counterparties in sanctioned jurisdictions (even indirect / trade-routing).
- **Media adverse-information hits** — client or associates appearing in adverse press (corruption, fraud, sanctions, criminal investigation).
- **Refusing to provide documentation** — client resists standard SOW / SOF corroboration; or provides documents that are inconsistent.
- **Abrupt behaviour changes** — previously low-activity account suddenly active; change in instruction-giving parties; pressure to expedite.

**Practical application as an RM / IC:**

- **You are the first line of defence.** Compliance reviews after you; but the frontline detection starts with client conversations.
- **Don't normalise red flags.** A client pressing you to skip documentation isn't "just impatient" — it's a red flag.
- **Escalate early, privately.** Discuss with your team head or compliance before the client conversation gets to a place you can't retreat from.
- **Tipping-off is criminal.** If an STR has been filed or is under consideration, you cannot tell the client. This includes subtle hints ("there may be an issue with your account"). MAS and STRO take tipping-off very seriously.
- **Document all due-diligence steps.** The audit trail is your defence in enforcement.

## Interview questions

### Q1. "What's enhanced due diligence, and what triggers it for a PB client?"

**Answer.** EDD is the additional set of AML measures applied when a client or relationship presents higher risk than standard. Triggers include: politically-exposed person (PEP) status — domestic PEP, foreign PEP, or international-organisation PEP — whether the client themselves or a close family member / close associate; client from or with significant activity in a high-risk jurisdiction per MAS / FATF lists; complex beneficial-ownership structures with multiple layers or nominee arrangements; large cash-based or cash-intensive business; non-face-to-face onboarding with high-risk indicators; clients with business activities in higher-risk sectors — shell companies, trading without obvious economic purpose, virtual assets, certain high-cash sectors. EDD adds: senior-management approval at onboarding, deeper SOW and SOF documentation with independent corroboration, enhanced ongoing monitoring (tighter transaction thresholds, more frequent reviews), and often more senior RM ownership. For a PB client in SG, EDD is often triggered by the combination of high net worth + cross-border structure + politically-prominent family — which is why UHNW PB books are almost by definition EDD-heavy.

### Q2. "A long-standing UHNW client wants to transfer US$20M in from an offshore account. What do you do?"

**Answer.** Even for a long-standing client, a US$20M inbound triggers SOF work. Three steps in parallel. First, ask the client — directly and non-apologetically — about the origin of this specific US$20M. Is it from a completed business sale, an investment exit, an inheritance, sale of a property, a dividend from a family business, liquidation of another account? Get it in his own words; ask for documentation (sale contract, distribution statement, inheritance documentation, tax return). Second, review the sending account: which jurisdiction, which institution, does it match the client's known profile, is the routing consistent with the economic story. Third, internal: run the sanctions screening on the originator, run adverse-media checks, escalate to compliance if any red flag surfaces. If the origin checks out and corroboration is in hand, the inbound is processed with a file memo documenting the review. If anything doesn't check out — specifically, client resistance, inconsistent narrative, unexpected jurisdiction, sanctions-adjacent — I'd escalate before clearing the inbound. The documentation is my protection and the bank's. The client will understand the questioning if we frame it as "standard process for inbounds of this size" — which it is under the MAS posture since 1MDB.

### Q3. "Can you tell a client you've filed an STR?"

**Answer.** No — absolutely not. Tipping-off is a criminal offence under the CDSA (Section 48), punishable by fine and/or imprisonment. The prohibition extends to indicating, directly or indirectly, that an STR has been filed or that a client is under investigation. This includes indirect hints — "there's been some compliance questions about your account" — even well-meaning attempts to be transparent. If a client asks why their account is under review or why a transaction is delayed, the appropriate response is to address the operational matter only, or to escalate the inquiry to compliance. Your job once an STR is filed is to continue normal service as far as operationally possible, while allowing the investigation to proceed. Senior staff members involved in the STR and compliance are informed on a need-to-know basis; RMs outside the handling chain are often intentionally kept unaware to reduce tipping-off risk.

### Q4. "What's COSMIC?"

**Answer.** COSMIC is the MAS-operated platform for Collaborative Sharing of Money Laundering / Terrorism Financing Information and Cases, launched in April 2024. It enables Singapore-licensed financial institutions to share information on specific suspicious customer activity with each other under a structured framework. The problem it addresses: launderers have long exploited the silos between banks by spreading activity across multiple institutions, each of which sees only a partial picture. With COSMIC, a participating bank that identifies a red-flag pattern can flag the customer through the platform; other participating banks holding accounts for the same customer receive a notification and can then conduct their own review. The sharing is governed by a legal framework that preserves client-confidentiality principles while enabling AML cooperation. Initial participants were six major SG banks; expansion and scope refinements are ongoing. For RMs, the practical implication is that a poorly-documented or red-flag client is more likely now to be identified cross-bank — and that cross-bank visibility is a new tool against layering / structuring typologies.

### Q5. "What happens if MAS finds your bank has been weak on AML?"

**Answer.** MAS has a scaled set of enforcement tools. For minor deficiencies — for example a control gap or a late STR — the bank may receive a supervisory letter requiring remediation with reporting back. For systemic failures, MAS can impose civil penalties — up to S$1 million per breach, and fines have been in the tens of millions of Singapore dollars cumulative for major incidents. Senior staff can receive prohibition orders barring them from the industry. For egregious failures — the 1MDB episode is the standing precedent — MAS can revoke the licence entirely, as happened to BSI in 2016 and Falcon shortly after. Individual bankers involved in specific misconduct can face criminal charges under CDSA and related statutes — jail time and fines. Beyond regulatory penalties, the reputational impact is severe: both BSI and Falcon effectively exited the market; clients move to less-implicated peers, talent flees, and brand recovery takes a decade if at all. For me as an RM, the practical implication is that the "cost of compliance" framing is completely wrong — the cost of non-compliance is career-ending and sometimes firm-ending.

---

## Related

- [`pb_code_of_conduct.md`](pb_code_of_conduct.md) — ABS PB Code, the industry-led conduct framework on top of MAS notices.
- [`accredited_investor.md`](accredited_investor.md) — AI / EI classification, which interacts with suitability obligations.
- [`fatca_crs.md`](fatca_crs.md) — parallel tax-reporting regime with overlapping KYC / identity-verification requirements.
- [`sow_sof_sanctions.md`](sow_sof_sanctions.md) — deeper treatment of SOW/SOF corroboration and sanctions screening.
- [`../concepts/wealth_management.md`](../concepts/wealth_management.md) — how suitability under the SFA framework sits alongside AML under Notice 626.
