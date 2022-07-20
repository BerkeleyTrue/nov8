import { Component, JSXElement } from 'solid-js';

interface Props {
  children: JSXElement;
}

export const MainLayout: Component<Props> = (props) => {
  return (
    <div class='flex h-screen w-screen flex-col'>
      <nav class={`h-12 w-full`}>nav</nav>
      <div
        class={`h-[calc(100vh-theme('spacing.12'))] max-h-screen w-full flex-grow overflow-y-auto overflow-x-hidden px-4`}
      >
        <div class='mx-auto w-full max-w-screen-xl pt-4 md:pt-16'>
          {props.children}
        </div>
      </div>
    </div>
  );
};
