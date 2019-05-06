import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import MusicControl from 'react-native-music-control';
import useSpotifyPlayer from './useSpotifyPlayer';

/**
 * useMusicPlayer: Generic music player hook that updates currently playing information
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
function useMusicPlayer(song, nextSong) {
  const { title, artist, album, uri, duration } = song;
  const [play, setPlay, elapsed] = useSpotifyPlayer(uri, nextSong);

  const handlePlay = useCallback(() => setPlay(true), [setPlay]);
  const handlePause = useCallback(() => setPlay(false), [setPlay]);
  const handleNext = useCallback(() => nextSong(), [nextSong]);

  useEffect(
    function updatePlayback() {
      MusicControl.enableBackgroundMode(true);

      MusicControl.setNowPlaying({
        title,
        artwork: album ? album[album.length - 1].url : 'http://placeholder.com/200',
        artist,
        duration,
      });

      // Control setup for music player
      MusicControl.enableControl('play', true);
      MusicControl.enableControl('pause', true);
      MusicControl.enableControl('nextTrack', true);
      MusicControl.enableControl('prevTrack', false);

      MusicControl.on('play', handlePlay);
      MusicControl.on('pause', handlePause);
      MusicControl.on('nextTrack', handleNext);
    },
    [album, artist, duration, handleNext, handlePause, handlePlay, title, uri],
  );

  return [play, setPlay, elapsed];
}

useMusicPlayer.propTypes = {
  song: PropTypes.objectOf(PropTypes.node).isRequired,
  nextSong: PropTypes.func.isRequired,
};

export default useMusicPlayer;
