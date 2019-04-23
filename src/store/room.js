import React, { useEffect } from 'react'
import { Container, Provider } from 'unstated'
import { joinRoom } from '../data/api'

import RNEventSource from 'react-native-event-source'

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
  useEffect(function init() {
    async function fetchStore() {
      const { data } = await joinRoom('fun-room', 'Zach')
      room.initRoom({...data, name: 'fun-room'})
    }

    const eventSource = new RNEventSource(`http://54.191.51.110:5000/stream?channel=fun-room`)
    
    eventSource.addEventListener('song', function({data}) {
      console.debug('song request received')
      const { song } = JSON.parse(data)
      room.addtoQueue(song)
    }, false)

    eventSource.addEventListener('next', function() {
      room.nextSong()
    }, false) 

    fetchStore()
    return function unMount() {
      eventSource.removeEventListeners('song')
      eventSource.removeEventListeners('next')
      eventSource.close()
    }
  },[])

  return (
    <Provider inject={[room]}>
      {children}
    </Provider>
  )
}
