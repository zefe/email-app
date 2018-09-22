import schema from '../schemas/index';
import { fromJS} from 'immutable';
import { SEARCH_EMAIL } from '../action-types/index';

const initialState = fromJS({  
    entities: schema.entities,
    emails: schema.result.emails,
    search: '',
})

function data(state = initialState, action) {
  switch (action.type) {
    case SEARCH_EMAIL: {
      return state.set('search', action.payload.query)
    }
    default:
    return state
  }
}

export default data;
