import React from "react";
import ProfileHead from "./ProfileHeader";
import ProfileSecCom from "./profileSecCo";
import ProfileBody from "./profileBody";
import Footer from "./Footer";
import Grid from "./Grid";

import "bootstrap/dist/css/bootstrap.min.css";

function TestProfile() {
<<<<<<< HEAD
  let user = JSON.parse(sessionStorage.getItem("user"));
  const isAdmin = user.isAdmin ; 

=======
>>>>>>> da7da87b4f2b84148eb59293524961db1e2b76fc
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
  function profileShow(){

    if (isAdmin){
      return (
        <div>
          <ProfileHead></ProfileHead>
          <ProfileSecCom></ProfileSecCom>
          <ProfileBody></ProfileBody>
          <Grid></Grid>
          <Footer />
        </div>
      );
    }
    else{

      return (
        <div>
          <ProfileHead></ProfileHead>
          <ProfileSecCom></ProfileSecCom>
          <ProfileBody></ProfileBody>
    
          <button
            onClick={uploadNewRealEstatePage}
            type="button"
            class="btn btn-secondary btn-lg btn-block"
          >
            Upload a new realestate NOW{" "}
          </button>
          <button
            onClick={uploadNewRealEstatePageRequest}
            type="button"
            class="btn btn-secondary btn-lg btn-block"
          >
            Request a Real estate{" "}
          </button>
    
          <Grid></Grid>
          <Footer />
        </div>
      );
    }


  }

  return (
<<<<<<< HEAD
    profileShow() 
=======
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
>>>>>>> da7da87b4f2b84148eb59293524961db1e2b76fc
  );
}

export default TestProfile;
