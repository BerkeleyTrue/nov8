import { Sprite as PixiSprite, Texture } from 'pixi.js';

const Sprite = async () => {
  const texture = await Texture.fromURL(
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png',
  );
  const sprite = new PixiSprite(texture);

  return sprite;
};

export default Sprite;
