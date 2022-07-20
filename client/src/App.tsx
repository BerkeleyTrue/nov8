import createRouter from 'router5';
import browserPluginFactory from 'router5-plugin-browser';
import { Component, Show } from 'solid-js';
import { MetaProvider, Title } from 'solid-meta';

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
    <MetaProvider>
      <Title>Home</Title>
      <Show when={name == 'home'}>Home</Show>
      <p class='py-20 text-center text-4xl text-green-700'>Nov8 client</p>;
    </MetaProvider>
  );
};

export default App;
