import React, { useContext, useEffect, useMemo, useState } from 'react';

import { createStore } from './store';

export const ReduxContext = React.createContext(null);

// This is the Context container that will provide all store
// state to the application. This should wrap the entire application
export const ReduxContainer = props => {
  const { children } = props;

  const store = createStore();

  return <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>;
};

// Allows you to use the dispatch function of the store
export function useDispatch() {
  const appStore = useContext(ReduxContext);
  const dispatch = useMemo(() => appStore.dispatch, [appStore.dispatch]);

  return dispatch;
}

const defaultEquality = (a, b) => a === b;
// A listener function that allows components that utilize certain
// part(s) of state to be updated if that specific part of state changes
export function useSelector(selector, equalityFxn = defaultEquality) {
  const appStore = useContext(ReduxContext);
  const value = selector(appStore.getState());
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(
    () =>
      appStore.subscribe(() => {
        const nextState = appStore.getState();
        const nextValue = selector(nextState);

        if (!equalityFxn(currentValue, nextValue)) {
          setCurrentValue(nextValue);
        }
      }),
    [appStore, currentValue, equalityFxn, selector],
  );

  return currentValue;
}
