import { lazy } from 'solid-js';

export const Game = lazy(async () => {
  const game = await import('./Game');
  return { default: game.Game };
});
