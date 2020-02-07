const extractPlaylist = playlist => {
  const { id, description, images, name } = playlist;

  return {
    id,
    description,
    images,
    name,
  };
};

export default extractPlaylist;
