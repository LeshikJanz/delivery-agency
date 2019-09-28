import { all } from 'redux-saga/effects'
import { tripsSaga } from './trips'

export default function* rootSaga() {
  yield all([
    tripsSaga(),
  ])
}