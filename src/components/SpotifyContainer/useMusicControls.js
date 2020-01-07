import { useEffect } from 'react';
import { useSelector } from 'jamstate';
import MusicControl from 'react-native-music-control';

import { useRoomChannel } from 'Components/RoomChannelProvider';

export default function useMusicControls() {
  const { playSong, pauseSong, nextSong } = useRoomChannel();
  const currentSong = useSelector(s => s.songs.current);

  useEffect(() => {
    MusicControl.enableBackgroundMode(true);

    // Control setup for music player
    MusicControl.enableControl('play', true);
    MusicControl.enableControl('pause', true);
    MusicControl.enableControl('nextTrack', true);
    MusicControl.enableControl('prevTrack', false);

    MusicControl.on('play', playSong);
    MusicControl.on('pause', pauseSong);
    MusicControl.on('nexTrack', nextSong);

    return () => {
      MusicControl.off('play', playSong);
      MusicControl.off('pause', pauseSong);
      MusicControl.off('nexTrack', nextSong);
    };
  }, [nextSong, pauseSong, playSong]);

  useEffect(() => {
    if (currentSong) {
      const { title, artist, image, duration } = currentSong;

      MusicControl.setNowPlaying({
        title,
        artwork: image,
        artist,
        duration: Math.floor(duration / 1000),
      });
    } else {
      MusicControl.resetControls();
    }
  });
}
