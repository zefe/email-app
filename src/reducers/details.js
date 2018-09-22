import { fromJS} from 'immutable';
import { OPEN_DETAILS } from '../action-types/index';

const initialState = fromJS({ 
  visibility: false,
  emailId: null, 
})

function details(state = initialState, action) {
  switch(action.type) {
    case OPEN_DETAILS:
      return state.merge({
        visibility: true,
        emailId: action.payload.emailId
      })
    default:
      return state
  }
}

export default details;