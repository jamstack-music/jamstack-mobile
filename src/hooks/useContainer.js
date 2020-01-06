import React, { createContext, useContext } from 'react';

// TODO: Add docs
export function createContainer(useHook, displayName = null) {
  const Context = createContext(null);
  if (displayName) {
    Context.displayName = displayName;
  }

  function Provider(props) {
    const { value, children } = props;
    const contextValue = useHook(value);

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
  }

  return {
    useContainer: () => useContext(Context),
    Provider,
    Context,
  };
}

export default function useContainer(Container) {
  return useContext(Container);
}
