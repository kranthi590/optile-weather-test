// Externals
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

// Internals
import mainAppMiddleWares from '../middlewares';
import reducers from '../reducers';

const middleWares = [mainAppMiddleWares];

if (process.env.NODE_ENV === 'development') {
  middleWares.push(createLogger());
}

export default function configureStore(initialState) {
  return compose(applyMiddleware(...middleWares))(createStore)(
    combineReducers({ ...reducers, Intl }),
    initialState
  );
}
