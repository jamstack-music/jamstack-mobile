import { useEffect } from 'react'
import PropTypes from 'prop-types'

import MusicControl from 'react-native-music-control'
import useSpotifyPlayer from './useSpotifyPlayer'

/**
 * useMusicPlayer: Generic music player hook that updates currently playing information
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
function useMusicPlayer({title, artist, album, uri, duration}, nextSong) {
  const [play, setPlay, elapsed] = useSpotifyPlayer(uri, nextSong) 
  
  useEffect(function updatePlayback() {
    MusicControl.enableBackgroundMode(true)

    MusicControl.setNowPlaying({
      title,
      //      artwork: album.url,
      artist,
      // duration: Math.floor(duration/1000)
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

useMusicPlayer.propTypes = {
  song: PropTypes.object.isRequired,
  nextSong: PropTypes.func.isRequired
}
export default useMusicPlayer
