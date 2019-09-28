import React from "react";
import moment from "moment"

import { Trip as TripType } from "types/trip";

function Trip({ fromName, toName, departAt, vehicle }: TripType) {
  console.log("fromName", fromName)
  return (
    <tr>
      <td>{fromName}</td>
      <td>{toName}</td>
      <td>{moment(departAt).format("MMMM Do YYYY")}</td>
      <td>{vehicle}</td>
    </tr>
  );
}

export default Trip;
