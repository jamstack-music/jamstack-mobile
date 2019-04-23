const extractSong = (song) => {
  
  const {
    name: title,
    id,
    uri,
    duration_ms: duration,
    artists: [{
      name: artist 
    },],
    album: {
      name: album,
      images
    },  
  } = song

  return {
    title,
    duration,
    id,
    uri,
    artist,
    album,
    images,
  }
}

export default extractSong
