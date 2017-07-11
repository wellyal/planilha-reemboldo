import { createAction, handleActions } from 'redux-actions'

const SAVE = 'planilha_reembolso/stylesheet/SAVE'

const saveStylesheetRequest = createAction(SAVE)

let index = 0
const defaultState = []

const reducer = handleActions({
  [SAVE](state, {payload}) {
    return [...state, {...payload, index: index++}]
  }
}, defaultState)

export const saveStylesheet = payload => saveStylesheetRequest(payload)

export default reducer