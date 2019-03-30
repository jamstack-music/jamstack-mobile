import React from 'react'
import AppContainer from './src/navigation/AppNavigator'
import Spotify from 'rn-spotify-sdk'
import { Provider } from 'unstated'

Spotify.initialize({
  'clientID':'0a31a2abfc5945bb9e3b3507e6f8361c',
  'sessionUserDefaultsKey':'SpotifySession',
  'redirectURL':'queuehubmobile://auth',
  'scopes': ['streaming']
})
const App = () => (
  <Provider>
    <AppContainer />
  </Provider>
)

export default App
