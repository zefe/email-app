export function openDetails(emailId) {
  return {
    type: 'OPEN_DETAILS',
    payload: {
      emailId
    }
  }
}

export function searchEmail(query) {
  return {
    type: 'SEARCH_EMAIL',
    payload: {
      query: query,
    }
  }
}