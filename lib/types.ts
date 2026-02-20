export interface VegasOdds {
  homeOdds: number;
  awayOdds: number;
  homeProbability: number;
  awayProbability: number;
}

export interface CrowdOdds {
  homeProbability: number;
  awayProbability: number;
  volume: number;
}

export interface Divergence {
  home: number;  // crowd - vegas probability
  away: number;
  max: number;   // largest absolute divergence
}

export interface Game {
  id: string;
  sport: string;
  homeTeam: string;
  awayTeam: string;
  gameTime: string;

  // ESPN game data
  homeScore: string;
  awayScore: string;
  statusDescription: string;
  statusState: string; // 'pre' | 'in' | 'post'
  venue: string;

  // Enrichment (undefined when no matching data source)
  vegasOdds?: VegasOdds;
  crowdOdds?: CrowdOdds;
  divergence?: Divergence;

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
  'LA Clippers': 'LAC',
  'Denver Nuggets': 'DEN',
  'Los Angeles Lakers': 'LAL',
  'Phoenix Suns': 'PHX',
  'New York Knicks': 'NYK',
  'Minnesota Timberwolves': 'MIN',
  'Memphis Grizzlies': 'MEM',
  'Portland Trail Blazers': 'POR',
  'Atlanta Hawks': 'ATL',
  'Philadelphia 76ers': 'PHI',
  'Cleveland Cavaliers': 'CLE',
  'Brooklyn Nets': 'BKN',
  'Indiana Pacers': 'IND',
  'Washington Wizards': 'WSH',
  'Detroit Pistons': 'DET',
  'Utah Jazz': 'UTAH',
  'Miami Heat': 'MIA',
  'Dallas Mavericks': 'DAL',
  'New Orleans Pelicans': 'NOP',
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

// Minimum divergence to display a gap badge
export const DIVERGENCE_GAP_THRESHOLD = 0.05;

// Sport icon colors
export const SPORT_COLORS: Record<string, string> = {
  'NBA': '#f97316',
  'NFL': '#22c55e',
  'MLB': '#ef4444',
  'NHL': '#3b82f6',
  'MLS': '#a855f7',
};
