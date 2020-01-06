import React, { useMemo } from 'react';
import { useRoomStatus } from 'Components/RoomStatusContainer';
import CurrentRoomNavigator from './CurrentRoom';
import RoomCreationNavigator from './RoomCreation';

export default function RoomNavigator() {
  const { roomActive } = useRoomStatus();

  return useMemo(() => {
    if (roomActive) {
      return <CurrentRoomNavigator />;
    }

    return <RoomCreationNavigator />;
  }, [roomActive]);
}
