
import axios from 'axios'
import type from '../Type'
import { handleError } from '../../lib'

const { FETCH_ARTIST, FETCH_ALBUM } = type

 const searchQuery = payload => ({
  type: FETCH_ARTIST,
  payload
})
const albumQuery = payload => ({
  type: FETCH_ALBUM,
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
export const handleGetAllAlbums = () => dispatch => {
  return axios
    .get('/albums')
    .then(res => {
      let result = res.data
      dispatch(albumQuery(result))
      return result
    })
    .catch(err => {
      console.log(err)
      handleError(err)
      return err
    })
}
