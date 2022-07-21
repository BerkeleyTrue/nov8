import createRouter from 'router5';
import browserPluginFactory from 'router5-plugin-browser';
import { Component, Show } from 'solid-js';
import { MetaProvider, Title } from 'solid-meta';
import { MainLayout } from './Layout/MainLayout';
import { RouterProvider } from './lib/router5';

const routes = [
  { name: 'home', path: '/' },
  { name: 'login', path: '/login' },
];

const router = createRouter(routes);
router.usePlugin(browserPluginFactory());
router.start();

const App: Component = () => {
  const { name } = router.getState();
  return (
    <RouterProvider router={router}>
      <MetaProvider>
        <MainLayout>
          <Title>Home</Title>
          <Show when={name == 'home'}>Home</Show>
          <p class='py-20 text-center text-4xl text-green-700'>Nov8 client</p>
        </MainLayout>
      </MetaProvider>
    </RouterProvider>
  );
};

export default App;
