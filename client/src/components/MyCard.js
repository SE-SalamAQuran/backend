import React from "react";
import { Card } from "react-bootstrap";

export default function MyCard(props) {
  return (
    <Card style={{ width: "18rem", height: "18rem", margin: "2rem" }}>
      <a href={props.link}>
        <Card.Img
          style={{ height: "13rem" }}
          variant="top"
          src={props.img}
        ></Card.Img>
      </a>
      <Card.Body>
        <Card.Title style={{ marginBottom: "0" }}>{props.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}
