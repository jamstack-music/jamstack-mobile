import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import MenuScreen from 'Screens/Menu';
import RoomCreation from './RoomCreation';

const Stack = createStackNavigator();

export default function LobbyNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen
        name="Join Room"
        component={() => (
          <View>
            {' '}
            <Text>Hello</Text>
          </View>
        )}
      />
      <Stack.Screen name="Create Room" component={RoomCreation} />
    </Stack.Navigator>
  );
}
