import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RoomName from 'Screens/RoomCreation/RoomName';
import RoomType from 'Screens/RoomCreation/RoomType';
import Confirmation from 'Screens/RoomCreation/Confirmation';
import RoomLoading from 'Screens/RoomCreation/RoomLoading';
import RoomCode from 'Screens/RoomCreation/RoomCode';

const Stack = createStackNavigator();

export default function RoomCreationNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Room Name" component={RoomName} />
      <Stack.Screen name="Room Type" component={RoomType} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="Loading Room" component={RoomLoading} />
      <Stack.Screen headerShown={false} name="Room Code" component={RoomCode} />
    </Stack.Navigator>
  );
}
