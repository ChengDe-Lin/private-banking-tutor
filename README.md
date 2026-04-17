# Private Banking Tutor

A personal knowledge base for Singapore private-banking interviews. Primary focus: **PM-Assistant / EAM-Junior roles** (Assistant to Portfolio Manager at an External Asset Manager, reporting to CIO — specifically CW Asset Management as the target firm). Also covers bank-side RM and Investment Counselor interviews as secondary tracks. AI-assisted curation with a 7-day study path, product deep-dives (FCN-centric), issuer-selection discipline, suitability case studies, a behavioural story bank, verified firm briefs, and a filled-in sample-answers reference.

**Live site:** <https://chengde-lin.github.io/private-banking-tutor/>

## Quick Start

**If you are the candidate preparing for the interview:** open **[`INSTALL_FOR_JIAJIA.md`](INSTALL_FOR_JIAJIA.md)** first (how to set up Claude Code with this repo), then **[`START_HERE.md`](START_HERE.md)** — a 7-day plan that walks you through the repo in priority order with specific drills per day.

**For a quick orientation otherwise:** start with **[`roles.md`](roles.md)** to pick your track (RM / IC / PM-Assistant), then **[`study_path.md`](study_path.md)** for the reading schedule.

```bash
# Browse content as a website
cd web && npm install && npm run dev
# then open http://localhost:5173
```

## Directory Structure

```
private-banking-tutor/
├── roles.md               # RM vs IC role distinction — read first to calibrate study emphasis
├── study_path.md          # 7-day study schedule — default ordering
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
