import React, { useEffect } from 'react'
import { Button, View } from 'react-native'
import PropTypes from 'prop-types'

import SongInfo from './SongInfo'
import useSpotifyPlayer from '../hooks/useSpotifyPlayer'

// TODO: stylize
// TODO: Keep track of song time and get next song when time is finished
/**
 * SongPlayer Component
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 *
 * This component is used for playing a single song from the SDK and displaying its information
 * 
 */
const SongPlayer = ({title, artist, album, uri, nextSong}) => {
  const [play, togglePlay, setSong] = useSpotifyPlayer() 
  useEffect(() => {
    setSong(uri)
  }, [uri])

  return(
    <View>
      <SongInfo
        songTitle={title}
        artist={artist}
        album={album}
      />
      <Button title={play ? 'Pause' : 'Play'} onPress={() => togglePlay()} />
      <Button title="Skip" onPress={() => nextSong()} /> 
    </View>
  )
}

SongPlayer.propTypes = {
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  nextSong: PropTypes.func.isRequired,
  album: PropTypes.obj.isRequired
}
export default SongPlayer
