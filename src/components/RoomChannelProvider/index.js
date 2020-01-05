import React, { createContext, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'jamstate';
import { SOCKET_URL } from 'react-native-dotenv';

import useChannel from './useChannel';

const RoomChannelContext = createContext(null);

export default function RoomChannelProvider(props) {
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

    return () => {
      channel.off('song_added', addedRef);
      channel.off('song_bumped', bumpedRef);
      channel.off('memberRef', memberRef);
      channel.off('skippedRef', skippedRef);
    };
  }, [channel, dispatch]);

  return <RoomChannelContext.Provider value={channel}>{children}</RoomChannelContext.Provider>;
}

export function useRoomChannel() {
  return useContext(RoomChannelContext);
}
