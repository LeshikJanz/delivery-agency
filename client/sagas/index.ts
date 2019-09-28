import { all, call } from 'redux-saga/effects'
import { tripsSaga } from './trips'

export default function* rootSaga() {
  console.log("rootSaga")
  yield all([
    tripsSaga(),
  ])
}