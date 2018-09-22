import { fromJS} from 'immutable';


const initialState = fromJS({ 
  visibility: false,
  emailId: null, 
})

function details(state = initialState, action) {
  switch(action.type) {
    case 'OPEN_DETAILS':
      return state.merge({
        visibility: true,
        emailId: action.payload.emailId
      })
    case 'CLOSE_DETAILS':
      return state
    default:
      return state
  }
}

export default details;