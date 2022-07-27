import { Application } from 'pixi.js';
import { createEffect, onCleanup, ParentComponent } from 'solid-js';
import { PixiProvider } from './Provider';

export interface StageProps {
  id?: string;
  class?: string;
  height?: string;
  width?: string;
}

export const Stage: ParentComponent<StageProps> = (props) => {
  let app: Application | undefined;
  let canvasRef: HTMLCanvasElement = (
    <canvas style={{ height: '100%', width: '100%' }} />
  ) as any as HTMLCanvasElement;

  let containerRef: HTMLDivElement = (
    <div
      id={props.id}
      class={props.class}
      style={{ height: props.height, width: props.width }}
    >
      {canvasRef}
    </div>
  ) as any as HTMLDivElement;

  createEffect(() => {
    app = new Application({
      width: 800,
      height: 600,
      resolution: window.devicePixelRatio || 1,
      view: canvasRef,
    });

    onCleanup(() => {
      app.destroy();
    });
  });

  createEffect(() => {
    <PixiProvider app={app}>{props.children}</PixiProvider>;
  });

  return containerRef;
};
