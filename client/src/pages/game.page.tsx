import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { createGame, createPlayer } from '../core/game/game';

const GamePage: NextPage = () => {
  const { data } = useSession();
  const player = createPlayer(
    data?.user?.id ?? undefined,
    data?.user?.name ?? undefined,
  );
  const game = createGame(player);

  return (
    <div className='game-layout h-full w-full'>
      <main className='game-entry h-full w-full'>
        <div id='game-container' className='aspect-video w-full'>
          Game {game.id}
        </div>
      </main>
    </div>
  );
};

export default GamePage;
