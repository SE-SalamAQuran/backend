import React from "react";
import ProfileHead from "./ProfileHeader";
import ProfileSecCom from "./profileSecCo";
import ProfileBody from "./profileBody";
import Footer from "./Footer";



import "bootstrap/dist/css/bootstrap.min.css";

function TestProfile() {


  let user = JSON.parse(sessionStorage.getItem("user"));

  
  

  return(

    <div>
      <ProfileHead></ProfileHead> 
      <ProfileSecCom ></ProfileSecCom >
      <ProfileBody ></ProfileBody >
      <button type="button" class="btn btn-secondary btn-lg btn-block">Upload your realestata NOW !! ^-^</button>
      <Footer />

     </div>
    );
  }
 

export default TestProfile;
