import { FunctionComponent, PropsWithChildren } from 'react';

import { IconTypes } from '../../core/game/game';

export interface IconProps {
  icon: IconTypes;
}

export const Icon: FunctionComponent<PropsWithChildren<IconProps>> = ({
  icon,
}) => {
  return <div>Icon{icon}</div>;
};
