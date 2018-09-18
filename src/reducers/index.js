import data from './data';
import details from './details';

// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
  // datos: data,
  // details: details
  data,
  details
})


export default rootReducer;