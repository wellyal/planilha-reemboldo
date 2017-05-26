
export const AUTHENTICATE = 'planilha_reembolso/signin/AUTHENTICATE';

export default function reducer (state = false, action) {
  switch(action.type) {
    case AUTHENTICATE:
      return action.payload
    default:
      return state
  }
}

export const authenticate = (currentStatus = false) => {
  return {
    type: AUTHENTICATE,
    payload: !currentStatus
  }
}