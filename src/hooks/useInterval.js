import { useEffect, useRef, useCallback } from 'react';

export default function useInterval(callback, delay) {
  const savedCallback = useRef(callback);
  const timerRef = useRef(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const start = useCallback(() => {
    function tick() {
      savedCallback.current();
    }

    if (!timerRef.current) {
      timerRef.current = setInterval(tick, delay);
    }
  }, [delay, savedCallback]);

  return [start, stop];
}
