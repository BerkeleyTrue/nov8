import { NextPage } from 'next';
import { Suspense } from 'react';
import { DynamicGame } from './Game';

const GamePage: NextPage = () => {
  return (
    <div className='game-layout h-full w-full'>
      <main className='game-entry h-full w-full'>
        <div id='game-container' className='aspect-video w-full'>
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicGame />
          </Suspense>
        </div>
      </main>
    </div>
  );
};

export default GamePage;
