import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/**
 * AlbumCover compoenent is a basic presentational component that displays the album cover of a given song
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const AlbumCover = props => {
  const { url, dim = 250, shadow } = props;

  return (
    <View style={shadow ? styles.shadowContainer : null}>
      <Image
        source={{
          uri: url || 'https://www.indigenousmusicawards.com/img/placeholder-music.png'
        }}
        style={{ width: dim, height: dim }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.2,
    shadowRadius: 10
  }
});

AlbumCover.propTypes = {
  url: PropTypes.string
};

export default AlbumCover;
