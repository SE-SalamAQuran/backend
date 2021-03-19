import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import styles from "./styles/Nav.module.css";

export default function ProfileBody() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pic, setPic] = useState("");
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
        setPic(res.data.profile);
      })

      .catch((err) => console.log(err));
  });
  function hexToBase64(str) {
    return btoa(
      String.fromCharCode.apply(
        null,
        str
          .replace(/\r|\n/g, "")
          .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
          .replace(/ +$/, "")
          .split(" ")
      )
    );
  }
  function goListedWishesPage(e) {
    e.preventDefault();
    window.location = "http://localhost:3000/table";
  }

  return (
    <div
      class="container-fluid bg-3 text-center"
      style={{ padding: 70, paddingBottom: 70, background: "AliceBlue" }}
    >
      <div class="row">
        <div class="col-sm-4">
          <br /> <br /> <br /> <br />
          <h1>{fname + " " + lname}</h1>
        </div>
        <div class="col-sm-4">
          <img
            src={"data:image/jpeg;base64" + hexToBase64(pic)}
            class="img-circle"
            style={{ width: 250, height: 250 }}
            alt="avatar"
          ></img>
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
            <button type="button" class="btn btn-secondary  btn-lg">
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
            <button type="button" class="btn btn-secondary  btn-lg">
              My properties
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
