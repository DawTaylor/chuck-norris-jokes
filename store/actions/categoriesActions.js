import { CATEGORIES_LIST_SET } from '../types';

export const setCategoriesList = categories => ({
  type: CATEGORIES_LIST_SET,
  payload: {
    categories,
  },
});
