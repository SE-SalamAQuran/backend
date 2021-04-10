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
              style={{ padding: 15, margin: 5 }}
              type="button"
              class="btn btn-secondary btn-lg"
              onClick={logOut}
            >
              LogOut
            </button>
            <button
              style={{ padding: 15, margin: 5 }}
              type="button"
              class="btn btn-secondary btn-lg"
              onClick={backHome}
            >
              Home
            </button>
            <button
              style={{ padding: 15, margin: 5 }}
              type="button"
              class="btn btn-secondary btn-lg"
              onClick={updateUserInformation}
            >
              Edit Information
            </button>
          </div>
=======
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
>>>>>>> da7da87b4f2b84148eb59293524961db1e2b76fc
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ProfileSecCom;
