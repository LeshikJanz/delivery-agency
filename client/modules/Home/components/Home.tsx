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

class Home extends React.Component<Props, TripType> {
  state = {
    fromName: "",
    toName: "",
    departAt: "",
    vehicle: ""
  };

  componentDidMount() {
    this.props.fetchTripsRequested();
  }

  handleChange = (e: Event) =>
    this.setState({ [e.target.name]: e.target.value });

  getFilteredTrips = () =>
    this.props.trips.filter(trip =>
      trip.fromName.toLowerCase().includes(this.state.fromName.toLowerCase()) &&
      trip.toName.toLowerCase().includes(this.state.toName.toLowerCase()) &&
      trip.departAt.toLowerCase().includes(this.state.departAt.toLowerCase()) &&
      trip.vehicle.toLowerCase().includes(this.state.vehicle.toLowerCase())
    );

  render() {
    if (this.props.loading) return <img src={spinner} />;
    const trips = this.getFilteredTrips()
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              {Object.keys(this.state).map(filterParam => (
                <td key={filterParam}>
                  <input
                    type="text"
                    name={filterParam}
                    placeholder={filterParam}
                    onChange={this.handleChange}
                  />
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {trips.map((trip: TripType) => (
              <Trip key={trip.id} {...trip} />
            ))}
          </tbody>
        </table>
        {!trips.length && <h3>Nothing found</h3>}
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
