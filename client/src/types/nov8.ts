export const IconTypesMap = {
  rook: 'rook',
  leaf: 'leaf',
  works: 'works',
  crown: 'crown',
  bulb: 'bulb',
} as const;

export type IconTypes = keyof typeof IconTypesMap;

export type UUID = string;

export interface IPlayer {
  id: UUID;
  name: string;
}

export interface IDogma {
  description: string;
  icon: IconTypes;
  type: string;
}

export interface ITeck {
  id: number;
  name: string;
  color: string;
  icons: IconTypes[];
  dogmas: IDogma[];
}

export interface IGame {
  id: string;
  currentPlayer: UUID;
  players: UUID[];
  tecks: ITeck[];
  icons: IconTypes[];
}
