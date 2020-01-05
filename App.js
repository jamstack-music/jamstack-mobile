import React from 'react';
import Spotify from 'rn-spotify-sdk';
import { NavigationNativeContainer } from '@react-navigation/native';
import { ReduxContainer } from 'jamstate';
import AuthProvider from 'Components/Auth';

import AppNavigation from './src/navigation';

Spotify.initialize({
  clientID: '0a31a2abfc5945bb9e3b3507e6f8361c',
  sessionUserDefaultsKey: 'SpotifySession',
  redirectURL: 'http://localhost:4000/v1/authenticate',
  scopes: ['streaming'],
});

const App = () => (
  <ReduxContainer>
    <AuthProvider>
      <NavigationNativeContainer>
        <AppNavigation />
      </NavigationNativeContainer>
    </AuthProvider>
  </ReduxContainer>
);

export default App;
