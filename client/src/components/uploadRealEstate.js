import { React, useState } from "react";
import Footer from "./Footer";
import Navbar from "./AppBar";
import UploadBody from "./uploadBody";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button, Toast, Col, Row } from "react-bootstrap";
import styles from "./styles/Forms.module.css";
import axios from "axios";

function UploadRealEstate() {
  const [Ashow, setAshow] = useState(true);
  const [state, setState] = useState({
    selectedFile: null,
    prop: {},
  });
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    header: "",
    text: "",
  });

  function onSubmit(e) {
    let user = JSON.parse(sessionStorage.getItem("user"));
    e.preventDefault();
    const formData = new FormData();
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      formData.append("images", this.state.selectedFile[x]);
    }

    axios({
      method: "post",
      url: "http://localhost:5000/upload/new/property" + user._id,
      data: formData,
    })
      .then(function (response) {
        //handle success
        setMessage({
          type: "alert alert-success",
          header: "Success",
          text: "Property Added Successfully",
        });
        setShow(true);
        window.location = "/uploadNewRealEstate";
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
      <Navbar />
      <Alert
        Ashow={Ashow}
        style={{ marginTop: "1rem", textAlign: "center" }}
        variant="dark"
      >
        <Alert.Heading>
          Hey, nice to see you are uploading some content to our app
        </Alert.Heading>
        <h5>
          Aww yeah, here are a few reminders before you start the upload
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
          Don't insert any misleading and/or fake information.
        </h6>
        <h6>
          <img
            src="https://img.icons8.com/emoji/20/000000/check-mark-button-emoji.png"
            alt="green"
          />{" "}
          Feel free to upload up to 6 images and/or videos to give a better view
          of your property.
        </h6>{" "}
        <h6>
          {" "}
          <img
            src="https://img.icons8.com/emoji/20/000000/check-mark-button-emoji.png"
            alt="green"
          />{" "}
          Total size limit of uploads must not exceed 50MB per upload.
        </h6>
        <h6>
          {" "}
          <img
            src="https://img.icons8.com/emoji/20/000000/check-mark-button-emoji.png"
            alt="green"
          />{" "}
          We will be in-touch within 24 hours to make sure that the information
          you inserted are true and flawless.
        </h6>
        <hr />
        <p style={{ textAlign: "center" }}>
          We appreciate the choice you made to sell your property via our
          platform.
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
          onClick={() => setAshow(false)}
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
          onClick={() => setAshow(true)}
        >
          Our terms of use
        </Button>
      )}
    
      <UploadBody />
      <div className={styles.container}>
        <form onSubmit={onSubmit} encType="multipart-form-data">
          <div className="form-group">
            <input
              type="file"
              onChange={(event) => {
                setState(event.target.files);
              }}
              multiple
              className="form-control-avatar"
              name="images"
            />
            <input
              type="submit"
              value="Upload Picture"
              className="btn btn-block btn-primary"
              style={{ marginTop: "2rem" }}
            />
          </div>
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

export default UploadRealEstate;
