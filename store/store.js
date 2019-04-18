import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';

export const storeFactory = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  );
