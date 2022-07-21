import { Component } from 'solid-js';
import { Title } from 'solid-meta';

interface Props {
  subTitle: string;
}

export const AppTitle: Component<Props> = (props) => {
  return <Title>Nov8//{props.subTitle}</Title>;
};
