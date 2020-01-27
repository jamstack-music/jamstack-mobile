import React, { useCallback } from 'react';
import { Button } from 'react-native';

import SongItem from './SongItem';

export default function BumpSong(props) {
  const { id, onBump, title, artist, albumArt } = props;

  const handleBump = useCallback(() => onBump(id), [onBump, id]);

  return (
    <SongItem title={title} artist={artist} albumArt={albumArt}>
      <Button onPress={handleBump} title="bump" />
    </SongItem>
  );
}
