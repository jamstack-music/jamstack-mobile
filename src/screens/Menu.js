import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Button } from 'react-native';

export default function Menu() {
  const navigation = useNavigation();
  const handleRoomCreate = useCallback(() => navigation.push('Create Room'), [navigation]);
  const handleRoomJoin = useCallback(() => navigation.push('Join Room'), [navigation]);
  return (
    <View>
      <Button title="Create Room" onPress={handleRoomCreate} />
      <Button title="Join Room" onPress={handleRoomJoin} />
    </View>
  );
}
