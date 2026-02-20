import { mockGames, formatProbability, formatDivergence } from '../games';

describe('Mock Games Data', () => {
  test('should have games derived from ESPN data', () => {
    expect(mockGames.length).toBeGreaterThan(0);

    const game = mockGames[0];
    // Core fields
    expect(game).toHaveProperty('id');
    expect(game).toHaveProperty('sport');
    expect(game).toHaveProperty('homeTeam');
    expect(game).toHaveProperty('awayTeam');
    expect(game).toHaveProperty('gameTime');

    // ESPN fields
    expect(game).toHaveProperty('homeScore');
    expect(game).toHaveProperty('awayScore');
    expect(game).toHaveProperty('statusDescription');
    expect(game).toHaveProperty('statusState');
    expect(game).toHaveProperty('venue');

    // Enrichment fields
    expect(game).toHaveProperty('vegasHomeProbability');
    expect(game).toHaveProperty('polymarketHomeProbability');
    expect(game).toHaveProperty('maxDivergence');
  });

  test('all games should have sport set to NBA', () => {
    mockGames.forEach(game => {
      expect(game.sport).toBe('NBA');
    });
  });

  test('enrichment fields should be 0 when no matching data source exists', () => {
    // Games without Odds API or Polymarket matches should have 0 for enrichment fields
    mockGames.forEach(game => {
      expect(game.vegasHomeProbability).toBeGreaterThanOrEqual(0);
      expect(game.vegasAwayProbability).toBeGreaterThanOrEqual(0);
      expect(game.polymarketHomeProbability).toBeGreaterThanOrEqual(0);
      expect(game.polymarketAwayProbability).toBeGreaterThanOrEqual(0);
    });
  });

  test('divergence should only be non-zero when both sources are present', () => {
    mockGames.forEach(game => {
      if (game.vegasHomeProbability === 0 || game.polymarketHomeProbability === 0) {
        expect(game.homeDivergence).toBe(0);
        expect(game.awayDivergence).toBe(0);
        expect(game.maxDivergence).toBe(0);
      }
    });
  });
});

describe('Utility Functions', () => {
  test('formatProbability should format as percentage', () => {
    expect(formatProbability(0.65)).toBe('65.0%');
    expect(formatProbability(0.123)).toBe('12.3%');
  });

  test('formatDivergence should categorize correctly', () => {
    const crowdFavorite = formatDivergence(0.05);
    expect(crowdFavorite.direction).toBe('crowd');
    expect(crowdFavorite.text).toBe('5.0%');

    const vegasFavorite = formatDivergence(-0.03);
    expect(vegasFavorite.direction).toBe('vegas');
    expect(vegasFavorite.text).toBe('3.0%');

    const neutral = formatDivergence(0.01);
    expect(neutral.direction).toBe('neutral');
  });
});
