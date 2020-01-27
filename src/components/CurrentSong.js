import React from 'react';
import { View, Text } from 'react-native';
import AlbumCover from './AlbumCover';

export default function CurrentSong(props) {
  const { title, artist, albumArt, addedBy } = props;

  return (
    <View>
      <Text>{title}</Text>
      <Text>{artist}</Text>
      <AlbumCover uri={albumArt.uri} dim={albumArt.dim} />
      <Text>{addedBy}</Text>
    </View>
  );
}
