import React from 'react'
import { Container, Provider } from 'unstated'

export class RoomContainer extends Container {
  state = {
    queue: [], 
    currentSong: {},
    members: [],
    public: true,
    password: ''
  }

  initRoom = store => {
    const { current_song: currentSong } = store
    this.setState(prevState => ({...prevState, currentSong, ...store}))
  }

  nextSong = () => {
    if(this.state.queue.length > 0) {
      this.setState(prevState => ({
        currentSong: prevState.queue[0], 
        queue: prevState.queue.slice(1, prevState.queue.length)
      }))
    }
  }

  addtoQueue = song => {
    this.setState(prevState => ({
      queue: [...prevState.queue, song]
    }))
  }

  addMember = member => {
    this.setState(prevState => ({
      members: [...prevState.members, member]
    }))
  }
}

export const RoomProvider = ({children}) => {
  const room = new RoomContainer() 

  return (
    <Provider inject={[room]}>
      {children}
    </Provider>
  )
}
