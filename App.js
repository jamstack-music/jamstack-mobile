import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { ReduxContainer } from 'jamstate';
import AuthContainer from 'Containers/Auth';

import * as Sentry from '@sentry/react-native';
import AppNavigation from './src/navigation';

Sentry.init({
  dsn: 'https://75baf38f4b2d41afa274f54acbea3469@sentry.io/1889339',
});

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
