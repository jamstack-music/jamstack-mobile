import { useEffect } from 'react';
import useEventCallback from './useEventCallback';

export default function useTimeout(callback, delay) {
  const callbackRef = useEventCallback(callback);

  useEffect(() => {
    const timerRef = setTimeout(callbackRef.current, delay);

    return () => clearTimeout(timerRef);
  }, [callbackRef, delay]);
}
