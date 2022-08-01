import {
  useEffect,
  useRef,
  useLayoutEffect,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useTimeout = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);
};

interface UseBooleanReturnType {
  set: Dispatch<SetStateAction<boolean>>;
  on: () => void;
  off: () => void;
  toggle: () => void;
}

export const useBoolean = (
  defaultValue?: boolean,
): [boolean, UseBooleanReturnType] => {
  const [value, set] = useState(!!defaultValue);

  const on = useCallback(() => set(true), []);
  const off = useCallback(() => set(false), []);
  const toggle = useCallback(() => set((x) => !x), []);

  return [value, { set, on, off, toggle }];
};
