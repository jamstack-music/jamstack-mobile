import React, { useState, useEffect } from 'react';
import RNEventSource from 'react-native-event-source';
import { View, Text, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

import { joinRoom } from '../data/api';

const init = async (room, setLoading) => {
  const roomName = await AsyncStorage.getItem('roomName');
  const name = await AsyncStorage.getItem('name');
  const { data } = await joinRoom(roomName, name);
  room.initRoom({ ...data, name: roomName });
  setLoading(false);
};

const StoreMiddleware = props => {
  const { room, children } = props;

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    init(room, setLoading);
  }, []);

  useEffect(
    function initStore() {
      if (!loading) {
        const eventSource = new RNEventSource(
          `http://52.42.15.3:5000/stream?channel=${room.state.name}`,
        );

        eventSource.addEventListener(
          'song',
          ({ data }) => {
            const { song } = JSON.parse(data);
            room.addtoQueue(song);
          },
          false,
        );

        eventSource.addEventListener(
          'join',
          ({ data }) => {
            const { user } = JSON.parse(data);
            room.addMember(user);
          },
          false,
        );

        eventSource.addEventListener(
          'bump',
          ({ data }) => {
            room.bumpSong(data);
          },
          false,
        );

        eventSource.addEventListener(
          'next',
          () => {
            room.nextSong();
          },
          false,
        );

        return function unMount() {
          eventSource.removeAllListeners();
          eventSource.close();
        };
      }

      return null;
    },
    [loading],
  );

  if (!loading) return children;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
    </View>
  );
};

StoreMiddleware.propTypes = {
  room: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default StoreMiddleware;
