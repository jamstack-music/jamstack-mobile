import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/**
 * SongInfo Component is a presentational component that just displays the the song information
 *
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const SongInfo = ({ artist, songTitle }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{songTitle}</Text>
    <Text style={styles.artist}>{artist}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  artist: {
    fontSize: 15,
  },
});

SongInfo.propTypes = {
  artist: PropTypes.string,
  songTitle: PropTypes.string,
};

SongInfo.defaultProps = {
  artist: '---',
  songTitle: '---',
};

export default SongInfo;
