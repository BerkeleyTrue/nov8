import { Component, Match, Switch } from 'solid-js';

import { Home } from './pages/Home';
import { MainLayout } from './Layout/MainLayout';
import { Auth } from './pages/Auth';
import { createRoute } from './lib/router5/createRoute';

const App: Component = () => {
  const useRoute = createRoute();
  const match = (name: string) => useRoute()?.route?.name == name;

  return (
    <MainLayout>
      <Switch>
        <Match when={match('home')}>
          <Home />
        </Match>
        <Match when={match('login')}>
          <Auth />
        </Match>
        <Match when={match('signup')}>
          <Auth />
        </Match>
      </Switch>
    </MainLayout>
  );
};

export default App;
