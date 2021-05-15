import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Layout.module.css";
import Card from "./MyCard";
import land from "../images/Land.jpg";
import shop from "../images/Shop.jpg";
import villa from "../images/Villa.jpg";
import roof from "../images/Roof.jpg";
import apartment from "../images/Apartment.jpg";
import office from "../images/Office.jpg";
import house from "../images/House.jpg";
import comingSoon from "../images/3d.jpg";
import live from "../images/live.png";

export default function Grid() {
  return (
    <div
      id="estates"
      className={styles.grid}
      style={{ marginRight: "", padding: "5rem" }}
      class="row"
    >
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card
          link="http://localhost:3000/lands"
          title="Lands"
          img={land}
        ></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card
          link="http://localhost:3000/houses"
          title="Houses"
          img={house}
        ></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        <Card
          link="http://localhost:3000/apartments"
          title="Apartments"
          img={apartment}
        ></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card
          link="http://localhost:3000/villas"
          title="Villas"
          img={villa}
        ></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="http://localhost:3000/roofs" title="Roof" img={roof}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card
          link="http://localhost:3000/shops"
          title="Shops"
          img={shop}
        ></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card
          link="http://localhost:3000/offices"
          title="Offices"
          img={office}
        ></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card
          link="http://localhost:3000/"
          title="3D virtual tours"
          img={comingSoon}
        ></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card
          link="http://localhost:3000/"
          title="Online video tours"
          img={live}
        ></Card>
      </div>
    </div>
  );
}
