import React, { useEffect } from 'react';
import Spotify from 'rn-spotify-sdk';
import { NavigationNativeContainer } from '@react-navigation/native';
import { ReduxContainer } from 'jamstate';
import AuthContainer from 'Containers/Auth';
import RoomStatusContainer from 'Containers/RoomStatus';

import AppNavigation from './src/navigation';

const App = () => (
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

export default App;
