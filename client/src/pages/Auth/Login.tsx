import { Component } from 'solid-js';
import { createRoute } from '../../lib/router5/createRoute';
import { RLink } from '../../lib/router5/Link';

export const Auth: Component = () => {
  const useRoute = createRoute();
  const isSignup = () => useRoute()?.route?.name === 'signup';
  return (
    <div class='flex h-full w-full items-center justify-center'>
      <div class='card bg-darker-400 flex h-28 w-48 flex-col justify-between shadow-lg'>
        <h2 class='text-xl leading-4 tracking-widest'>
          {useRoute()?.route?.name}
          <br />
          {isSignup() ? 'sign up' : 'login'}
        </h2>
        <RLink routeName='signup'>register</RLink>
      </div>
    </div>
  );
};
