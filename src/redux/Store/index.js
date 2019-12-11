import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { listPodcastReducer } from '../Reducers/ListPodcastReducer';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(
  combineReducers({
    listPodcast: listPodcastReducer
  }),
  applyMiddleware(...middleware)
);

export { store };
