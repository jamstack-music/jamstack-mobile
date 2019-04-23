import React from 'react'
import { View, Text, Image } from 'react-native'

const Song = (props) => {
  const {
    title,
    artist,
    images,
  } = props
  return (
    <View>
      <Image source={{uri: images[images.length-1].url}} style={{ width: 50, height: 50 }} />
      <Text>{title}</Text>
      <Text>{artist}</Text>
    </View>
  )
}

export default Song
