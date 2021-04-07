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
        <Card link="http://localhost:3000/Lands" title="Lands" img={land}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        <Card
          link="http://localhost:3000/Apartments"
          title="Apartments"
          img={apartment}
        ></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="http://localhost:3000/Villas" title="Villas" img={villa}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="http://localhost:3000/Roof" title="Roof" img={roof}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="http://localhost:3000/Shop" title="shops" img={shop}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="http://localhost:3000/Office" title="Offices" img={office}></Card>
      </div>
    </div>
  );
}
