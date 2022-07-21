import { Component } from 'solid-js';
import { RLink } from '../lib/router5/Link';

export const NavBar: Component = () => {
  return (
    <div class='bg-darker-600 h-14 w-full'>
      <div class='flex h-full justify-between px-4 md:px-1'>
        <div class='h-full items-center'>
          <RLink
            routeName='home'
            activeClass='text-light-400'
            class='text-light '
          >
            <button class='bg-darker-600 hover:bg-darker-700 h-full px-6 text-2xl leading-10 tracking-widest'>
              Nov8
            </button>
          </RLink>
        </div>
        <div class='h-full items-center'>
          <RLink
            routeName='login'
            activeClass='text-light-400'
            class='text-light'
          >
            <button class='bg-darker-600 hover:bg-darker-700 h-full px-6 uppercase'>
              Sign In
            </button>
          </RLink>
        </div>
      </div>
    </div>
  );
};
