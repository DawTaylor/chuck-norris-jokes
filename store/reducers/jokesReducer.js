import { JOKES_ADD } from '../types';

const initialState = {
  jokes: {},
};

const dispatchers = {
  [JOKES_ADD]: (state, { joke }) => ({
    ...state,
    jokes: {
      ...state.jokes,
      [joke.id]: joke,
    },
  }),
  default: state => state,
};

export const jokesReducer = (state = initialState, { type, payload }) => {
  if (dispatchers[type] && typeof dispatchers[type] === 'function') {
    return dispatchers[type](state, payload);
  }

  return dispatchers.default(state);
};
