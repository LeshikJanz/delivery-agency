import { createAction } from "utils/createAction"

export const fetchTripsRequested = () => ({
  type: "FETCH_TRIPS_REQUESTED",
})

export const fetchTripsSucceeded = createAction('FETCH_TRIPS_SUCCEEDED')
export const fetchTripsFailed = createAction('FETCH_TRIPS_FAILED')
