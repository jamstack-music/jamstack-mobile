import React from 'react'
import { View, Text } from 'react-native'
import AlbumCover from './AlbumCover'
/**
 * Album Component
 * Basic component used for displaying album information
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const Album = (props) => {
  const {
    name,
    artist,
    images,
  } = props

  const thumbnail = images[0].url
  return (
    <View>
      <AlbumCover 
        url={thumbnail}
        dim={50}
      />
      <Text>name</Text>
      <Text>artist</Text>
    </View>
  )
}

export default Album
