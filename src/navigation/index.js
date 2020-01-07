import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from 'Containers/Auth';
import Login from 'Screens/Login';

import RoomNavigator from './Room';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { state } = useAuth();

  return useMemo(() => {
    if (!state.spotifyToken) {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      );
    }

    return <RoomNavigator />;
  }, [state.spotifyToken]);
};

export default AppNavigator;
