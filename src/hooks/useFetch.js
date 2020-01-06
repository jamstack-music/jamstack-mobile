import { useState, useCallback } from 'react';

export default function useFetch() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetch = useCallback((api, ...args) => {
    setIsLoading(true);

    return api(...args)
      .then(result => result)
      .catch(e => setError(e))
      .finally(() => setIsLoading(false));
  }, []);

  return { error, isLoading, fetch };
}
