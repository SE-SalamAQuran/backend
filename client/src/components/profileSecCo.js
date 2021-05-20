import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ProfileSecCom() {
  function logOut(e) {
    e.preventDefault();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    window.location = "/";
  }
  function backHome(e) {
    e.preventDefault();
    window.location = "/";
  }

  function updateUserInformation(e) {
    e.preventDefault();
    window.location = "/Update user Information";
  }

  return (
    <Navbar variant="dark" bg="dark">
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-left">
        <div class="btn-group" role="group" aria-label="Toolbar buttons">
          <button
            onClick={logOut}
            type="button"
            class="btn btn-lg btn-outline-danger"
            aria-label="logout"
          >
            <img
              src="https://img.icons8.com/android/24/ffffff/logout-rounded-left.png"
              alt="logout"
              style={{ marginRight: "6px" }}
            />
            Logout
          </button>
          <button
            onClick={backHome}
            type="button"
            class="btn btn-lg btn-outline-warning"
          >
            <img
              src="https://img.icons8.com/nolan/24/ffffff/home-page.png"
              alt="home"
              style={{ marginRight: "6px" }}
            ></img>
            Main page
          </button>
          <button
            type="button"
            onClick={updateUserInformation}
            class="btn btn-lg btn-outline-info"
          >
            <img
              src="https://img.icons8.com/android/24/ffffff/info.png"
              alt="update-info"
              style={{ marginRight: "6px" }}
            />
            Update information
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ProfileSecCom;
