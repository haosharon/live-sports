# Development Plan

## Timeline: 4-4.5 hours

## Phase 1: Basic Setup (30 min)
**Status**: COMPLETED

### 1.1 Initial Setup (10 min)
- [x] Create Next.js app with TypeScript
- [x] Install dependencies (next-pwa, swr, lucide-react)
```
  npm install next-pwa swr lucide-react
```
- [x] Test dev server runs (`npm run dev`)

### 1.2 Deploy to Vercel (10 min)
- [x] Push current code to GitHub
- [x] Go to vercel.com and connect GitHub repo
- [x] Deploy (takes ~2 min)
- [x] Test production URL on phone
- [x] **Why now?**: Continuous deployment = see changes on real phone immediately

### 1.3 Get API Keys (10 min)
- [x] Sign up at https://the-odds-api.com/ → Get API key
- [ ] (Optional) Sign up at https://console.anthropic.com/ → Get Claude API key
- [x] Create `.env.local` file in project root:
```
ODDS_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here
```
- [x] Add same keys to Vercel dashboard (Settings → Environment Variables)
- [ ] **Note**: Polymarket API needs no key!

## Phase 2: Explore APIs & Create Mock Data (45 min)
**Status**: NOT STARTED

### 2.1 Explore The Odds API (15 min)
- [ ] Read docs: https://the-odds-api.com/liveapi/guides/v4/
- [ ] Test endpoint in browser or Postman:
```
https://api.the-odds-api.com/v4/sports/basketball_nba/odds?apiKey=YOUR_KEY&regions=us&markets=h2h
```
- [ ] Save a few real responses to understand data shape
- [ ] **Goal**: Understand what fields are available, team name formats

### 2.2 Explore Polymarket API (15 min)
- [ ] Read docs: https://docs.polymarket.com/quickstart/fetching-data
- [ ] Test endpoint in browser:
```
https://gamma-api.polymarket.com/events?series_id=10345&active=true
```
- [ ] Save a few real responses
- [ ] **Goal**: Understand data structure, how to find sports games

### 2.3 Create Mock Data File (15 min)
- [ ] Create `lib/mock-data.ts`
- [ ] Add 3-4 fake games with realistic data structure
- [ ] Include both traditional odds and prediction market probabilities
- [ ] Include a game with big divergence, one with small divergence
- [ ] **Why**: Avoid hitting API rate limits during UI development

**Example mock data structure:**
```
export const mockGames = [
  {
    id: '1',
    sport: 'NBA',
    homeTeam: 'Lakers',
    awayTeam: 'Warriors',
    gameTime: '2024-02-20T19:00:00Z',
    vegasOdds: -200, // Lakers favored
    vegasProbability: 0.667,
    polymarketProbability: 0.58,
    divergence: 0.087, // 8.7% difference
  },
  // ... more games
];
```

## Phase 3: Barebones UI with Mock Data (45 min)
**Status**: NOT STARTED

### 3.1 Define Types (10 min)
- [ ] Create `lib/types.ts`
- [ ] Define Game, Odds, and other interfaces based on mock data
- [ ] Export types for use in components

### 3.2 Create Basic GameCard Component (20 min)
- [ ] Create `components/GameCard.tsx`
- [ ] Just show: teams, time, Vegas odds, Polymarket %, divergence
- [ ] No fancy styling yet - just get the data on screen
- [ ] Use Tailwind for basic layout (card, flex, text sizes)

### 3.3 Create Simple List Page (15 min)
- [ ] Edit `app/page.tsx`
- [ ] Import mockGames
- [ ] Map over games, render GameCard for each
- [ ] Deploy to Vercel
- [ ] **Check on phone**: Does it look okay? Is data readable?

**Goal**: Validate the data structure makes sense before building real API integration

## Phase 4: PWA Setup (20 min)
**Status**: COMPLETED

- [x] Configure `next.config.js` with next-pwa
```javascript
  const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  });

  module.exports = withPWA({
    reactStrictMode: true,
  });
```
- [x] Create `app/manifest.ts` (basic config)
- [ ] Add placeholder icons to `public/icons/`
- [x] Deploy and test "Add to Home Screen" on iPhone
- [x] **Why now**: See real mobile experience early, informs remaining design

