import { Container } from 'unstated'

export default class RoomContainer extends Container {
  state = {
    queue: [],
    currentSong: {},
    members: [],
    public: true,
    password: ''
  }

  addToQueue = song => this.setState(prevState => {
    prevState
  })

  nextSong = () => {
    if(this.state.queue.length > 0) {
      this.setState(prevState => {
        currentSong: prevState.queue[prevState.queue.length - 1], 
        queue: prevState.queue.slice(0, prevState.queue.length - 1)
      })
    }
  }

  addSong = song => {
    this.setState(prevState => {
      queue: prevState.queue.insert(0, song)
    })
  } 
} 
