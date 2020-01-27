import React, { useCallback } from 'react';
import { View, Text, Picker, Button } from 'react-native';
import { useDispatch, useSelector } from 'jamstate';
import { useNavigation } from '@react-navigation/native';

export default function RoomType() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const name = useSelector(s => s.room.name);
  const type = useSelector(s => s.room.type);

  const handleChange = useCallback(
    value => {
      dispatch({ type: 'setRoomType', payload: value });
    },
    [dispatch],
  );

  const handleSubmit = useCallback(() => {
    navigation.navigate('Confirmation');
  }, [navigation]);

  return (
    <View>
      <Text>What type of room is {name}</Text>
      <Picker selectedValue={type} onValueChange={handleChange}>
        <Picker.Item label="Party" value="PARTY" />
        <Picker.Item label="Personal" value="PERSONAL" />
      </Picker>
      <Button title="Confirm everything is right" onPress={handleSubmit} />
    </View>
  );
}
