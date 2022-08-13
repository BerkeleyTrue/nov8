import { FunctionComponent, PropsWithChildren } from 'react';

import { IconComps } from './Icons';
import { IconTypes } from '../../types/nov8';

export interface IconProps {
  icon: IconTypes;
}

export const Icon: FunctionComponent<PropsWithChildren<IconProps>> = ({
  icon,
}) => {
  const Comp = IconComps[icon] || <div>Icon {icon}</div>;
  return <Comp />;
};
