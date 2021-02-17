import React from "react";
import styles from "./styles/Layout.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Hero() {
  return (
    <section id={styles.hero}>
      <div className={styles.containerTop}>
        <h1>Invest your money in the rising market</h1>
        <br></br>
        <h1>Don't think or guess</h1>
      </div>
      <div className={styles.heroContainer}>
        <h1>Palestinian Estates</h1>
        <br></br>
        <h2>The future of the real estate business</h2>
        <br></br>
        <a href="#about" className={styles.btnScroll} title="Go Down">
          Find Out More
        </a>
      </div>
    </section>
  );
}
