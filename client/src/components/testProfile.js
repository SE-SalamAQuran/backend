import React from "react";
import ProfileHead from "./ProfileHeader";
import ProfileSecCom from "./profileSecCo";
import ProfileBody from "./profileBody";
import Footer from "./Footer";
import Grid from "./Grid";
import "bootstrap/dist/css/bootstrap.min.css";

function TestProfile() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const isAdmin = user.isAdmin;

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
  function profileShow() {
    if (isAdmin) {
      return (
        <div>
          <ProfileHead></ProfileHead>
          <ProfileSecCom></ProfileSecCom>
          <ProfileBody></ProfileBody>
          <Grid></Grid>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <ProfileHead></ProfileHead>
          <ProfileSecCom></ProfileSecCom>
          <ProfileBody></ProfileBody>

          <div className="container">
            <div
              className="row"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <div className="col">
                <button
                  onClick={uploadNewRealEstatePage}
                  type="button"
                  class="btn btn-outline-success btn-lg"
                >
                  Upload a new estate
                  <img
                    src="https://img.icons8.com/cute-clipart/35/000000/plus.png"
                    alt="icon"
                    style={{ marginLeft: "5px" }}
                  />
                </button>
              </div>
              <div className="col">
                <button
                  onClick={uploadNewRealEstatePageRequest}
                  type="button"
                  class="btn btn-lg btn-outline-info"
                >
                  Request an estate{" "}
                  <img
                    src="https://img.icons8.com/cute-clipart/35/000000/new.png"
                    alt="icon"
                    style={{ marginLeft: "5px" }}
                  />
                </button>
              </div>
            </div>
          </div>

          <Grid></Grid>
          <Footer />
        </div>
      );
    }
  }

  return profileShow();
}

export default TestProfile;
