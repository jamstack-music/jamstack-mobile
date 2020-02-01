import { wrapReducer } from '../../lib';

import INIT_STATE from './state';

const superBump = queue => {
  queue.sort((a, b) => b.bumps - a.bumps);
};

const songsReducer = {
  addSong: (state, song) => {
    const newSong = {
      ...song,
      alreadyBumped: false,
      bumps: 0,
    };

    const stateWithNewSong = {
      ...state,
      allById: {
        ...state.allById,
        [current]: newSong,
      },
    };

    if (state.currentId) {
      return {
        ...stateWithNewSong,
        queue: [...state.queue, newSong.id],
      };
    }

    return {
      ...stateWithNewSong,
      currentId: newSong.id,
    };
  },
  nextSong: state => {
    if (state.queue.length === 0) {
      return {
        ...state,
        currentId: null,
      };
    }

    return {
      ...state,
      currentId: state.queue[0],
      queue: state.queue.slice(1, state.queue.length),
    };
  },
  bumpSong: (state, bumpedSongId) => {
    const songIndex = state.queue.findIndex(songId => songId === bumpedSongId);

    const newQueue = [...state.queue];

    [newQueue[songIndex], newQueue[songIndex - 1]] = [newQueue[songIndex - 1], newQueue[songIndex]];

    return {
      ...state,
      queue: newQueue,
    };
  },
  playSong: state => ({
    ...state,
    isPlaying: true,
  }),
  pauseSong: state => ({
    ...state,
    isPlaying: false,
  }),
  initRoom: (state, room) => ({
    ...state,
    superBumpEnabled: room.superBumpEnabled || state.superBumpEnabled,
    queue: room.queue || state.queue,
    currentId: room.currentSong || state.currentId,
  }),
};

export default wrapReducer(songsReducer, INIT_STATE);
