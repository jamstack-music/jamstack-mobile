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

  initRoom = store => this.setState(prevState => ({...prevState, ...store}))

  nextSong = () => {
    if(this.state.queue.length > 0) {
      this.setState(prevState => ({
        currentSong: prevState.queue[prevState.queue.length - 1], 
        queue: prevState.queue.slice(0, prevState.queue.length - 1)
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
      const { data } = await joinRoom(100, 'Zach')
      room.initRoom(data)
    }
    const eventSource = new RNEventSource('http://34.219.153.198:5000/stream')
    
    eventSource.addEventListener('greeting', function(event) {
      room.addMember('new member')
    }, false)

    eventSource.addEventListener('song', function({data}) {
      const { song } = JSON.parse(data)
      room.addtoQueue(song)
    }, false)

    eventSource.addEventListener('next', function() {
      room.nextSong()
    }, false) 

    eventSource.addEventListener('error', function() {
      alert('Failed to connect to event stream. Is Redis running?')
    }, false)

    fetchStore()
    return function unMount() {
      eventSource.removeAllListeners()
      eventSource.close()
    }
  },[])

  return (
    <Provider inject={[room]}>
      {children}
    </Provider>
  )
}
