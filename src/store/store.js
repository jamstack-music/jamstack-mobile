import { Container } from 'unstated'

export default class RoomContainer extends Container {
  state = {
    queue: [
      {
        title: 'Heartless',
        album: {
          width: 640,
          height: 640,
          url: 'https://i.scdn.co/image/353e99e5ff167272c245412b52d84bc36185b58d' 
        },
        duration: 211000,
        uri: 'spotify:track:4EWCNWgDS8707fNSZ1oaA5', 
        artist: 'Kanye West'
      },
      {
        title: 'Head In the Ceiling Fan',
        album: {
          width: 600,
          height: 600,
          url: 'https://f4.bcbits.com/img/a2005231175_16.jpg' 
        },
        uri: 'spotify:track:37G9ACbVFCdZvdHVSA3dxz', 
        duration: 239546,
        artist: 'Title Fight'
      }
    ], 
    currentSong: {
      title: 'Head In the Ceiling Fan',
      album: {
        width: 600,
        height: 600,
        url: 'https://f4.bcbits.com/img/a2005231175_16.jpg' 
      },
      duration: 239546,
      uri: 'spotify:track:37G9ACbVFCdZvdHVSA3dxz', 
      artist: 'Title Fight'
    },
    members: [],
    public: true,
    password: ''
  }

  addToQueue = song => this.setState(prevState => ({
    queue: prevState.queue.insert(0, song)
  }))

  nextSong = () => {
    if(this.state.queue.length > 0) {
      this.setState(prevState => ({
        currentSong: prevState.queue[prevState.queue.length - 1], 
        queue: prevState.queue.slice(0, prevState.queue.length - 1)
      }))
    }
  }

  addSong = song => {
    this.setState(prevState => ({
      queue: prevState.queue.insert(0, song)
    }))
  } 
} 
