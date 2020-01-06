import { useMemo, useReducer } from 'react';
import { useContainer, createContainer } from './useContainer';

export function createStore(reducer, INIT_STATE) {
  function useLocalReducer() {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    return { state, dispatch };
  }

  const Container = createContainer(useLocalReducer, 'StoreContainer');

  return {
    ...Container,
    useSelector: selector => useSelector(Container.Context, selector),
  };
}

export function useSelector(StoreContext, selector) {
  const { state } = useContainer(StoreContext);

  const selectedVal = useMemo(() => selector(state), [selector, state]);

  return useMemo(() => selectedVal, [selectedVal]);
}
