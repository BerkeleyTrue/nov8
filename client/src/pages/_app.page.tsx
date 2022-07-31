import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { MainLayout } from './Layout/MainLayout';
import Head from 'next/head';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <link rel='shortcut icon' href='/images/favicon.ico' />
      </Head>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>
    </SessionProvider>
  );
}

export default MyApp;
