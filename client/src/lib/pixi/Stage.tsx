import { Application, IApplicationOptions } from 'pixi.js';
import { createEffect, onCleanup, ParentComponent, splitProps } from 'solid-js';
import { PixiProvider } from './Provider';

export interface StageProps extends IApplicationOptions {
  id?: string;
  class?: string;
}

export const Stage: ParentComponent<StageProps> = (props) => {
  let [local, options] = splitProps(props, ['id', 'class']);
  let app: Application | undefined;
  let canvasRef: HTMLCanvasElement = (
    <canvas style={{ height: '100%', width: '100%' }} />
  ) as any as HTMLCanvasElement;

  let containerRef: HTMLDivElement = (
    <div id={local.id} class={local.class}>
      {canvasRef}
    </div>
  ) as any as HTMLDivElement;

  createEffect(() => {
    app = new Application({
      ...options,
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
