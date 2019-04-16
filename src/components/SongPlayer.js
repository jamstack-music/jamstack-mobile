import React from 'react'

import { SafeAreaView, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import useMusicPlayer from '../hooks/useMusicPlayer'

import SongInfo from './SongInfo'
import Timer from './Timer'
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
  const [play, setPlay, elapsed] = useMusicPlayer(song, nextSong)
  let {title, artist, images, duration} = song 

  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <SongInfo
          songTitle={title}
          artist={artist}
          album={images} />
        <Timer 
          currentTime={elapsed}
          end={duration} /> 
        <ControlsGroup style={{flex: 1, justifySelf: 'flex-start'}}>
          <Icon 
            reverse
            name={play ? 'controller-paus' : 'controller-play'}
            type='entypo'
            size={40}
            color={play ? '#004FCF' : '#0051F7'}
            onPress={() => setPlay(!play)} />
          <Icon 
            reverse
            name="controller-fast-forward"
            type='entypo'
            size={30}
            color='#00AF66'
            onPress={() => nextSong()} />
        </ControlsGroup>
      </View>
    </SafeAreaView>
  )
}

SongPlayer.propTypes = {
  song: PropTypes.object.isRequired,
  nextSong: PropTypes.func.isRequired, 
}

export default SongPlayer
