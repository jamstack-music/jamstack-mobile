import { useEffect } from 'react';
import useInterval from './useInterval';

export default function useInfiniteInterval(callback, delay) {
  const [start, stop] = useInterval(callback, delay);

  useEffect(() => {
    start();

    return () => stop();
  }, [start, stop]);
}
