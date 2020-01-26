import React from 'react';
import Spotify from 'rn-spotify-sdk';
import { NavigationNativeContainer } from '@react-navigation/native';
import { ReduxContainer } from 'jamstate';

import AppNavigation from './src/navigation';

Spotify.initialize({
  clientID: '0a31a2abfc5945bb9e3b3507e6f8361c',
  sessionUserDefaultsKey: 'SpotifySession',
  redirectURL: 'localhost:4000/authorize',
  scopes: ['streaming'],
});

const App = () => {
  return (
    <ReduxContainer>
      <NavigationNativeContainer>
        <AppNavigation />
      </NavigationNativeContainer>
    </ReduxContainer>
  );
};

export default App;
