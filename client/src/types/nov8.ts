type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>;
type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never;

export const icons = {
  rook: 'rook', // 1
  leaf: 'leaf', // 2
  works: 'works', // 3
  crown: 'crown', // 4
  bulb: 'bulb', // 5
} as const;

export const colors = {
  gray: 'gray',
  green: 'green',
  purple: 'purple',
  yellow: 'yellow',
  red: 'red',
  blue: 'blue',
} as const;

export type IconTypes = keyof typeof icons;
export type Colors = keyof typeof colors;

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
  icons: Tuple<IconTypes | null, 4>;
  dogmas: IDogma[];
}

export interface ITableau {
  iconDomination: Tuple<{ [icon in IconTypes]: number }, 5>;
  stacks: Tuple<{ [color in Colors]: number }, 5>;
}

export interface IGame {
  id: string;
  tecks: ITeck[];
  icons: IconTypes[];
  age: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
