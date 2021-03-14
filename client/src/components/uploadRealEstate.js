import React from "react";
import Footer from "./Footer";
import Navbar from "./AppBar"
import UploadBody from "./uploadBody";
import "bootstrap/dist/css/bootstrap.min.css";




function uploadRealEstate() {

 
  return(
  

    <div>
      <Navbar />
      <h1 style = {{textAlign:"center"}}>  upload your Realestate </h1>
      <h3 style = {{textAlign:"center"}}>  Please make sure that :</h3>
      <p style = {{textAlign:"center"}}>  1 _ fill all the fields in the uploading form. </p>
      <p style = {{textAlign:"center"}}>  2 _ please don't add any missleadig information. </p>
      <p style = {{textAlign:"center"}}>  3 _ your form will be review by our team so please be careful. </p>

     <UploadBody />
 
      <Footer />

     </div>
    );}
    
 

export default uploadRealEstate ;
