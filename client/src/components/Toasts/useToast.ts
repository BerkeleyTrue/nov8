import { v4 as uuid } from 'uuid';

import { useToastDispatch } from './Contexts';
import { ActionTypes, IToast } from './types';

export const useToastFactory = () => {
  const dispatch = useToastDispatch();

  const toast = (type: IToast['type'], message: string) => {
    const id = uuid();
    dispatch({
      type: ActionTypes[0],
      toast: {
        id,
        type,
        message,
      },
    });

    return () => {
      dispatch({
        type: ActionTypes[1],
        id,
      });
    };
  };

  return toast;
};
