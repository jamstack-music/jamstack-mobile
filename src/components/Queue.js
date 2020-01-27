import React, { useMemo } from 'react';
import { View } from 'react-native';
import BumpSong from './BumpSong';

export default function Queue(props) {
  const { songs, onBump } = props;

  const renderedSongs = useMemo(
    () =>
      songs.map(song => (
        <BumpSong
          key={song.id}
          id={song.id}
          title={song.title}
          artist={song.artist}
          albumArt={song.albumArt}
          onBump={onBump}
        />
      )),
    [songs, onBump],
  );

  return <View>{renderedSongs}</View>;
}
