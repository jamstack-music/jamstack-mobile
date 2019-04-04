import { useEffect } from 'react'

import MusicControl from 'react-native-music-control'
import useSpotifyPlayer from './useSpotifyPlayer'

function useMusicPlayer({title, artist, album, uri, duration}, nextSong) {
  const [play, togglePlay, setSong] = useSpotifyPlayer()
  MusicControl.enableBackgroundMode(true)
  
  useEffect(function changeSong() {
    setSong(uri)
    MusicControl.setNowPlaying({
      title,
      artwork: album.url,
      artist,
      duration: 300
    })
  }, [uri])
  

  // Control setup for music player
  MusicControl.enableControl('play', true)
  MusicControl.enableControl('pause', true)
  MusicControl.enableControl('nextTrack', true)
  MusicControl.enableControl('prevTrack', false)

  MusicControl.on('play', () => togglePlay())
  MusicControl.on('pause', () => togglePlay())
  MusicControl.on('skip', () => nextSong())
  
  return [play, togglePlay]
}

export default useMusicPlayer
