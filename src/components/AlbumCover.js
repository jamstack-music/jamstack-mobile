import React from 'react'
import { View, Image, Dimensions, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

/**
 * AlbumCover compoenent is a basic presentational component that displays the album cover of a given song
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const AlbumCover = ({url, dim = 250}) => {
  const { width } = Dimensions.get('window')
  //const dim = width*.80
  return (
    <View style={styles.container}>
      <Image
        source={{uri: url}}
        style={{width: dim, height: dim}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 10
  }
})

AlbumCover.defaultProps = {
  url: 'https://www.indigenousmusicawards.com/img/placeholder-music.png'
}

AlbumCover.propTypes = {
  url: PropTypes.string
}

export default AlbumCover
