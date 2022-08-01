import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { MainLayout } from './Layout/MainLayout';
import Head from 'next/head';
import { ToastContainer, ToastProvider } from '../components/Toasts';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <link rel='shortcut icon' href='/images/favicon.ico' />
      </Head>

      <ToastProvider>
        <SessionProvider session={session}>
          <MainLayout>
            <ToastContainer />
            <Component {...pageProps} />
          </MainLayout>
        </SessionProvider>
      </ToastProvider>
    </>
  );
}

export default MyApp;
