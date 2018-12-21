import React from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import VacationListItem from "./VacationListItem";

export const VacationList = props => (
  <Row>
    {props.length === 0 ? (
      <p>No vacation props!</p>
    ) : (
      props.vacations.map(vacation => {
        return (
          <Col sm="4">
            <VacationListItem
              key={props.vacations.indexOf(vacation)}
              {...vacation}
            />
          </Col>
        );
      })
    )}
  </Row>
);

const mapStateToProps = state => {
  return {
    vacations: state.vacations
  };
};

export default connect(mapStateToProps)(VacationList);
