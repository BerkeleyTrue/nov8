import * as R from 'remeda';
import {
  createContext,
  useReducer,
  useContext,
  Reducer,
  FunctionComponent,
  PropsWithChildren,
  Dispatch,
} from 'react';
import { ActionTypes, IAction, IToast } from './types';

export interface ToastState {
  toasts: IToast[];
}

const ToastStateContext = createContext<ToastState>({ toasts: [] });
const ToastDispatchContext = createContext<Dispatch<IAction>>(R.noop);

const ToastReducer: Reducer<ToastState, IAction> = (state, action) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case ActionTypes[0]: {
      return {
        ...state,
        toasts: [...state.toasts, action.toast],
      };
    }
    case ActionTypes[1]: {
      const updatedToasts = state.toasts.filter((e) => e.id != action.id);
      return {
        ...state,
        toasts: updatedToasts,
      };
    }
    default: {
      throw new Error('unhandled action');
    }
  }
};

export const ToastProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(ToastReducer, {
    toasts: [],
  });

  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
};

export const useToasts = () => useContext(ToastStateContext);
export const useToastDispatch = () => useContext(ToastDispatchContext);
