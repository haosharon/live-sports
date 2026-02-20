// Real Polymarket API data structure
export const mockPolymarketResponse = [
  {
    "id": "53055",
    "ticker": "nba-atl-hou-2025-10-06",
    "slug": "nba-atl-hou-2025-10-06",
    "title": "Hawks vs. Rockets",
    "description": "In the upcoming NBA game, scheduled for October 6 at 8:00PM ET:\nIf the Hawks win, the market will resolve to \"Hawks\".\nIf the Rockets win, the market will resolve to \"Rockets\".",
    "startDate": "2025-10-02T14:50:11.354318Z",
    "endDate": "2025-10-07T00:00:00Z",
    "active": true,
    "closed": true,
    "volume": 200775.779143,
    "teams": {
      "home": "Houston Rockets",
      "away": "Atlanta Hawks"
    },
    "outcome_prices": {
      "Houston Rockets": 0.88,  // 88% probability
      "Atlanta Hawks": 0.12     // 12% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "619835",
        "question": "Hawks vs. Rockets",
        "outcomes": "[\"Hawks\", \"Rockets\"]",
        "outcomePrices": "[\"0\", \"1\"]",
        "volume": "191518.307103",
        "active": true,
        "closed": true
      }
    ]
  },
  {
    "id": "55319",
    "ticker": "nba-min-nyk-2025-10-09",
    "slug": "nba-min-nyk-2025-10-09",
    "title": "Timberwolves vs. Knicks",
    "description": "In the upcoming NBA game, scheduled for October 9 at 7:30PM ET:\nIf the Timberwolves win, the market will resolve to \"Timberwolves\".\nIf the Knicks win, the market will resolve to \"Knicks\".",
    "startDate": "2025-10-07T00:05:27.885516Z",
    "endDate": "2025-10-09T23:30:00Z",
    "active": true,
    "closed": true,
    "volume": 198003.06387,
    "teams": {
      "home": "New York Knicks",
      "away": "Minnesota Timberwolves"
    },
    "outcome_prices": {
      "New York Knicks": 0.72,      // 72% probability - crowd bullish on Knicks
      "Minnesota Timberwolves": 0.28  // 28% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "624297",
        "question": "Timberwolves vs. Knicks",
        "outcomes": "[\"Timberwolves\", \"Knicks\"]",
        "outcomePrices": "[\"0\", \"1\"]",
        "volume": "179561.140407",
        "active": true,
        "closed": true
      }
    ]
  },
  {
    "id": "54715",
    "ticker": "nba-bos-mem-2025-10-08",
    "slug": "nba-bos-mem-2025-10-08",
    "title": "Celtics vs. Grizzlies",
    "description": "In the upcoming NBA game, scheduled for October 8 at 8:00PM ET:\nIf the Celtics win, the market will resolve to \"Celtics\".\nIf the Grizzlies win, the market will resolve to \"Grizzlies\".",
    "startDate": "2025-10-06T00:03:34.412479Z",
    "endDate": "2025-10-09T00:00:00Z",
    "active": true,
    "closed": true,
    "volume": 259074.246613,
    "teams": {
      "home": "Memphis Grizzlies",
      "away": "Boston Celtics"
    },
    "outcome_prices": {
      "Boston Celtics": 0.85,     // 85% probability - crowd very confident in Celtics
      "Memphis Grizzlies": 0.15   // 15% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "622861",
        "question": "Celtics vs. Grizzlies",
        "outcomes": "[\"Celtics\", \"Grizzlies\"]",
        "outcomePrices": "[\"1\", \"0\"]",
        "volume": "259069.246613",
        "active": true,
        "closed": true
      }
    ]
  },
  {
    "id": "54738",
    "ticker": "nba-por-gsw-2025-10-08",
    "slug": "nba-por-gsw-2025-10-08",
    "title": "Trail Blazers vs. Warriors",
    "description": "In the upcoming NBA game, scheduled for October 8 at 10:00PM ET:\nIf the Trail Blazers win, the market will resolve to \"Trail Blazers\".\nIf the Warriors win, the market will resolve to \"Warriors\".",
    "startDate": "2025-10-06T02:01:19.065524Z",
    "endDate": "2025-10-09T02:00:00Z",
    "active": true,
    "closed": true,
    "volume": 160364.390805,
    "teams": {
      "home": "Golden State Warriors",
      "away": "Portland Trail Blazers"
    },
    "outcome_prices": {
      "Golden State Warriors": 0.78,   // 78% probability
      "Portland Trail Blazers": 0.22   // 22% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "622884",
        "question": "Trail Blazers vs. Warriors",
        "outcomes": "[\"Trail Blazers\", \"Warriors\"]",
        "outcomePrices": "[\"0\", \"1\"]",
        "volume": "157925.973629",
        "active": true,
        "closed": true
      }
    ]
  }
];

export type PolymarketResponse = typeof mockPolymarketResponse;
export type PolymarketGame = typeof mockPolymarketResponse[0];