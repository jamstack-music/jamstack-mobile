import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

import SongList from './SongList';
import SongItem from './SongItem';

const BumpList = props => {
  const { songs, style, onBump } = props;

  return (
    <SongList
      songs={songs}
      style={style}
      renderItem={({ item }) => (
        <SongItem {...item}>
          <Button
            disabled={item.alreadyBumped}
            title={item.bumps.toString()}
            onPress={() => onBump(item)}
          />
        </SongItem>
      )}
    />
  );
};

BumpList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.node).isRequired,
  onBump: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.node),
};

BumpList.defaultProps = {
  style: {},
};

export default BumpList;
