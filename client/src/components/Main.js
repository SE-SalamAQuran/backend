import React from "react";
import Navbar from "./AppBar";
import Footer from "./Footer";
import styles from "./styles/Home.module.css";
import Card from "./MyCard";
import land from "../images/Land.jpg";
import apartment from "../images/Apartment.jpg";

export default function CenteredGrid() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>

      <Card
        link="http://localhost:3000/"
        title="Lands For Sale"
        img={land}
      ></Card>
      <Card
        link="http://localhost:3000/"
        title="Apartments For Sale"
        img={apartment}
      ></Card>
      <Footer />
    </div>
  );
}
