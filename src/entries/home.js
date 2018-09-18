import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import data from '../mail-data.json';
// import data from '../schemas/index';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/index';
import { Map as map } from 'immutable';
// const initialState = data;

// const initialState = {
//   data: {
//     // ...data,
//     entities: data.entities,
//     inbox: data.result.inbox,
//     search: [],
//   },
//   details: {
//     visibility: false,
//     emailId: null
//   } 
// }

const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());
const app = document.getElementById('app')


render( 
  <Provider store={store}>
    <Home  />
  </Provider>
, app);
