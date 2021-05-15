import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import styles from "./styles/Nav.module.css";
import { Image } from "react-bootstrap";

export default function ProfileBody() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const isAdmin = user.isAdmin;
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pic, setPic] = useState("");
  const [av, setAv] = useState("");

  function upload() {
    window.location = "/upload";
  }
  function goMyProperties() {
    window.location = "/MyProperty";
  }

  function _imageEncode(arrayBuffer) {
    let b64encoded = btoa(
      [].reduce.call(
        new Uint8Array(arrayBuffer),
        function (p, c) {
          return p + String.fromCharCode(c);
        },
        ""
      )
    );
    let mimetype = "image/jpeg";
    return "data:" + mimetype + ";base64," + b64encoded;
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
        setPic(res.data.profile);
        console.log(res.data.profile);
      })

      .catch((err) => console.log(err));
  });
  useEffect(() => {
    axios.get(pic, { responseType: "arraybuffer" }).then((res) => {
      setAv(_imageEncode(res.data));
    });
  });

  function goListedWishesPage(e) {
    e.preventDefault();
    if (user.isAdmin) {
      window.location =
        "https://palestinian-estates.herokuapp.com/usersRequsted";
    } else {
      window.location = "https://palestinian-estates.herokuapp.com/table";
    }
  }
  function goToMyAppointment(e) {
    e.preventDefault();
    window.location = "https://palestinian-estates.herokuapp.com/Appointements";
  }
  function goToAllAppointment(e) {
    e.preventDefault();
    window.location =
      "https://palestinian-estates.herokuapp.com/allAppointements";
  }
  function goToAllUsers(e) {
    e.preventDefault();
    window.location = "https://palestinian-estates.herokuapp.com/AllUsers";
  }
  function uploadNewRealEstatePage(e) {
    e.preventDefault();
    console.log("upload page");
    window.location = "/uploadNewRealEstate";
  }
  function showBody() {
    // admin profile interface
    if (isAdmin) {
      return (
        <div
          class="container-fluid bg-3 text-center"
          style={{ padding: 70, paddingBottom: 70 }}
        >
          <div class="row">
            <div class="col-sm-4">
              <br /> <br /> <br /> <br />
              <h1>{fname + " " + lname}</h1>
            </div>
            <div class="col-sm-4">
              <Image srcSet={av} alt="avatar" className={styles.avatar} />

              <br />
              <button
                style={{ marginTop: "2rem" }}
                id={styles.btnUpload}
                class="btn btn-secondary btn-block"
                type="button"
                onClick={upload}
              >
                Upload New Picture
                <img
                  style={{ marginLeft: "5px" }}
                  src="https://img.icons8.com/color/25/000000/test-account.png"
                  alt="profile"
                />
              </button>
            </div>
            <div class="col-sm-4">
              <div>
                <button
                  onClick={uploadNewRealEstatePage}
                  type="button"
                  class="btn btn-secondary  btn-lg"
                >
                  upload a realestate
                </button>
              </div>
              <br></br> <br></br> <br></br>
              <div>
                <button
                  type="button"
                  class="btn btn-secondary  btn-lg"
                  onClick={goToAllAppointment}
                >
                  All appointments
                </button>
              </div>
              <br></br> <br></br> <br></br>
              <div>
                <button
                  onClick={goListedWishesPage}
                  type="button"
                  class="btn btn-secondary  btn-lg"
                >
                  All requested list
                </button>
              </div>
              <br></br> <br></br> <br></br>
              <div>
                <button
                  onClick={goToAllUsers}
                  type="button"
                  class="btn btn-secondary  btn-lg"
                >
                  All users in app
                </button>
                <br></br> <br></br> <br></br>
                <div>
                  <button
                    onClick={goMyProperties}
                    type="button"
                    class="btn btn-secondary  btn-lg"
                  >
                    my property
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    //user profile interface
    else {
      return (
        <div
          class="container-fluid bg-3 text-center"
          style={{ padding: 70, paddingBottom: 70 }}
        >
          <div class="row">
            <div class="col-sm-4">
              <br /> <br /> <br /> <br />
              <h1>{fname + " " + lname}</h1>
            </div>
            <div class="col-sm-4">
              <Image srcSet={av} alt="avatar" className={styles.avatar} />

              <br />
              <button
                style={{ marginTop: "2rem" }}
                id={styles.btnUpload}
                class="btn btn-secondary btn-block"
                type="button"
                onClick={upload}
              >
                Upload New Picture
              </button>
            </div>
            <div class="col-sm-4">
              <div>
                <button
                  type="button"
                  class="btn btn-secondary  btn-lg"
                  onClick={goToMyAppointment}
                >
                  My appointments
                </button>
              </div>
              <br></br> <br></br> <br></br>
              <div>
                <button
                  onClick={goListedWishesPage}
                  type="button"
                  class="btn btn-secondary  btn-lg"
                >
                  My requested list
                </button>
              </div>
              <br></br> <br></br> <br></br>
              <div>
                <button
                  onClick={goMyProperties}
                  type="button"
                  class="btn btn-secondary  btn-lg"
                >
                  My properties
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return showBody();
}
