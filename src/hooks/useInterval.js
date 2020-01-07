import { useRef, useCallback } from 'react';
import useEventCallback from './useEventCallback';

export default function useInterval(callback, delay) {
  const savedCallback = useEventCallback(callback);
  const timerRef = useRef(null);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const start = useCallback(() => {
    function tick() {
      savedCallback();
    }

    if (!timerRef.current) {
      timerRef.current = setInterval(tick, delay);
    }
  }, [delay, savedCallback]);

  return [start, stop];
}
