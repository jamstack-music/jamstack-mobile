import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'jamstate';
import MusicControl from 'react-native-music-control';

export default function useMusicControls() {
  const dispatch = useDispatch();
  const currentSong = useSelector(s => s.songs.current);

  const play = useCallback(() => dispatch({ type: 'playSong' }), [dispatch]);
  const pause = useCallback(() => dispatch({ type: 'pauseSong' }), [dispatch]);
  const next = useCallback(() => dispatch({ type: 'nextSong' }), [dispatch]);

  useEffect(() => {
    MusicControl.enableBackgroundMode(true);

    // Control setup for music player
    MusicControl.enableControl('play', true);
    MusicControl.enableControl('pause', true);
    MusicControl.enableControl('nextTrack', true);
    MusicControl.enableControl('prevTrack', false);

    MusicControl.on('play', play);
    MusicControl.on('pause', pause);
    MusicControl.on('nexTrack', next);

    return () => {
      MusicControl.off('play', play);
      MusicControl.off('pause', pause);
      MusicControl.off('nexTrack', next);
    };
  }, [next, pause, play]);

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
