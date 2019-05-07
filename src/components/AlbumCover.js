import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/**
 * AlbumCover compoenent is a basic presentational component that displays the album cover of a given song
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const AlbumCover = props => {
  const { url, dim, shadow } = props;

  return (
    <View style={shadow ? styles.shadowContainer : null}>
      <Image source={{ uri: url }} style={{ width: dim, height: dim }} />
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
});

AlbumCover.propTypes = {
  url: PropTypes.string,
  dim: PropTypes.number,
  shadow: PropTypes.bool,
};

AlbumCover.defaultProps = {
  url: 'https://placeholder.com/250',
  dim: 250,
  shadow: false,
};

export default AlbumCover;
