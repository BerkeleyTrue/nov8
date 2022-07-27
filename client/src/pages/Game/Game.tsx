import { ParentComponent } from 'solid-js';
import { Sprite } from '../../lib/pixi/Sprite';
import { Stage } from '../../lib/pixi/Stage';

export const Game: ParentComponent = () => {
  return (
    <div class='game-layout h-full w-full'>
      <main class='game-entry'>
        <Stage class='w-full md:w-3/5' id='pixi-container'>
          <Sprite image='https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png' />
        </Stage>
      </main>
    </div>
  );
};
