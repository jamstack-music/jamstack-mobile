import React, { useMemo, useEffect, useReducer, createContext, useContext } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from 'Screens/Loading';
import Spotify from 'rn-spotify-sdk';

import useInterval from '../../hooks/useInterval';

const AuthContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'init':
      return {
        ...action.payload,
        isLoading: false,
      };
    case 'beginLoading':
      return {
        ...state,
        isLoading: true,
      };
    case 'reset':
      return INIT_STATE;
    default:
      return state;
  }
};

const INIT_STATE = {
  refreshToken: null,
  spotifyToken: null,
  expireTime: null,
  isLoading: false,
};

export default function AuthProvider(props) {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    async function initAuthStore() {
      const [[, refreshToken], [, spotifyToken], [, expireTime]] = await AsyncStorage.multiGet([
        '@RefreshToken',
        '@SpotifyToken',
        '@ExpireTime',
      ]);

      const newState = {
        refreshToken,
        spotifyToken,
        expireTime: +expireTime,
      };

      dispatch({ type: 'init', payload: newState });
    }

    dispatch({ type: 'beginLoading' });
    initAuthStore();
  }, [dispatch]);

  // Poll session to ensure that token is still valid
  useInterval(() => {
    async function session() {
      const { expireTime } = state;
      if (Date.now() >= expireTime) {
        Spotify.renewSession();
      }
    }

    session();
  }, 60000);

  const contextState = useMemo(
    () => ({
      async login() {
        const session = await Spotify.getSessionAsync();
        if (session) {
          Spotify.loginWithSession({
            accessToken: state.accessToken,
            expireTime: state.expireTime,
            refreshToken: state.refreshToken,
          });
        } else {
          const loggedIn = await Spotify.login();
          if (loggedIn) {
            const newSession = await Spotify.getSessionAsync();
            const { expireTime, accessToken: spotifyToken, refreshToken } = newSession;

            AsyncStorage.multiSet([
              ['@ExpireTime', expireTime.toString()],
              ['@SpotifyToken', spotifyToken],
              ['@RefreshToken', refreshToken],
            ]);

            dispatch({ type: 'init', payload: { expireTime, spotifyToken, refreshToken } });
          } else {
            Alert.alert('Unable to login');
          }
        }
      },
      async logout() {
        await Spotify.logout();
        await AsyncStorage.multiRemove(['@SpotifyToken', '@RefreshToken', '@ExpireTime']);
        dispatch({ type: 'reset' });
      },
      state,
    }),
    [state, dispatch],
  );

  return (
    <AuthContext.Provider value={contextState}>
      {state.isLoading ? <Loading /> : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
