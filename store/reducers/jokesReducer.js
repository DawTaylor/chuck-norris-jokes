import { JOKES_ADD } from '../types';

const initialState = {
  jokes: {},
};

const dispatchers = {
  [JOKES_ADD]: (state, { joke }) => {
    const jokes = {
      ...state.jokes,
      [joke.id]: {
        ...joke,
        timestamp: new Date().toTimeString(),
      },
    };
    const newState = {
      ...state,
      jokes,
    };
    return newState;
  },
  default: state => state,
};

export const jokesReducer = (state = initialState, { type, payload }) => {
  if (dispatchers[type] && typeof dispatchers[type] === 'function') {
    return dispatchers[type](state, payload);
  }

  return dispatchers.default(state);
};
