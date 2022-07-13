import NextHead from 'next/head';
import { PropsWithChildren } from 'react';

interface Props {
  subTitle: string;
}

export const AppHead = ({ subTitle, children }: PropsWithChildren<Props>) => (
  <NextHead>
    <title>Nov8//{subTitle}</title>
    <meta name='description' content='Nov8: a game of innovations' />
    <link href='/images/favicon.ico' rel='shortcut icon' />
    {children}
  </NextHead>
);
