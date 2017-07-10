import { createAction, handleActions } from 'redux-actions'

export const actionTypes = {
  REQUEST: 'planilha_reembolso/signin/REQUEST',
  SUCCESS: 'planilha_reembolso/signin/SUCCESS',
  FAILURE: 'planilha_reembolso/signin/FAILURE'
}

const signinRequest = createAction(actionTypes.REQUEST)

const defaultState = {
  isFetching: false,
  data: null,
  error: null
}

const reducer = handleActions({
  [actionTypes.REQUEST](state) {
    return {
      ...state,
      isFetching: true
    }
  },
  [actionTypes.SUCCESS](state, {payload}) {
    return {
      ...state,
      data: payload
    }
  },
  [actionTypes.FAILURE](state, {payload}) {
    return {
      ...state,
      error: payload
    }
  }
}, defaultState)

export const signin = payload => signinRequest()

export default reducer