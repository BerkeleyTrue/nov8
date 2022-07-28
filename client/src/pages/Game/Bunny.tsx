import { ParentComponent } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Sprite } from '../../lib/pixi/Sprite';
import { useTick } from '../../lib/pixi/useTick';

export const Bunny: ParentComponent = () => {
  let count = 0;
  const [state, setState] = createStore({
    x: 0,
    y: 0,
    rotation: 0,
  });
  useTick((delta) => {
    const i = (count += 0.05 * delta);
    setState({
      x: Math.sin(i) * 100,
      y: Math.cos(i) * 100,
      rotation: Math.sin(i) * Math.PI,
    });
  });
  return (
    <Sprite
      image='https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/IaUrttj.png'
      {...state}
    />
  );
};
