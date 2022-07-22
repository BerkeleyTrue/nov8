import { Component, Match, Switch } from 'solid-js';

import { createRoute } from './lib/router5/createRoute';
import { MainLayout } from './Layout/MainLayout';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { Game } from './pages/Game';

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
        <Match when={match('game')}>
          <Game />
        </Match>
      </Switch>
    </MainLayout>
  );
};

export default App;
