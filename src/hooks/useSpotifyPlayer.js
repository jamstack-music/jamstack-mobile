import { useState, useEffect } from 'react'
import Spotify from 'rn-spotify-sdk'

const VALID_SPOTIFY_URI = /spotify:track:.*/g

// TODO: Validate that song being passed in is a Spotify URI
// State hook for keeping playing songs
function useSpotifyPlayer() {
  // Current song being played
  const [song, setSong] = useState('')
  // Play status
  const [play, setPlay] = useState(false)

  useEffect(function playNewSong() {
    Spotify.playURI(song, 0, 0)
    setPlay(true)
  }, [song])

  useEffect(function playSong() {
    Spotify.setPlaying(play) 
  }, [play])

  const togglePlay = () => setPlay(!play)
  return [play, togglePlay, setSong]
}

export default useSpotifyPlayer
