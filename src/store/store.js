import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import {
  connectRouter,
  routerMiddleware,
} from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export const history = createBrowserHistory();

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer(history)),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)),
);


export default store;
