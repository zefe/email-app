import {
  OPEN_DETAILS,
  SEARCH_EMAIL,
  SEARCH_ASYNC_EMAIL,
  IS_LOADING_SEARCH

} from '../action-types/index';
export function openDetails(emailId) {
  return {
    type: OPEN_DETAILS,
    payload: {
      emailId
    }
  }
}

export function searchEmail(query) {
  return {
    type: SEARCH_EMAIL,
    payload: {
      query: query,
    }
  }
}

export function isLoadingSearch(value){
  return {
    type: IS_LOADING_SEARCH,
    payload: {
      value
    }
  }
}

export function searchAsyncEmail(query) {
  return (dispatch) => {
    //fetch().then(()=>)
    dispatch(isLoadingSearch(true))

    setTimeout(()=> {
      dispatch(isLoadingSearch(false))
      dispatch(searchEmail(query))
    }, 5000)
  }
}