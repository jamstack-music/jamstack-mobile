import React, { useMemo, useReducer, createContext, useContext } from 'react';
import Spotify from 'rn-spotify-sdk';
import useInterval from '../../hooks/useInterval';

const AuthContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'setTokens':
      return {
        refreshToken: action.payload.refreshToken,
        spotifyToken: action.payload.spotifyToken,
      };
    default:
      return state;
  }
};

export default function AuthProvider(props) {
  const { children } = props;

  const [state, dispatch] = useReducer(reducer, {
    spotifyToken: null,
    refreshToken: null,
  });

  // Poll session to ensure that token is still valid
  useInterval(() => {
    async function session() {
      const { expireTime } = await Spotify.getSessionAsync();
      if (Date.now() >= expireTime) {
        dispatch({ type: 'setTokens', payload: { refreshTokens: null, spotifyToken: null } });
      }
    }

    session();
  }, 60000);

  const contextState = useMemo(
    () => ({
      setTokens: tokens => dispatch({ type: 'setTokens', payload: tokens }),
      state,
    }),
    [state, dispatch],
  );

  return <AuthContext.Provider value={contextState}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
