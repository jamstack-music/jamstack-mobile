import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useSelector } from '~/state';
import Room from '~/containers/Room';

import CurrentSong from '~/components/CurrentSong';
import Queue from '~/components/Queue';

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
