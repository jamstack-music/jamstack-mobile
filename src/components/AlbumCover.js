import React from 'react'
import { View, Image, Dimensions } from 'react-native'
import PropTypes from 'prop-types'

/**
 * AlbumCover compoenent is a basic presentational component that displays the album cover of a given song
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const AlbumCover = ({url}) => {
  const { width } = Dimensions.get('window')
  const dim = width*.80
  return (
    <View>
      <Image
        source={{uri: url}}
        style={{width: dim, height: dim}}
      />
    </View>
  )
}

AlbumCover.propTypes = {
  url: PropTypes.string
}

export default AlbumCover
