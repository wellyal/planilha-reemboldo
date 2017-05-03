import * as ACTION_TYPES from './types'

export const login = (currentStatus = false) => {
  return {
    type: ACTION_TYPES.LOGIN,
    payload: { isLogged: !currentStatus }
  }
}