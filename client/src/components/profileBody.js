import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import styles from "./styles/Nav.module.css";
import { Image } from "react-bootstrap";

export default function ProfileBody() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [pic, setPic] = useState("");
  const [av, setAv] = useState("");

  function upload() {
    window.location = "/upload";
  }

  function _imageEncode(arrayBuffer) {
    let u8 = new Uint8Array(arrayBuffer);
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
        console.log(res.data.profile)
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
