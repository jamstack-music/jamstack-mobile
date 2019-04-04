import { useEffect } from 'react'

import MusicControl from 'react-native-music-control'
import useSpotifyPlayer from './useSpotifyPlayer'

function useMusicPlayer({title, artist, album, uri, duration}, nextSong) {
  const [play, setPlay] = useSpotifyPlayer(uri)
  MusicControl.enableBackgroundMode(true)
  
  useEffect(function changeSong() {
    MusicControl.setNowPlaying({
      title,
      artwork: album.url,
      artist,
      duration
    })
  }, [uri])
  

  // Control setup for music player
  MusicControl.enableControl('play', true)
  MusicControl.enableControl('pause', true)
  MusicControl.enableControl('nextTrack', true)
  MusicControl.enableControl('prevTrack', false)

  MusicControl.on('play', () => setPlay(true))
  MusicControl.on('pause', () => setPlay(false))
  MusicControl.on('skip', () => nextSong())
  
  return [play, setPlay]
}

export default useMusicPlayer
