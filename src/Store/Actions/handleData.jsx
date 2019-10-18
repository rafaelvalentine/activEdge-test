
import axios from 'axios'
import type from '../Type'
import { handleError } from '../../lib'

const { FETCH_ARTIST } = type

 const searchQuery = payload => ({
  type: FETCH_ARTIST,
  payload
})


export const handleGetAllUsers = () => dispatch => {
  return axios
    .get('/users')
    .then(res => {
      let result = res.data
      dispatch(searchQuery(result))
      return result
    })
    .catch(err => {
      console.log(err)
      handleError(err)
      return err
    })
}

