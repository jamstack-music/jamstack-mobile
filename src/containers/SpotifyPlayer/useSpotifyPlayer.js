import { useState, useEffect, useCallback } from 'react';
import Spotify from 'rn-spotify-sdk';
import { useInterval } from 'Hooks';
import { useSelector } from 'jamstate';

import { useRoomChannel } from 'Containers/RoomChannel';

/**
 * useSpotifyPlayer : State hook for playing songs and listening for when a song is over
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */

export default function useSpotifyPlayer() {
  const { nextSong } = useRoomChannel();
  const currentSongUri = useSelector(s => s.songs.current.uri);
  const isPlaying = useSelector(s => s.songs.isPlaying);
  const [isActiveDevice, setIsActiveDevice] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const [startTimer, stopTimer] = useInterval(() => {
    async function getElapsedTime() {
      const { position } = await Spotify.getPlaybackStateAsync();
      setElapsed(position * 1000);
    }

    getElapsedTime();
  }, 500);

  useEffect(() => {
    if (isActiveDevice && currentSongUri) {
      Spotify.playURI(currentSongUri, 0, 0);
    }

    return () => {
      if (isActiveDevice) {
        Spotify.setPlaying(false);
      }
    };
  }, [currentSongUri, isActiveDevice]);

  useEffect(() => {
    if (isActiveDevice) {
      Spotify.setPlaying(isPlaying);
    }
  }, [isActiveDevice, isPlaying]);

  const activateDevice = useCallback(() => setIsActiveDevice(true), []);
  const deactivateDevice = useCallback(() => setIsActiveDevice(false), []);

  // Event listener to see if the track has finished and if it has it changes to the next song
  useEffect(() => {
    Spotify.on('audioDeliveryDone', nextSong);
    Spotify.on('pause', stopTimer);
    Spotify.on('play', startTimer);
    Spotify.on('active', activateDevice);
    Spotify.on('inactive', deactivateDevice);
    return () => {
      Spotify.removeListener('audioDeliveryDone', nextSong);
      Spotify.removeListener('pause', stopTimer);
      Spotify.removeListener('play', startTimer);
      Spotify.removeListener('active', activateDevice);
      Spotify.removeListener('inactive', deactivateDevice);
    };
  }, [activateDevice, deactivateDevice, nextSong, startTimer, stopTimer]);

  return { elapsed };
}
