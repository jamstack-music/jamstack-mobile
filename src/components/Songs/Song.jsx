import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

const Song = props => {
  const { title, artist, images } = props;
  return (
    <View>
      <Image source={{ uri: images[images.length - 1].url }} style={{ width: 50, height: 50 }} />
      <Text>{title}</Text>
      <Text>{artist}</Text>
    </View>
  );
};

Song.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  images: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
};

Song.defaultProps = {
  title: '---',
  artist: '---',
  images: [{ url: 'http://placeholder.com/200' }],
};

export default Song;
