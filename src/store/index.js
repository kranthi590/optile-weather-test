// Externals
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

// Internals
import mainAppMiddleWares from '../middlewares';
import reducers from '../reducers';

export const middleWares = [mainAppMiddleWares];

export default function configureStore(initialState, env) {
  if (env === 'development') {
    middleWares.push(createLogger());
  }
  return compose(applyMiddleware(...middleWares))(createStore)(
    combineReducers({ ...reducers, Intl }),
    initialState
  );
}
