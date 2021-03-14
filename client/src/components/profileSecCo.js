import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ProfileSecCom() {
  function logOut(e) {
    e.preventDefault();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    window.location = "http://localhost:3000";
  }
  function backHome(e) {
    e.preventDefault();
    window.location = "http://localhost:3000";
  }

  function updateUserInformation(e) {
    e.preventDefault();
    window.location = "http://localhost:3000/Update user Information";
  }

  return (
    <Navbar variant="dark" bg="dark">
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-left">
<<<<<<< HEAD
        <div class="row">
          <div class="col-sm-12 text-left">
            <button
              type="button"
              class="btn btn-secondary btn-lg"
              onClick={logOut}
            >
              LogOut
            </button>
            <button
              style={{ marginLeft: "1rem" }}
              type="button"
              class="btn btn-secondary btn-lg"
              onClick={backHome}
            >
              Home
            </button>
            <button
              style={{ marginLeft: "1rem" }}
              type="button"
              class="btn btn-secondary btn-lg"
              onClick={updateUserInformation}
            >
              Edit user Information
            </button>
          </div>
        </div>
=======
      <div class="row"  >
        <div class="col-sm-12 text-left" >
        <button style={{padding:15,margin:5}}  type="button" class="btn btn-secondary btn-lg" onClick = {logOut}>LogOut</button>
        <button style={{padding:15,margin:5}} type="button" class="btn btn-secondary btn-lg" onClick = {backHome}>Home</button>
        <button  style={{padding:15,margin:5}}  type="button" class="btn btn-secondary btn-lg" onClick = {updateUserInformation}>Edit user Information</button>
         </div>
    </div>
>>>>>>> a75f8c8c203056f45e5fc3c02345074feb688b18
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ProfileSecCom;
