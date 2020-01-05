import { useRef, useEffect } from 'react';

export default function useInterval(callback, delay) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    function tick() {
      callbackRef.current();
    }
    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
