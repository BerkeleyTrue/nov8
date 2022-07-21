import { Router } from 'router5';
import { createContext } from 'solid-js';

import { IRouteContext } from './types';

export const RouteContext = createContext<IRouteContext>(null);
export const RouterContext = createContext<Router>(null);
