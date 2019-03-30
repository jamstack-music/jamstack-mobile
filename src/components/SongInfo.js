import React from 'react'
import { View, Text, Image } from 'react-native'

const SongInfo = ({artist, songTitle, album}) => {
  return (
    <View>
      <Text>{songTitle}</Text>
      <Text>{artist}</Text>
    </View>
  )
}

export default SongInfo
