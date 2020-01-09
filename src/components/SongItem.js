import React from 'react';
import { View, Text } from 'react-native';
import AlbumCover from './AlbumCover';

export default function SongItem(props) {
  const { title, artist, albumArt, children } = props;

  return (
    <View>
      {albumArt && <AlbumCover uri={albumArt.uri} dim={50} />}
      <View>
        <Text>{title}</Text>
        <Text>{artist}</Text>
      </View>
      {children}
    </View>
  );
}
