import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import AlbumCover from './AlbumCover';

/**
 * Playlist Component
 * Basic component to display Playlist info
 * @author [Zach Banducci](http://github.com/zchbndcc9)
 */

const Playlist = props => {
  const { name, images, dim } = props;

  const thumbnail = images[0].url;
  return (
    <View style={styles.playlist}>
      <AlbumCover url={thumbnail} dim={dim} />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  playlist: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Playlist.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  dim: PropTypes.number,
};

Playlist.defaultProps = {
  images: [{ url: 'http://placeholder.com/200' }],
  dim: 50,
};

export default Playlist;
