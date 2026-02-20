// Shared date utilities that use the browser's local timezone consistently

/**
 * Get the local calendar date string (YYYY-MM-DD) for a given Date.
 * Uses Intl.DateTimeFormat to extract year/month/day in the local timezone.
 */
function getLocalDateKey(date: Date): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const year = parts.find(p => p.type === 'year')!.value;
  const month = parts.find(p => p.type === 'month')!.value;
  const day = parts.find(p => p.type === 'day')!.value;

  return `${year}-${month}-${day}`;
}

/**
 * Get today's and tomorrow's local date keys for comparison.
 */
function getTodayTomorrowKeys(): { todayKey: string; tomorrowKey: string } {
  const now = new Date();
  const todayKey = getLocalDateKey(now);

  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowKey = getLocalDateKey(tomorrow);

  return { todayKey, tomorrowKey };
}

/**
 * Get a relative date label (Today/Tomorrow/formatted date) for a game time,
 * using the browser's local timezone.
 */
export function getLocalDateLabel(gameTime: string): string {
  const date = new Date(gameTime);
  const gameKey = getLocalDateKey(date);
  const { todayKey, tomorrowKey } = getTodayTomorrowKeys();

  if (gameKey === todayKey) return 'Today';
  if (gameKey === tomorrowKey) return 'Tomorrow';

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/**
 * Get the uppercase section header label for date grouping,
 * using the browser's local timezone.
 */
export function getLocalDateGroupLabel(gameTime: string): string {
  const date = new Date(gameTime);
  const gameKey = getLocalDateKey(date);
  const { todayKey, tomorrowKey } = getTodayTomorrowKeys();

  if (gameKey === todayKey) return 'TODAY';
  if (gameKey === tomorrowKey) return 'TOMORROW';

  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
}

/**
 * Format the time portion of a game time in the browser's local timezone.
 */
export function getLocalTimeLabel(gameTime: string): string {
  const date = new Date(gameTime);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  });
}
