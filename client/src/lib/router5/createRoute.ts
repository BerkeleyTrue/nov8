import { Accessor, useContext } from 'solid-js';
import { RouteContext } from './Context';
import { IRouteContext } from './types';

export const createRoute = (): Accessor<IRouteContext> => () =>
  useContext(RouteContext);
