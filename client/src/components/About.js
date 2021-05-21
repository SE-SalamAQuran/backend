import React from "react";
import AppBar from "./AppBar";
import Footer from "./Footer";

import who from "../images/unnamed.jpg";
import how from "../images/download.png";

function About() {
  return (
    <div className="about">
      <AppBar />

      <div class="container">
        <div class="row align-items-center my-5">
          <div style={{ marginBottom: "5rem" }} class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={who}
              alt="real-estates"
            />
          </div>
          <div
            style={{ marginBottom: "5rem", textAlign: "center" }}
            class="col-lg-6"
          >
            <h1 class="font-Dark-light">About us </h1>

            <p>
              Our real estate site aims to sell real estate of all kinds to
              customers in an easy way through which the user can visit our site
              and see all the properties for sale which facilitates the process
              of buying and selling in a short time, as the team supervising the
              construction of the site protects all the information stored and
              displays all the real estate that users offer to sell their
              properties
            </p>
          </div>
          <div class="col-lg-6">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={how}
              alt="real-estates"
            />
          </div>
          <div style={{ textAlign: "center" }} class="col-lg-6">
            <h1 class="font-Dark-light">How it all works </h1>

            <p>
              <ul>
                <li>
                  You can browse our website for as long as you want and compare
                  real estate prices in all of the regions and multiple
                  currencies.
                </li>{" "}
                <li>
                  If you like a specific offer, you must register an account or
                  login to an existing account in order for you to book an
                  appointment to go on a tour to see that estate.
                </li>
                <li>
                  You can book an appointment at any time, but you won't be able
                  to book an appointment on your own estate.
                </li>
                <li>
                  If you try to book an appointment on an estate and you get an
                  error, then you must choose another time or day.
                </li>
                <li>
                  If you wish to contact one of the admins directly, you can
                  find the list of admins in the{" "}
                  <a href="/contact">Contact page</a>.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
