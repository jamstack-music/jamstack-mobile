import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { ReduxContainer } from 'AppState';
import AuthContainer from 'Containers/Auth';

import AppNavigation from './src/navigation';

const App = () => (
  <ReduxContainer>
    <AuthContainer>
      <NavigationNativeContainer>
        <AppNavigation />
      </NavigationNativeContainer>
    </AuthContainer>
  </ReduxContainer>
);

export default App;
