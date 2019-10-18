const initialState = {
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PAGE_LOADER':
      return { ...state,
        Loading: action.payload
      }

    default:
      return state
  }
}
