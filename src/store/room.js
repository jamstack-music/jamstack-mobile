import React from 'react'
import { Container, Provider } from 'unstated'

const superBump = (queue) => {
  queue.sort((a, b) => b.bumps - a.bumps)
}

const regularBump = (queue, index) => {
  if(index !== 0)
    [queue[index], queue[index - 1]] = [queue[index - 1], queue[index]]
} 

export class RoomContainer extends Container {
  state = {
    queue: [], 
    currentSong: {},
    members: [],
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
  
  bumpSong = (id) => {
    const index = this.state.queue.findIndex(song => song.id === id)
    const queue = this.state.queue
    queue[index] = {
      ...queue[index],
      bumps: queue[index].bumps + 1,
      alreadyBumped: true
    }

    superBump(queue)

    this.setState(({
      queue
    }))
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
