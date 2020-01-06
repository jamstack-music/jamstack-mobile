import React, { useEffect } from 'react';
import Spotify from 'rn-spotify-sdk';
import { NavigationNativeContainer } from '@react-navigation/native';
import { ReduxContainer } from 'jamstate';
import AuthProvider from 'Components/Auth';
import RoomStatusContainer from 'Components/RoomStatusContainer';

import AppNavigation from './src/navigation';

const App = () => {
  useEffect(() => {
    async function initSpotify() {
      const isInitialized = await Spotify.isInitializedAsync();

      if (!isInitialized) {
        Spotify.initialize({
          clientID: '0a31a2abfc5945bb9e3b3507e6f8361c',
          sessionUserDefaultsKey: 'SpotifySession',
          redirectURL: 'jamstack://auth',
          scopes: ['streaming'],
          tokenSwapURL: 'http://localhost:4000/v1/spotify/tokens/swap',
          tokenRefreshURL: 'http://localhost:4000/v1/spotify/tokens/refresh',
        });
      }
    }

    initSpotify();
  }, []);

  return (
    <ReduxContainer>
      <AuthProvider>
        <RoomStatusContainer>
          <NavigationNativeContainer>
            <AppNavigation />
          </NavigationNativeContainer>
        </RoomStatusContainer>
      </AuthProvider>
    </ReduxContainer>
  );
};

export default App;
