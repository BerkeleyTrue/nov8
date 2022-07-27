import { createEffect, ParentComponent } from 'solid-js';
import { BaseTexture, Texture, Sprite as PixiSprite } from 'pixi.js';
import { usePixiApp } from './Provider';

interface SpriteProps {
  image?: HTMLImageElement | string;
  video?: HTMLVideoElement | string;
  source?:
    | HTMLImageElement
    | HTMLVideoElement
    | HTMLCanvasElement
    | BaseTexture
    | string;
}

export const Sprite: ParentComponent<SpriteProps> = (props) => {
  const app = usePixiApp();

  createEffect(() => {
    const res = props.image || props.video || props.source;
    const texture = Texture.from(res);
    const sprite = new PixiSprite(texture);
    app.stage.addChild(sprite);
  });

  return undefined;
};
