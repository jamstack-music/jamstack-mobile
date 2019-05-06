import React from 'react';
import PropTypes from 'prop-types';
import { FlatGrid } from 'react-native-super-grid';

const Grid = props => {
  const { children } = props;

  return (
    <FlatGrid itemDimension={130} items={children} renderItem={({ index }) => children[index]} />
  );
};

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Grid.defaultProps = {
  children: [],
};

export default Grid;
