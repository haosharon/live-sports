'use client';

import { Game } from '@/lib/types';
import { getLocalDateGroupLabel } from '@/lib/date-utils';
import GameCard from './GameCard';

interface GameListProps {
  games: Game[];
}

interface DateGroup {
  label: string;
  games: Game[];
}

function groupByDate(games: Game[]): DateGroup[] {
  const groups: Map<string, Game[]> = new Map();

  for (const game of games) {
    const label = getLocalDateGroupLabel(game.gameTime);

    if (!groups.has(label)) {
      groups.set(label, []);
    }
    groups.get(label)!.push(game);
  }

  return Array.from(groups.entries()).map(([label, dateGames]) => ({ label, games: dateGames }));
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
