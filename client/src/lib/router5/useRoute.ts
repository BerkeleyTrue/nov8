import { useContext } from 'solid-js';
import { RouteContext } from './Context';
import { IRouteContext } from './types';

export const useRoute = (): IRouteContext => {
  return useContext(RouteContext);
};
