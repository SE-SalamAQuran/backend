import React, { useState } from "react";
import ProfileHead from "./ProfileHeader";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col } from "react-bootstrap";
import Navbar from "./AppBar";
const axios = require("axios");

function UploadRealEstateRequset() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  const [propertyType, setPropertyType] = useState("house");
  const [transactionType, setTransactionType] = useState("sale-cash");
  const [city, setCity] = useState("Ramallah");
  const [address, setAddress] = useState("");

  function onChangePropertyType(e) {
    setPropertyType(e.target.value);
  }
  function onChangetransactionType(e) {
    setTransactionType(e.target.value);
  }

  function onChangeCity(e) {
    setCity(e.target.value);
  }

  function onChangeAddress(e) {
    setAddress(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      propertyType: propertyType,
      user: user._id,
      transactionType: transactionType,
      city: city,
      address: address,
    };

    axios
      .post("http://localhost:5000/properties/addWishItem", data)
      .then((res) => {
        console.log({ data });
        res.status(200);
      })
      .catch((err) => console.error("Error logging in!", err));

    window.location = "/tprofile";
  }

  return (
    <div>
      <Navbar></Navbar>
      <h1 style={{ textAlign: "center" }}> unavailable realestate Request </h1>
      <h3 style={{ textAlign: "center" }}> Please make sure that:</h3>
      <p style={{ textAlign: "center" }}>
        {" "}
        1 _ fill all the fields in the uploading form.{" "}
      </p>
      <p style={{ textAlign: "center" }}>
        {" "}
        2 _ please don't add any missleadig information.{" "}
      </p>
      <div style={{ padding: 20 }}></div>
      <div className="container">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputType of properity">Type of property</label>
              <select
                onChange={onChangePropertyType}
                class="form-control"
                id="sel1"
              >
                <option value="house">house</option>
                <option value="villa">villa</option>
                <option value="land">land</option>
                <option value="apartment">apartment</option>
                <option value="shop">shop</option>
                <option value="office">office</option>
                <option value="roof">roof</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputType">Type of transaction you want</label>
              <select
                class="form-control"
                id="sel1"
                onChange={onChangetransactionType}
              >
                <option value="sale-cash">sale-cash</option>
                <option value="sale-installment">sale-installment</option>
                <option value="rent">rent</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <select class="form-control" id="sel1" onChange={onChangeCity}>
                <option value="Ramallah">Ramallah</option>
                <option value="AlBireh">AlBireh</option>
                <option value="Nablus">Nablus</option>
                <option value="Hebron"> Hebron</option>
                <option value="Bethlehem">Bethlehem</option>
                <option value="Tulkarm">Tulkarm</option>
                <option value="Qalqilia">Qalqilia</option>
                <option value="Salfit">Salfit</option>
                <option value="Tubas">Tubas</option>
                <option value="Jenin">Jenin</option>
                <option value="Jericho">Jericho</option>
                <option value="Jerusalem">Jerusalem</option>
              </select>
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress">Location address</label>
              <input
                onChange={onChangeAddress}
                type="text"
                class="form-control"
                id="inputText"
                placeholder="Location address"
              />
            </div>
          </div>
        </form>
        <button
          onClick={handleSubmit}
          type="button"
          class="btn btn-secondary btn-lg btn-block"
        >
          Add request{" "}
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default UploadRealEstateRequset;
