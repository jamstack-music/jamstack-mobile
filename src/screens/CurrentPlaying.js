import React from 'react'

import { Subscribe } from 'unstated'
import SongPlayer from '../components/SongPlayer'
import RoomContainer from '../store/store'

const CurrentPlaying = () => (
  <Subscribe to={[RoomContainer]}>
    {room => (
      <SongPlayer song={room.state.currentSong} nextSong={() => room.nextSong()}/>  
    )}
  </Subscribe>
)

export default CurrentPlaying 
