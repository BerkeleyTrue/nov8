import '../styles/globals.css';
import { StrictMode } from 'react';
import { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';

import { MainLayout } from './Layout/MainLayout';
import { theme } from '../theme';
import { Fonts } from '../components/Fonts';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <StrictMode>
      <Fonts />
      <ChakraProvider theme={theme}>
        <SessionProvider session={session}>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </SessionProvider>
      </ChakraProvider>
    </StrictMode>
  );
}

export default MyApp;
