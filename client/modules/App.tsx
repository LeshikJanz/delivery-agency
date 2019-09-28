import React, { Fragment } from "react";
import { connect } from 'react-redux'
import * as api from "../api/trips";

import { Trip } from "../types/trip";
import { fetchTripsRequested } from '../actions/trips';

type Props = {
  fetchTripsRequested: () => void,
}

class App extends React.Component<Props> {
  state = {};

  componentDidMount() {
    this.props.fetchTripsRequested()
  }

  getTrips = () => {
    api.fetchTrips().then((trips: Trip) => {
      console.log("res", trips);
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Hello</h1>
      </Fragment>
    );
  }
}

export default connect(null, { fetchTripsRequested })(App)
