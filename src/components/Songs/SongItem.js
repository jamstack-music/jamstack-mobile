import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import AlbumCover from '../AlbumCover';

const SongItem = props => {
  const { title, artist, images, children } = props;

  const thumbnail =
    images && images.length !== 0 ? images[images.length - 1].url : 'http://placeholder.com/200';

  return (
    <View style={styles.song}>
      <View>
        <AlbumCover url={thumbnail} dim={50} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  song: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 16,
  },
  artist: {
    fontSize: 14,
    color: '#3C3C3C',
  },
  details: {
    flex: 2,
    marginHorizontal: 10,
    textAlign: 'left',
  },
});

SongItem.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

SongItem.defaultProps = {
  images: [{ url: 'http://placeholder.com/200' }],
  children: null,
};

export default SongItem;
