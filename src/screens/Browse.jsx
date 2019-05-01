import React from 'react';
import { Button, View } from 'react-native';
import PropTypes from 'prop-types';

const Browse = props => {
  const { navigation } = props;

  return (
    <View>
      <Button title="Playlists" onPress={() => navigation.navigate('Playlists')} />
      <Button title="Albums" onPress={() => navigation.navigate('Albums')} />
    </View>
  );
};

Browse.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Browse;
