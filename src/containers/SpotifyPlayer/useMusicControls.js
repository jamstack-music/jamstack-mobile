import { useEffect } from 'react';
import MusicControl from 'react-native-music-control';

import { useSelector } from '~/state';
import Room from '~/containers/Room';

export default function useMusicControls() {
  const { nextSong, playSong, pauseSong } = Room.useContainer();
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
