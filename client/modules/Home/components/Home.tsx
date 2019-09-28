import React, { Fragment } from "react";

import { connect } from "react-redux";
import Trip from "./Trip";
import { fetchTripsRequested } from "actions/trips";
import spinner from "assets/images/spinner.svg";
import "../styles.scss";

import { Trip as TripType } from "types/trip";
import { State } from "types/common";

type PropsFromState = {
  trips: TripType[];
  loading: boolean;
};

type Props = {
  fetchTripsRequested: () => void;
} & PropsFromState;

class Home extends React.Component<Props> {
  state = {};

  componentDidMount() {
    this.props.fetchTripsRequested();
  }

  render() {
    console.log("this.props.trips", this.props.trips);
    if (this.props.loading) return <img src={spinner} />;
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <td>From</td>
              <td>To</td>
              <td>Departure time</td>
              <td>Vehicle</td>
            </tr>
          </thead>
          <tbody>
            {this.props.trips.map((trip: TripType) => (
              <Trip key={trip.id} {...trip} />
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default connect(
  ({ trips }: State): PropsFromState => ({
    trips: trips.list,
    loading: trips.loading
  }),
  { fetchTripsRequested }
)(Home);
