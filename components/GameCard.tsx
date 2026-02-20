'use client';

import { Game, getTeamAbbreviation, SPORT_COLORS } from '@/lib/types';

interface GameCardProps {
  game: Game;
}

function SportIcon({ sport }: { sport: string }) {
  const color = SPORT_COLORS[sport] || '#a855f7';
  return (
    <div
      className="flex h-6 w-6 items-center justify-center rounded-full"
      style={{ backgroundColor: `${color}30` }}
    >
      <div
        className="h-3 w-3 rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

function formatGameTime(gameTime: string): { dateLabel: string; timeLabel: string } {
  const date = new Date(gameTime);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const gameDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  let dateLabel: string;
  if (gameDate.getTime() === today.getTime()) {
    dateLabel = 'Today';
  } else if (gameDate.getTime() === tomorrow.getTime()) {
    dateLabel = 'Tomorrow';
  } else {
    dateLabel = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  const timeLabel = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/New_York',
    timeZoneName: 'short',
  });

  return { dateLabel, timeLabel };
}

export default function GameCard({ game }: GameCardProps) {
  const { dateLabel, timeLabel } = formatGameTime(game.gameTime);
  const gapPercent = (game.maxDivergence * 100).toFixed(1);
  const showGap = game.maxDivergence >= 0.05;

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
      {/* Sport label row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SportIcon sport={game.sport} />
          <span className="text-sm font-medium text-zinc-300">{game.sport}</span>
        </div>
        <div className="flex items-center gap-2">
          {game.isLive && (
            <span className="flex items-center gap-1 text-sm font-semibold text-red-500">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              LIVE
            </span>
          )}
          {showGap && (
            <span className="rounded-md bg-purple-500/20 px-2 py-0.5 text-xs font-semibold text-purple-400">
              {gapPercent}% gap
            </span>
          )}
        </div>
      </div>

      {/* Teams + time */}
      <div className="mt-3 flex items-end justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-white">
              {getTeamAbbreviation(game.awayTeam)}
            </span>
            <span className="text-sm text-zinc-400">{game.awayTeam}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-white">
              {getTeamAbbreviation(game.homeTeam)}
            </span>
            <span className="text-sm text-zinc-400">{game.homeTeam}</span>
          </div>
        </div>
        <div className="text-right text-sm text-zinc-400">
          <div>{dateLabel}</div>
          <div className="font-medium text-zinc-300">{timeLabel}</div>
        </div>
      </div>
    </div>
  );
}
