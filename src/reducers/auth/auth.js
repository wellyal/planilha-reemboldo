
export const AUTHENTICATE = 'planilha_reembolso/signin/AUTHENTICATE';

export default function reducer (state = {}, action) {
  switch(action.type) {
    case AUTHENTICATE:
      return action.payload
    default:
      return state
  }
}

export const authenticate = (payload) => {
  return {
    type: AUTHENTICATE,
    payload: payload
  }
}