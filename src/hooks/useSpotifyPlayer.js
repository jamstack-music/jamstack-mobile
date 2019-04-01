import { useState, useEffect } from 'react'
import Spotify from 'rn-spotify-sdk'

// TODO: Validate that song being passed in is a Spotify URI
// State hook for keeping playing songs
function useSpotifyPlayer(uri) {
  let timerRef = null
  // Play status
  const [play, setPlay] = useState(false)
  // Playback status of song (in ms)
  const [elapsed, setElapsed] = useState(0)

  useEffect(function playNewSong() {
    Spotify.playURI(uri, 0, 0)
    setPlay(true)
  }, [uri])

  useEffect(function playSong() {
    Spotify.setPlaying(play) 
  }, [play])

  useEffect(function songTimer() {
    timerRef = setInterval(() => timeElapsed(), 100)
    return function(){
      clearInterval(timerRef)
    }
  })

  const timeElapsed = () => {
    const { position } = Spotify.getPlaybackState()
    setElapsed(position * 1000)
  }

  return [play, setPlay, elapsed]
}

export default useSpotifyPlayer
