import { Application } from 'pixi.js';
import { createContext, ParentComponent, useContext } from 'solid-js';

export const PixiContext = createContext<Application | undefined>();

export const PixiProvider: ParentComponent<{ app: Application }> = (props) => {
  return (
    <PixiContext.Provider value={props.app}>
      {props.children}
    </PixiContext.Provider>
  );
};

export const usePixiApp = () => useContext(PixiContext);
