import React, { useEffect } from 'react';
import Spotify from 'rn-spotify-sdk';
import { NavigationNativeContainer } from '@react-navigation/native';
import { ReduxContainer } from 'jamstate';
import AuthContainer from 'Containers/Auth';
import RoomStatusContainer from 'Containers/RoomStatus';

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
      <AuthContainer>
        <RoomStatusContainer>
          <NavigationNativeContainer>
            <AppNavigation />
          </NavigationNativeContainer>
        </RoomStatusContainer>
      </AuthContainer>
    </ReduxContainer>
  );
};

export default App;
