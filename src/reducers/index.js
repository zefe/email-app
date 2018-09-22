import data from './data';
import details from './details';
import isLoadingSearch from './is-loading-search';

// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
  // datos: data,
  // details: details
  data,
  details,
  isLoadingSearch,
})


export default rootReducer;