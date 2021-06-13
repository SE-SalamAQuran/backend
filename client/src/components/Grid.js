import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
      // style={{
      //   padding: "5rem",
      // }}
      className="row"
    >
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="/lands" title="Lands" img={land}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="/houses" title="Houses" img={house}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        <Card link="/apartments" title="Apartments" img={apartment}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="/villas" title="Villas" img={villa}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="/roofs" title="Roof" img={roof}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="/shops" title="Shops" img={shop}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="/offices" title="Offices" img={office}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="/" title="3D virtual tours" img={comingSoon}></Card>
      </div>
      <div class="col-lg-4 col-md-6">
        {" "}
        <Card link="/" title="Online video tours" img={live}></Card>
      </div>
    </div>
  );
}
