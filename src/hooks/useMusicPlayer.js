import { useEffect } from 'react'

import MusicControl from 'react-native-music-control'
import useSpotifyPlayer from './useSpotifyPlayer'

function useMusicPlayer({title, artist, album, uri, duration}, nextSong) {
  const [play, setPlay, elapsed] = useSpotifyPlayer(uri)

  MusicControl.enableBackgroundMode(true)

  // Control setup for music player
  MusicControl.enableControl('play', true)
  MusicControl.enableControl('pause', true)
  MusicControl.enableControl('nextTrack', true)
  MusicControl.enableControl('prevTrack', false)

  MusicControl.on('play', () => setPlay(true))
  MusicControl.on('pause', () => setPlay(false))
  MusicControl.on('nextTrack', () => nextSong())

  MusicControl.setNowPlaying({
    title,
    artwork: album.url,
    artist,
    duration: Math.floor(duration/1000)
  })
  
  useEffect(function updatePlayhead() {
    MusicControl.updatePlayback({
      elapsed
    })
  }, [elapsed])
  
  return [play, setPlay, elapsed]
}

export default useMusicPlayer
