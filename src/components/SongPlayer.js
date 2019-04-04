import React from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import useMusicPlayer from '../hooks/useMusicPlayer'

import SongInfo from './SongInfo'
import ControlsGroup from './ControlsGroup'

// TODO: Keep track of song time and get next song when time is finished
/**
 * SongPlayer Component
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 *
 * This component is used for playing a single song from the SDK and displaying its information
 * 
 */
const SongPlayer = ({song, nextSong}) => {
  const [play, togglePlay] = useMusicPlayer(song, nextSong)
  let {title, artist, album} = song 

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
