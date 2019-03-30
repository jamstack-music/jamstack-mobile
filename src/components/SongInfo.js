import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AlbumCover from '../components/AlbumCover'

/**
 * SongInfo Component is a presentational component that just displays the the song information
 *
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const SongInfo = ({artist, songTitle, album}) => {
  return (
    <View style={styles.container}>
      <AlbumCover {...album} />
      <Text style={styles.title} >{songTitle}</Text>
      <Text style={styles.artist} >{artist}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  artist: {
    fontSize: 18
  }
})

export default SongInfo
