import { Sprite as PixiSprite, Texture } from 'pixi.js';
import { createMemo } from 'solid-js';

export interface SpriteProps {
  image: string;
}

export const Sprite = (props: SpriteProps) => {
  const texture = createMemo(() => Texture.from(props.image));
  const sprite = createMemo(() => new PixiSprite(texture()));

  return sprite;
};
