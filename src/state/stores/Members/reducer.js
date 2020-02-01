import { wrapReducer } from '../../lib';

import INIT_STATE from './state';

const membersReducer = {
  addMember: (state, member) => ({
    ...state,
    all: {
      ...state.all,
      [member.id]: member,
    },
  }),
  initRoom: (state, room) => ({
    ...state,
    all: room.members.reduce((member, acc) => ({ ...acc, [member.id]: member }), {}),
  }),
};

export default wrapReducer(membersReducer, INIT_STATE);
