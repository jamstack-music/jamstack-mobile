import { useEffect } from 'react'

import MusicControl from 'react-native-music-control'
import useSpotifyPlayer from './useSpotifyPlayer'

function useMusicPlayer({title, artist, album, uri, duration}, nextSong) {
  const [play, setPlay, elapsed] = useSpotifyPlayer(uri)

  useEffect(function updatePlayback() {
    MusicControl.enableBackgroundMode(true)

    MusicControl.setNowPlaying({
      title,
      artwork: album.url,
      artist,
      duration: Math.floor(duration/1000)
    })

    // Control setup for music player
    MusicControl.enableControl('play', true)
    MusicControl.enableControl('pause', true)
    MusicControl.enableControl('nextTrack', true)
    MusicControl.enableControl('prevTrack', false)
  }, [uri])
  
  MusicControl.on('play', () => setPlay(true))
  MusicControl.on('pause', () => setPlay(false))
  MusicControl.on('nextTrack', () => nextSong())
  
  return [play, setPlay, elapsed]
}

export default useMusicPlayer
