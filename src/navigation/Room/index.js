import React from 'react';

import { useAuth } from '~/containers/Auth';

import CreateRoomNavigator from './Create';
import CurrentRoomNavigator from './Current';

export default function RoomNavigator() {
  const { hasValidRoomCode } = useAuth();
  if (hasValidRoomCode) {
    return <CurrentRoomNavigator />;
  }

  return <CreateRoomNavigator />;
}
