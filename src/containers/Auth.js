import React, { useMemo, useEffect, useReducer, createContext, useContext } from 'react';
import { Alert } from 'react-native';
import { useDispatch } from 'jamstate';
import AsyncStorage from '@react-native-community/async-storage';
import Spotify from 'rn-spotify-sdk';
import Loading from 'Screens/Loading';

const DEFAULT_STATE = {
  hasValidRoomCode: false,
  isLoggedIn: false,
  isLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'beginLoading':
      return {
        ...state,
        isLoading: true,
      };
    case 'endLoading':
      return {
        ...state,
        isLoading: false,
      };
    case 'login':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
      };
    case 'validateRoom':
      return {
        ...state,
        hasValidRoomCode: true,
      };
    case 'invalidateRoom':
      return {
        ...state,
        hasValidRoomCode: false,
      };
    default:
      return state;
  }
};
const AuthContext = createContext(null);

export default function AuthContainer(props) {
  const { children } = props;
  const masterDispatch = useDispatch();

  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);

  useEffect(() => {
    async function initSession() {
      let isInitialized = await Spotify.isInitializedAsync();

      if (!isInitialized) {
        isInitialized = await Spotify.initialize({
          clientID: '0a31a2abfc5945bb9e3b3507e6f8361c',
          sessionUserDefaultsKey: 'SpotifySession',
          redirectURL: 'jamstack://auth',
          scopes: ['streaming'],
          tokenSwapURL: 'http://localhost:4000/v1/spotify/tokens/swap',
          tokenRefreshURL: 'http://localhost:4000/v1/spotify/tokens/refresh',
        });
      }

      if (isInitialized) {
        dispatch({ type: 'login' });
      } else {
        dispatch({ type: 'logout' });
      }

      const roomCode = await AsyncStorage.getItem('@RoomCode');
      
      if (roomCode) {
        masterDispatch({ type: 'setRoomCode', payload: roomCode });
        dispatch({ type: 'validateRoom' });
      } else {
        dispatch({ type: 'invalidateRoom' });
      }

      dispatch({ type: 'endLoading' });
    }

    dispatch({ type: 'beginLoading' });
    initSession();
  }, [masterDispatch]);

  const contextState = useMemo(
    () => ({
      async login() {
        const loggedIn = await Spotify.login();
        if (loggedIn) {
          dispatch({ type: 'login' });
        } else {
          Alert.alert('You have to login');
        }
      },
      async logout() {
        await Spotify.logout();
        dispatch({ type: 'logout' });
      },
      isLoggedIn: state.isLoggedIn,
      hasValidRoomCode: state.hasValidRoomCode,
      validateRoom() {
        dispatch({ type: 'validateRoom' });
      },
      async invalidateRoom() {
        await AsyncStorage.removeItem('@RoomCode');
        dispatch({ type: 'invalidateRoom' });
      },
    }),
    [state.hasValidRoomCode, state.isLoggedIn],
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
