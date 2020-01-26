import React from 'react';
import { Stack } from '@react-navigation/stack';

import Browse from 'Screens/Browse';
import Playlists from 'Screens/Playlists';
import Playlist from 'Screens/Playlist';
import Album from 'Screens/Album';
import Albums from 'Screens/Albums';

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
