import data from './data.json';
import { v4 as uuid } from 'uuid';

export type IconTypes = 'rook' | 'leaf' | 'works' | 'crown' | 'bulb';
export type UUID = string;

export interface IPlayer {
  id: UUID;
  name: string;
}

export interface IDogma {
  description: string;
  icon: number;
  type: string;
}

export interface ITeck {
  id: number;
  name: string;
  color: string;
  icons: number[];
  dogmas: IDogma[];
}

export interface IIcon {
  id: number;
  name: string;
}

export interface IGame {
  id: string;
  currentPlayer: UUID;
  players: UUID[];
  tecks: ITeck[];
  icons: IIcon[];
}

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
    tecks: data.tecks,
    icons: data.icons,
  };
};
