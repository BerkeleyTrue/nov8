import { useRouter } from 'next/router';
import { FunctionComponent, PropsWithChildren, useEffect, useRef } from 'react';

import { NavBar } from './NavBar';
import { useToastFactory } from '../../components/Toasts/useToast';
import { useTimeout } from '../../lib/react/hooks';

interface Props {}

export const MainLayout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
}) => {
  const router = useRouter();
  const showAuthToast = router?.query?.showAuthToast ?? false;

  const toast = useToastFactory();
  const cleanupRef = useRef<null | (() => void)>(null);

  useEffect(() => {
    if (showAuthToast) {
      cleanupRef.current = toast('info', "You've been login in.");
      router.push(router.pathname);
    }
  }, [showAuthToast, router, toast]);

  useTimeout(
    () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    },
    cleanupRef.current ? 3000 : null,
  );

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
