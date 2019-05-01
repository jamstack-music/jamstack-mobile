import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

/**
 * ControlsGroup Component
 * Presentational component that houses icons
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const ControlsGroup = props => {
  const { children, style } = props;

  return <View style={{ ...styles.controls, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  flexDirection: 'row',
  alignItems: 'center',
});

ControlsGroup.propTypes = {
  style: PropTypes.objectOf(PropTypes.node),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

ControlsGroup.defaultProps = {
  style: {},
  children: null,
};
export default ControlsGroup;
