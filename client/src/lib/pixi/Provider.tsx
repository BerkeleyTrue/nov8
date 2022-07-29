import { Application } from 'pixi.js';
import { createContext, ParentComponent, useContext } from 'solid-js';

export const PixiContext = createContext<Application | void>();
export const PixiStageContext = createContext<Application['stage'] | void>();

export const PixiProvider: ParentComponent<{ app: Application }> = (props) => {
  return (
    <PixiContext.Provider value={props.app}>
      <PixiStageContext.Provider value={props.app.stage}>
        {props.children}
      </PixiStageContext.Provider>
    </PixiContext.Provider>
  );
};

export const usePixiApp = () => useContext(PixiContext);
export const usePixiStage = () => useContext(PixiStageContext);
