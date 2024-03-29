import { React, useState } from "react";
import Footer from "./Footer";
import Navbar from "./AppBar";
import UploadBody from "./uploadBody";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button } from "react-bootstrap";

function UploadRealEstate() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Navbar />
      <Alert
        show={show}
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
          Feel free to upload up to 6 images to give a better view of your
          property.
        </h6>{" "}
        <h6>
          {" "}
          <img
            src="https://img.icons8.com/emoji/20/000000/check-mark-button-emoji.png"
            alt="green"
          />{" "}
          Total size limit of uploads must not exceed 150MB.
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
          onClick={() => setShow(false)}
          variant="outline-danger"
        >
          X
        </Button>
      </Alert>
      {!show && (
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

      <UploadBody />

      <Footer />
    </div>
  );
}

export default UploadRealEstate;
