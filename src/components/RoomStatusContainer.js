import React, { useState, useEffect, useMemo, createContext, useContext } from 'react';
import { useDispatch } from 'jamstate';
import AsyncStorage from '@react-native-community/async-storage';

import Loading from 'Screens/Loading';

const RoomStatusContext = createContext(null);

export default function RoomStatusContainer(props) {
  const { children } = props;

  const dispatch = useDispatch();
  const [state, setState] = useState({ roomActive: false, isLoading: true });

  useEffect(() => {
    let isSubscribed = true;
    async function getRoom() {
      const [[, name], [, code]] = await AsyncStorage.multiGet(['@RoomName', '@RoomCode']);

      if (isSubscribed) {
        if (code) {
          dispatch({ type: 'initRoom', payload: { name, code } });
          setState(() => ({
            isLoading: false,
            roomActive: true,
          }));
        } else {
          setState(s => ({
            ...s,
            isLoading: false,
          }));
        }
      }
    }

    getRoom();
    return () => {
      isSubscribed = false;
    };
  }, [dispatch]);

  const contextState = useMemo(
    () => ({
      setRoomAsActive: () => setState(s => ({ ...s, roomActive: true })),
      setRoomAsInactive: () => setState(s => ({ ...s, roomActive: false })),
      roomActive: state.roomActive,
    }),
    [state.roomActive],
  );

  return (
    <RoomStatusContext.Provider value={contextState}>
      {state.isLoading ? <Loading /> : children}
    </RoomStatusContext.Provider>
  );
}

export function useRoomStatus() {
  return useContext(RoomStatusContext);
}
