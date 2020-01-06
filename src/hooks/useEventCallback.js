import { useRef, useEffect, useCallback } from 'react';

export default function useEventCallback(fn) {
  const ref = useRef(fn);

  useEffect(() => {
    ref.current = fn;
  });

  return useCallback((...args) => ref.current.apply(void 0, args), []);
}
