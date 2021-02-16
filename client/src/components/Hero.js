import React from "react";
import { Carousel } from "react-bootstrap";
import carFirst from "../images/carousel1.jpg";
import carSecond from "../images/carousel2.jpg";
import carThird from "../images/carousel3.jpg";

export default function Hero() {
  return (
    <Carousel style={{ width: "100%" }}>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          style={{ height: "50rem" }}
          src={carFirst}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{ height: "50rem" }}
          src={carSecond}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          style={{ height: "50rem" }}
          src={carThird}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
