import Data from './DataReducers'
import Loading from './LoadingReducers'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  Data,
  Loading
})

export default rootReducers
