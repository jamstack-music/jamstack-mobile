import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'jamstate';
import { SOCKET_URL } from 'react-native-dotenv';

import useChannel from './useChannel';

const RoomChannelContext = createContext(null);

export default function RoomChannelContainer(props) {
  const { children } = props;
  const dispatch = useDispatch();

  const roomId = useSelector(s => s.room.code);
  const channel = useChannel(SOCKET_URL, `room:${roomId}`);

  useEffect(() => {
    const addedRef = channel.on('song_addded', song =>
      dispatch({ type: 'addSong', payload: song }),
    );
    const bumpedRef = channel.on('song_bumped', id => dispatch({ type: 'bumpSong', payload: id }));
    const memberRef = channel.on('member_added', member =>
      dispatch({ type: 'addMember', payload: member }),
    );
    const skippedRef = channel.on('song_skipped', () => dispatch({ type: 'nextSong' }));
    const playedRef = channel.on('song_played', () => dispatch({ type: 'playSong' }));
    const pausedRef = channel.on('song_paused', () => dispatch({ type: 'pauseSong' }));

    return () => {
      channel.off('song_added', addedRef);
      channel.off('song_bumped', bumpedRef);
      channel.off('member_added', memberRef);
      channel.off('song_skipped', skippedRef);
      channel.off('song_played', playedRef);
      channel.off('song_paused', pausedRef);
    };
  }, [channel, dispatch]);

  const channelContext = useMemo(
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

  return (
    <RoomChannelContext.Provider value={channelContext}>{children}</RoomChannelContext.Provider>
  );
}

export function useRoomChannel() {
  return useContext(RoomChannelContext);
}
