import { v4 as uuid } from 'uuid';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, devtools } from 'zustand/middleware';

import { icons, IGame, IPlayer } from '../../types/nov8';

interface IGameState {
  player: IPlayer | void;
  game: IGame | void;
  ctx: {
    started: boolean;
    turn: number;
    turnPlayer: IPlayer | void;
  };
  createGame: (player: IPlayer) => void;
  createPlayer: (id?: string, name?: string) => void;
  resetGame: () => void;
  start: () => void;
}

export const createPlayer = (
  id: string = uuid(),
  name: string = 'Anon',
): IPlayer => {
  return {
    id: id,
    name,
  };
};

export const createGame = (): IGame => {
  return {
    id: uuid(),
    tecks: [],
    icons: Object.values(icons),
    age: 1,
  };
};

export const useGameStore = create<IGameState>()(
  devtools(
    persist(
      immer((set, get) => ({
        player: undefined,
        game: undefined,
        ctx: {
          started: false,
          turn: 0,
          turnPlayer: undefined,
        },
        createPlayer: (id = uuid(), name) => {
          set((state) => {
            state.player = createPlayer(id, name);
          });
        },
        createGame: () => {
          set(() => ({ game: createGame() }));
        },
        resetGame: () => {
          set((state) => {
            if (!state.game || !state.player) {
              return (state.game = undefined);
            }
            state.game = createGame();
            state.start();
          });
        },
        start: () => {
          const game = get().game;
          if (!game) {
            throw new Error('Game not created');
          }
          set((state) => {
            state.ctx = {
              started: true,
              turn: 0,
              turnPlayer: undefined,
            };
          });
        },
      })),
      { name: 'game' },
    ),
  ),
);
