import React from 'react'
import { View, Text } from 'react-native'
import AlbumCover from '../components/AlbumCover'

/**
 * SongInfo Component is a presentational component that just displays the the song information
 *
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const SongInfo = ({artist, songTitle, album}) => {
  return (
    <View>
      <AlbumCover {...album} />
      <Text>{songTitle}</Text>
      <Text>{artist}</Text>
    </View>
  )
}

export default SongInfo
