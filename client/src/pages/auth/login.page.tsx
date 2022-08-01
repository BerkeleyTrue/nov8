import { GetServerSideProps, NextPage } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { BuiltInProviderType } from 'next-auth/providers';
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from 'next-auth/react';
import { FunctionComponent, useCallback, useState } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';

import { Button } from '../../components/Button';
import { authOptions } from '../api/auth/[...nextauth].api';

export interface Props {
  providers: ClientSafeProvider[];
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions,
  );

  if (session) {
    return {
      redirect: { permanent: false, destination: '/?showAuthToast=true' },
    };
  }

  const providers =
    (await getProviders()) ||
    ({} as Record<
      LiteralUnion<BuiltInProviderType, string>,
      ClientSafeProvider
    >);

  return {
    props: { providers: Object.values(providers) },
  };
};

const ProviderButton: FunctionComponent<
  { isLogin: boolean } & ClientSafeProvider
> = ({ id, name, isLogin }) => {
  const handleClick = useCallback(() => signIn(id), [id]);

  return (
    <button
      key={id}
      type='submit'
      className='flex w-full items-center justify-center rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg'
      data-mdb-ripple='true'
      data-mdb-ripple-color='light'
      onClick={handleClick}
    >
      <VscGithubInverted className='mr-4' /> {isLogin ? 'Login' : 'Sign Up'}{' '}
      with {name}
    </button>
  );
};

const Auth: NextPage<Props> = ({ providers }) => {
  const [isLogin, setIsLogin] = useState(true);
  const goToRegister = useCallback(
    () => setIsLogin(!isLogin),
    [setIsLogin, isLogin],
  );

  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <main className='bg-darker-400 flex h-96 w-full max-w-md flex-col justify-between rounded-lg px-12 py-8 shadow-lg'>
        <header>
          <h1 className='text-2xl font-semibold leading-4 tracking-widest text-green-200'>
            {isLogin ? 'Login' : 'Sign Up'}
          </h1>
        </header>
        <div className='flex h-full flex-wrap items-center justify-center text-gray-800'>
          <div className='2xl:w-8/12'>
            {providers?.map((provider) => (
              <ProviderButton
                key={provider.id}
                {...provider}
                isLogin={isLogin}
              />
            ))}
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <Button className='text-indigo-700' onClick={goToRegister}>
            {isLogin ? 'Register' : 'Login'}
          </Button>
          {/* <AppLink href='/signup' className='text-indigo-700'> */}
          {/*   Password reset */}
          {/* </AppLink> */}
        </div>
      </main>
    </div>
  );
};

export default Auth;
