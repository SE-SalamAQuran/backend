import React from "react";

import AppBar from "./AppBar";
import Footer from "./Footer";

function About() {
  return (
    <div className="about">
      <AppBar />

      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="https://gfx4arab.com/wp-content/uploads/2019/02/real-estate-logo-template_1156-724.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
