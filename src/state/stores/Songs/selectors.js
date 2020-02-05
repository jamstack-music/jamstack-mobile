import { createSelector } from 'reselect';

const getCurrentSongId = s => s.songs.currentId;
const getAllSongsById = s => s.songs.allById;
const getQueueOfIds = s => s.songs.queue;

export const getCurrentSong = createSelector(
  getAllSongsById,
  getCurrentSongId,
  (songs, currentId) => songs[currentId],
);

export const getQueue = createSelector(
  getAllSongsById,
  getQueueOfIds,
  (songs, queueIds) => queueIds.map(songId => songs[songId]),
);
