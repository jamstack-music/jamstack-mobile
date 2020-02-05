import { useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from '~/state';
import { rejoinRoom } from '~/data/rooms';
import { useFetch } from '~/hooks';
import { createContainer } from '~/hooks/useContainer';
import { useAuth } from '~/containers/Auth';

import useRoomChannel from './useRoomChannel';

function useRoom() {
  const dispatch = useDispatch();
  const { invalidateRoom } = useAuth();
  const roomId = useSelector(s => s.room.code);
  const channel = useRoomChannel(roomId);
  const { error, data, fetch } = useFetch();

  useEffect(() => {
    fetch(rejoinRoom, roomId, {});
  }, [dispatch, fetch, roomId]);

  if (data) dispatch({ type: 'initRoom', payload: data });

  if (error && error.response.status === 400) {
    invalidateRoom();
  }

  // Channel listeners
  useEffect(() => {
    const addedRef = channel.on('song_addded', song =>
      dispatch({ type: 'addSong', payload: song }),
    );
    const bumpedRef = channel.on('song_bumped', id => dispatch({ type: 'bumpSong', payload: id }));
    const memberRef = channel.on('member_added', member =>
      dispatch({ type: 'addMember', payload: member }),
    );
    const nextRef = channel.on('next_song', () => dispatch({ type: 'nextSong' }));
    const playedRef = channel.on('song_played', () => dispatch({ type: 'playSong' }));
    const pausedRef = channel.on('song_paused', () => dispatch({ type: 'pauseSong' }));

    return () => {
      channel.off('song_added', addedRef);
      channel.off('song_bumped', bumpedRef);
      channel.off('member_added', memberRef);
      channel.off('next_song', nextRef);
      channel.off('song_played', playedRef);
      channel.off('song_paused', pausedRef);
    };
  }, [channel, dispatch]);

  const roomFunctions = useMemo(
    () => ({
      addSong: song => {
        dispatch({ type: 'addSong', payload: song });
        channel.push('add_song', { data: song });
      },
      bumpSong: songId => {
        dispatch({ type: 'bumpSong', payload: songId });
        channel.push('bump_song', { data: songId });
      },
      nextSong: () => {
        dispatch({ type: 'nextSong' });
        channel.push('next_song');
      },
      playSong: () => {
        dispatch({ type: 'playSong' });
        channel.push('play_song');
      },
      pauseSong: () => {
        dispatch({ type: 'pauseSong' });
        channel.push('pause_song');
      },
    }),
    [channel, dispatch],
  );

  return roomFunctions;
}

export default createContainer(useRoom, 'RoomContainer');
