import { v4 as uuid } from 'uuid';
import create from 'zustand';

import { IconTypesMap, IGame, IPlayer } from '../../types/nov8';

interface IGameState {
  players: IPlayer[];
  game: IGame | void;
  createGame: (player: IPlayer) => void;
  createPlayer: (id: string, name: string) => void;
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

export const useStore = create<IGameState>((set) => ({
  players: [],
  game: undefined,
  createPlayer: (id = uuid(), name) => {
    set((state) => ({
      ...state,
      players: [...state.players, createPlayer(id, name)],
    }));
  },
  createGame: (player: IPlayer) => {
    set(() => ({ game: createGame(player) }));
  },
}));
