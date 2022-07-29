import { Application, Sprite, Texture, TickerCallback } from 'pixi.js';
import { createEffect, onCleanup, ParentComponent } from 'solid-js';

import { createStore } from 'solid-js/store';
import { applyProps } from '../../lib/pixi/utils/props';

export const Game: ParentComponent = () => {
  let count = 0;
  const [state, setState] = createStore({
    x: 0,
    y: 0,
    rotation: 0,
    anchor: 1,
  });

  const canvasRef: HTMLCanvasElement = (
    <canvas style={{ height: '100%', width: '100%' }} />
  ) as any as HTMLCanvasElement;

  const containerRef: HTMLDivElement = (
    <div id='canvas-container' class='w-full'>
      {canvasRef}
    </div>
  ) as any as HTMLDivElement;

  const app = new Application({
    resolution: window.devicePixelRatio || 1,
    view: canvasRef,
    resizeTo: containerRef,
  });

  const sprite = new Sprite(Texture.from(''));
  app.stage.addChild(sprite);

  const moveBunny: TickerCallback<any> = (delta) => {
    const i = (count += 0.05 * delta);
    setState({
      x: Math.sin(i) * 100,
      y: Math.cos(i) * 100,
      rotation: Math.sin(i) * Math.PI,
      anchor: Math.sin(i / 2),
    });

    applyProps(sprite, state);
  };

  createEffect(() => {
    app.ticker.add(moveBunny);

    onCleanup(() => {
      if (app.ticker) {
        app.ticker.remove(moveBunny);
      }
    });
  });

  onCleanup(() => {
    if (app.stage) {
      app.stage.removeChild(sprite);
    }
    app.stage.removeChild(sprite);
    app.destroy();
  });

  return (
    <div class='game-layout h-full w-full'>
      <main class='game-entry'>{containerRef}</main>
    </div>
  );
};
