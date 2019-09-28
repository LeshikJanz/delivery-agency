import { createReducer } from '../utils/createReducer'
import { fetchTripsRequested, fetchTripsSucceeded, fetchTripsFailed } from '../actions/trips';

import { Trip } from '../types/Trip';
import { TripState } from '../types/common'

const initialState: TripState = {
  list: [],
  errors: [],
  loading: false
};

export default createReducer({
  [fetchTripsRequested]: () => ({ ...initialState, loading: true }),
  [fetchTripsSucceeded]: (state: any, payload: Trip[]) => ({
    ...state,
    list: payload,
    loading: false,
  }),
  [fetchTripsFailed]: (state: any, error: Error) => ({
    ...state,
    error,
    loading: false,
  }),
}, initialState);