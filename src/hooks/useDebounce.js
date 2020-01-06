import { useState } from 'react';
import useTimeout from './useTimeout';

export default function useDebounce(value, delay) {
  // This works since useState init is only called on the initial
  // render
  const [debouncedValue, setDebouncedValue] = useState(value);

  useTimeout(() => {
    setDebouncedValue(value);
  }, delay);

  return debouncedValue;
}
