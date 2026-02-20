// Real data from Polymarket Gamma API (series_id=10345, NBA 2026)
// Fetched from: https://gamma-api.polymarket.com/events?series_id=10345&active=true&closed=false&order=startTime&ascending=true
export const mockPolymarketResponse = [
  {
    "id": "207665",
    "ticker": "nba-hou-cha-2026-02-19",
    "slug": "nba-hou-cha-2026-02-19",
    "title": "Rockets vs. Hornets",
    "description": "In the upcoming NBA game, scheduled for February 19 at 7:00PM ET:\nIf the Rockets win, the market will resolve to \"Rockets\".\nIf the Hornets win, the market will resolve to \"Hornets\".",
    "startDate": "2026-02-13T15:05:48.427593Z",
    "endDate": "2026-02-20T00:00:00Z",
    "active": true,
    "closed": false,
    "volume": 4603519.800048,
    "teams": {
      "home": "Charlotte Hornets",
      "away": "Houston Rockets"
    },
    "outcome_prices": {
      "Houston Rockets": 0.9995,       // 99.95% probability
      "Charlotte Hornets": 0.0005      // 0.05% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "1372830",
        "question": "Rockets vs. Hornets",
        "outcomes": "[\"Rockets\", \"Hornets\"]",
        "outcomePrices": "[\"0.9995\", \"0.0005\"]",
        "volume": "3356555.208773",
        "active": true,
        "closed": false
      }
    ]
  },
  {
    "id": "207695",
    "ticker": "nba-bos-gsw-2026-02-19",
    "slug": "nba-bos-gsw-2026-02-19",
    "title": "Celtics vs. Warriors",
    "description": "In the upcoming NBA game, scheduled for February 19 at 10:00PM ET:\nIf the Celtics win, the market will resolve to \"Celtics\".\nIf the Warriors win, the market will resolve to \"Warriors\".",
    "startDate": "2026-02-13T15:05:48.451552Z",
    "endDate": "2026-02-20T03:00:00Z",
    "active": true,
    "closed": false,
    "volume": 3507386.181882,
    "teams": {
      "home": "Golden State Warriors",
      "away": "Boston Celtics"
    },
    "outcome_prices": {
      "Boston Celtics": 0.9995,         // 99.95% probability
      "Golden State Warriors": 0.0005   // 0.05% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "1372910",
        "question": "Celtics vs. Warriors",
        "outcomes": "[\"Celtics\", \"Warriors\"]",
        "outcomePrices": "[\"0.9995\", \"0.0005\"]",
        "volume": "2534019.632023",
        "active": true,
        "closed": false
      }
    ]
  },
  {
    "id": "207702",
    "ticker": "nba-den-lac-2026-02-19",
    "slug": "nba-den-lac-2026-02-19",
    "title": "Nuggets vs. Clippers",
    "description": "In the upcoming NBA game, scheduled for February 19 at 10:30PM ET:\nIf the Nuggets win, the market will resolve to \"Nuggets\".\nIf the Clippers win, the market will resolve to \"Clippers\".",
    "startDate": "2026-02-13T15:08:04.112333Z",
    "endDate": "2026-02-20T03:30:00Z",
    "active": true,
    "closed": false,
    "volume": 3391744.228513,
    "teams": {
      "home": "Los Angeles Clippers",
      "away": "Denver Nuggets"
    },
    "outcome_prices": {
      "Denver Nuggets": 0.7095,         // 70.95% probability
      "Los Angeles Clippers": 0.2905    // 29.05% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "1372924",
        "question": "Nuggets vs. Clippers",
        "outcomes": "[\"Nuggets\", \"Clippers\"]",
        "outcomePrices": "[\"0.7095\", \"0.2905\"]",
        "volume": "2082687.487419",
        "active": true,
        "closed": false
      }
    ]
  },
  {
    "id": "208992",
    "ticker": "nba-uta-mem-2026-02-20",
    "slug": "nba-uta-mem-2026-02-20",
    "title": "Jazz vs. Grizzlies",
    "description": "In the upcoming NBA game, scheduled for February 20 at 7:00PM ET:\nIf the Jazz win, the market will resolve to \"Jazz\".\nIf the Grizzlies win, the market will resolve to \"Grizzlies\".",
    "startDate": "2026-02-14T15:03:27.790588Z",
    "endDate": "2026-02-21T00:00:00Z",
    "active": true,
    "closed": false,
    "volume": 432874.386568,
    "teams": {
      "home": "Memphis Grizzlies",
      "away": "Utah Jazz"
    },
    "outcome_prices": {
      "Utah Jazz": 0.455,              // 45.5% probability
      "Memphis Grizzlies": 0.545       // 54.5% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "1377029",
        "question": "Jazz vs. Grizzlies",
        "outcomes": "[\"Jazz\", \"Grizzlies\"]",
        "outcomePrices": "[\"0.455\", \"0.545\"]",
        "volume": "406613.747964",
        "active": true,
        "closed": false
      }
    ]
  },
  {
    "id": "208983",
    "ticker": "nba-cle-cha-2026-02-20",
    "slug": "nba-cle-cha-2026-02-20",
    "title": "Cavaliers vs. Hornets",
    "description": "In the upcoming NBA game, scheduled for February 20 at 7:00PM ET:\nIf the Cavaliers win, the market will resolve to \"Cavaliers\".\nIf the Hornets win, the market will resolve to \"Hornets\".",
    "startDate": "2026-02-14T15:03:27.783518Z",
    "endDate": "2026-02-21T00:00:00Z",
    "active": true,
    "closed": false,
    "volume": 48837.865753,
    "teams": {
      "home": "Charlotte Hornets",
      "away": "Cleveland Cavaliers"
    },
    "outcome_prices": {
      "Cleveland Cavaliers": 0.655,    // 65.5% probability
      "Charlotte Hornets": 0.345       // 34.5% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "1377021",
        "question": "Cavaliers vs. Hornets",
        "outcomes": "[\"Cavaliers\", \"Hornets\"]",
        "outcomePrices": "[\"0.655\", \"0.345\"]",
        "volume": "47650.241628",
        "active": true,
        "closed": false
      }
    ]
  },
  {
    "id": "208988",
    "ticker": "nba-ind-was-2026-02-20",
    "slug": "nba-ind-was-2026-02-20",
    "title": "Pacers vs. Wizards",
    "description": "In the upcoming NBA game, scheduled for February 20 at 7:00PM ET:\nIf the Pacers win, the market will resolve to \"Pacers\".\nIf the Wizards win, the market will resolve to \"Wizards\".",
    "startDate": "2026-02-14T15:03:27.792057Z",
    "endDate": "2026-02-21T00:00:00Z",
    "active": true,
    "closed": false,
    "volume": 192967.871627,
    "teams": {
      "home": "Washington Wizards",
      "away": "Indiana Pacers"
    },
    "outcome_prices": {
      "Indiana Pacers": 0.53,          // 53% probability
      "Washington Wizards": 0.47       // 47% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "1377024",
        "question": "Pacers vs. Wizards",
        "outcomes": "[\"Pacers\", \"Wizards\"]",
        "outcomePrices": "[\"0.53\", \"0.47\"]",
        "volume": "79146.028681",
        "active": true,
        "closed": false
      }
    ]
  },
  {
    "id": "208995",
    "ticker": "nba-mia-atl-2026-02-20",
    "slug": "nba-mia-atl-2026-02-20",
    "title": "Heat vs. Hawks",
    "description": "In the upcoming NBA game, scheduled for February 20 at 7:30PM ET:\nIf the Heat win, the market will resolve to \"Heat\".\nIf the Hawks win, the market will resolve to \"Hawks\".",
    "startDate": "2026-02-14T15:03:27.78533Z",
    "endDate": "2026-02-21T00:30:00Z",
    "active": true,
    "closed": false,
    "volume": 74063.665403,
    "teams": {
      "home": "Atlanta Hawks",
      "away": "Miami Heat"
    },
    "outcome_prices": {
      "Miami Heat": 0.575,             // 57.5% probability
      "Atlanta Hawks": 0.425           // 42.5% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "1377032",
        "question": "Heat vs. Hawks",
        "outcomes": "[\"Heat\", \"Hawks\"]",
        "outcomePrices": "[\"0.575\", \"0.425\"]",
        "volume": "73573.188741",
        "active": true,
        "closed": false
      }
    ]
  },
  {
    "id": "208998",
    "ticker": "nba-dal-min-2026-02-20",
    "slug": "nba-dal-min-2026-02-20",
    "title": "Mavericks vs. Timberwolves",
    "description": "In the upcoming NBA game, scheduled for February 20 at 7:30PM ET:\nIf the Mavericks win, the market will resolve to \"Mavericks\".\nIf the Timberwolves win, the market will resolve to \"Timberwolves\".",
    "startDate": "2026-02-14T15:03:27.780277Z",
    "endDate": "2026-02-21T00:30:00Z",
    "active": true,
    "closed": false,
    "volume": 156287.32466,
    "teams": {
      "home": "Minnesota Timberwolves",
      "away": "Dallas Mavericks"
    },
    "outcome_prices": {
      "Dallas Mavericks": 0.155,       // 15.5% probability
      "Minnesota Timberwolves": 0.845  // 84.5% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "1377036",
        "question": "Mavericks vs. Timberwolves",
        "outcomes": "[\"Mavericks\", \"Timberwolves\"]",
        "outcomePrices": "[\"0.155\", \"0.845\"]",
        "volume": "150926.916543",
        "active": true,
        "closed": false
      }
    ]
  },
  {
    "id": "209001",
    "ticker": "nba-mil-nop-2026-02-20",
    "slug": "nba-mil-nop-2026-02-20",
    "title": "Bucks vs. Pelicans",
    "description": "In the upcoming NBA game, scheduled for February 20 at 8:00PM ET:\nIf the Bucks win, the market will resolve to \"Bucks\".\nIf the Pelicans win, the market will resolve to \"Pelicans\".",
    "startDate": "2026-02-14T15:03:27.769584Z",
    "endDate": "2026-02-21T01:00:00Z",
    "active": true,
    "closed": false,
    "volume": 139589.937028,
    "teams": {
      "home": "New Orleans Pelicans",
      "away": "Milwaukee Bucks"
    },
    "outcome_prices": {
      "Milwaukee Bucks": 0.385,        // 38.5% probability
      "New Orleans Pelicans": 0.615    // 61.5% probability
    } as Record<string, number>,
    "markets": [
      {
        "id": "1377039",
        "question": "Bucks vs. Pelicans",
        "outcomes": "[\"Bucks\", \"Pelicans\"]",
        "outcomePrices": "[\"0.385\", \"0.615\"]",
        "volume": "129788.513429",
        "active": true,
        "closed": false
      }
    ]
  }
];

export type PolymarketResponse = typeof mockPolymarketResponse;
export type PolymarketGame = typeof mockPolymarketResponse[0];
