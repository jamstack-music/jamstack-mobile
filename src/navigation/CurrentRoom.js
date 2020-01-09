import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RoomContainer from 'Containers/Room';
import SpotifyPlayerContainer from 'Containers/SpotifyPlayer';

import CurrentPlaying from 'Screens/CurrentRoom/CurrentPlaying';
import Search from 'Screens/CurrentRoom/Search';
import Members from 'Screens/CurrentRoom/Members';

import BrowseStack from './Browse';

const Tab = createBottomTabNavigator();

export default function CurrentRoomNavigator() {
  return (
    <RoomContainer.Provider>
      <SpotifyPlayerContainer.Provider>
        <Tab.Navigator>
          <Tab.Screen name="Currently Playing" component={CurrentPlaying} />
          <Tab.Screen name="Browse" component={BrowseStack} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Members" component={Members} />
        </Tab.Navigator>
      </SpotifyPlayerContainer.Provider>
    </RoomContainer.Provider>
  );
}
