import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

import { createGame, createPlayer } from '../../core/game/game';
import { useLocalStorage } from '../../lib/react/hooks';
import { IGame } from '../../types/nov8';
import { ParentComponent } from '../../types/react';

declare global {
  interface Window {
    __resetGame: () => void;
  }
}

export const Game: ParentComponent = () => {
  const [game, setGame] = useLocalStorage<IGame | undefined>('game', undefined);
  const { data } = useSession();
  const player = createPlayer(
    data?.user?.id ?? undefined,
    data?.user?.name ?? undefined,
  );

  useEffect(() => {
    if (!game) {
      setGame(createGame(player));
    }
  }, [game, setGame, player]);

  useEffect(() => {
    const windowRef = typeof window !== 'undefined' ? window : undefined;
    if (windowRef) {
      windowRef.__resetGame = () => setGame(createGame(player));
    }
  }, [setGame, player]);

  return (
    <div className='game-layout h-full w-full'>
      <main className='game-entry h-full w-full'>
        <div id='game-container' className='aspect-video w-full'>
          Game {game?.id ?? 'loading...'}
        </div>
        <div>hand</div>
      </main>
    </div>
  );
};
