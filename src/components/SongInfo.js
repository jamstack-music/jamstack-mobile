import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AlbumCover from '../components/AlbumCover'

/**
 * SongInfo Component is a presentational component that just displays the the song information
 *
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const SongInfo = ({artist, songTitle}) => (
  <View style={styles.container}>
    <Text style={styles.title} >{songTitle}</Text>
    <Text style={styles.artist} >{artist}</Text>
  </View>
)

SongInfo.defaultProps = {
  artist: ' ',
  songTitle: ' '
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10
  },
  artist: {
    fontSize: 24,
  }
})

export default SongInfo
