import extractSong from './song'

const extractAlbum = (album) => {
  console.log('hello')
  const {
    id,
    artists: [{
      name: artist
    }],
    images,
    name,
    tracks: {
      items
    },
  } = album 

  const songs = items.map(track => extractSong({
    ...track,
    album: {
      images,
      name
    }
  }))

  return {
    id,
    artist,
    images,
    name,
    songs,
  }
}

export default extractAlbum
