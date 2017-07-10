import { put, call, takeEvery } from 'redux-saga/effects'
import { actionTypes } from 'reducers/signin'

import signinService from 'services/signin'

function* signin(payload) {
  try {
    const status = yield call(signinService.signin, payload)
    yield put({ type: actionTypes.SUCCESS, payload: status })
  } catch (err) {
    yield put({ type: actionTypes.FAILURE, payload: err })
  }
}

export function* watchSignin() {
  yield takeEvery(actionTypes.REQUEST, signin)
}