import React, { useCallback } from 'react';
import { Button } from 'react-native';

import SongItem from './SongItem';

export default function AddSong(props) {
  const { id, onAdd, title, artist, albumArt } = props;

  const handleAdd = useCallback(() => onAdd(id), [id, onAdd]);

  return (
    <SongItem title={title} artist={artist} albumArt={albumArt}>
      <Button onPress={handleAdd} title="add" />
    </SongItem>
  );
}
