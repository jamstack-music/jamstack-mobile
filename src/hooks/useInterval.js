import { useRef, useEffect, useCallback } from 'react';

function useEventCallback(fn) {
  const ref = useRef(fn);

  useEffect(() => {
    ref.current = fn;
  });

  return useCallback((...args) => ref.current.apply(void 0, args), []);
}

export default function useInterval(callback, delay) {
  const savedCallback = useEventCallback(callback);

  useEffect(() => {
    function tick() {
      savedCallback();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay, savedCallback]);
}
