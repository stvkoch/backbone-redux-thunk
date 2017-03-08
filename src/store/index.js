import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import {createSyncReducer} from './../redux/synchronize';

import reducers from './../redux/reducer';

export default createStore(
  createSyncReducer(
    combineReducers(reducers)
  ),
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
);
