import React, { useMemo, useReducer } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Loading from 'Screens/Loading';
import Login from 'Screens/Login';
import Createroom from 'Screens/Createroom';

import RoomNavigator from './Room';

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [state] = useReducer(reducer, {
    isLoading: false,
    spotifyToken: null,
    refreshToken: null,
  });

  const renderedNavigators = useMemo(() => {
    if (state.isLoading) {
      return <Stack.Screen name="Loading" component={Loading} />;
    }

    if (!state.authToken) {
      return <Stack.Screen name="Login" component={Login} />;
    }

    return (
      <>
        <Stack.Screen name="Create Room" component={Createroom} />
        <RoomNavigator />
      </>
    );
  }, [state]);

  return <Stack.Navigator>{renderedNavigators}</Stack.Navigator>;
};

export default AppNavigator;
