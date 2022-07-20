import { Component } from 'solid-js';

export const NavBar: Component = () => {
  return (
    <div class='bg-darker-600 h-14 w-full'>
      <div class='flex h-full justify-between px-4 md:px-1'>
        <div class='h-full items-center'>
          <button class='bg-darker-600 hover:bg-darker-700 text-light h-full px-6 text-2xl leading-10 tracking-widest'>
            Nov8
          </button>
        </div>
        <div class='h-full items-center'>
          <button class='bg-darker-600 hover:bg-darker-700 text-light h-full px-6 uppercase'>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
