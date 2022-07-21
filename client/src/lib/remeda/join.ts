/* eslint-disable no-unused-vars, no-redeclare */
import { purry } from 'remeda';

const _join = (x: string[] | null | undefined, separator?: string): string =>
  Array.isArray(x) ? x.join(separator) : '';
/**
 * Data last
 */
export function join(
  separator?: string,
): (x: string[] | null | undefined) => string;

/**
 * Data first
 */
export function join(
  x: string[] | null | undefined,
  separator?: string,
): string;

export function join() {
  return purry(_join, arguments);
}
