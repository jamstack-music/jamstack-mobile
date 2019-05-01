import React from 'react';
import { TouchableHighlight } from 'react-native';

const withLinks = (Component, type) => props => {
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

export default withLinks;
