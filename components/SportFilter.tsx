'use client';

import { SportKey } from '@/lib/types';

const SPORTS: SportKey[] = ['All', 'NBA', 'NFL', 'MLB', 'NHL', 'MLS'];

interface SportFilterProps {
  selected: SportKey;
  onSelect: (sport: SportKey) => void;
}

export default function SportFilter({ selected, onSelect }: SportFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-hide">
      {SPORTS.map(sport => (
        <button
          key={sport}
          onClick={() => onSelect(sport)}
          className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            selected === sport
              ? 'bg-purple-500 text-white'
              : 'border border-zinc-700 bg-transparent text-zinc-300 hover:border-zinc-500'
          }`}
        >
          {sport}
        </button>
      ))}
    </div>
  );
}
