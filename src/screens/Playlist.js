import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { addSong as addSongRemote } from '../data/api'
import Spotify from 'rn-spotify-sdk'
import AlbumCover from '../components/AlbumCover'
import AddList from '../components/Songs/AddList'
import extractSong from '../data/extractors/song'
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


  const [list, setList] = useState([])
  useEffect(() => {
    Spotify.sendRequest(`v1/playlists/${id}`, 'GET', {}, false).then(res => {
      const { tracks: { items } } = res
      const playlist = items.map(({track}) => extractSong(track))
      setList(playlist)
    })
  }, [])

  const playlistImg = images[0].url
  return (
    <Subscribe to={[RoomContainer]}>
      {
        room => (
          <View>
            <View style={{ padding: 10, flexDirection: 'column', alignItems: 'center' }}>
              <AlbumCover url={playlistImg} dim={200} />
              <Text>{name}</Text>
            </View>
            <AddList
              contentInset={{ bottom: 250 }}
              songs={list}
              onAdd={song => addSong(room, song)}
            />
          </View>
        )
      }
    </Subscribe>
  )
}

export default Playlist
