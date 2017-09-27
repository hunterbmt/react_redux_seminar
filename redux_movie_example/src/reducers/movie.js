const defaultState = {
 query: '',
 result: []
}

const movie = (state = defaultState, action) => {
  switch (action.type) {
    case 'Query.Changed':
      return {
        ...state,
        query: action.payload.query
      }
    case 'Search.Sucess':
      return {
        ...state,
        result: action.payload.result
      }
    default:
      return state
  }
}

export default movie
