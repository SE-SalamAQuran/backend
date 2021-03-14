import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "../images/profile.png";
import axios from "axios";
import styles from "./styles/Nav.module.css";

export default function ProfileBody() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function upload() {
    window.location = "/upload";
  }
  useEffect(() => {
    axios
      .get("http://localhost:5000/users/user/" + user._id, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setFname(res.data.fname);
        setLname(res.data.lname);
      })

      .catch((err) => console.log(err));
  });

  return (
    <div
      class="container-fluid bg-3 text-center"
      style={{ padding: 70, paddingBottom: 70, background: "AliceBlue" }}
    >
      <div class="row">
        <div class="col-sm-4">
          <br /> <br /> <br /> <br />
          <h1>{user.fname + " " + user.lname}</h1>
        </div>
        <div class="col-sm-4">
          <img
            src={pic}
            class="img-circle"
            style={{ width: 250, height: 250 }}
            alt="Bird"
          ></img>
          <br />
          <button
            style={{ marginTop: "2rem" }}
            class="btn btn-secondary btn-block"
            type="button"
            id={styles.btnUpload}
            onClick={upload}
          >
            Upload New Picture
          </button>
        </div>
        <div class="col-sm-4">
          <div>
            <button type="button" class="btn btn-secondary  btn-lg">
              My Appointments
            </button>
          </div>
          <br></br> <br></br> <br></br>
          <div>
            <button type="button" class="btn btn-secondary  btn-lg">
              My Realestates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
