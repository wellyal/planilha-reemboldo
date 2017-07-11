import { combineReducers } from 'redux'

import signin from '../reducers/signin'
import stylesheet from '../reducers/stylesheet'

const rootReducer = combineReducers({
  signin,
  stylesheet
})

export default rootReducer