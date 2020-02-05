import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Browse from '~/screens/Browse';
import Playlists from '~/screens/Playlists';
import Playlist from '~/screens/Playlist';
import Album from '~/screens/Album';
import Albums from '~/screens/Albums';

const Stack = createStackNavigator();

const BrowseStack = () => (
  <Stack.Navigator initialRouteName="Browse">
    <Stack.Screen name="Browse" component={Browse} />
    <Stack.Screen name="Albums" component={Albums} />
    <Stack.Screen name="Album" component={Album} />
    <Stack.Screen name="Playlist" component={Playlist} />
    <Stack.Screen name="Playlists" component={Playlists} />
  </Stack.Navigator>
);

export default BrowseStack;
