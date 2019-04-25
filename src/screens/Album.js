import React from 'react'
import { View } from 'react-native'
import AddList from '../components/Songs/AddList'
import { addSong as addSongRemote } from '../data/api'
import AlbumInfo from '../components/Album'
import { RoomContainer } from '../store/room'
import { Subscribe } from 'unstated'
import { showMessage } from 'react-native-flash-message'

const addSong = (room, song) => {
  if(room.state.queue.find(({id}) => song.id === id)) {
    showMessage({
      message: 'Song already in the queue',
      type: 'warning'
    })
  } else {
    addSongRemote(room.state.name, song)
    showMessage({
      message: 'Song added to the queue!',
      type: 'success'
    })
  }
}

const Album = (props) => {
  const {
    navigation: {
      state: {
        params
      }
    }
  } = props

  const {
    name,
    images,
    artist,
    songs
  } = params
  
  return (
    <Subscribe to={[RoomContainer]}>
    
      {
        room => (
          <View>
            <AlbumInfo 
              dim={200}
              name={name}
              artist={artist}
              images={images}
              style={{ padding: 10 }}
            />
            <AddList
              contentInset={{ bottom: 250 }}
              songs={songs}
              onAdd={song => addSong(room, song)}
            />
          </View>
        )
      }
    </Subscribe>
  )
}

export default Album 
