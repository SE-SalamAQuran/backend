import React from "react";
import Navbar from "./AppBar";
import Footer from "./Footer";
import styles from "./styles/Home.module.css";

export default function CenteredGrid() {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Footer />
    </div>
  );
}
