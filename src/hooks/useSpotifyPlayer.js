import { useState, useEffect } from 'react'
import Spotify from 'rn-spotify-sdk'

// TODO: Validate that song being passed in is a Spotify URI
// State hook for keeping playing songs
function useSpotifyPlayer(uri) {
  // Play status
  const [play, setPlay] = useState(false)

  useEffect(function playNewSong() {
    Spotify.playURI(uri, 0, 0)
    setPlay(true)
  }, [uri])

  useEffect(function playSong() {
    Spotify.setPlaying(play) 
  }, [play])

  return [play, setPlay]
}

export default useSpotifyPlayer
