import React from "react";

const VacationListItem = ({ location, dates, events }) => {
  return (
    <div>
      <h2>{location}</h2>
      <p>{dates}</p>
      <p>{events}</p>
    </div>
  );
};

export default VacationListItem;
