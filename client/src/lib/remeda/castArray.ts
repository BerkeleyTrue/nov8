export const castArray = <T>(x: T | ReadonlyArray<T>): T[] =>
  Array.isArray(x) ? x : [x];
