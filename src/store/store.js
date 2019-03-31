import { Container } from 'unstated'

export default class RoomContainer extends Container {
  state = {
    queue: [
      {
        title: 'Heartless',
        album: {
          width: 640,
          height: 640,
          url: 'data:image/jpeg;base64,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' 
        },
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