## Phase 5: Build Data Layer / Backend (60 min)
**Status**: NOT STARTED

**Why we need backend API routes:**
- ✅ Server-side caching (respect API rate limits)
- ✅ Hide API keys (can't expose in client-side code)
- ✅ No CORS issues
- ✅ Can process/transform data before sending to client
- ✅ Next.js makes this trivial (just create route.ts files)

### 5.1 Create Utility Functions (20 min)
- [ ] `lib/odds-converter.ts`: Convert American odds → probability
- [ ] `lib/game-matcher.ts`: Match games between APIs (fuzzy team name matching)
- [ ] Test functions with mock data

### 5.2 Build API Routes (40 min)
- [ ] `app/api/odds/route.ts`:
  - Fetch from The Odds API
  - Cache response for 60 seconds (use simple in-memory cache)
  - Return formatted data
  - Handle errors
  
- [ ] `app/api/polymarket/route.ts`:
  - Fetch from Polymarket
  - Parse and normalize data
  - Cache for 60 seconds
  - Handle errors

- [ ] Test both endpoints in browser: `/api/odds`, `/api/polymarket`
- [ ] Replace mock data in frontend with real API calls

## Phase 6: Polish UI Components (45 min)
**Status**: NOT STARTED

### 3.1 Basic Components (30 min)
- [ ] `components/GameCard.tsx`:
  - Display team names, time, sport
  - Show Vegas odds with implied probability
  - Show Polymarket probability with visual bar
  - Divergence indicator (color-coded)
  - Expand/collapse for details
  
- [ ] `components/SportFilter.tsx`:
  - Checkboxes for each sport (NFL, NBA, etc.)
  - Apply filters to game list

### 3.2 Layout Components (30 min)
- [ ] `components/GameList.tsx`:
  - Grid of GameCard components
  - Sort by divergence or time
  - Loading states
  - Empty states
  
- [ ] `components/DivergenceIndicator.tsx`:
  - Visual representation of probability gap
  - Color coding (green = crowd bullish, blue = Vegas bullish)

## Phase 4: Main Page (30 min)
**Status**: NOT STARTED

- [ ] `app/games/page.tsx`:
  - Fetch from both API endpoints
  - Match games using game-matcher utility
  - Calculate divergences
  - Pass to GameList component
  - Handle loading/error states
  - Auto-refresh every 60 seconds (use SWR)

- [ ] `app/page.tsx`: Redirect to `/games`

## Phase 5: PWA Configuration (30 min)
**Status**: NOT STARTED

- [ ] Configure `next.config.js` for PWA
- [ ] Create `app/manifest.ts`:
  - App name, description
  - Purple theme color
  - Icons (use placeholders initially)
  - Display: standalone
  
- [ ] Test "Add to Home Screen" on iPhone
- [ ] Configure offline fallback

## Phase 6: Polish & Testing (30 min)
**STATUS**: NOT STARTED

- [ ] Responsive design check (mobile, tablet, desktop)
- [ ] Loading states look good
- [ ] Error handling works
- [ ] Divergence calculations are correct (manually verify a few)
- [ ] Filters work properly
- [ ] Auto-refresh doesn't break anything

## Phase 7: Deploy (15 min)
**STATUS**: NOT STARTED

- [ ] Push to GitHub
- [ ] Connect repo to Vercel
- [ ] Add environment variables in Vercel dashboard
- [ ] Deploy
- [ ] Test production build on mobile
- [ ] Verify PWA installation works

## Phase 8 (Optional): AI Explanations (30 min)
**STATUS**: NOT STARTED

If time permits:
- [ ] `app/api/explain/route.ts`: Call Claude API with game context
- [ ] Add "Explain" button to GameCard
- [ ] Show explanation in modal or expandable section

---

## Current Blockers
None

## Next Steps
Start Phase 2: Build the data layer utilities and API routes

## Notes
- Keep The Odds API calls minimal during development (500/month limit)
- Consider creating mock data file for development
- Test game matching logic thoroughly before moving to UI