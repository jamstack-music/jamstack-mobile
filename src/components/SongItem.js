import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import AlbumCover from './AlbumCover'
import { Subscribe } from 'unstated'
import { RoomContainer } from '../store/room'

const SongItem = (props) => {
  const {
    id,
    title,
    artist,
    images,
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
      <View style={styles.add}>
        <Subscribe to={[RoomContainer]}>
          { room => 
            <Icon name='add' onPress={() => room.state.queue.push(props)}/>
          }
        </Subscribe>
      </View>

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
  add: {
    marginHorizontal: 10,
  }
})

export default SongItem
