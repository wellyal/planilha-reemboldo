
export const SIGNIN = 'planilha_reembolso/signin/AUTHENTICATE';

export default function reducer (state = {}, action) {
  switch(action.type) {
    case SIGNIN:
      return action.payload
    default:
      return state
  }
}

export const signin = (payload) => {
  return {
    type: SIGNIN,
    payload: payload
  }
}