import React, { useState } from "react";
import ProfileHead from "./ProfileHeader";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Row, Toast, Alert, Button } from "react-bootstrap";
import Navbar from "./AppBar";
const axios = require("axios");

function UploadRealEstateRequset() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const [Ashow, setAShow] = useState(true);

  const [propertyType, setPropertyType] = useState("house");
  const [transactionType, setTransactionType] = useState("sale-cash");
  const [city, setCity] = useState("Ramallah");
  const [address, setAddress] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    header: "",
    text: "",
  });

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
        setMessage({
          type: "alert alert-success",
          header: "Success",
          text: "Request Added Successfully",
        });
        setShow(true);
        window.location = "/table";
      })
      .catch(function (response) {
        //handle error
        setMessage({
          type: "alert alert-danger",
          header: "Failed",
          text: "Please fill all fields",
        });
        setShow(true);
      });
  }

  return (
    <div>
      <Navbar></Navbar>
      <h1 style={{ textAlign: "center" }}> Unavailable Realestate Request </h1>
      <Alert
        show={Ashow}
        style={{ marginTop: "1rem", textAlign: "center" }}
        variant="dark"
      >
        <Alert.Heading>
          Hey, nice to see you are uploading some content to our app
        </Alert.Heading>
        <h5>
          Aww yeah, here are a few reminders before you make your request
          process.
        </h5>{" "}
        <h6>
          <img
            src="https://img.icons8.com/emoji/20/000000/check-mark-button-emoji.png"
            alt="green"
          />{" "}
          Please fill all the fields you will be asked to fill out.
        </h6>
        <h6>
          {" "}
          <img
            src="https://img.icons8.com/emoji/20/000000/check-mark-button-emoji.png"
            alt="green"
          />{" "}
          You will get a notification via mail or sms when something close to
          the description you provide is uploaded to the platform.
        </h6>
        <hr />
        <p style={{ textAlign: "center" }}>
          We appreciate the choice you made to use platform.
          <br></br>
          Thank you and we wish you a nice day.
        </p>
        <Button
          style={{
            display: "block",
            marginTop: "0.54rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onClick={() => setAShow(false)}
          variant="outline-danger"
        >
          X
        </Button>
      </Alert>
      {!Ashow && (
        <Button
          variant="info"
          style={{
            display: "block",
            marginTop: "0.54rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onClick={() => setShow(true)}
        >
          Our terms of use
        </Button>
      )}
      <div style={{ padding: 20 }}></div>
      <div className="container">
        <form onSubmit={handleSubmit}>
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
          <button type="submit" class="btn btn-secondary btn-lg btn-block">
            Add request{" "}
          </button>
        </form>
      </div>
      <Row>
        <Col xs={12}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            delay={3000}
            autohide
          >
            <div className={message.type}>
              <strong className="mr-auto">{message.header}</strong>
              <br></br>
              <small>{message.text}</small>
            </div>
          </Toast>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default UploadRealEstateRequset;
