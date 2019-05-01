import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import ProgressBar from 'react-native-progress/Bar';

const formatTime = time => {
  let seconds = Math.floor(time / 1000);
  let minutes = Math.floor(seconds / 60);

  seconds = (seconds % 60).toString().padStart(2, '0');
  minutes = (minutes % 60).toString().padStart(2, '0');

  return [minutes, seconds];
};

const Timer = props => {
  const { end, currentTime } = props;

  const [cMin, cSec] = formatTime(currentTime);
  const [eMin, eSec] = formatTime(end);

  const progress = end === 0 ? 0 : currentTime / end;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.time}>{`${cMin}:${cSec}`}</Text>
      <ProgressBar
        progress={progress}
        style={styles.progress}
        width={230}
        height={6}
        unfilledColor="#DDDDDD"
        borderRadius={0}
        borderWidth={0}
      />
      <Text style={styles.time}>{`${eMin}:${eSec}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progress: {
    marginLeft: 10,
    marginRight: 10,
  },
  time: {
    fontSize: 16,
  },
});

Timer.propTypes = {
  currentTime: PropTypes.number,
  end: PropTypes.number,
};

Timer.defaultProps = {
  currentTime: 0,
  end: 0,
};

export default Timer;
