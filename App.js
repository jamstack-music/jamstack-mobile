import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';

import { ReduxContainer } from './src/state';
import AuthContainer from './src/containers/Auth';
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
