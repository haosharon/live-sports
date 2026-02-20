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

    // Enrichment fields are optional nested objects
    // vegasOdds, crowdOdds, divergence may be undefined
  });

  test('all games should have sport set to NBA', () => {
    mockGames.forEach(game => {
      expect(game.sport).toBe('NBA');
    });
  });

  test('enrichment fields should have valid probabilities when present', () => {
    mockGames.forEach(game => {
      if (game.vegasOdds) {
        expect(game.vegasOdds.homeProbability).toBeGreaterThanOrEqual(0);
        expect(game.vegasOdds.awayProbability).toBeGreaterThanOrEqual(0);
      }
      if (game.crowdOdds) {
        expect(game.crowdOdds.homeProbability).toBeGreaterThanOrEqual(0);
        expect(game.crowdOdds.awayProbability).toBeGreaterThanOrEqual(0);
      }
    });
  });

  test('divergence should only exist when both sources are present', () => {
    mockGames.forEach(game => {
      if (!game.vegasOdds || !game.crowdOdds) {
        expect(game.divergence).toBeUndefined();
      }
      if (game.divergence) {
        expect(game.vegasOdds).toBeDefined();
        expect(game.crowdOdds).toBeDefined();
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
