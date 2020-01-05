import React, { useMemo, useReducer, createContext, useContext } from 'react';

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
