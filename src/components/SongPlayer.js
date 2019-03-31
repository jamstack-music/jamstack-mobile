import React, { useEffect } from 'react'
import { Button, View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import SongInfo from './SongInfo'
import ControlsGroup from './ControlsGroup'
import useSpotifyPlayer from '../hooks/useSpotifyPlayer'

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
    <View style={{flex: 1, flexDirection: 'column'}}>
      <SongInfo
        songTitle={title}
        artist={artist}
        album={album}
      />
      <ControlsGroup style={{flex: 1, justifySelf: 'flex-start'}}>
        <Icon 
          reverse
          name={play ? 'controller-paus' : 'controller-play'}
          type='entypo'
          size={40}
          color={play ? '#004FCF' : '#0051F7'}
          onPress={() => togglePlay()} />
        <Icon 
          reverse
          name="controller-fast-forward"
          type='entypo'
          size={30}
          color='#00AF66'
          onPress={() => nextSong()} />
      </ControlsGroup>
    </View>
  )
}

SongPlayer.propTypes = {
  uri: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  nextSong: PropTypes.func.isRequired,
  album: PropTypes.object.isRequired
}
export default SongPlayer
