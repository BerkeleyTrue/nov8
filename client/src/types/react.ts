import { PropsWithChildren, FunctionComponent } from 'react';

export type ParentComponent<P = unknown> = FunctionComponent<
  PropsWithChildren<P>
>;
