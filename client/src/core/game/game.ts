import { v4 as uuid } from 'uuid';
import create from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, devtools } from 'zustand/middleware';

import { IconTypesMap, IGame, IPlayer } from '../../types/nov8';

interface IGameState {
  player: IPlayer | void;
  game: IGame | void;
  createGame: (player: IPlayer) => void;
  createPlayer: (id?: string, name?: string) => void;
  resetGame: () => void;
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

export const createGame = (player: IPlayer): IGame => {
  return {
    id: uuid(),
    currentPlayer: '',
    players: [player.id],
    tecks: [],
    icons: Object.values(IconTypesMap),
  };
};

export const useGameStore = create<IGameState>()(
  devtools(
    persist(
      immer((set) => ({
        player: undefined,
        game: undefined,
        createPlayer: (id = uuid(), name) => {
          set((state) => {
            state.player = createPlayer(id, name);
          });
        },
        createGame: (player: IPlayer) => {
          set(() => ({ game: createGame(player) }));
        },
        resetGame: () => {
          set((state) => {
            if (!state.game || !state.player) {
              return (state.game = undefined);
            }
            state.game = createGame(state.player);
          });
        },
      })),
      { name: 'game' },
    ),
  ),
);
