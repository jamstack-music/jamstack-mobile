import React from 'react'
import { View } from 'react-native'

import { Subscribe } from 'unstated'
import SongPlayer from '../components/SongPlayer'
import RoomContainer from '../store/store'

const Room = () => (
  <Subscribe to={[RoomContainer]}>
    {room => (
      <SongPlayer {...room.state.currentSong} nextSong={() => room.nextSong()}/>  
    )}
  </Subscribe>
)

export default Room
