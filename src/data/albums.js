import Spotify from 'rn-spotify-sdk';
import extractAlbum from './extractors/album';

/**
 * Ideally you should use these API functions in a usePagination hook
 * So that the limit and offset can be managed in house
 */

export const getMyAlbums = async (limit = 20, offset = 0) => {
  const res = await Spotify.sendRequest(
    `v1/me/albums?$limit=${limit}&offset=${offset}`,
    'GET',
    {},
    true,
  );

  const { items } = res;

  return items.map(album => extractAlbum(album));
};
