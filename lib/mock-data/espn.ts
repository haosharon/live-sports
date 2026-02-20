// Real data from ESPN Scoreboard API (NBA 2026)
// Fetched from: http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20260219-20260226
export const mockEspnResponse = [
  {
    "id": "401810647",
    "date": "2026-02-20T00:00Z",
    "name": "Houston Rockets at Charlotte Hornets",
    "shortName": "HOU @ CHA",
    "status": {
      "clock": 720.0,
      "displayClock": "12:00",
      "period": 4,
      "type": {
        "id": "3",
        "name": "STATUS_FINAL",
        "state": "post",
        "completed": true,
        "description": "Final",
        "detail": "Final",
        "shortDetail": "Final"
      }
    },
    "competitions": [
      {
        "id": "401810647",
        "date": "2026-02-20T00:00Z",
        "attendance": 19622,
        "venue": {
          "id": "1893",
          "fullName": "Spectrum Center",
          "address": {
            "city": "Charlotte",
            "state": "NC"
          }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "30",
              "displayName": "Charlotte Hornets",
              "abbreviation": "CHA",
              "name": "Hornets",
              "location": "Charlotte",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/cha.png",
              "color": "008ca8"
            },
            "score": "101",
            "winner": false
          },
          {
            "homeAway": "away",
            "team": {
              "id": "10",
              "displayName": "Houston Rockets",
              "abbreviation": "HOU",
              "name": "Rockets",
              "location": "Houston",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/hou.png",
              "color": "ce1141"
            },
            "score": "105",
            "winner": true
          }
        ]
      }
    ]
  },
  {
    "id": "401810648",
    "date": "2026-02-20T00:00Z",
    "name": "Brooklyn Nets at Cleveland Cavaliers",
    "shortName": "BKN @ CLE",
    "status": {
      "clock": 720.0,
      "displayClock": "12:00",
      "period": 4,
      "type": {
        "id": "3",
        "name": "STATUS_FINAL",
        "state": "post",
        "completed": true,
        "description": "Final",
        "detail": "Final",
        "shortDetail": "Final"
      }
    },
    "competitions": [
      {
        "id": "401810648",
        "date": "2026-02-20T00:00Z",
        "attendance": 19432,
        "venue": {
          "id": "3417",
          "fullName": "Rocket Arena",
          "address": {
            "city": "Cleveland",
            "state": "OH"
          }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "5",
              "displayName": "Cleveland Cavaliers",
              "abbreviation": "CLE",
              "name": "Cavaliers",
              "location": "Cleveland",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/cle.png",
              "color": "860038"
            },
            "score": "112",
            "winner": true
          },
          {
            "homeAway": "away",
            "team": {
              "id": "17",
              "displayName": "Brooklyn Nets",
              "abbreviation": "BKN",
              "name": "Nets",
              "location": "Brooklyn",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/bkn.png",
              "color": "000000"
            },
            "score": "84",
            "winner": false
          }
        ]
      }
    ]
  },
  {
    "id": "401810649",
    "date": "2026-02-20T00:00Z",
    "name": "Atlanta Hawks at Philadelphia 76ers",
    "shortName": "ATL @ PHI",
    "status": {
      "clock": 720.0,
      "displayClock": "12:00",
      "period": 4,
      "type": {
        "id": "3",
        "name": "STATUS_FINAL",
        "state": "post",
        "completed": true,
        "description": "Final",
        "detail": "Final",
        "shortDetail": "Final"
      }
    },
    "competitions": [
      {
        "id": "401810649",
        "date": "2026-02-20T00:00Z",
        "attendance": 19746,
        "venue": {
          "id": "1845",
          "fullName": "Xfinity Mobile Arena",
          "address": {
            "city": "Philadelphia",
            "state": "PA"
          }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "20",
              "displayName": "Philadelphia 76ers",
              "abbreviation": "PHI",
              "name": "76ers",
              "location": "Philadelphia",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/phi.png",
              "color": "1d428a"
            },
            "score": "107",
            "winner": false
          },
          {
            "homeAway": "away",
            "team": {
              "id": "1",
              "displayName": "Atlanta Hawks",
              "abbreviation": "ATL",
              "name": "Hawks",
              "location": "Atlanta",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/atl.png",
              "color": "c8102e"
            },
            "score": "117",
            "winner": true
          }
        ]
      }
    ]
  },
  {
    "id": "401810650",
    "date": "2026-02-20T00:00Z",
    "name": "Indiana Pacers at Washington Wizards",
    "shortName": "IND @ WSH",
    "status": {
      "clock": 720.0,
      "displayClock": "12:00",
      "period": 4,
      "type": {
        "id": "3",
        "name": "STATUS_FINAL",
        "state": "post",
        "completed": true,
        "description": "Final",
        "detail": "Final",
        "shortDetail": "Final"
      }
    },
    "competitions": [
      {
        "id": "401810650",
        "date": "2026-02-20T00:00Z",
        "attendance": 14602,
        "venue": {
          "id": "1823",
          "fullName": "Capital One Arena",
          "address": {
            "city": "Washington",
            "state": "DC"
          }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "27",
              "displayName": "Washington Wizards",
              "abbreviation": "WSH",
              "name": "Wizards",
              "location": "Washington",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/wsh.png",
              "color": "e31837"
            },
            "score": "112",
            "winner": true
          },
          {
            "homeAway": "away",
            "team": {
              "id": "11",
              "displayName": "Indiana Pacers",
              "abbreviation": "IND",
              "name": "Pacers",
              "location": "Indiana",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/ind.png",
              "color": "0c2340"
            },
            "score": "105",
            "winner": false
          }
        ]
      }
    ]
  },
  {
    "id": "401810651",
    "date": "2026-02-20T00:30Z",
    "name": "Detroit Pistons at New York Knicks",
    "shortName": "DET @ NY",
    "status": {
      "clock": 720.0,
      "displayClock": "12:00",
      "period": 4,
      "type": {
        "id": "3",
        "name": "STATUS_FINAL",
        "state": "post",
        "completed": true,
        "description": "Final",
        "detail": "Final",
        "shortDetail": "Final"
      }
    },
    "competitions": [
      {
        "id": "401810651",
        "date": "2026-02-20T00:30Z",
        "attendance": 19812,
        "venue": {
          "id": "1830",
          "fullName": "Madison Square Garden",
          "address": {
            "city": "New York",
            "state": "NY"
          }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "18",
              "displayName": "New York Knicks",
              "abbreviation": "NY",
              "name": "Knicks",
              "location": "New York",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/ny.png",
              "color": "1d428a"
            },
            "score": "111",
            "winner": false
          },
          {
            "homeAway": "away",
            "team": {
              "id": "8",
              "displayName": "Detroit Pistons",
              "abbreviation": "DET",
              "name": "Pistons",
              "location": "Detroit",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/det.png",
              "color": "1d428a"
            },
            "score": "126",
            "winner": true
          }
        ]
      }
    ]
  },
  {
    "id": "401810654",
    "date": "2026-02-20T03:00Z",
    "name": "Boston Celtics at Golden State Warriors",
    "shortName": "BOS @ GS",
    "status": {
      "clock": 0.0,
      "displayClock": "0.0",
      "period": 4,
      "type": {
        "id": "3",
        "name": "STATUS_FINAL",
        "state": "post",
        "completed": true,
        "description": "Final",
        "detail": "Final",
        "shortDetail": "Final"
      }
    },
    "competitions": [
      {
        "id": "401810654",
        "date": "2026-02-20T03:00Z",
        "attendance": 18064,
        "venue": {
          "id": "6270",
          "fullName": "Chase Center",
          "address": {
            "city": "San Francisco",
            "state": "CA"
          }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "9",
              "displayName": "Golden State Warriors",
              "abbreviation": "GS",
              "name": "Warriors",
              "location": "Golden State",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/gs.png",
              "color": "fdb927"
            },
            "score": "110",
            "winner": false
          },
          {
            "homeAway": "away",
            "team": {
              "id": "2",
              "displayName": "Boston Celtics",
              "abbreviation": "BOS",
              "name": "Celtics",
              "location": "Boston",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/bos.png",
              "color": "008348"
            },
            "score": "121",
            "winner": true
          }
        ]
      }
    ]
  },
  {
    "id": "401810656",
    "date": "2026-02-20T03:30Z",
    "name": "Denver Nuggets at LA Clippers",
    "shortName": "DEN @ LAC",
    "status": {
      "clock": 362.0,
      "displayClock": "6:02",
      "period": 4,
      "type": {
        "id": "2",
        "name": "STATUS_IN_PROGRESS",
        "state": "in",
        "completed": false,
        "description": "In Progress",
        "detail": "6:02 - 4th Quarter",
        "shortDetail": "6:02 - 4th"
      }
    },
    "competitions": [
      {
        "id": "401810656",
        "date": "2026-02-20T03:30Z",
        "attendance": 17927,
        "venue": {
          "id": "10642",
          "fullName": "Intuit Dome",
          "address": {
            "city": "Inglewood",
            "state": "CA"
          }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "12",
              "displayName": "LA Clippers",
              "abbreviation": "LAC",
              "name": "Clippers",
              "location": "LA",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/lac.png",
              "color": "12173f"
            },
            "score": "90",
            "winner": false
          },
          {
            "homeAway": "away",
            "team": {
              "id": "7",
              "displayName": "Denver Nuggets",
              "abbreviation": "DEN",
              "name": "Nuggets",
              "location": "Denver",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/den.png",
              "color": "0e2240"
            },
            "score": "94",
            "winner": false
          }
        ]
      }
    ]
  },
  {
    "id": "401810657",
    "date": "2026-02-21T00:00Z",
    "name": "Cleveland Cavaliers at Charlotte Hornets",
    "shortName": "CLE @ CHA",
    "status": {
      "clock": 0.0,
      "displayClock": "0.0",
      "period": 0,
      "type": {
        "id": "1",
        "name": "STATUS_SCHEDULED",
        "state": "pre",
        "completed": false,
        "description": "Scheduled",
        "detail": "Fri, February 20th at 7:00 PM EST",
        "shortDetail": "2/20 - 7:00 PM EST"
      }
    },
    "competitions": [
      {
        "id": "401810657",
        "date": "2026-02-21T00:00Z",
        "attendance": 0,
        "venue": {
          "id": "1893",
          "fullName": "Spectrum Center",
          "address": {
            "city": "Charlotte",
            "state": "NC"
          }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "30",
              "displayName": "Charlotte Hornets",
              "abbreviation": "CHA",
              "name": "Hornets",
              "location": "Charlotte",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/cha.png",
              "color": "008ca8"
            },
            "score": "0",
            "winner": false
          },
          {
            "homeAway": "away",
            "team": {
              "id": "5",
              "displayName": "Cleveland Cavaliers",
              "abbreviation": "CLE",
              "name": "Cavaliers",
              "location": "Cleveland",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/cle.png",
              "color": "860038"
            },
            "score": "0",
            "winner": false
          }
        ]
      }
    ]
  },
  {
    "id": "401810659",
    "date": "2026-02-21T00:00Z",
    "name": "Utah Jazz at Memphis Grizzlies",
    "shortName": "UTAH @ MEM",
    "status": {
      "clock": 0.0,
      "displayClock": "0.0",
      "period": 0,
      "type": {
        "id": "1",
        "name": "STATUS_SCHEDULED",
        "state": "pre",
        "completed": false,
        "description": "Scheduled",
        "detail": "Fri, February 20th at 7:00 PM EST",
        "shortDetail": "2/20 - 7:00 PM EST"
      }
    },
    "competitions": [
      {
        "id": "401810659",
        "date": "2026-02-21T00:00Z",
        "attendance": 0,
        "venue": {
          "id": "1392",
          "fullName": "FedExForum",
          "address": {
            "city": "Memphis",
            "state": "TN"
          }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "29",
              "displayName": "Memphis Grizzlies",
              "abbreviation": "MEM",
              "name": "Grizzlies",
              "location": "Memphis",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/mem.png",
              "color": "5d76a9"
            },
            "score": "0",
            "winner": false
          },
          {
            "homeAway": "away",
            "team": {
              "id": "26",
              "displayName": "Utah Jazz",
              "abbreviation": "UTAH",
              "name": "Jazz",
              "location": "Utah",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/utah.png",
              "color": "4e008e"
            },
            "score": "0",
            "winner": false
          }
        ]
      }
    ]
  },
  {
    "id": "401810660",
    "date": "2026-02-21T00:30Z",
    "name": "Miami Heat at Atlanta Hawks",
    "shortName": "MIA @ ATL",
    "status": {
      "clock": 0.0,
      "displayClock": "0.0",
      "period": 0,
      "type": {
        "id": "1",
        "name": "STATUS_SCHEDULED",
        "state": "pre",
        "completed": false,
        "description": "Scheduled",
        "detail": "Fri, February 20th at 7:30 PM EST",
        "shortDetail": "2/20 - 7:30 PM EST"
      }
    },
    "competitions": [
      {
        "id": "401810660",
        "date": "2026-02-21T00:30Z",
        "attendance": 0,
        "venue": {
          "id": "1827",
          "fullName": "State Farm Arena",
          "address": {
            "city": "Atlanta",
            "state": "GA"
          }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "1",
              "displayName": "Atlanta Hawks",
              "abbreviation": "ATL",
              "name": "Hawks",
              "location": "Atlanta",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/atl.png",
              "color": "c8102e"
            },
            "score": "0",
            "winner": false
          },
          {
            "homeAway": "away",
            "team": {
              "id": "14",
              "displayName": "Miami Heat",
              "abbreviation": "MIA",
              "name": "Heat",
              "location": "Miami",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/mia.png",
              "color": "98002e"
            },
            "score": "0",
            "winner": false
          }
        ]
      }
    ]
  },
  {
    "id": "401810661",
    "date": "2026-02-21T00:30Z",
    "name": "Dallas Mavericks at Minnesota Timberwolves",
    "shortName": "DAL @ MIN",
    "status": {
      "clock": 0.0,
      "displayClock": "0.0",
      "period": 0,
      "type": {
        "id": "1",
        "name": "STATUS_SCHEDULED",
        "state": "pre",
        "completed": false,
        "description": "Scheduled",
        "detail": "Fri, February 20th at 7:30 PM EST",
        "shortDetail": "2/20 - 7:30 PM EST"
      }
    },
    "competitions": [
      {
        "id": "401810661",
        "date": "2026-02-21T00:30Z",
        "attendance": 0,
        "venue": {
          "id": "2029",
          "fullName": "Target Center",
          "address": {
            "city": "Minneapolis",
            "state": "MN"
          }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "16",
              "displayName": "Minnesota Timberwolves",
              "abbreviation": "MIN",
              "name": "Timberwolves",
              "location": "Minnesota",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/min.png",
              "color": "266092"
            },
            "score": "0",
            "winner": false
          },
          {
            "homeAway": "away",
            "team": {
              "id": "6",
              "displayName": "Dallas Mavericks",
              "abbreviation": "DAL",
              "name": "Mavericks",
              "location": "Dallas",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/dal.png",
              "color": "0064b1"
            },
            "score": "0",
            "winner": false
          }
        ]
      }
    ]
  },
  {
    "id": "401810662",
    "date": "2026-02-21T01:00Z",
    "name": "Milwaukee Bucks at New Orleans Pelicans",
    "shortName": "MIL @ NO",
    "status": {
      "clock": 0.0,
      "displayClock": "0.0",
      "period": 0,
      "type": {
        "id": "1",
        "name": "STATUS_SCHEDULED",
        "state": "pre",
        "completed": false,
        "description": "Scheduled",
        "detail": "Fri, February 20th at 8:00 PM EST",
        "shortDetail": "2/20 - 8:00 PM EST"
      }
    },
    "competitions": [
      {
        "id": "401810662",
        "date": "2026-02-21T01:00Z",
        "attendance": 0,
        "venue": {
          "id": "985",
          "fullName": "Smoothie King Center",
          "address": {
            "city": "New Orleans",
            "state": "LA"
          }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "3",
              "displayName": "New Orleans Pelicans",
              "abbreviation": "NO",
              "name": "Pelicans",
              "location": "New Orleans",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/no.png",
              "color": "0a2240"
            },
            "score": "0",
            "winner": false
          },
          {
            "homeAway": "away",
            "team": {
              "id": "15",
              "displayName": "Milwaukee Bucks",
              "abbreviation": "MIL",
              "name": "Bucks",
              "location": "Milwaukee",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/mil.png",
              "color": "00471b"
            },
            "score": "0",
            "winner": false
          }
        ]
      }
    ]
  }
];

export type EspnResponse = typeof mockEspnResponse;
export type EspnEvent = typeof mockEspnResponse[0];
export type EspnCompetitor = typeof mockEspnResponse[0]['competitions'][0]['competitors'][0];
