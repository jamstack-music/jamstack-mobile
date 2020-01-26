import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from 'Containers/Auth';
import Login from 'Screens/Login';

import RoomNavigator from './Room';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isLoggedIn } = useAuth();

  return useMemo(() => {
    if (isLoggedIn) {
      return <RoomNavigator />;
    }

    return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }, [isLoggedIn]);
};

export default AppNavigator;
