import { useState, useEffect, useCallback } from 'react';
import Spotify from 'rn-spotify-sdk';
import { useInterval, useEventCallback } from 'Hooks';
import { useSelector } from 'jamstate';

/**
 * useSpotifyPlayer : State hook for playing songs and listening for when a song is over
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */

export default function useSpotifyPlayer(nextSong) {
  const nextSongCB = useEventCallback(nextSong);
  const currentSongUri = useSelector(s => s.songs.current.uri);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const [start, stop] = useInterval(() => {
    async function getElapsedTime() {
      const { position } = await Spotify.getPlaybackStateAsync();
      setElapsed(position * 1000);
    }

    getElapsedTime();
  }, 500);

  const pauseInternal = useCallback(() => {
    setIsPlaying(false);
    stop();
  }, [stop]);

  const playInternal = useCallback(() => {
    setIsPlaying(true);
    start();
  }, [start]);

  useEffect(() => {
    if (currentSongUri) {
      Spotify.playURI(currentSongUri, 0, 0);
    }

    return () => {
      Spotify.setPlaying(false);
    };
  }, [currentSongUri, pause, play]);

  // Event listener to see if the track has finished and if it has it changes to the next song
  useEffect(() => {
    Spotify.on('audioDeliveryDone', nextSongCB);
    Spotify.on('pause', pauseInternal);
    Spotify.on('play', playInternal);
    return () => {
      Spotify.removeListener('audioDeliveryDone', nextSongCB);
      Spotify.removeListener('pause', pauseInternal);
      Spotify.removeListener('play', playInternal);
    };
  }, [nextSongCB, pauseInternal, playInternal]);

  const play = useCallback(() => Spotify.setPlaying(true), []);
  const pause = useCallback(() => Spotify.setPlaying(false), []);
  return { play, pause, isPlaying, elapsed };
}
