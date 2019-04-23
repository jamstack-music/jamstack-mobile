import React from 'react'
import AppContainer from './src/navigation/AppNavigator'
import Spotify from 'rn-spotify-sdk'
import { RoomProvider } from './src/store/room'

Spotify.initialize({
  'clientID':'0a31a2abfc5945bb9e3b3507e6f8361c',
  'sessionUserDefaultsKey':'SpotifySession',
  'redirectURL':'queuehubmobile://auth',
  'scopes': ['streaming']
})
const App = () => (
  
  <RoomProvider>
    <AppContainer />
  </RoomProvider>
)

export default App
