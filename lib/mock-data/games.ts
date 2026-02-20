import { mockEspnResponse } from './espn';
import { mockOddsApiResponse } from './odds-api';
import { mockPolymarketResponse } from './polymarket';

// Helper function to convert decimal odds to implied probability
function decimalOddsToImpliedProbability(odds: number): number {
  return 1 / odds;
}

// Helper function to get average odds across bookmakers
function getAverageOdds(bookmakers: typeof mockOddsApiResponse[0]['bookmakers'], teamName: string): number {
  const allOdds = bookmakers.flatMap(bookmaker =>
    bookmaker.markets[0].outcomes
      .filter((outcome) => outcome.name === teamName)
      .map((outcome) => outcome.price)
  );

  if (allOdds.length === 0) return 0;
  return allOdds.reduce((sum, odds) => sum + odds, 0) / allOdds.length;
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

  // Vegas odds data (enrichment — 0 if no match)
  vegasHomeOdds: number;
  vegasAwayOdds: number;
  vegasHomeProbability: number;
  vegasAwayProbability: number;

  // Polymarket data (enrichment — 0 if no match)
  polymarketHomeProbability: number;
  polymarketAwayProbability: number;
  polymarketVolume: number;

  // Divergence analysis
  homeDivergence: number; // difference in probability (Polymarket - Vegas)
  awayDivergence: number;
  maxDivergence: number;  // largest absolute divergence for sorting
}

// ESPN is the source of truth for all games.
// Odds API and Polymarket data enrich ESPN games when a matching game is found.
export const mockGames: Game[] = mockEspnResponse.map(espnEvent => {
  const competition = espnEvent.competitions[0];
  const homeCompetitor = competition.competitors.find(c => c.homeAway === 'home')!;
  const awayCompetitor = competition.competitors.find(c => c.homeAway === 'away')!;

  const homeTeam = homeCompetitor.team.displayName;
  const awayTeam = awayCompetitor.team.displayName;

  // Find corresponding Odds API data (match on home + away team names)
  const oddsGame = mockOddsApiResponse.find(og =>
    og.home_team === homeTeam && og.away_team === awayTeam
  );

  // Find corresponding Polymarket data (match on home + away team names)
  const polyGame = mockPolymarketResponse.find(pg =>
    pg.teams.home === homeTeam && pg.teams.away === awayTeam
  );

  // Calculate average Vegas odds (0 if no Odds API match)
  const homeOdds = oddsGame ? getAverageOdds(oddsGame.bookmakers, homeTeam) : 0;
  const awayOdds = oddsGame ? getAverageOdds(oddsGame.bookmakers, awayTeam) : 0;

  // Convert to probabilities
  const vegasHomeProbability = homeOdds > 0 ? decimalOddsToImpliedProbability(homeOdds) : 0;
  const vegasAwayProbability = awayOdds > 0 ? decimalOddsToImpliedProbability(awayOdds) : 0;

  // Get Polymarket probabilities (0 if no match)
  const polymarketHomeProbability = polyGame
    ? (polyGame.outcome_prices[homeTeam] ?? 0)
    : 0;
  const polymarketAwayProbability = polyGame
    ? (polyGame.outcome_prices[awayTeam] ?? 0)
    : 0;

  // Calculate divergences (only meaningful when both sources are present)
  const hasBothSources = vegasHomeProbability > 0 && polymarketHomeProbability > 0;
  const homeDivergence = hasBothSources ? polymarketHomeProbability - vegasHomeProbability : 0;
  const awayDivergence = hasBothSources ? polymarketAwayProbability - vegasAwayProbability : 0;
  const maxDivergence = Math.max(Math.abs(homeDivergence), Math.abs(awayDivergence));

  return {
    id: espnEvent.id,
    sport: 'NBA',
    homeTeam,
    awayTeam,
    gameTime: espnEvent.date,

    // ESPN fields
    homeScore: homeCompetitor.score,
    awayScore: awayCompetitor.score,
    statusDescription: espnEvent.status.type.description,
    statusState: espnEvent.status.type.state,
    venue: competition.venue.fullName,

    // Vegas enrichment
    vegasHomeOdds: homeOdds,
    vegasAwayOdds: awayOdds,
    vegasHomeProbability,
    vegasAwayProbability,

    // Polymarket enrichment
    polymarketHomeProbability,
    polymarketAwayProbability,
    polymarketVolume: polyGame?.volume ?? 0,

    // Divergence
    homeDivergence,
    awayDivergence,
    maxDivergence
  };
});

// Sort by divergence (highest first) for easy identification of opportunities
export const mockGamesByDivergence = [...mockGames].sort((a, b) => b.maxDivergence - a.maxDivergence);

// Helper function to format probability as percentage
export const formatProbability = (prob: number): string => `${(prob * 100).toFixed(1)}%`;

// Helper function to format divergence with direction
export const formatDivergence = (divergence: number): { text: string; direction: 'crowd' | 'vegas' | 'neutral' } => {
  const percentage = Math.abs(divergence * 100).toFixed(1);
  if (Math.abs(divergence) < 0.02) return { text: `${percentage}%`, direction: 'neutral' };
  return {
    text: `${percentage}%`,
    direction: divergence > 0 ? 'crowd' : 'vegas'
  };
};
