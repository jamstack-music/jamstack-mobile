import React from 'react'
import { View } from 'react-native'
import AddList from '../components/Songs/AddList'
import { addSong } from '../data/api'
import AlbumInfo from '../components/Album'
import { RoomContainer } from '../store/room'
import { Subscribe } from 'unstated'

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
              name={name}
              artist={artist}
              images={images}
            />
            <AddList
              songs={songs}
              onAdd={song => addSong(room.state.name, song)}
            />
          </View>
        )
      }
    </Subscribe>
  )
}

export default Album 
