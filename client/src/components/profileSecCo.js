import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

 function ProfileSecCom() {

  function logOut (e)  {
    e.preventDefault();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    window.location = "http://localhost:3000";
  };
  function backHome (e)  {
    e.preventDefault();
    window.location = "http://localhost:3000";
  };

  function updateUserInformation (e)  {
    e.preventDefault();
    window.location = "http://localhost:3000/Update user Information";
  };
  
    return (
      <Navbar variant="dark" bg="dark">
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-left">
      <div class="row"  >
        <div class="col-sm-12 text-left" >
        <button type="button" class="btn btn-secondary btn-lg" onClick = {logOut}>LogOut</button>
        <button type="button" class="btn btn-secondary btn-lg" onClick = {backHome}>Home</button>
        <button type="button" class="btn btn-secondary btn-lg" onClick = {updateUserInformation}>Edit user Information</button>
         </div>
    </div>
      </Navbar.Collapse>
    </Navbar>
        
   
    );
  }

  export default ProfileSecCom;