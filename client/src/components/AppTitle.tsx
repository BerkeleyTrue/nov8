import NextHead from 'next/head';
import { FunctionComponent, PropsWithChildren } from 'react';

interface Props {
  subTitle: string;
}

export const AppTitle: FunctionComponent<PropsWithChildren<Props>> = ({
  subTitle,
  children,
}) => {
  return (
    <NextHead>
      <title>Nov8//{subTitle}</title>;
      <link href='/images/favicon.ico' rel='shortcut icon' />
      {children}
    </NextHead>
  );
};
