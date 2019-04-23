import React from 'react'
import { View, Text } from 'react-native'
import { addSong } from '../data/api'
import useInfiniteRetrieval from '../hooks/useInfiniteRetrieval'

import AlbumCover from '../components/AlbumCover'
import AddList from '../components/Songs/AddList'

import { RoomContainer } from '../store/room'
import { Subscribe } from 'unstated'

const Playlist = (props) => {
  const {
    navigation: {
      state: {
        params
      }
    }
  } = props

  const {
    id,
    images,
    name, 
  } = params 

  const [list,] = useInfiniteRetrieval(`v1/playlists/${id}`)
  const playlistImg = images[0].url
  return (
    <Subscribe to={[RoomContainer]}>
      {
        room => (
          <View>
            <AlbumCover url={playlistImg} dim={250} />
            <Text>{name}</Text>
            <AddList
              style={{ width: '100%' }}
              songs={list}
              onAdd={song => addSong(room.state.name, song)}
            />
          </View>
        )
      }
    </Subscribe>
  )
}

export default Playlist
