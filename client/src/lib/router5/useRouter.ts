import { Router } from 'router5';
import { useContext } from 'solid-js';

import { RouterContext } from './Context';

export const useRouter = (): Router => {
  return useContext(RouterContext);
};
