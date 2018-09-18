import { fromJS} from 'immutable';


const initialState = fromJS({ 
  visibility: false,
  inboxId: null, 
})

function details(state = initialState, action) {
  switch(action.type) {
    case 'OPEN_DETAILS':
      return state
    case 'CLOSE_DETAILS':
      return state
    default:
      return state
  }
}

export default details;