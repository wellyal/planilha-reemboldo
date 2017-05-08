import { combineReducers } from 'redux'
import userLogin from '../reducers/user-login'

const rootReducer = combineReducers({
  userLogin
})

export default rootReducer