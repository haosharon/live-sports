import { mockOddsApiResponse } from './odds-api';
import { mockPolymarketResponse } from './polymarket';

// Helper function to convert decimal odds to implied probability
function decimalOddsToImpliedProbability(odds: number): number {
  return 1 / odds;
}

// Helper function to get average odds across bookmakers
function getAverageOdds(bookmakers: any[], teamName: string): number {
  const allOdds = bookmakers.flatMap(bookmaker =>
    bookmaker.markets[0].outcomes
      .filter((outcome: any) => outcome.name === teamName)
      .map((outcome: any) => outcome.price)
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
  homeDivergence: number; // difference in probability (Polymarket - Vegas)
  awayDivergence: number;
  maxDivergence: number;  // largest absolute divergence for sorting
}

// Convert raw API data into our standardized Game format
export const mockGames: Game[] = mockOddsApiResponse.map(oddsGame => {
  // Find corresponding Polymarket data
  const polyGame = mockPolymarketResponse.find(pg =>
    pg.teams.home === oddsGame.home_team &&
    pg.teams.away === oddsGame.away_team
  );

  // Calculate average Vegas odds
  const homeOdds = getAverageOdds(oddsGame.bookmakers, oddsGame.home_team);
  const awayOdds = getAverageOdds(oddsGame.bookmakers, oddsGame.away_team);

  // Convert to probabilities
  const vegasHomeProbability = homeOdds > 0 ? decimalOddsToImpliedProbability(homeOdds) : 0;
  const vegasAwayProbability = awayOdds > 0 ? decimalOddsToImpliedProbability(awayOdds) : 0;

  // Get Polymarket probabilities (default to Vegas if no Polymarket data)
  const polymarketHomeProbability = polyGame ? polyGame.outcome_prices[oddsGame.home_team] || vegasHomeProbability : vegasHomeProbability;
  const polymarketAwayProbability = polyGame ? polyGame.outcome_prices[oddsGame.away_team] || vegasAwayProbability : vegasAwayProbability;

  // Calculate divergences
  const homeDivergence = polymarketHomeProbability - vegasHomeProbability;
  const awayDivergence = polymarketAwayProbability - vegasAwayProbability;
  const maxDivergence = Math.max(Math.abs(homeDivergence), Math.abs(awayDivergence));

  return {
    id: oddsGame.id,
    sport: oddsGame.sport_title,
    homeTeam: oddsGame.home_team,
    awayTeam: oddsGame.away_team,
    gameTime: oddsGame.commence_time,

    vegasHomeOdds: homeOdds,
    vegasAwayOdds: awayOdds,
    vegasHomeProbability,
    vegasAwayProbability,

    polymarketHomeProbability,
    polymarketAwayProbability,
    polymarketVolume: polyGame?.volume || 0,

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