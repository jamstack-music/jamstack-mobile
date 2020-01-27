import { useEffect } from 'react';
import useEventCallback from './useEventCallback';

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
