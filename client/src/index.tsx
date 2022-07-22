/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import { RouterProvider } from './lib/router5';
import { createRouter } from './infra/router5';

import App from './App';
import { MetaProvider } from 'solid-meta';

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
