import { Component } from 'solid-js';
import { Button } from '../../components/Button';

export const Home: Component = () => {
  return (
    <div class='Home flex min-h-full flex-col justify-between'>
      <main>
        <section class='mb-4 flex flex-col items-center justify-between space-y-2'>
          <Button class='w-full'>play with friends</Button>
          <Button class='w-full'>play with the computer</Button>
        </section>
        <section class='mb-4 flex w-full justify-between rounded-md bg-gradient-to-bl from-purple-100 to-slate-500 px-4 py-1'>
          <dl>
            <dt class='text-sm font-medium'>Players</dt>
            <dd class='text-xl font-semibold'>12,000</dd>
          </dl>
          <dl>
            <dt class='text-sm font-medium'>Games</dt>
            <dd class='text-xl font-semibold'>2,231</dd>
          </dl>
        </section>
      </main>
      <footer class='h-28 '>
        <div>footer</div>
      </footer>
    </div>
  );
};
