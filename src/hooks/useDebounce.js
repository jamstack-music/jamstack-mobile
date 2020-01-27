import { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
  // This works since useState init is only called on the initial
  // render

  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  console.log(debouncedValue)
  return debouncedValue;
}
