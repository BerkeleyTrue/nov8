import { NextPage } from 'next';

const GamePage: NextPage = () => {
  return (
    <div className='game-layout h-full w-full'>
      <main className='game-entry h-full w-full'>
        <div id='game-container' className='aspect-video w-full'>
          Game
        </div>
      </main>
    </div>
  );
};

export default GamePage;