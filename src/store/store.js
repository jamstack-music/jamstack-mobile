import { Container } from 'unstated'

export default class RoomContainer extends Container {
  state = {
    queue: [],
    currentSong: {},
    members: [],
    public: true,
    password: ''
  }
} 
