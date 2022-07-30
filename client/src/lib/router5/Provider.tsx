import { Router, SubscribeFn } from 'router5';
import { Component, createEffect, JSXElement, onCleanup } from 'solid-js';
import { createStore, reconcile } from 'solid-js/store';

import { RouteContext, RouterContext } from './Context';
import { IRouteState, UnsubscribeFn } from './types';

interface Props {
  router: Router;
  children: JSXElement;
}

export const RouterProvider: Component<Props> = (props) => {
  const route =
    props.router.getState(); /* eslint-disable-line solid/reactivity */

  const [routeState, setRouteState] = createStore<IRouteState>({
    route,
    previousRoute: { name: 'n/a', params: [], path: '/' },
  });

  createEffect(() => {
    const listener: SubscribeFn = (subscriptionState) => {
      setRouteState(
        reconcile({
          route: subscriptionState.route,
          previousRoute: subscriptionState.previousRoute,
        }),
      );
    };

    const subscription = props.router.subscribe(listener) as UnsubscribeFn;

    onCleanup(() => subscription && subscription());
  });

  return (
    <RouterContext.Provider value={props.router}>
      <RouteContext.Provider value={{ router: props.router, ...routeState }}>
        {props.children}
      </RouteContext.Provider>
    </RouterContext.Provider>
  );
};
