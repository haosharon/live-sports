'use client';

import { Game, DIVERGENCE_GAP_THRESHOLD } from '@/lib/types';

interface SummaryCardProps {
  games: Game[];
}

export default function SummaryCard({ games }: SummaryCardProps) {
  const gamesWithEdges = games.filter(g => g.maxDivergence >= DIVERGENCE_GAP_THRESHOLD).length;
  const totalGames = games.length;
  const progress = totalGames > 0 ? (gamesWithEdges / totalGames) * 100 : 0;

  return (
    <div className="mx-4 rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3">
      <p className="text-sm text-zinc-400">Upcoming games with edges</p>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-white">{gamesWithEdges}</span>
        <span className="text-sm text-zinc-400">of {totalGames} total matchups</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-purple-500 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
