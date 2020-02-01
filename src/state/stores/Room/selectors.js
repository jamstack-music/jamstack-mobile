import { createSelector } from 'reselect';

const getRoomLoading = s => s.room.loading;
const getRoomError = s => s.room.error;

export const getRoomLoadingStatus = createSelector(
  getRoomLoading,
  getRoomError,
  (loading, error) => [loading, error],
);
