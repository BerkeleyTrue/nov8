import { createEffect, onCleanup, ParentComponent, splitProps } from 'solid-js';
import {
  BaseTexture,
  Texture,
  Sprite as PixiSprite,
  Application,
} from 'pixi.js';
import { usePixiApp } from './Provider';

interface SpriteProps extends Partial<PixiSprite> {
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
  let sprite: PixiSprite | undefined;
  const app = usePixiApp();
  const [local, pixiProps] = splitProps(props, ['image', 'video', 'source']);

  createEffect(() => {
    if (!(app instanceof Application)) {
      return;
    }
    const res = local.image || local.video || local.source;
    const texture = Texture.from(res);
    sprite = new PixiSprite(texture);
    app.stage.addChild(sprite);

    onCleanup(() => {
      app.stage.removeChild(sprite);
      sprite.destroy();
    });
  });

  createEffect(() => {
    if (!sprite) {
      return;
    }
    Object.assign(sprite, pixiProps);
  });

  return undefined;
};
