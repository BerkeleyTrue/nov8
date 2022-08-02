import { v4 as uuid } from 'uuid';
import { Reducer } from 'react';
import { IconTypesMap, IGame, IPlayer } from '../../types/nov8';

export interface CreateGameOptions {
  playerId: string;
  playerName: string;
  numOfPlayers: number;
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

export const gameReducer: Reducer<IGame, any> = (game) => {
  return game;
};
