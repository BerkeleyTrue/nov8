import { createEffect, onCleanup, ParentComponent, splitProps } from 'solid-js';
import { BaseTexture, Texture, Sprite as PixiSprite } from 'pixi.js';
import { usePixiStage } from './Provider';
import { applyProps, PointProp } from './utils/props';

interface SpriteProps extends Partial<Omit<PixiSprite, 'anchor'>> {
  image?: HTMLImageElement | string;
  video?: HTMLVideoElement | string;
  source?:
    | HTMLImageElement
    | HTMLVideoElement
    | HTMLCanvasElement
    | BaseTexture
    | string;
  anchor?: PointProp;
}

export const Sprite: ParentComponent<SpriteProps> = (props) => {
  let sprite: PixiSprite | undefined;
  const [local, pixiProps] = splitProps(props, ['image', 'video', 'source']);

  // instantiate sprite
  createEffect(() => {
    const stage = usePixiStage();
    if (!stage) {
      return;
    }
    const res = local.image || local.video || local.source;
    const texture = Texture.from(res);
    sprite = new PixiSprite(texture);
    stage.addChild(sprite);

    onCleanup(() => {
      if (stage) {
        stage.removeChild(sprite);
      }
      sprite.destroy();
    });
  });

  // update props
  createEffect((prev) => {
    if (!sprite) {
      return;
    }
    applyProps(sprite, prev, pixiProps);
    return { ...pixiProps };
  });

  return undefined;
};
