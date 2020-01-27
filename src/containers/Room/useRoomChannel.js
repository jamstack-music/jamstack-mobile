import { SOCKET_URL } from 'react-native-dotenv';

import useChannel from './useChannel';

export default function useRoomChannel(roomId) {
  return useChannel(SOCKET_URL, `room:${roomId}`);
}
