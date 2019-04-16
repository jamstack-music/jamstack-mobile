import React from 'react'

import { Subscribe } from 'unstated'
import SongPlayer from '../components/SongPlayer'
import { RoomContainer } from '../store/room'
import { nextSong } from '../data/api'

const CurrentPlaying = () => (
  <Subscribe to={[RoomContainer]}>
    {room => (
      <SongPlayer song={room.state.currentSong} nextSong={nextSong}/>  
    )}
  </Subscribe>
)

export default CurrentPlaying 
