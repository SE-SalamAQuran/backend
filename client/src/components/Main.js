import React from "react";
import Navbar from "./AppBar";
import Footer from "./Footer";
import styles from "./styles/Home.module.css";
import Grid from "./Grid";
import Hero from "./Hero";

export default function CenteredGrid() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Hero></Hero>
      <Grid></Grid>
      <Footer />
    </div>
  );
}
