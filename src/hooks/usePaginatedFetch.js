import { useState, useCallback } from 'react';
import useFetch from './useFetch';

/**
 * This hook will allow you to make paginated requests.
 * Given the limit, the next offset will be calculated for
 */
export default function usePaginatedFetch(limit = 10) {
  const [offset, setOffset] = useState(0);
  const fetchState = useFetch();

  const { fetchInternal } = fetchState;
  const fetch = useCallback(
    api => {
      fetchInternal(api, limit, offset).then(() => {
        setOffset(lastOffset => lastOffset + limit);
      });
    },
    [fetchInternal, limit, offset],
  );

  return { ...fetchState, fetch };
}
