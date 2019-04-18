import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import AlbumCover from './AlbumCover'

const SongItem = (props) => {
  const {
    id,
    title,
    artist,
    images,
    children,
    ...rest
  } = props
  
  const thumbnail = images[images.length - 1].url
  
  return (
    <View style={styles.song}>
      <View>
        <AlbumCover url={thumbnail} dim={50}></AlbumCover>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Text style={styles.artist}>
          {artist}
        </Text>
      </View>
      {children}
    </View>
  ) 
}

const styles = StyleSheet.create({
  song: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: 10,
  },
  title: {
    fontSize: 16,
  },
  artist: {
    fontSize: 14, 
    color: '#3C3C3C'
  },
  details: {
    flex: 2,
    marginHorizontal: 10,
    textAlign: 'left',
  }, 
})

export default SongItem
