import { FunctionComponent, PropsWithChildren } from 'react';
import { AppLink } from '../../components/Links';

export const NavBar: FunctionComponent<PropsWithChildren> = () => {
  return (
    <div className='bg-darker-600 h-14 w-full'>
      <div className='flex h-full justify-between px-4 md:px-1'>
        <div className='h-full items-center'>
          <AppLink href='/'>
            <button className='text-light bg-darker-600 hover:bg-darker-700 h-full px-6 text-2xl leading-10 tracking-widest'>
              Nov8
            </button>
          </AppLink>
        </div>
        <div className='h-full items-center'>
          <AppLink href='/auth/login'>
            <button className='text-light bg-darker-600 hover:bg-darker-700 h-full px-6 uppercase'>
              Login
            </button>
          </AppLink>
        </div>
      </div>
    </div>
  );
};
