import { ParentComponent } from 'solid-js';
import { Stage } from '../../lib/pixi/Stage';
import { Bunny } from './Bunny';

export const Game: ParentComponent = () => {
  return (
    <div class='game-layout h-full w-full'>
      <main class='game-entry'>
        <Stage class='w-full md:w-3/5' id='pixi-container' backgroundAlpha={0}>
          <Bunny />
        </Stage>
      </main>
    </div>
  );
};
