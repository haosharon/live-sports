'use client';

import { Game } from '@/lib/types';
import GameCard from './GameCard';

interface GameListProps {
  games: Game[];
}

interface DateGroup {
  label: string;
  games: Game[];
}

function groupByDate(games: Game[]): DateGroup[] {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const groups: Map<string, Game[]> = new Map();

  for (const game of games) {
    const date = new Date(game.gameTime);
    const gameDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    let label: string;
    if (gameDate.getTime() === today.getTime()) {
      label = 'TODAY';
    } else if (gameDate.getTime() === tomorrow.getTime()) {
      label = 'TOMORROW';
    } else {
      label = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase();
    }

    if (!groups.has(label)) {
      groups.set(label, []);
    }
    groups.get(label)!.push(game);
  }

  return Array.from(groups.entries()).map(([label, games]) => ({ label, games }));
}

export default function GameList({ games }: GameListProps) {
  const dateGroups = groupByDate(games);

  if (games.length === 0) {
    return (
      <div className="px-4 py-8 text-center text-zinc-500">
        No games found.
      </div>
    );
  }

  return (
    <div className="px-4 pb-8">
      {dateGroups.map(group => (
        <div key={group.label}>
          <h2 className="mb-3 mt-5 text-xs font-semibold tracking-wider text-zinc-500">
            {group.label}
          </h2>
          <div className="space-y-3">
            {group.games.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
