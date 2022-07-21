import { Accessor, createMemo, on } from 'solid-js';
import { createRoute } from './createRoute';
import { useRouter } from './useRouter';

export const createIsActive = (
  getLink: Accessor<{
    routeName: string;
    routeParams?: { [key: string]: any };
    activeStrict?: boolean;
    ignoreQueryParams?: boolean;
  }>,
): Accessor<boolean> => {
  const useRoute = createRoute();
  const useRouteName = () => useRoute()?.route?.name ?? 'n/a';

  const isActive = createMemo<boolean>(
    on([useRouteName, getLink], () => {
      const router = useRouter();
      const link = getLink();

      return router.isActive(
        link.routeName,
        link.routeParams,
        link.activeStrict,
        link.ignoreQueryParams,
      );
    }),
  );

  return isActive;
};
