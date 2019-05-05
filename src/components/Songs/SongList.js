import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import SongItem from './SongItem';

// eslint-disable-next-line
const renderItem = ({ item }) => <SongItem {...item} />;

const renderSeperator = () => <View style={styles.seperator} />;

const SongList = props => {
  const { songs, style, ...rest } = props;

  return (
    <FlatList
      data={songs}
      keyExtractor={(song, i) => song.id + i}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeperator}
      style={style}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: '#D7D7E7',
  },
});

SongList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.node).isRequired,
  style: PropTypes.objectOf(PropTypes.node),
};

SongList.defaultProps = {
  style: {},
};

export default SongList;
