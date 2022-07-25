import { ParentComponent } from 'solid-js';
import { Stage } from '../../lib/pixi/Stage';

export const Game: ParentComponent = () => {
  return (
    <div class='game-layout h-full w-full'>
      <main class='game-entry'>
        <Stage />
      </main>
    </div>
  );
};
