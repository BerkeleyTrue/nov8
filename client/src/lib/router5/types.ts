import { Router, State } from 'router5';

export type IRouteContext = {
  router: Router;
} & IRouteState;

export interface IRouteState {
  route: State;
  previousRoute: State | null;
}

export type UnsubscribeFn = () => void;
