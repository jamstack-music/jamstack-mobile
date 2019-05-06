import React from 'react';
import { TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const withLinks = (Component, type) => {
  const Sub = props => {
    const { navigation, ...rest } = props;

    return (
      <TouchableHighlight
        activeOpacity={0.01}
        underlayColor="white"
        onPress={() => navigation.push(type, rest)}
      >
        <Component {...rest} />
      </TouchableHighlight>
    );
  };

  Sub.propTypes = {
    navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  };

  return Sub;
};

export default withLinks;
