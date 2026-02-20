import { mockEspnResponse } from './espn';
import { mockOddsApiResponse } from './odds-api';
import { mockPolymarketResponse } from './polymarket';
import type { Game, VegasOdds, CrowdOdds, Divergence } from '../types';

// ESPN uses "LA Clippers" while Odds API / Polymarket use "Los Angeles Clippers"
const TEAM_NAME_ALIASES: Record<string, string> = {
  'LA Clippers': 'Los Angeles Clippers',
};

function normalizeTeamName(name: string): string {
  return TEAM_NAME_ALIASES[name] ?? name;
}

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

// ESPN is the source of truth for all games.
// Odds API and Polymarket data enrich ESPN games when a matching game is found.
export const mockGames: Game[] = mockEspnResponse.map(espnEvent => {
  const competition = espnEvent.competitions[0];
  const homeCompetitor = competition.competitors.find(c => c.homeAway === 'home')!;
  const awayCompetitor = competition.competitors.find(c => c.homeAway === 'away')!;

  const homeTeam = homeCompetitor.team.displayName;
  const awayTeam = awayCompetitor.team.displayName;

  // Normalize team names for matching against Odds API / Polymarket
  const homeNorm = normalizeTeamName(homeTeam);
  const awayNorm = normalizeTeamName(awayTeam);

  // Find corresponding Odds API data (match on normalized team names)
  const oddsGame = mockOddsApiResponse.find(og =>
    og.home_team === homeNorm && og.away_team === awayNorm
  );

  // Find corresponding Polymarket data (match on normalized team names)
  const polyGame = mockPolymarketResponse.find(pg =>
    pg.teams.home === homeNorm && pg.teams.away === awayNorm
  );

  // Build vegasOdds (undefined when no Odds API match)
  let vegasOdds: VegasOdds | undefined;
  if (oddsGame) {
    const homeOdds = getAverageOdds(oddsGame.bookmakers, homeNorm);
    const awayOdds = getAverageOdds(oddsGame.bookmakers, awayNorm);
    vegasOdds = {
      homeOdds,
      awayOdds,
      homeProbability: homeOdds > 0 ? decimalOddsToImpliedProbability(homeOdds) : 0,
      awayProbability: awayOdds > 0 ? decimalOddsToImpliedProbability(awayOdds) : 0,
    };
  }

  // Build crowdOdds (undefined when no Polymarket match)
  let crowdOdds: CrowdOdds | undefined;
  if (polyGame) {
    crowdOdds = {
      homeProbability: polyGame.outcome_prices[homeNorm] ?? 0,
      awayProbability: polyGame.outcome_prices[awayNorm] ?? 0,
      volume: polyGame.volume,
    };
  }

  // Build divergence (only when both sources are present)
  let divergence: Divergence | undefined;
  if (vegasOdds && crowdOdds) {
    const home = crowdOdds.homeProbability - vegasOdds.homeProbability;
    const away = crowdOdds.awayProbability - vegasOdds.awayProbability;
    divergence = {
      home,
      away,
      max: Math.max(Math.abs(home), Math.abs(away)),
    };
  }

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

    // Enrichment
    vegasOdds,
    crowdOdds,
    divergence,
  };
});

// Sort by divergence (highest first) for easy identification of opportunities
export const mockGamesByDivergence = [...mockGames].sort(
  (a, b) => (b.divergence?.max ?? 0) - (a.divergence?.max ?? 0)
);

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
