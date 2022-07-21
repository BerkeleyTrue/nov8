import { Component, Match, Switch } from 'solid-js';

import { Home } from './pages/Home';
import { MainLayout } from './Layout/MainLayout';
import { Login } from './pages/Login';
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
          <Login />
        </Match>
      </Switch>
    </MainLayout>
  );
};

export default App;
