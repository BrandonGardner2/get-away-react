import React, { Component } from "react";
import { connect } from "react-redux";
import dummyData from "../../Reducers/dummyData";
import VacationListItem from "./VacationListItem";

export const VacationList = props => (
  <div>
    {props.length === 0 ? (
      <p>No vacation props!</p>
    ) : (
      props.vacation.map(item => {
        return (
          <VacationListItem key={props.vacation.indexOf(item)} {...item} />
        );
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    vacation: state.vacation
  };
};

export default connect(mapStateToProps)(VacationList);
