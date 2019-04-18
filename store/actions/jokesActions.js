import { JOKES_ADD } from '../types';

export const jokesAdd = joke => ({
  type: JOKES_ADD,
  payload: {
    joke,
  },
});
