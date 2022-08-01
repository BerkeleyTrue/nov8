import { useRouter } from 'next/router';
import { FunctionComponent, PropsWithChildren, useEffect } from 'react';

import { NavBar } from './NavBar';

interface Props {}

export const MainLayout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
}) => {
  const router = useRouter();
  const showAuthToast = router?.query?.showAuthToast ?? false;

  useEffect(() => {
    if (showAuthToast) {
      console.log('You need to be logged in to do that.');
      router.push(router.pathname);
    }
  });

  return (
    <div className='from-darker-600 to-darker-400 via-darker-500 flex h-screen w-screen flex-col bg-gradient-to-br'>
      <NavBar />
      <div
        className={`h-[calc(100vh-theme('spacing.14'))] max-h-screen w-full flex-grow overflow-y-auto overflow-x-hidden px-4`}
      >
        <div className='mx-auto h-full min-h-full w-full max-w-screen-xl pt-4 md:pt-16'>
          {children}
        </div>
      </div>
    </div>
  );
};
