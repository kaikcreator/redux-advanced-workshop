import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import App from './components/app';
import reducers from './reducers';
import logger from './middleware/logger';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
