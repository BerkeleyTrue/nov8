import {
  Application,
  Container,
  Sprite,
  Texture,
  TickerCallback,
} from 'pixi.js';
import { createEffect, onCleanup, ParentComponent } from 'solid-js';

import { createStore } from 'solid-js/store';
import { applyProps } from '../../lib/pixi/utils/props';

export const Game: ParentComponent = () => {
  let count = 0;
  const [state, setState] = createStore({
    x: 0,
    y: 0,
    rotation: 0,
    anchor: 0,
  });

  const canvasRef: HTMLCanvasElement = (
    <canvas style={{ height: '100%', width: '100%' }} />
  ) as any as HTMLCanvasElement;

  const containerRef: HTMLDivElement = (
    <div id='canvas-container' class='aspect-video w-full'>
      {canvasRef}
    </div>
  ) as any as HTMLDivElement;

  const app = new Application({
    resolution: window.devicePixelRatio || 1,
    view: canvasRef,
    resizeTo: containerRef,
    backgroundAlpha: 0,
  });

  const container = new Container();

  container.x = app.screen.width / 2;
  container.y = app.screen.height / 2;

  container.pivot.x = app.screen.width / 2;
  container.pivot.y = app.screen.height / 2;

  const bunny = new Sprite(
    Texture.from(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png',
    ),
  );
  createEffect(() => {
    container.addChild(bunny);

    app.stage.addChild(container);

    onCleanup(() => {
      container.removeChild(bunny);
      if (app.stage) {
        app.stage.removeChild(container);
      }
      app.stage.addChild(container);
    });
  });

  createEffect<typeof state>((prev) => {
    const moveBunny: TickerCallback<any> = (delta) => {
      const i = (count += 0.05 * delta);
      setState({
        x: Math.sin(i) * 100,
        y: Math.cos(i) * 100,
        rotation: Math.sin(i) * Math.PI,
        anchor: Math.sin(i / 2),
      });

      applyProps(bunny, state, prev);
    };

    app.ticker.add(moveBunny);

    onCleanup(() => {
      if (app.ticker) {
        app.ticker.remove(moveBunny);
      }
    });

    return { ...state };
  });

  onCleanup(() => {
    app.destroy();
  });

  return (
    <div class='game-layout h-full w-full'>
      <main class='game-entry h-full w-full'>{containerRef}</main>
    </div>
  );
};
