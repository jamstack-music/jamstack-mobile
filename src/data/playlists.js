import Spotify from 'rn-spotify-sdk';

import extractPlaylist from './extractors/playlist';

export const getMyPlaylists = async (limit = 20, offset = 0) => {
  const res = await Spotify.sendRequest(
    `v1/me/playlists?$limit=${limit}&offset=${offset}`,
    'GET',
    {},
    true,
  );

  const { items } = res;

  return items.map(playlist => extractPlaylist(playlist));
};

/**
 * The extraction fields passed via the request to help Spotify refine returned results
 * This is essentially supposed to mimic graphQL
 * See https://developer.spotify.com/console/get-playlist-tracks/?playlist_id=21THa8j9TaSGuXYNBU5tsC&user_id=spotify_espa%C3%B1a to see an example output
 */
const FIELDS = 'items(track(is_local,name,id,uri,duration_ms,album(images,name),artists(name)))';

export const getPlaylistTracks = async (id, limit = 100, offset = 0) => {
  const res = await Spotify.sendRequest(
    `v1/me/playlists/${id}/tracks?$fields=${FIELDS}&limit=${limit}&offset=${offset}`,
    'GET',
    {},
    true,
  );

  const { items } = res;

  return items.map(({ track }) => track);
};
