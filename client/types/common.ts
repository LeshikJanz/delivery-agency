import { Trip } from "./trip"

export type TripState = { list: Trip[], errors: string[], loading: boolean }

export type State = {
  trips: TripState
}