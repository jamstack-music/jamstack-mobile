import { createSelector } from 'reselect';

const getAllMembersById = s => s.members.allById;
const getCurrentMemberId = s => s.members.currentId;

export const getCurrentMember = createSelector(
  getAllMembersById,
  getCurrentMemberId,
  (members, currentId) => members[currentId],
);

export const getAllOtherMembersArray = createSelector(
  getAllMembersById,
  getCurrentMemberId,
  (members, currentId) => {
    const { [currentId]: current, ...others } = members;
    return Object.values(others);
  },
);
