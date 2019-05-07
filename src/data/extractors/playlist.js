import { extractSong } from './song';

const extractPlaylist = playlist => {
  const {
    id,
    description,
    images,
    name,
    tracks: { items },
  } = playlist;

  const songs = items
    .filter(({ is_local: isLocal }) => !isLocal)
    .map(({ track }) => extractSong(track));

  return {
    id,
    description,
    images,
    name,
    songs,
  };
};

export default extractPlaylist;
