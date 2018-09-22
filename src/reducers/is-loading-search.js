import { Map as map } from 'immutable';
import { IS_LOADING_SEARCH } from '../action-types/index';

const initialState = map({
  active: false
})

function isLoadingSearch(state = initialState, action) {
  switch (action.type) {
    case IS_LOADING_SEARCH:
      return state.set('active', action.payload.value)
    default:
      return state
  }
}

export default isLoadingSearch;