import { put, takeLatest } from "redux-saga/effects";
import * as api from "../api/trips";
import {
  fetchTripsRequested,
  fetchTripsSucceeded,
  fetchTripsFailed,
  FETCH_TRIPS_REQUESTED
} from "../actions/trips";

export function* fetchTripsSaga() {
  try {
    const trips = yield api.fetchTrips();
    yield put(fetchTripsSucceeded(trips));
  } catch (error) {
    console.log("error", error)
    yield put(fetchTripsFailed(error));
  }
}

export function* tripsSaga() {
  yield takeLatest(fetchTripsRequested().type, fetchTripsSaga);
}
