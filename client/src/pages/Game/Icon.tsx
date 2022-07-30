import { ParentComponent } from 'solid-js';

export interface IconProps {
  icon: 'rook' | 'leaf' | 'factory' | 'crown' | 'bulb';
}

export const Icon: ParentComponent<IconProps> = (props) => {
  return <div>Icon{props.icon}</div>;
};
