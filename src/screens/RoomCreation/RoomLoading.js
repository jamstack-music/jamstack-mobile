import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useDispatch, useSelector } from 'jamstate';
import { useNavigation } from '@react-navigation/native';
import { useDebounce } from 'Hooks';

import { createRoom } from '../../data/rooms';

export default function RoomLoading() {
  const dispatch = useDispatch();
  const roomState = useSelector(s => s.room, (a, b) => a.code !== b.code);
  const navigation = useNavigation();

  const [roomCreated, setRoomCreated] = useState(false);
  const debouncedRoomCreated = useDebounce(roomCreated, 3000);

  useEffect(() => {
    async function createNewRoom() {
      const res = await createRoom(roomState);
      dispatch({ type: 'setRoomCode', payload: res.data });
      await AsyncStorage.multiSet([['@RoomName', roomState.name], ['@RoomCode', res.data]]);
      setRoomCreated(true);
      // TODO: Figure out how to handle errors
    }

    if (!roomCreated) {
      createNewRoom();
    }
  }, [dispatch, roomCreated, roomState]);

  useEffect(() => {
    if (debouncedRoomCreated) {
      navigation.navigate('Room Code');
    }
  }, [debouncedRoomCreated, navigation]);

  return (
    <View>
      <Text>Creating Room...</Text>
    </View>
  );
}
