import { performRequest } from "./base"

export const fetchTrips = () => performRequest("/trips")