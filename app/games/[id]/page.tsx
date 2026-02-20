'use client';

import { useParams } from 'next/navigation';
import { useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import GameDetailView from '@/components/GameDetailView';
import { mockGames } from '@/lib/mock-data/games';
import { Game } from '@/lib/types';

// Enrich mock data (same logic as home page)
function enrichMockGames(games: Game[]): Game[] {
  return games.map((game, index) => ({
    ...game,
    isLive: index === 0,
  }));
}

export default function GameDetailPage() {
  const params = useParams();
  const gameId = params.id as string;

  const enrichedGames = useMemo(() => enrichMockGames(mockGames), []);
  const game = enrichedGames.find(g => g.id === gameId);

  if (!game) {
    return (
      <div className="mx-auto min-h-screen max-w-md bg-black font-sans">
        <Header />
        <div className="px-4 py-8">
          <Link href="/" className="text-sm text-zinc-400 hover:text-white">
            ← Back to schedule
          </Link>
          <p className="mt-8 text-center text-zinc-500">Game not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto min-h-screen max-w-md bg-black font-sans">
      <Header />
      <div className="px-4 py-2">
        <Link href="/" className="text-sm text-zinc-400 hover:text-white">
          ← Back to schedule
        </Link>
      </div>
      <GameDetailView game={game} />
    </div>
  );
}
