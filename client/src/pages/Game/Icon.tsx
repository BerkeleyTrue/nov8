import { ParentComponent } from 'solid-js';
import { IconTypes } from '../../core/game/game';

export interface IconProps {
  icon: IconTypes;
}

export const Icon: ParentComponent<IconProps> = (props) => {
  return <div>Icon{props.icon}</div>;
};
