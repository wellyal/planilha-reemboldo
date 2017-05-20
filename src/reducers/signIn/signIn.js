import * as ACTION_TYPES from '../../actions/types'

const signIn = (state = false, action) => {
  switch(action.type) {
    case ACTION_TYPES.SIGNIN:
      return action.payload
    default:
      return state
  }
}

export default signIn