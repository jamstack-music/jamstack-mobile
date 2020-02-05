import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RoomContainer from '~/containers/Room';
import SpotifyPlayerContainer from '~/containers/SpotifyPlayer';

import CurrentPlaying from '~/screens/CurrentRoom/CurrentPlaying';
import Search from '~/screens/CurrentRoom/Search';
import Members from '~/screens/CurrentRoom/Members';

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
