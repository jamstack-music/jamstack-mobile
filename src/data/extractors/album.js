import extractSong from './song';

const extractAlbum = album => {
  const {
    id,
    artists,
    images,
    name,
    tracks: { items },
  } = album;

  const songs = items.map(track =>
    extractSong({
      ...track,
      album: {
        images,
        name,
      },
    }),
  );

  return {
    id,
    artists: artists.map(({ name }) => ({ name })),
    images,
    name,
    songs,
  };
};

export default extractAlbum;
