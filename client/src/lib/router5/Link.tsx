import * as R from 'remeda';
import { NavigationOptions, State } from 'router5';
import { createMemo, JSX, ParentComponent, splitProps } from 'solid-js';
import { join } from '../remeda/join';
import { split } from '../remeda/split';
import { createIsActive } from './createIsActive';
import { useRouter } from './useRouter';

export interface RLinkProps
  extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {
  routeName: string;
  routeParams?: { [key: string]: any };
  routeOptions?: NavigationOptions;
  class?: string;
  activeClass?: string;
  activeStrict?: boolean;
  ignoreQueryParams?: boolean;
  onClick?: JSX.EventHandler<HTMLAnchorElement, MouseEvent>;
  successCallback?(
    state?: State /* eslint-disable-line no-unused-vars */,
  ): void;
  errorCallback?(error?: any): void /* eslint-disable-line no-unused-vars */;
  target?: string;
  previousRoute?: State;
}

export const RLink: ParentComponent<RLinkProps> = (props) => {
  const [local, aprops] = splitProps(props, [
    'routeName',
    'routeParams',
    'routeOptions',
    'class',
    'activeClass',
    'activeStrict',
    'ignoreQueryParams',
    'children',
    'onClick',
    'successCallback',
    'errorCallback',
  ]);

  const [link] = splitProps(props, [
    'routeName',
    'routeParams',
    'ignoreQueryParams',
    'activeStrict',
  ]);

  const router = useRouter();

  const isActive = createIsActive(() => link);

  const onClickCallback = (err: any, state: State) => {
    if (!err && local.successCallback) {
      local.successCallback(state);
    }

    if (err && local.errorCallback) {
      local.errorCallback(err);
    }
  };

  const handleClick: RLinkProps['onClick'] = (e) => {
    if (local.onClick) {
      local.onClick(e);

      if (e.defaultPrevented) {
        return;
      }
    }

    const comboKey = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;

    if (e.button === 0 && !comboKey && aprops.target !== '_blank') {
      e.preventDefault();

      router.navigate(
        local.routeName,
        local.routeParams || {},
        local.routeOptions || {},
        onClickCallback,
      );
    }
  };

  const className = createMemo(() => {
    return R.pipe(
      isActive() ? local.activeClass : '',
      split(' '),
      R.concat(split(local.class, ' ')),
      join(' '),
    );
  });

  const href = () =>
    router.buildUrl
      ? router.buildUrl(local.routeName, local.routeParams)
      : router.buildPath(local.routeName, local.routeParams);

  return (
    <a href={href()} class={className()} onClick={handleClick} {...aprops}>
      {local.children}
    </a>
  );
};
