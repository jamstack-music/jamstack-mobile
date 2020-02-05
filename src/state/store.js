import { combineReducers, createStore as createReduxStore } from 'redux';

import MembersReducer from './stores/Members/reducer';
import SongsReducer from './stores/Songs/reducer';
import RoomReducer from './stores/Room/reducer';

export const rootReducer = combineReducers({
  members: MembersReducer,
  songs: SongsReducer,
  room: RoomReducer,
});

export const createStore = (reducer = rootReducer) =>
  createReduxStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
