import { all } from 'redux-saga/effects'

import { watchSignin } from './signin'

export default function* rootSaga() {
  yield all([
    watchSignin()
  ])
}