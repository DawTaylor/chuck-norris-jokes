import { CATEGORIES_LIST_SET } from '../types';

const initialState = {
  categories: [],
};

const dispatchers = {
  [CATEGORIES_LIST_SET]: (state, { categories }) => ({
    ...state,
    categories,
  }),
  default: state => state,
};

export const categoriesReducer = (state = initialState, { type, payload }) => {
  if (dispatchers[type] && typeof dispatchers[type] === 'function') {
    return dispatchers[type](state, payload);
  }

  return dispatchers.default(state);
};
