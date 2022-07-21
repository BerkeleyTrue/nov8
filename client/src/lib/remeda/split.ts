/* eslint-disable no-unused-vars, no-redeclare */
import { isString, purry } from 'remeda';

const _split = (x: string | null | undefined, separator?: string): string[] =>
  isString(x) ? x.split(separator) : [];
/**
 * Data last
 */
export function split(
  separator?: string,
): (x: string | null | undefined) => string[];

/**
 * Data first
 */
export function split(
  x: string | null | undefined,
  separator?: string,
): string[];

export function split() {
  return purry(_split, arguments);
}
