Refresh `market_view.md` with current market data and views.

## When to run
- Day before an interview.
- Whenever the user has new CIO-deck input to incorporate.
- When the existing `Last reviewed` date in `market_view.md` is > 14 days stale.

## Process

1. Read current `market_view.md`.
2. Prompt the user for current-market data:
   - What's their target bank's CIO house view right now (overweight / neutral / underweight on key asset classes)?
   - Any specific tactical themes being pushed by that CIO office?
   - Current Fed funds target, current DXY, USDSGD, USDJPY levels, gold level, WTI / Brent.
   - Any recent major market events to acknowledge (central-bank decisions, geopolitical, credit events).
3. Offer to fetch current data via WebFetch / WebSearch if available — always cite source and date. Otherwise note that the user must fill in the numbers.
4. Rewrite each paragraph of `market_view.md` with:
   - Current number for each claim.
   - `as of YYYY-MM-DD` date stamp.
   - Source attribution (e.g. "UBS CIO Monthly April 2026", "JPM Guide to the Markets Q2 2026", "my own read").
5. Update the `Last reviewed: YYYY-MM-DD` banner at the top to today's date.
6. Identify **2–3 conviction trades** from the refreshed view that the user could pitch in an interview — with thesis, entry, stop, size rationale.

## Required section coverage (in `market_view.md`)

- Rates (Fed, MAS NEER, regional central banks)
- USD / FX (DXY, majors, Asia)
- Asia equities (China, India, Japan, SEA, Korea)
- Credit (IG, HY, Asian dollar-bond, AT1)
- Gold and commodities
- Key risk themes

## After writing

- Commit message: `docs: refresh market view for YYYY-MM-DD`.
- Flag to the user any claims where the source was "my own read" so the user knows which to double-check before the interview.
