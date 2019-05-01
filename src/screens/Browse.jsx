import React from 'react';
import { Button, View, Text } from 'react-native';

const Browse = props => {
  const { navigation } = props;

  return (
    <View>
      <Button title="Playlists" onPress={() => navigation.navigate('Playlists')} />
      <Button title="Albums" onPress={() => navigation.navigate('Albums')} />
    </View>
  );
};

export default Browse;
