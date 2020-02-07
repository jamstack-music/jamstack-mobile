import Spotify from 'rn-spotify-sdk';
import extractAlbum from './extractors/album';

/**
 * Ideally you should use these API functions in a usePagination hook
 * So that the limit and offset can be managed in house
 */

export const getMyAlbums = async (limit = 20, offset = 0) => {
  const res = await Spotify.sendRequest(
    'v1/me/albums',
    'GET',
    {
      offset,
      limit,
    },
    false,
  );

  const { items } = res;

  // useFetch expects the data to be returned as an object which is why this
  // is like this. We may want to make a better useFetch function to handle such cases
  return {
    data: items.map(({ album }) => extractAlbum(album)),
  }
};
