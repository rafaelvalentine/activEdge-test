import initialState from '../DummyStore'

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTIST':
      return { ...state,
        Users: [...action.payload]
      }

    default:
      return state
  }
}
