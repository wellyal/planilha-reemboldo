import * as ACTION_TYPES from './types'

export const doSignIn = (currentStatus = false) => {
  console.log('bla', currentStatus)
  return {
    type: ACTION_TYPES.SIGNIN,
    payload: !currentStatus
  }
}