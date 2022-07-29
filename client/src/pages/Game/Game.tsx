import { ParentComponent } from 'solid-js';
import { Container } from '../../lib/pixi/Container';
import { Stage } from '../../lib/pixi/Stage';
import { Bunny } from './Bunny';

export const Game: ParentComponent = () => {
  return (
    <div class='game-layout h-full w-full'>
      <main class='game-entry'>
        <Stage class='w-full' id='pixi-container' backgroundAlpha={0}>
          <Container x={150} y={150}>
            <Bunny />
          </Container>
        </Stage>
      </main>
    </div>
  );
};
