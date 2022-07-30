import { ParentComponent } from 'solid-js';

export const Game: ParentComponent = () => {
  return (
    <div class='game-layout h-full w-full'>
      <main class='game-entry h-full w-full'>
        <div id='game-container' class='aspect-video w-full'>
          Game
        </div>
      </main>
    </div>
  );
};
