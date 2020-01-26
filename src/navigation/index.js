import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from 'Components/Auth';
import Login from 'Screens/Login';

import RoomNavigator from './Room';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { state } = useAuth();

  const renderedNavigators = useMemo(() => {
    if (!state.spotifyToken) {
      return <Stack.Screen name="Login" component={Login} />;
    }

    return <Stack.Screen name="Room" component={RoomNavigator} />;
  }, [state.spotifyToken]);

  return <Stack.Navigator>{renderedNavigators}</Stack.Navigator>;
};

export default AppNavigator;
