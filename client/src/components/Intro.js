import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Container } from "react-bootstrap";
import styles from "./styles/Layout.module.css";
import jumbo from "../images/j.jpg";

const Intro = () => {
  return (
    <div
      id="about"
      style={{ marginTop: "2rem" }}
      class="container overflow-hidden"
    >
      <Jumbotron fluid>
        <Container>
          <img
            src={jumbo}
            style={{ float: "left", marginRight: "1rem" }}
            alt="pic"
          ></img>
          <h3>
            We may not be the only ones, but we are the best on the real estate
            market
          </h3>

          <p>Take advantage of the oppurtunity now and invest your money.</p>
          <a href="#estates" className={styles.btnScroll} title="Go Down">
            Check the estates below
          </a>
        </Container>
      </Jumbotron>{" "}
    </div>
  );
};
export default Intro;
