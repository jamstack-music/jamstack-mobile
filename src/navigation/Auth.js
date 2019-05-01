import React, { useEffect } from 'react';
import { View, AsyncStorage } from 'react-native';

import Spotify from 'rn-spotify-sdk';

const Auth = ({ navigation }) => {
  useEffect(function auth() {
    async function login() {
      const status = await Spotify.isLoggedInAsync();
      let stack = status ? 'CreateRoom' : 'Login';
      const name = await AsyncStorage.getItem('roomName');
      if (stack === 'CreateRoom' && name) {
        stack = 'Room';
      }
      navigation.navigate(stack);
    }

    login();
  }, []);

  return <View />;
};

export default Auth;
