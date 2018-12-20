import React from "react";
import VacationList from "../VacationComps/VacationList";

const Dashboard = () => {
  return (
    <div
      className="jumbotron bg-light mx-auto"
      style={{ minHeight: "80vh", maxWidth: "1400px" }}
    >
      <VacationList />
    </div>
  );
};

export default Dashboard;
