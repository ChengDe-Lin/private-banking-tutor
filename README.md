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
