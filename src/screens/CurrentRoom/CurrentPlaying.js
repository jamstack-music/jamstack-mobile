import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useSelector } from 'jamstate';
import Room from 'Containers/Room';

import CurrentSong from 'Components/CurrentSong';
import Queue from 'Components/Queue';

export default function CurrentPlaying() {
  const { bumpSong } = Room.useContainer();
  const currentSong = useSelector(s => s.songs.current);
  const queue = useSelector(s => s.songs.queue);

  return (
    <SafeAreaView>
      <Text>CurrentPlaying</Text>
      {currentSong && (
        <CurrentSong
          title={currentSong.title}
          artist={currentSong.artist}
          addedBy={currentSong.addedBy}
          albumArt={currentSong.albumArt}
        />
      )}
      {queue.length === 0 ? (
        <View>
          <Text>No songs in the queue</Text>
        </View>
      ) : (
        <Queue songs={queue} onBump={bumpSong} />
      )}
    </SafeAreaView>
  );
}
