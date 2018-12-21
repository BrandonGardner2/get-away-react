import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const VacationListItem = ({ image, location, dates, events }) => {
  return (
    <Card body outline color="secondary">
      <CardImg top height="300px" src={image} alt="Vacation image" />
      <CardBody>
        <CardTitle>{location}</CardTitle>
        <CardSubtitle>{dates}</CardSubtitle>
        <CardText>{events}</CardText>
        <Button>Go to Vacation!</Button>
      </CardBody>
    </Card>
  );
};

export default VacationListItem;
