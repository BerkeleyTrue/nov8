import * as R from 'remeda';
import { RendererOptions } from 'solid-js/universal/types/universal';
import { components } from './components';

export const tags = [
  'BitmapText',
  'Container',
  'Graphics',
  'NineSlicePlane',
  'ParticleContainer',
  'Sprite',
  'AnimatedSprite',
  'Text',
  'TilingSprite',
  'SimpleMesh',
  'SimpleRope',
];

export const elements: Record<string, () => any> = R.pipe(
  tags,
  R.map((type: string): [string, () => any] => [type, components[type]]),
  R.fromPairs<() => any>,
);

export const createElement: RendererOptions<any>['createElement'] = (tag) => {
  const fn = elements[tag] || R.noop;
  return fn();
};
