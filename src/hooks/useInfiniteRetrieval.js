import { useState, useEffect } from 'react';
import Spotify from 'rn-spotify-sdk';

export default function useInfiniteRetrieval(initial) {
  const [next, setNext] = useState(initial);
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(
    function fetch() {
      if (loading) {
        Spotify.sendRequest(next, 'GET', {}, false).then(res => {
          const { items, next: nextLink } = res;
          const newList = items.map(item => {
            if (item.album) return item.album;
            return item;
          });

          setList([...list, ...newList]);
          setLoading(false);
          setNext(nextLink);
        });
      }
    },
    [list, loading, next],
  );

  return [list, loading];
}
