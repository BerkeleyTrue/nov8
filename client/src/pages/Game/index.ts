import dynamic from 'next/dynamic';

export { Icon } from './Icon';

export const DynamicGame = dynamic(
  () => import('./Game').then((mod) => mod.Game),
  { ssr: false },
);
