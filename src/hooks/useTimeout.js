import { useRef, useEffect } from 'react';

export default function useTimeout(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const timerRef = setTimeout(savedCallback.current, delay);

    return () => clearTimeout(timerRef);
  }, [savedCallback, delay]);
}
