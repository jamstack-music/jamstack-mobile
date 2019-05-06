import { useState, useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import Spotify from 'rn-spotify-sdk';

const timeElapsed = async setElapsed => {
  const { position } = await Spotify.getPlaybackStateAsync();
  setElapsed(position * 1000);
};

/**
 * useSpotifyPlayer : State hook for playing songs and listening for when a song is over
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
function useSpotifyPlayer(uri, nextSong) {
  const timerRef = useRef(null);
  const nextSongCB = useCallback(() => nextSong(), [nextSong]);
  // Play status
  const [play, setPlay] = useState(false);
  // Playback status of song (in ms)
  const [elapsed, setElapsed] = useState(0);

  // Event listener to see if the track has finished and if it has it changes to the next song
  useEffect(
    function init() {
      Spotify.on('audioDeliveryDone', () => {
        nextSongCB();
      });
    },
    [nextSongCB],
  );

  useEffect(
    function playSong() {
      Spotify.setPlaying(play);
    },
    [play],
  );

  useEffect(
    function playNewSong() {
      Spotify.playURI(uri, 0, 0);
      setPlay(true);
    },
    [uri],
  );

  const handleInterval = useCallback(() => timeElapsed(setElapsed), []);

  useEffect(function songTimer() {
    timerRef.current = setInterval(handleInterval, 100);
    return function unMount() {
      clearInterval(timerRef.current);
    };
  });

  return [play, setPlay, elapsed];
}

useSpotifyPlayer.propTypes = {
  uri: PropTypes.string.isRequired,
  nextSong: PropTypes.func.isRequired,
};

export default useSpotifyPlayer;
