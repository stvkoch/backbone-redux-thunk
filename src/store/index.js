import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import {createSyncReducer} from './../redux/synchronize';


export default (reducers, initialState) => createStore(
  createSyncReducer(
    combineReducers(reducers)
  ),
  initialState,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
);
