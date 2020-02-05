import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { ReduxContainer } from '~/state';
import AuthContainer from '~/containers/Auth';

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
