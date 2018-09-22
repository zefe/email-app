import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  reducer,
  map(),
  composeWithDevTools(
    applyMiddleware(logger)
  )
);


const app = document.getElementById('app')


render( 
  <Provider store={store}>
    <Home  />
  </Provider>
, app);
