import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import AlbumCover from './AlbumCover';

/**
 * Album Component
 * Basic component used for displaying album information
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const Album = props => {
  const { name, artist, images, style, dim } = props;

  const thumbnail = images[0].url;
  return (
    <View style={{ ...styles.album, ...style }}>
      <AlbumCover url={thumbnail} dim={dim} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.artist}>{artist}</Text>
    </View>
  );
};

Album.propTypes = {
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  dim: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.node),
};

Album.defaultProps = {
  images: [{ url: 'http://placeholder.com/200' }],
  dim: 50,
  style: {},
};

const styles = StyleSheet.create({
  album: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default Album;
