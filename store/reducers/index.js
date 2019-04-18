import { combineReducers } from 'redux';

import { categoriesReducer } from './categoriesReducer';
import { jokesReducer } from './jokesReducer';

export const rootReducer = combineReducers({ categoriesReducer, jokesReducer });
