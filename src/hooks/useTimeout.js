import { useEffect } from 'react';
import useEventCallback from './useEventCallback';

export default function useTimeout(callback, delay) {
  const savedCallback = useEventCallback(callback);

  useEffect(() => {
    const timerRef = setTimeout(savedCallback, delay);

    return () => clearTimeout(timerRef);
  }, [savedCallback, delay]);
}
