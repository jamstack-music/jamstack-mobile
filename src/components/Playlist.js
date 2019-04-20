import React from 'react'
import { View, Text } from 'react-native'
import AlbumCover from './AlbumCover'

/**
 * Playlist Component
 * Basic component to display Playlist info
 * @author [Zach Banducci](http://github.com/zchbndcc9)
 */

const Playlist = (props) => {
  const {
    name,
    images,
  } = props

  const thumbnail = images[0].url
  return (
    <View>
      <AlbumCover
        url={thumbnail}
        dim={50}
      />
      <Text>{name}</Text>
    </View>
  )
}

export default Playlist
