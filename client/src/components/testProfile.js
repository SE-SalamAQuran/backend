import React from "react";
import ProfileHead from "./ProfileHeader";
import ProfileSecCom from "./profileSecCo";
import ProfileBody from "./profileBody";
import Footer from "./Footer";
import Grid from "./Grid";

import "bootstrap/dist/css/bootstrap.min.css";

function TestProfile() {
  function uploadNewRealEstatePage(e) {
    e.preventDefault();
    console.log("upload page");
    window.location = "/uploadNewRealEstate";
  }
  function uploadNewRealEstatePageRequest(e) {
    e.preventDefault();
    console.log("upload page");
    window.location = "/uploadNewRealEstateRequest";
  }

  return (
    <div>
      <ProfileHead></ProfileHead>
      <ProfileSecCom></ProfileSecCom>
      <ProfileBody></ProfileBody>
      <div class="container">
        <div class="row">
          <div class="col-6">
            {" "}
            <button
              onClick={uploadNewRealEstatePage}
              type="button"
              className="btn btn-outline-success btn-lg btn-block"
            >
              Upload New Real estate{" "}
            </button>
          </div>
          <div class="col-6">
            <button
              onClick={uploadNewRealEstatePageRequest}
              type="button"
              className="btn btn-outline-info btn-lg btn-block"
            >
              Request a Real estate{" "}
            </button>
          </div>
        </div>
      </div>

      <Grid></Grid>
      <Footer />
    </div>
  );
}

export default TestProfile;
