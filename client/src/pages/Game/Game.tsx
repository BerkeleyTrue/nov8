import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

import { useGameStore } from '../../core/game/game';
import { ParentComponent } from '../../types/react';

declare global {
  interface Window {
    __resetGame: () => void;
  }
}

export const Game: ParentComponent = () => {
  const gameState = useGameStore();
  const { data } = useSession();

  useEffect(() => {
    if (!gameState.player && data?.user) {
      gameState.createPlayer(
        data?.user?.id ?? undefined,
        data?.user?.name ?? undefined,
      );
    }
  }, [gameState, data]);

  useEffect(() => {
    if (!gameState.game && gameState.player) {
      gameState.createGame(gameState.player);
    }
  }, [gameState]);

  useEffect(() => {
    const windowRef = typeof window !== 'undefined' ? window : undefined;
    if (windowRef) {
      windowRef.__resetGame = () => gameState.resetGame();
    }
  }, [gameState]);

  return (
    <div className='game-layout h-full w-full'>
      <main className='game-entry h-full w-full'>
        <div id='game-container' className='aspect-video w-full'>
          Game {gameState?.game?.id ?? 'loading...'}
        </div>
        <div>hand</div>
      </main>
    </div>
  );
};
