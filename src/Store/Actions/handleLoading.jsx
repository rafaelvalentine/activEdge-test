import type from '../Type'

const { SET_PAGE_LOADER } = type

const handleSetPageLoader = payload => ({
  type: SET_PAGE_LOADER,
  payload
})

export const handlePageLoader = results => dispatch => {
  dispatch(handleSetPageLoader(results))
}