import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface BooleanActions {
  set: Dispatch<SetStateAction<boolean>>;
  on: () => void;
  off: () => void;
  toggle: () => void;
}

export const useBoolean = (
  defaultValue?: boolean,
): [boolean, BooleanActions] => {
  const [value, set] = useState(!!defaultValue);

  const on = useCallback(() => set(true), []);
  const off = useCallback(() => set(false), []);
  const toggle = useCallback(() => set((x) => !x), []);

  return [value, { set, on, off, toggle }];
};
