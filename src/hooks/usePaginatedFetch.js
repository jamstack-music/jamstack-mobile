import { useState, useCallback } from 'react';
import useFetch from './useFetch';

/**
 * This hook will allow you to make paginated requests.
 * Given the limit, the next offset will be calculated
 *
 * TODO: We can use this hook in order to manage infinite retrieval
 * of collections from the Spotify API
 */
export default function usePaginatedFetch(limit = 10) {
  const [offset, setOffset] = useState(0);
  const fetchState = useFetch();

  const { fetch: fetchInternal } = fetchState;
  /**
   * On each fetch, this will trigger an additional rerender of the component
   * since the offset will always be changing
   *
   * There may be a way to fix this but I have no clue how
   */
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
