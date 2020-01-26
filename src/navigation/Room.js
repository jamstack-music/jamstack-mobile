import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RoomChannelProvider from 'Components/RoomChannelProvider';

import CurrentPlaying from 'Screens/CurrentPlaying';
import Search from 'Screens/Search';
import Members from 'Screens/Members';

import BrowseStack from './Browse';

const Tab = createBottomTabNavigator();

const RoomNavigator = () => (
  <RoomChannelProvider>
    <Tab.Navigator>
      <Tab.Screen name="Currently Playing" component={CurrentPlaying} />
      <Tab.Screen name="Browse" component={BrowseStack} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Members" component={Members} />
    </Tab.Navigator>
  </RoomChannelProvider>
);
export default RoomNavigator;
