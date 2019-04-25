import React from 'react'

import { SafeAreaView, View } from 'react-native'
import { Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

import useMusicPlayer from '../hooks/useMusicPlayer'

import SongInfo from './Songs/SongInfo'
import Timer from './Timer'
import ControlsGroup from './ControlsGroup'
import AlbumCover from './AlbumCover'

// TODO: Keep track of song time and get next song when time is finished
/**
 * SongPlayer Component
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 *
 * This component is used for playing a single song from the SDK and displaying its information
 * 
 */
const SongPlayer = (props) => {
  const {
    song,
    nextSong,
    style,
  } = props

  const [play, setPlay, elapsed] = useMusicPlayer(song, nextSong)
  let {title, artist, images, duration} = song 

  const albumImg = images ? images[0].url : 'https://placholder.com/200'
  
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flex: 1, alignItems: 'center', ...style}}>
        <AlbumCover 
          shadow
          url={albumImg} 
        /> 
        <SongInfo
          songTitle={title}
          artist={artist}
        />
        <Timer 
          end={duration}
          currentTime={elapsed}
        />
        <ControlsGroup>
          <Icon 
            reverse
            name={play ? 'controller-paus' : 'controller-play'}
            type='entypo'
            size={25}
            color={play ? '#004FCF' : '#0051F7'}
            onPress={() => setPlay(!play)} 
          />
          <Icon 
            reverse
            name="controller-fast-forward"
            type='entypo'
            size={20}
            color='#00AF66'
            onPress={nextSong} 
          />
        </ControlsGroup>
      </View>
    </SafeAreaView>
  )
}

SongPlayer.propTypes = {
  song: PropTypes.object.isRequired,
  nextSong: PropTypes.func.isRequired, 
}

SongPlayer.defaultProps = {
  song: {
    title: '', 
    artist: '', 
    images: [{url: 'https://placeholder.com/200'}], 
    duration: 0
  },
  images: [{url: 'https://placeholder.com/200'}]
}

export default SongPlayer
