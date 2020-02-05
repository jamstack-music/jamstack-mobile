import React, { useCallback } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useSelector } from '~/state';

export default function Confirmation() {
  const state = useSelector(s => s.room);
  const navigation = useNavigation();

  const handleSubmit = useCallback(() => {
    navigation.navigate('Loading Room');
  }, [navigation]);

  return (
    <View>
      <View>
        <Text>Room Name</Text>
        <Text>{state.name}</Text>
        <Text>Type</Text>
        <Text>{state.type}</Text>
      </View>
      <Text>Ready to create your room?</Text>
      <Button title="Create it" onPress={handleSubmit} />
    </View>
  );
}
