import { FC } from 'react';

import { Button } from '../../components/Button';
import { AppLink } from '../../components/Links';

export const Home: FC = () => {
  return (
    <div className='Home flex min-h-full flex-col justify-between'>
      <main>
        <section className='mb-4 flex flex-col items-center justify-between space-y-2'>
          <AppLink href='/game' className='w-full'>
            <Button className='w-full'>play with friends</Button>
          </AppLink>
          <AppLink href='/game' className='w-full'>
            <Button className='w-full'>play with the computer</Button>
          </AppLink>
        </section>
        <section className='mb-4 flex w-full justify-between rounded-md bg-gradient-to-bl from-purple-100 to-slate-500 px-4 py-1'>
          <dl>
            <dt className='text-sm font-medium'>Players</dt>
            <dd className='text-xl font-semibold'>12,000</dd>
          </dl>
          <dl>
            <dt className='text-sm font-medium'>Games</dt>
            <dd className='text-xl font-semibold'>2,231</dd>
          </dl>
        </section>
      </main>
      <footer className='h-28 '>
        <div>footer</div>
      </footer>
    </div>
  );
};
