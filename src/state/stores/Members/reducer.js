import { wrapReducer } from '../../lib';

import INIT_STATE from './state';

const membersReducer = {
  addMember: (state, member) => ({
    ...state,
    all: [...state.all, member],
  }),
  initRoom: (state, room) => ({
    ...state,
    all: room.members || state.all,
  }),
};

export default wrapReducer(membersReducer, INIT_STATE);
