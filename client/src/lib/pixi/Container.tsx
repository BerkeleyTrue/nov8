import { Container as PixiContainer } from 'pixi.js';
import { createEffect, onCleanup, ParentComponent } from 'solid-js';
import { usePixiStage } from './Provider';

export interface ContainerProps
  extends Partial<Omit<PixiContainer, 'children'>> {
  height?: number;
  width?: number;
}

export const Container: ParentComponent<ContainerProps> = (props) => {
  let container: PixiContainer | undefined;

  createEffect(() => {
    const stage = usePixiStage();

    if (!stage) {
      return;
    }

    container = new PixiContainer();

    stage.addChild(container);
    onCleanup(() => {
      stage.removeChild(container);
      container.destroy();
    });
  });

  createEffect(() => {
    if (container) {
      container.height = props.height;
      container.width = props.width;
    }
  });

  return undefined;
};
