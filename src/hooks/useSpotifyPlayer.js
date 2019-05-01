import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spotify from 'rn-spotify-sdk';

/**
 * useSpotifyPlayer : State hook for playing songs and listening for when a song is over
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
function useSpotifyPlayer(uri, nextSong) {
  let timerRef = null;
  // Play status
  const [play, setPlay] = useState(false);
  // Playback status of song (in ms)
  const [elapsed, setElapsed] = useState(0);

  // Event listener to see if the track has finished and if it has it changes to the next song
  useEffect(function init() {
    Spotify.on('audioDeliveryDone', () => {
      nextSong();
    });
  }, []);

  useEffect(
    function playNewSong() {
      Spotify.playURI(uri, 0, 0);
      setPlay(true);
    },
    [uri]
  );

  useEffect(
    function playSong() {
      Spotify.setPlaying(play);
    },
    [play]
  );

  useEffect(function songTimer() {
    timerRef = setInterval(() => timeElapsed(), 100);
    return function() {
      clearInterval(timerRef);
    };
  });

  const timeElapsed = async () => {
    const { position } = await Spotify.getPlaybackStateAsync();
    setElapsed(position * 1000);
  };

  return [play, setPlay, elapsed];
}

useSpotifyPlayer.propTypes = {
  uri: PropTypes.string.isRequired,
  nextSong: PropTypes.func.isRequired
};

export default useSpotifyPlayer;
