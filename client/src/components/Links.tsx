import { PropsWithChildren } from 'react';
import NextLink from 'next/link';

interface Props {
  href: string;
  className?: string;
}

export const AppLink = ({
  children,
  className,
  href,
}: PropsWithChildren<Props>) => (
  <NextLink href={href} className={className} passHref>
    {children}
  </NextLink>
);

export { NextLink };
