import * as ACTION_TYPES from '../actions/types'

const userLogin = (state = false, action = {}) => {
  switch(action.type) {
    case ACTION_TYPES.LOGIN:
      return action.payload
    default:
      return state
  }
}

export default userLogin