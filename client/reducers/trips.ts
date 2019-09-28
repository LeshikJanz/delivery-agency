import { createReducer } from '../utils/createReducer'
import { Trip } from '../types/Trip';
import { fetchTripsRequested, fetchTripsSucceeded, fetchTripsFailed } from '../actions/trips';

const initialState: { list: Trip[], errors: string[], loading: boolean } = {
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