import { useReducer, useCallback } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD':
      return {
        data: null,
        error: null,
        isLoading: true,
      };
    case 'DATA':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case 'ERROR': {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};

export default function useFetch() {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    error: null,
    data: null,
  });

  const fetch = useCallback((api, ...args) => {
    dispatch({ type: 'LOAD' });
    return api(...args)
      .then(result => dispatch({ type: 'DATA', payload: result }))
      .catch(e => dispatch({ type: 'ERROR', payload: e }));
  }, []);

  return { ...state, fetch };
}
