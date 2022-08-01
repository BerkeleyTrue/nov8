import { signOut, useSession } from 'next-auth/react';
import { FunctionComponent, PropsWithChildren } from 'react';
import { AppLink } from '../../components/Links';

const handleSignOut = () => signOut();
export const NavBar: FunctionComponent<PropsWithChildren> = () => {
  const { status, data } = useSession();
  const isSignedIn = status === 'unauthenticated' ? false : true;
  const name = data?.user?.name ?? 'anon';

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
        <div className='flex h-full items-center'>
          {isSignedIn ? (
            <>
              <div className='text-light bg-darker-600 hover:bg-darker-700 flex h-full items-center justify-center px-6 text-sm uppercase leading-tight'>
                {name}
              </div>
              <button
                className='text-light bg-darker-600 hover:bg-darker-700 h-full px-6 uppercase'
                onClick={handleSignOut}
              >
                Log out
              </button>
            </>
          ) : (
            <AppLink href='/auth/login'>
              <button className='text-light bg-darker-600 hover:bg-darker-700 h-full px-6 uppercase'>
                Login
              </button>
            </AppLink>
          )}
        </div>
      </div>
    </div>
  );
};
