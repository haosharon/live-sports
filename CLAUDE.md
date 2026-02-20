# Claude Context

## Project Overview
**Live Sports Odds Analyzer** - A PWA that compares traditional sportsbook odds with prediction market probabilities to identify market inefficiencies.

## Core Concept
When Vegas says a team has a 60% chance to win and Polymarket (crowd wisdom) says 70%, there's a divergence worth investigating. This app surfaces those gaps across all major sports.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **PWA**: next-pwa
- **Data Sources**:
  - The Odds API (traditional sportsbooks: FanDuel, DraftKings, BetMGM)
  - Polymarket API (prediction markets - free, no auth)
  - ESPN API (scores, schedules)
- **Optional**: Anthropic Claude API for explaining divergences

## Key Features
1. **Game cards** showing traditional odds vs prediction market probabilities
2. **Divergence highlighting** (games where odds differ by >5%)
3. **Sport filtering** (NFL, NBA, WNBA, MLB, NHL, NWSL, Soccer)
4. **Auto-refresh** every 60 seconds
5. **Mobile-first PWA** (offline support not required for MVP)

## Architecture Decisions

### Why Next.js?
- Built-in API routes (no separate backend needed)
- File-based routing
- Easy Vercel deployment
- Great PWA support

### Why These APIs?
- **The Odds API**: Most comprehensive odds aggregator, has free tier (500 requests/month)
- **Polymarket**: Free public API, no auth required, good sports coverage
- **ESPN**: Reliable for schedules/scores, unofficial but stable

### Data Flow
1. User visits `/games` page
2. Page calls `/api/odds` and `/api/polymarket` 
3. API routes fetch from external APIs (cached for 60 seconds)
4. Game matching logic pairs up same games from different sources
5. Calculate implied probabilities and divergences
6. Display in UI with visual indicators

## Important Implementation Notes

### Game Matching Strategy
The Odds API and Polymarket use different team names/IDs. Match games by:
1. Sport and league
2. Fuzzy match on team names (e.g., "LA Lakers" vs "Los Angeles Lakers")
3. Game time (within 1-hour window)

### Odds Conversion
- American odds (e.g., -200) → Implied probability (66.7%)
- Formula for favorites (negative odds): `|odds| / (|odds| + 100)`
- Formula for underdogs (positive odds): `100 / (odds + 100)`

### Handling Missing Data
- Not all games appear on Polymarket (especially women's sports, less popular games)
- Gracefully show "No prediction market data available"
- Don't fail if one API is down

## API Rate Limits
- **The Odds API**: 500 requests/month (free tier)
- **Polymarket**: Unlimited (public API)
- **ESPN**: Unofficial, be respectful with requests
- **Strategy**: Cache aggressively on the server side (60-second cache)

## Environment Variables
ODDS_API_KEY=your_odds_api_key

ANTHROPIC_API_KEY=your_claude_key (optional)

## MVP Scope (Out of Scope for V1)
- User accounts
- Favorite teams
- Historical tracking
- Push notifications
- Exotic bet types (props, parlays)
- Betting calculator
- Multiple prediction markets comparison

## Design Principles
- **Mobile-first**: 90% of users will be on phones
- **Fast**: Auto-refresh without full page reload
- **Scannable**: Show key divergences at a glance
- **No clutter**: Just odds, probabilities, and divergences
- **Purple accent color** (#8b5cf6) for branding

## File Structure

```
live-sports/
├── app/
│   ├── api/
│   │   ├── odds/route.ts           # Fetch from The Odds API
│   │   ├── polymarket/route.ts     # Fetch from Polymarket
│   │   └── explain/route.ts        # Optional: Claude explanations
│   ├── games/
│   │   └── page.tsx                # Main games list page
│   ├── layout.tsx
│   ├── page.tsx                    # Home (redirects to /games)
│   └── manifest.ts                 # PWA manifest
├── components/
│   ├── GameCard.tsx                # Individual game display
│   ├── GameList.tsx                # Grid of games
│   ├── SportFilter.tsx             # Toggle sports on/off
│   ├── DivergenceIndicator.tsx     # Visual divergence display
│   └── SearchBar.tsx               # Optional: search teams
├── lib/
│   ├── odds-converter.ts           # Convert odds formats
│   ├── game-matcher.ts             # Match games between APIs
│   └── types.ts                    # TypeScript types
└── public/
└── icons/                      # PWA icons
```

## Common Pitfalls to Avoid
1. **Don't hit API rate limits**: Cache responses, test with mock data first
2. **Game matching is tricky**: Build robust fuzzy matching with fallbacks
3. **Handle missing Polymarket data**: Not every game will have prediction market
4. **Time zones**: Normalize everything to UTC before comparing
5. **Odds formats**: Always convert to probabilities for comparison

## Testing Strategy
- Use mock data during development to avoid hitting rate limits
- Test with actual APIs only when features are working
- Test game matching with various team name formats
- Verify divergence calculations manually for a few games
- Test on actual iPhone (not just Chrome dev tools)

## Success Metrics
- Shows games from 5+ sports
- Correctly identifies divergences >5%
- Loads in <2 seconds
- Works offline (shows cached data)
- Mobile PWA installs successfully

## Future Enhancements (Post-MVP)
1. Historical tracking: "When crowd was bullish, they were right X% of the time"
2. Line movement charts
3. Betting calculator (convert divergence to EV)
4. User accounts and favorites
5. Push notifications for big divergences
6. More sports (tennis, MMA, golf)
7. Prop bets and parlays