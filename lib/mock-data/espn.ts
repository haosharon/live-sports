// Real data from ESPN Scoreboard API
// Fetched from: http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard?dates=20250219-20250226
export const mockEspnResponse = [
  {
    "id": "401748704",
    "date": "2025-02-20T03:00Z",
    "name": "Charlotte Hornets at Los Angeles Lakers",
    "shortName": "CHA @ LAL",
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
        "id": "401748704",
        "date": "2025-02-20T03:00Z",
        "attendance": 18997,
        "venue": {
          "id": "1841",
          "fullName": "crypto.com Arena",
          "address": { "city": "Los Angeles", "state": "CA" }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "13",
              "displayName": "Los Angeles Lakers",
              "abbreviation": "LAL",
              "name": "Lakers",
              "location": "Los Angeles",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/lal.png",
              "color": "552583"
            },
            "score": "97",
            "winner": false
          },
          {
            "homeAway": "away",
            "team": {
              "id": "30",
              "displayName": "Charlotte Hornets",
              "abbreviation": "CHA",
              "name": "Hornets",
              "location": "Charlotte",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/cha.png",
              "color": "008ca8"
            },
            "score": "100",
            "winner": true
          }
        ]
      }
    ]
  },
  {
    "id": "401705352",
    "date": "2025-02-21T00:00Z",
    "name": "Memphis Grizzlies at Indiana Pacers",
    "shortName": "MEM @ IND",
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
        "id": "401705352",
        "date": "2025-02-21T00:00Z",
        "attendance": 17274,
        "venue": {
          "id": "5765",
          "fullName": "Gainbridge Fieldhouse",
          "address": { "city": "Indianapolis", "state": "IN" }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "11",
              "displayName": "Indiana Pacers",
              "abbreviation": "IND",
              "name": "Pacers",
              "location": "Indiana",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/ind.png",
              "color": "002d62"
            },
            "score": "127",
            "winner": true
          },
          {
            "homeAway": "away",
            "team": {
              "id": "29",
              "displayName": "Memphis Grizzlies",
              "abbreviation": "MEM",
              "name": "Grizzlies",
              "location": "Memphis",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/mem.png",
              "color": "5d76a9"
            },
            "score": "113",
            "winner": false
          }
        ]
      }
    ]
  },
  {
    "id": "401705353",
    "date": "2025-02-21T00:00Z",
    "name": "Boston Celtics at Philadelphia 76ers",
    "shortName": "BOS @ PHI",
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
        "id": "401705353",
        "date": "2025-02-21T00:00Z",
        "attendance": 20610,
        "venue": {
          "id": "1863",
          "fullName": "Wells Fargo Center",
          "address": { "city": "Philadelphia", "state": "PA" }
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
              "color": "006bb6"
            },
            "score": "104",
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
              "color": "007a33"
            },
            "score": "124",
            "winner": true
          }
        ]
      }
    ]
  },
  {
    "id": "401705357",
    "date": "2025-02-21T00:30Z",
    "name": "Cleveland Cavaliers at Brooklyn Nets",
    "shortName": "CLE @ BKN",
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
        "id": "401705357",
        "date": "2025-02-21T00:30Z",
        "attendance": 17926,
        "venue": {
          "id": "3559",
          "fullName": "Barclays Center",
          "address": { "city": "Brooklyn", "state": "NY" }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "17",
              "displayName": "Brooklyn Nets",
              "abbreviation": "BKN",
              "name": "Nets",
              "location": "Brooklyn",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/bkn.png",
              "color": "000000"
            },
            "score": "97",
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
            "score": "110",
            "winner": true
          }
        ]
      }
    ]
  },
  {
    "id": "401705360",
    "date": "2025-02-21T02:00Z",
    "name": "Charlotte Hornets at Denver Nuggets",
    "shortName": "CHA @ DEN",
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
        "id": "401705360",
        "date": "2025-02-21T02:00Z",
        "attendance": 19870,
        "venue": {
          "id": "892",
          "fullName": "Ball Arena",
          "address": { "city": "Denver", "state": "CO" }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "7",
              "displayName": "Denver Nuggets",
              "abbreviation": "DEN",
              "name": "Nuggets",
              "location": "Denver",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/den.png",
              "color": "0e2240"
            },
            "score": "129",
            "winner": true
          },
          {
            "homeAway": "away",
            "team": {
              "id": "30",
              "displayName": "Charlotte Hornets",
              "abbreviation": "CHA",
              "name": "Hornets",
              "location": "Charlotte",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/cha.png",
              "color": "008ca8"
            },
            "score": "115",
            "winner": false
          }
        ]
      }
    ]
  },
  {
    "id": "401705367",
    "date": "2025-02-22T02:30Z",
    "name": "Minnesota Timberwolves at Houston Rockets",
    "shortName": "MIN @ HOU",
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
        "id": "401705367",
        "date": "2025-02-22T02:30Z",
        "attendance": 18055,
        "venue": {
          "id": "1394",
          "fullName": "Toyota Center (Houston)",
          "address": { "city": "Houston", "state": "TX" }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "10",
              "displayName": "Houston Rockets",
              "abbreviation": "HOU",
              "name": "Rockets",
              "location": "Houston",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/hou.png",
              "color": "ce1141"
            },
            "score": "121",
            "winner": true
          },
          {
            "homeAway": "away",
            "team": {
              "id": "16",
              "displayName": "Minnesota Timberwolves",
              "abbreviation": "MIN",
              "name": "Timberwolves",
              "location": "Minnesota",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/min.png",
              "color": "266092"
            },
            "score": "115",
            "winner": false
          }
        ]
      }
    ]
  },
  {
    "id": "401705371",
    "date": "2025-02-22T03:00Z",
    "name": "Golden State Warriors at Sacramento Kings",
    "shortName": "GS @ SAC",
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
        "id": "401705371",
        "date": "2025-02-22T03:00Z",
        "attendance": 18098,
        "venue": {
          "id": "5310",
          "fullName": "Golden 1 Center",
          "address": { "city": "Sacramento", "state": "CA" }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "23",
              "displayName": "Sacramento Kings",
              "abbreviation": "SAC",
              "name": "Kings",
              "location": "Sacramento",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/sac.png",
              "color": "5a2d81"
            },
            "score": "108",
            "winner": false
          },
          {
            "homeAway": "away",
            "team": {
              "id": "9",
              "displayName": "Golden State Warriors",
              "abbreviation": "GS",
              "name": "Warriors",
              "location": "Golden State",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/gs.png",
              "color": "fdb927"
            },
            "score": "132",
            "winner": true
          }
        ]
      }
    ]
  },
  {
    "id": "401705378",
    "date": "2025-02-23T20:30Z",
    "name": "Dallas Mavericks at Golden State Warriors",
    "shortName": "DAL @ GS",
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
        "id": "401705378",
        "date": "2025-02-23T20:30Z",
        "attendance": 18064,
        "venue": {
          "id": "6270",
          "fullName": "Chase Center",
          "address": { "city": "San Francisco", "state": "CA" }
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
            "score": "126",
            "winner": true
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
            "score": "102",
            "winner": false
          }
        ]
      }
    ]
  },
  {
    "id": "401705383",
    "date": "2025-02-23T23:00Z",
    "name": "Miami Heat at Milwaukee Bucks",
    "shortName": "MIA @ MIL",
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
        "id": "401705383",
        "date": "2025-02-23T23:00Z",
        "attendance": 17442,
        "venue": {
          "id": "5777",
          "fullName": "Fiserv Forum",
          "address": { "city": "Milwaukee", "state": "WI" }
        },
        "competitors": [
          {
            "homeAway": "home",
            "team": {
              "id": "15",
              "displayName": "Milwaukee Bucks",
              "abbreviation": "MIL",
              "name": "Bucks",
              "location": "Milwaukee",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/mil.png",
              "color": "00471b"
            },
            "score": "120",
            "winner": true
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
            "score": "113",
            "winner": false
          }
        ]
      }
    ]
  },
  {
    "id": "401705400",
    "date": "2025-02-26T03:00Z",
    "name": "Charlotte Hornets at Golden State Warriors",
    "shortName": "CHA @ GS",
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
        "id": "401705400",
        "date": "2025-02-26T03:00Z",
        "attendance": 18064,
        "venue": {
          "id": "6270",
          "fullName": "Chase Center",
          "address": { "city": "San Francisco", "state": "CA" }
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
            "score": "128",
            "winner": true
          },
          {
            "homeAway": "away",
            "team": {
              "id": "30",
              "displayName": "Charlotte Hornets",
              "abbreviation": "CHA",
              "name": "Hornets",
              "location": "Charlotte",
              "logo": "https://a.espncdn.com/i/teamlogos/nba/500/scoreboard/cha.png",
              "color": "008ca8"
            },
            "score": "92",
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
