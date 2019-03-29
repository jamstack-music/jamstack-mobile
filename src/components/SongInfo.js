import React from 'react'
import { View, Text, Image } from 'react-native'

const SongInfo = ({artist, songTitle, albumImg}) => {
  return (
    <View>
      <Image src={albumImg} alt={albumImg} />
      <Text>{songTitle}</Text>
      <Text>{artist}</Text>
    </View>
  )
}

export default SongInfo
