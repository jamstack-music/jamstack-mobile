/**
 * Higher order reducer that allows reducers to be constructed as
 * objects instead of switch statements
 *
 * @type {function(Object, Object): Object} Reducer
 *
 * @param {Reducer} reducer - The reducer object with actions as keys
 * @param {Object} INIT_STATE - The initial state of the reducer. This is represented as an object
 * @returns {Reducer} A new reducer that will map the action
 * to the corresponding key in the reducer object
 */

export const wrapReducer = (reducer, INIT_STATE) => (state = INIT_STATE, action) => {
  const { type: actionType, payload } = action;

  return actionType in reducer ? reducer[actionType](state, payload) : state;
};
