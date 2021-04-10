import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import jsCookie from "js-cookie";
import { Col, Row, Toast } from "react-bootstrap";

import axios from "axios";

export default function ConfirmUpload() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    header: "",
    text: "",
  });

  const prop_id = jsCookie.get("id");
  function handleNo() {
    setMessage({
      type: "alert alert-warning",
      text: "Upload canceled",
      header: "You just discarded your images upload",
    });
    setShow(true);

    window.location = "/tprofile";
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .patch("http://localhost:5000/properties/img_path/" + prop_id)
      .then((response) => {
        console.log(response.data);
        setMessage({
          type: "alert alert-success",
          text: "You uploaded your images successfully",
          header: "Confirmed Upload",
        });
        setShow(true);
        window.location = "/tprofile";
      })
      .catch((err) => {
        setMessage({
          type: "alert alert-danger",
          text: "Something went wrong with your upload",
          header: "Error occured while uploading images",
        });
        setShow(true);
        console.error(err);
      });
  }
  return (
    <div className="container">
      <div style={{ marginTop: "3rem" }}>
        <img
          src="https://img.icons8.com/fluent/50/000000/checked-radio-button.png"
          alt="tick"
          style={{
            marginTop: "2rem",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Confirm Upload?
        </h2>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-block btn-outline-success"
        >
          Yes
        </button>
        <button
          style={{ marginTop: "1.5rem" }}
          type="button"
          onClick={handleNo}
          className="btn btn-block btn-outline-danger"
        >
          No
        </button>
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
    </div>
  );
}
