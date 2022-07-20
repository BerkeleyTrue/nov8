import { Component, JSXElement } from 'solid-js';
import { NavBar } from './NavBar';

interface Props {
  children: JSXElement;
}

export const MainLayout: Component<Props> = (props) => {
  return (
    <div class='from-darker-600 to-darker-400 via-darker-500 flex h-screen w-screen flex-col bg-gradient-to-br'>
      <NavBar />
      <div
        class={`h-[calc(100vh-theme('spacing.14'))] max-h-screen w-full flex-grow overflow-y-auto overflow-x-hidden px-4`}
      >
        <div class='mx-auto min-h-full w-full max-w-screen-xl pt-4 md:pt-16'>
          {props.children}
        </div>
      </div>
    </div>
  );
};
