import React, { useMemo, useEffect, useReducer, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Loading from 'Screens/Loading';

import useInterval from '../../hooks/useInterval';

const AuthContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'init':
      return {
        ...action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};


const INIT_STATE = {
  refreshToken: null,
  spotifyToken: null,
  expireTime: null,
  isLoading: true,
};

async function setTokens(tokens, dispatch) {
  const { expireTime, spotifyToken, refreshToken } = tokens;

  if (refreshToken) await AsyncStorage.setItem('refreshToken', refreshToken);

  await AsyncStorage.multiSet([
    ['expireTime', expireTime.toString()],
    ['spotifyToken', spotifyToken],
  ]);

  dispatch({ type: 'init', payload: tokens });
}

export default function AuthProvider(props) {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    async function initAuthStore() {
      const [[, refreshToken], [, spotifyToken], [, expireTime]] = await AsyncStorage.multiGet([
        'refreshToken',
        'spotifyToken',
        'expireTime',
      ]);

      const newState = {
        refreshToken,
        spotifyToken,
        expireTime: +expireTime,
      };

      dispatch({ type: 'init', payload: newState });
    }

    initAuthStore();
  }, [dispatch]);

  // Poll session to ensure that token is still valid
  useInterval(() => {
    async function session() {
      const { expireTime } = state;
      if (Date.now() >= expireTime) {
        dispatch({ type: 'init', payload: { refreshTokens: null, spotifyToken: null } });
      }
    }

    session();
  }, 60000);

  const contextState = useMemo(
    () => ({
      setTokens: tokens => setTokens(tokens, dispatch),
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
