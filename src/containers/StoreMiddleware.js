import { useEffect } from 'react'
import RNEventSource from 'react-native-event-source'

const StoreMiddleware = (props) => {
  const {
    children,
    room,
  } = props

  useEffect(function init() {
    const eventSource = new RNEventSource(`http://52.42.15.3:5000/stream?channel=${room.state.name}`)
    
    eventSource.addEventListener('song', function({data}) {
      const { song } = JSON.parse(data)
      room.addtoQueue(song)
    }, false)

    eventSource.addEventListener('next', function() {
      room.nextSong()
    }, false) 

    return function unMount() {
      eventSource.removeAllListeners()
      eventSource.close()
    }
  },[])

  return children
}

export default StoreMiddleware
