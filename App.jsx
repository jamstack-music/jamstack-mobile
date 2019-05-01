import React from 'react';
import Spotify from 'rn-spotify-sdk';
import FlashMessage from 'react-native-flash-message';
import AppContainer from './src/navigation/AppNavigator';
import { RoomProvider } from './src/store/room';

Spotify.initialize({
  clientID: '0a31a2abfc5945bb9e3b3507e6f8361c',
  sessionUserDefaultsKey: 'SpotifySession',
  redirectURL: 'queuehubmobile://auth',
  scopes: ['streaming']
});
const App = () => (
  <RoomProvider>
    <AppContainer />
    <FlashMessage position="top" />
  </RoomProvider>
);

export default App;
