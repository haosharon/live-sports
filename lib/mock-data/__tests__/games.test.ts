import { mockGames, formatProbability, formatDivergence } from '../games';

describe('Mock Games Data', () => {
  test('should have games with required properties', () => {
    expect(mockGames).toHaveLength(4);

    const game = mockGames[0];
    expect(game).toHaveProperty('id');
    expect(game).toHaveProperty('sport');
    expect(game).toHaveProperty('homeTeam');
    expect(game).toHaveProperty('awayTeam');
    expect(game).toHaveProperty('gameTime');
    expect(game).toHaveProperty('vegasHomeProbability');
    expect(game).toHaveProperty('polymarketHomeProbability');
    expect(game).toHaveProperty('maxDivergence');
  });

  test('should calculate probabilities correctly', () => {
    mockGames.forEach(game => {
      expect(game.vegasHomeProbability).toBeGreaterThan(0);
      expect(game.vegasAwayProbability).toBeGreaterThan(0);
      expect(game.polymarketHomeProbability).toBeGreaterThan(0);
      expect(game.polymarketAwayProbability).toBeGreaterThan(0);
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