export interface Game {
  id: string;
  sport: string;
  homeTeam: string;
  awayTeam: string;
  gameTime: string;

  // Vegas odds data
  vegasHomeOdds: number;
  vegasAwayOdds: number;
  vegasHomeProbability: number;
  vegasAwayProbability: number;

  // Polymarket data
  polymarketHomeProbability: number;
  polymarketAwayProbability: number;
  polymarketVolume: number;

  // Divergence analysis
  homeDivergence: number;
  awayDivergence: number;
  maxDivergence: number;

  // UI state
  isLive?: boolean;
}

export type SportKey = 'All' | 'NBA' | 'NFL' | 'MLB' | 'NHL' | 'MLS';

// Team abbreviation mapping
export const TEAM_ABBREVIATIONS: Record<string, string> = {
  'Charlotte Hornets': 'CHA',
  'Houston Rockets': 'HOU',
  'Golden State Warriors': 'GSW',
  'Boston Celtics': 'BOS',
  'Los Angeles Clippers': 'LAC',
  'Denver Nuggets': 'DEN',
  'Los Angeles Lakers': 'LAL',
  'Phoenix Suns': 'PHX',
  'New York Knicks': 'NYK',
  'Minnesota Timberwolves': 'MIN',
  'Memphis Grizzlies': 'MEM',
  'Portland Trail Blazers': 'POR',
  'Atlanta Hawks': 'ATL',
  'Buffalo Bills': 'BUF',
  'Kansas City Chiefs': 'KC',
  'Toronto Maple Leafs': 'TOR',
  'New York Rangers': 'NYR',
  'New York Yankees': 'NYY',
  'Inter Miami CF': 'MIA',
  'LAFC': 'LAFC',
  'Milwaukee Bucks': 'MIL',
};

export function getTeamAbbreviation(teamName: string): string {
  return TEAM_ABBREVIATIONS[teamName] || teamName.substring(0, 3).toUpperCase();
}

// Sport icon colors
export const SPORT_COLORS: Record<string, string> = {
  'NBA': '#f97316',
  'NFL': '#22c55e',
  'MLB': '#ef4444',
  'NHL': '#3b82f6',
  'MLS': '#a855f7',
};
