import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pic from "../images/profile.png";
const axios = require("axios");

export default function ProfileBody() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [photo, setPicture] = useState("");

  const handlePhoto = (e) => {
    setPicture({photo: e.target.files[0]});
}
const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('photo',photo);

  

  axios.patch('http://localhost:5000/users/UploadProfile'+ user._id , formData)
       .then(res => {
          console.log(res);
       })
       .catch(err => {
          console.log(err);
       });
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
  function goListedWishesPage (e)  {
    e.preventDefault();
    window.location = "http://localhost:3000/table";
  };

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
            <button onClick = {goListedWishesPage} type="button" class="btn btn-secondary  btn-lg">
              My requsted list
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
