'use client';

import { Game, getTeamAbbreviation, SPORT_COLORS } from '@/lib/types';
import { getLocalDateLabel, getLocalTimeLabel } from '@/lib/date-utils';
import { formatProbability } from '@/lib/mock-data/games';

interface GameDetailViewProps {
  game: Game;
}

function SportBadge({ sport, isLive }: { sport: string; isLive?: boolean }) {
  const color = SPORT_COLORS[sport] || '#a855f7';
  return (
    <div className="flex items-center justify-between px-4 pt-2">
      <div className="flex items-center gap-2">
        <div
          className="flex h-6 w-6 items-center justify-center rounded-full"
          style={{ backgroundColor: `${color}30` }}
        >
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: color }} />
        </div>
        <span className="text-sm font-medium text-zinc-300">{sport}</span>
      </div>
      {isLive && (
        <span className="flex items-center gap-1 text-sm font-semibold text-red-500">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          LIVE
        </span>
      )}
    </div>
  );
}

// Convert decimal odds to American odds for display
function decimalToAmerican(decimalOdds: number): string {
  if (decimalOdds >= 2.0) {
    const american = Math.round((decimalOdds - 1) * 100);
    return `+${american}`;
  } else {
    const american = Math.round(-100 / (decimalOdds - 1));
    return `-${american}`;
  }
}

function ProbabilityBar({ probability, color }: { probability: number; color: string }) {
  return (
    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
      <div
        className="h-full rounded-full transition-all"
        style={{ width: `${probability * 100}%`, backgroundColor: color }}
      />
    </div>
  );
}

export default function GameDetailView({ game }: GameDetailViewProps) {
  const dateLabel = getLocalDateLabel(game.gameTime);
  const timeLabel = getLocalTimeLabel(game.gameTime);
  const awayAbbr = getTeamAbbreviation(game.awayTeam);
  const homeAbbr = getTeamAbbreviation(game.homeTeam);
  const divergencePercent = (game.maxDivergence * 100).toFixed(1);

  return (
    <div className="space-y-4 px-4 pb-8">
      {/* Sport + Live badge */}
      <SportBadge sport={game.sport} isLive={game.isLive} />

      {/* Matchup card */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
        <div className="flex items-center justify-between text-sm text-zinc-400">
          <span>{dateLabel}</span>
          <span>{timeLabel}</span>
        </div>
        <div className="mt-3 flex items-center justify-center gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">{awayAbbr}</div>
            <div className="mt-1 text-xs text-zinc-400">{game.awayTeam}</div>
          </div>
          <span className="text-sm text-zinc-500">vs</span>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">{homeAbbr}</div>
            <div className="mt-1 text-xs text-zinc-400">{game.homeTeam}</div>
          </div>
        </div>
      </div>

      {/* Divergence badge */}
      <div className="flex justify-center">
        <span className="inline-flex items-center gap-1 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400">
          + {divergencePercent}% divergence
        </span>
      </div>

      {/* Vegas Odds section */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-zinc-400">
              <path d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.776V6.24H6.332l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.25 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84L4.168 6.241H2.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-white">Vegas Odds</div>
            <div className="text-xs text-zinc-500">Sportsbook implied probability</div>
          </div>
        </div>

        {/* Away team odds */}
        <div className="flex items-center justify-between border-b border-zinc-800 py-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">{awayAbbr}</span>
            {game.vegasAwayOdds > 0 && (
              <span className="rounded bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
                {decimalToAmerican(game.vegasAwayOdds)}
              </span>
            )}
          </div>
          <span className="text-xl font-mono text-white">
            {formatProbability(game.vegasAwayProbability)}
          </span>
        </div>

        {/* Home team odds */}
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">{homeAbbr}</span>
            {game.vegasHomeOdds > 0 && (
              <span className="rounded bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
                {decimalToAmerican(game.vegasHomeOdds)}
              </span>
            )}
          </div>
          <span className="text-xl font-mono text-white">
            {formatProbability(game.vegasHomeProbability)}
          </span>
        </div>
      </div>

      {/* The Crowd (Polymarket) section */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-zinc-400">
              <path d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A18.364 18.364 0 0 1 12 21.75c-2.331 0-4.512-.457-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>
          </div>
          <div>
            <div className="font-semibold text-white">The Crowd</div>
            <div className="text-xs text-zinc-500">Prediction market consensus</div>
          </div>
        </div>

        {/* Away team */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white">{awayAbbr}</span>
            <span className="font-mono text-purple-400">
              {formatProbability(game.polymarketAwayProbability)}
            </span>
          </div>
          <ProbabilityBar probability={game.polymarketAwayProbability} color="#a855f7" />
        </div>

        {/* Home team */}
        <div>
          <div className="flex items-center justify-between">
            <span className="font-bold text-white">{homeAbbr}</span>
            <span className="font-mono text-purple-400">
              {formatProbability(game.polymarketHomeProbability)}
            </span>
          </div>
          <ProbabilityBar probability={game.polymarketHomeProbability} color="#a855f7" />
        </div>
      </div>

      {/* Side-by-Side comparison */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
        <h3 className="mb-4 text-base font-bold text-white">Side-by-Side</h3>

        {/* Away team comparison */}
        <div className="mb-4">
          <div className="mb-2 text-sm text-zinc-400">{awayAbbr} win probability</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="w-12 text-right text-xs font-mono text-zinc-400">
                {formatProbability(game.vegasAwayProbability)}
              </span>
              <div className="flex-1">
                <div
                  className="h-2.5 rounded-full bg-purple-600"
                  style={{ width: `${game.vegasAwayProbability * 100}%` }}
                />
              </div>
              <span className="w-12 text-xs text-zinc-500">Vegas</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-right text-xs font-mono text-zinc-400">
                {formatProbability(game.polymarketAwayProbability)}
              </span>
              <div className="flex-1">
                <div
                  className="h-2.5 rounded-full bg-purple-500"
                  style={{ width: `${game.polymarketAwayProbability * 100}%` }}
                />
              </div>
              <span className="w-12 text-xs text-zinc-500">Crowd</span>
            </div>
          </div>
        </div>

        {/* Home team comparison */}
        <div>
          <div className="mb-2 text-sm text-zinc-400">{homeAbbr} win probability</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="w-12 text-right text-xs font-mono text-zinc-400">
                {formatProbability(game.vegasHomeProbability)}
              </span>
              <div className="flex-1">
                <div
                  className="h-2.5 rounded-full bg-purple-600"
                  style={{ width: `${game.vegasHomeProbability * 100}%` }}
                />
              </div>
              <span className="w-12 text-xs text-zinc-500">Vegas</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-right text-xs font-mono text-zinc-400">
                {formatProbability(game.polymarketHomeProbability)}
              </span>
              <div className="flex-1">
                <div
                  className="h-2.5 rounded-full bg-purple-500"
                  style={{ width: `${game.polymarketHomeProbability * 100}%` }}
                />
              </div>
              <span className="w-12 text-xs text-zinc-500">Crowd</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
