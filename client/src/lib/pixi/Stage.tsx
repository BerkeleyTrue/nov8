import { Application, Container, Sprite, Texture } from 'pixi.js';
import { createEffect, ParentComponent } from 'solid-js';

export interface Props {}

export const Stage: ParentComponent<Props> = () => {
  let ref: HTMLCanvasElement;
  createEffect(() => {
    const container = new Container();
    let app = new Application({
      width: 800,
      height: 600,
      resolution: window.devicePixelRatio || 1,
      view: ref,
    });
    app.stage.addChild(container);

    const texture = Texture.from(
      'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png',
    );
    const sprite = new Sprite(texture);
    container.addChild(sprite);
  });
  return <canvas ref={ref} />;
};
