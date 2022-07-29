/* @refresh reload */
import { render } from 'solid-js/web';
import { MetaProvider } from 'solid-meta';
import * as PIXI from 'pixi.js';

import './index.css';
import { RouterProvider } from './lib/router5';
import { createRouter } from './infra/router5';

import App from './App';

'__PIXI_INSPECTOR_GLOBAL_HOOK__' in window &&
  window['__PIXI_INSPECTOR_GLOBAL_HOOK__'].register({ PIXI });

const routes = [
  { name: 'home', path: '/' },
  { name: 'login', path: '/login' },
  { name: 'signup', path: '/signup' },
  { name: 'game', path: '/game' },
];

const router = createRouter({ routes });

render(
  () => (
    <RouterProvider router={router}>
      <MetaProvider>
        <App />
      </MetaProvider>
    </RouterProvider>
  ),
  document.getElementById('root') as HTMLElement,
);
