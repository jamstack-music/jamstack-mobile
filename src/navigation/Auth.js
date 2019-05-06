import React, { useEffect } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Spotify from 'rn-spotify-sdk';

// eslint-disable-next-line
const Auth = ({ navigation }) => {
  useEffect(
    function auth() {
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
    },
    [navigation],
  );

  return <View />;
};

export default Auth;
