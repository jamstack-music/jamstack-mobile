import React, { useCallback, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'jamstate';
import { useNavigation } from '@react-navigation/native';

export default function RoomName() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [name, setName] = useState('');

  const handleSubmit = useCallback(() => {
    dispatch({ type: 'setRoomName', payload: name });
    navigation.navigate('Room Type');
  }, [dispatch, name, navigation]);

  return (
    <View>
      <TextInput onChangeText={setName} placeholder="ex) A Cool Name" value={name} />
      <Button disabled={name === ''} onPress={handleSubmit} title="Pick your type" />
    </View>
  );
}
