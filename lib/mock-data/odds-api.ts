// Real data from The Odds API for testing
export const mockOddsApiResponse = [
  {
    "id": "97031eee2ea39d890bf5046a1c57c7a7",
    "sport_key": "basketball_nba",
    "sport_title": "NBA",
    "commence_time": "2026-02-20T00:11:00Z",
    "home_team": "Charlotte Hornets",
    "away_team": "Houston Rockets",
    "bookmakers": [
      {
        "key": "fanduel",
        "title": "FanDuel",
        "last_update": "2026-02-20T02:11:10Z",
        "markets": [
          {
            "key": "h2h",
            "last_update": "2026-02-20T02:11:10Z",
            "outcomes": [
              { "name": "Charlotte Hornets", "price": 8.5 },
              { "name": "Houston Rockets", "price": 1.06 }
            ]
          }
        ]
      },
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2026-02-20T02:10:39Z",
        "markets": [
          {
            "key": "h2h",
            "last_update": "2026-02-20T02:10:39Z",
            "outcomes": [
              { "name": "Charlotte Hornets", "price": 7.5 },
              { "name": "Houston Rockets", "price": 1.09 }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "7bb1dc8e7e0b6a77195533729951d187",
    "sport_key": "basketball_nba",
    "sport_title": "NBA",
    "commence_time": "2026-02-20T03:10:00Z",
    "home_team": "Golden State Warriors",
    "away_team": "Boston Celtics",
    "bookmakers": [
      {
        "key": "fanduel",
        "title": "FanDuel",
        "last_update": "2026-02-20T02:11:10Z",
        "markets": [
          {
            "key": "h2h",
            "last_update": "2026-02-20T02:11:10Z",
            "outcomes": [
              { "name": "Boston Celtics", "price": 1.4 },
              { "name": "Golden State Warriors", "price": 3.05 }
            ]
          }
        ]
      },
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2026-02-20T02:10:39Z",
        "markets": [
          {
            "key": "h2h",
            "last_update": "2026-02-20T02:10:39Z",
            "outcomes": [
              { "name": "Boston Celtics", "price": 1.43 },
              { "name": "Golden State Warriors", "price": 2.9 }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "13c088a4f279e674bf80e4cb06d231a9",
    "sport_key": "basketball_nba",
    "sport_title": "NBA",
    "commence_time": "2026-02-20T03:40:00Z",
    "home_team": "Los Angeles Clippers",
    "away_team": "Denver Nuggets",
    "bookmakers": [
      {
        "key": "fanduel",
        "title": "FanDuel",
        "last_update": "2026-02-20T02:11:10Z",
        "markets": [
          {
            "key": "h2h",
            "last_update": "2026-02-20T02:11:10Z",
            "outcomes": [
              { "name": "Denver Nuggets", "price": 1.54 },
              { "name": "Los Angeles Clippers", "price": 2.56 }
            ]
          }
        ]
      },
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2026-02-20T02:10:39Z",
        "markets": [
          {
            "key": "h2h",
            "last_update": "2026-02-20T02:10:39Z",
            "outcomes": [
              { "name": "Denver Nuggets", "price": 1.56 },
              { "name": "Los Angeles Clippers", "price": 2.5 }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "f0c5e19ea41dbbe28f060e1fa9b20628",
    "sport_key": "basketball_nba",
    "sport_title": "NBA",
    "commence_time": "2026-02-21T03:10:00Z",
    "home_team": "Los Angeles Lakers",
    "away_team": "Los Angeles Clippers",
    "bookmakers": [
      {
        "key": "fanduel",
        "title": "FanDuel",
        "last_update": "2026-02-20T02:11:10Z",
        "markets": [
          {
            "key": "h2h",
            "last_update": "2026-02-20T02:11:10Z",
            "outcomes": [
              { "name": "Los Angeles Clippers", "price": 3.05 },
              { "name": "Los Angeles Lakers", "price": 1.4 }
            ]
          }
        ]
      },
      {
        "key": "draftkings",
        "title": "DraftKings",
        "last_update": "2026-02-20T02:10:39Z",
        "markets": [
          {
            "key": "h2h",
            "last_update": "2026-02-20T02:10:39Z",
            "outcomes": [
              { "name": "Los Angeles Clippers", "price": 3.05 },
              { "name": "Los Angeles Lakers", "price": 1.4 }
            ]
          }
        ]
      }
    ]
  }
];

export type OddsApiResponse = typeof mockOddsApiResponse;
export type OddsApiGame = typeof mockOddsApiResponse[0];