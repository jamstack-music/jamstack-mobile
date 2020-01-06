import React, { useState, useEffect, useMemo, createContext, useContext } from 'react';
import { useDispatch } from 'jamstate';
import AsyncStorage from '@react-native-community/async-storage';

import Loading from 'Screens/Loading';

const RoomStatusContext = createContext(null);

export default function RoomStatusContainer(props) {
  const { children } = props;

  const dispatch = useDispatch();
  const [roomActive, setRoomActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getRoom() {
      const [[, name], [, code]] = await AsyncStorage.multiGet(['@RoomName', '@RoomCode']);

      if (code) {
        dispatch({ type: 'initRoom', payload: { name, code } });
        setRoomActive(true);
      }
      setIsLoading(false);
    }

    getRoom();
  }, [dispatch]);

  const contextState = useMemo(
    () => ({
      setRoomAsActive: () => setRoomActive(true),
      setRoomAsInactive: () => setRoomActive(false),
      roomActive,
    }),
    [roomActive],
  );

  return (
    <RoomStatusContext.Provider value={contextState}>
      {isLoading ? <Loading /> : children}
    </RoomStatusContext.Provider>
  );
}

export function useRoomStatus() {
  return useContext(RoomStatusContext);
}
