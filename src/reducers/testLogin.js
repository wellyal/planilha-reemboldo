import { TEST_LOGIN } from '../actions/loginAction'

const testLogin = (state = false, action = {}) => {
  switch(action.type) {
    case TEST_LOGIN:
      return { ...state, isLogged: action.payload }
    default:
      return state
  }
}

export default testLogin