'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SummaryCard from '@/components/SummaryCard';
import SportFilter from '@/components/SportFilter';
import GameList from '@/components/GameList';
import { mockGames } from '@/lib/mock-data/games';
import { SportKey, Game } from '@/lib/types';

// Enrich mock data with isLive flag and ensure some divergences show for the skeleton
function enrichMockGames(games: Game[]): Game[] {
  return games.map((game, index) => ({
    ...game,
    // Mark the first game as live to match the mock design
    isLive: index === 0,
  }));
}

export default function Home() {
  const [selectedSport, setSelectedSport] = useState<SportKey>('All');

  const enrichedGames = useMemo(() => enrichMockGames(mockGames), []);

  const filteredGames = selectedSport === 'All'
    ? enrichedGames
    : enrichedGames.filter(g => g.sport === selectedSport);

  return (
    <div className="mx-auto min-h-screen max-w-md bg-black font-sans">
      <Header />
      <div className="mt-2">
        <SummaryCard games={filteredGames} />
      </div>
      <SportFilter selected={selectedSport} onSelect={setSelectedSport} />
      <GameList games={filteredGames} />
    </div>
  );
}
