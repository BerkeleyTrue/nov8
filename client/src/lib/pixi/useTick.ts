import { Application, TickerCallback } from 'pixi.js';
import { createEffect, onCleanup } from 'solid-js';
import { usePixiApp } from './Provider';

export const useTick = <T = any>(callback: TickerCallback<T>) => {
  createEffect(() => {
    const app = usePixiApp();
    if (!(app instanceof Application) || !app.ticker) {
      return;
    }
    app.ticker.add(callback);

    onCleanup(() => {
      if (app.ticker) {
        app.ticker.remove(callback);
      }
    });
  });
};
