/*
 * Since getPlayListTracks offers the ability to supply fields to the request in order to
 * offer graphQL life capabilities, this will replicate the response object of a track returned
 * by a playlist request
 */
const extractSong = song => {
  const {
    name,
    id,
    uri,
    duration_ms,
    artists,
    album: { name: albumName, images },
  } = song;

  return {
    name,
    duration_ms,
    id,
    uri,
    artists: artists.map(({ name: artistName }) => ({ name: artistName })),
    album: {
      name: albumName,
      images,
    },
  };
};

export default extractSong;
