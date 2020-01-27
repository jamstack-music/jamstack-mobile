import React, { useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'jamstate';
import { useAuth } from 'Containers/Auth';

export default function RoomCode() {
  const { validateRoom } = useAuth();
  const roomCode = useSelector(s => s.room.code);
  const name = useSelector(s => s.room.name);

  const handlePress = useCallback(() => validateRoom(), [validateRoom]);

  return (
    <View>
      <Text>Your generated room code for {name} is:</Text>
      <Text>{roomCode}</Text>
      <Button title="Go to your room" onPress={handlePress} />
    </View>
  );
}
