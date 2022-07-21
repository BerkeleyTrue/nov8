import { Component } from 'solid-js';
import { MetaProvider } from 'solid-meta';

import { AppTitle } from './components/AppTitle';
import { createRouter } from './infra/router5';
import { MainLayout } from './Layout/MainLayout';
import { RouterProvider } from './lib/router5';

const routes = [
  { name: 'home', path: '/' },
  { name: 'login', path: '/login' },
];

const router = createRouter({ routes });

const App: Component = () => {
  return (
    <RouterProvider router={router}>
      <MetaProvider>
        <MainLayout>
          <AppTitle subTitle='home' />
          <p class='py-20 text-center text-4xl text-green-700'>Nov8 client</p>
        </MainLayout>
      </MetaProvider>
    </RouterProvider>
  );
};

export default App;
