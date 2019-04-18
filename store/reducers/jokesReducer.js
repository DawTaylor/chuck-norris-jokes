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

    const sortedJokes = Object.values(jokes)
      .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))
      .reduce(
        (acc, el) => ({
          ...acc,
          [el.id]: el,
        }),
        {}
      );
    const newState = {
      ...state,
      jokes: sortedJokes,
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
