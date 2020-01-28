import { wrapReducer } from '../../lib';

import INIT_STATE from './state';

const superBump = (queue) => {
  queue.sort((a, b) => b.bumps - a.bumps);
};

const songsReducer = {
  addSong: (state, song) => {
    const newSong = {
      ...song,
      bumps: 0,
      alreadyBumped: false,
    };

    if (state.current) {
      return { ...state, queue: [...state.queue, newSong] };
    }

    return { ...state, current: newSong };
  },
  nextSong: (state) => {
    if (state.queue.length === 0) {
      return {
        ...state,
        current: null,
      };
    }

    return {
      ...state,
      current: state.queue[0],
      queue: state.queue.slice(1, state.queue.length),
    };
  },
  bumpSong: (state, songId) => {
    const queue = state.queue.map((song) => {
      if (song.id !== songId) return song;

      return {
        ...song,
        bumps: song.bumps + 1,
        alreadyBumped: true,
      };
    });

    if (state.superBumpEnabled) {
      superBump(queue);
    } else {
      // TODO: Implement regular bumping
    }
    return { ...state, queue };
  },
  playSong: (state) => ({
    ...state,
    isPlaying: true,
  }),
  pauseSong: (state) => ({
    ...state,
    isPlaying: false,
  }),
  initRoom: (state, room) => ({
    ...state,
    superBumpEnabled: room.superBumpEnabled || state.superBumpEnabled,
    queue: room.queue || state.queue,
    current: room.currentSong || state.current,
  }),
};

export default wrapReducer(songsReducer, INIT_STATE);
