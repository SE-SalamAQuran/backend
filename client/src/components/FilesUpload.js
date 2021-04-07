import { React, useState } from "react";
import axios from "axios";
import { Col, Row, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import jsCookie from "js-cookie";
export default function FilesUploadComponent() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    header: "",
    text: "",
  });

  const [state, setState] = useState({
    images: null,
  });

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    let prop = jsCookie.get("id");
    for (var i = 0; i < state.images.length; i++) {
      formData.append("images", state.images[i], state.images[i].name);
    }
    
    axios({
      method: "patch",
      url: "http://localhost:5000/props/new/" + prop,
      body: formData.getAll("images"),
    })
      .then(function (response) {
        //handle success
        setMessage({
          type: "alert alert-success",
          header: "Success",
          text: "Image uploaded successfully",
        });
        setShow(true);
        console.log(response.data);
        window.location = "/tprofile";
      })
      .catch(function (response) {
        //handle error
        setMessage({
          type: "alert alert-danger",
          header: "Failed",
          text: "An error occured, please try again",
        });
        setShow(true);
        console.log(response.data);
      });
    console.log(formData.getAll("images"));
  }

  function handleSkip() {
    jsCookie.remove("id");
    setMessage({
      type: "alert alert-warning",
      header: "Warning",
      text: "You skipped uploading images",
    });
    setShow(true);
    window.location = "/tprofile";
  }
  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        src="https://img.icons8.com/carbon-copy/80/000000/test-account.png"
        alt="pic"
      />
      <h1>Upload images of your property</h1>
      <div className="row mt-4">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <div className="form-group">
            <input
              type="file"
              onChange={(e) => {
                setState({ images: e.currentTarget.files });
              }}
              className="form-control"
              name="images"
              multiple
            />

            <input
              type="submit"
              value="Upload Pictures"
              className="btn btn-block btn-primary"
              style={{ marginTop: "2rem" }}
            />
            <input
              type="button"
              value="Skip"
              className="btn btn-block btn-light"
              style={{ marginTop: "2rem" }}
              onClick={handleSkip}
            />
          </div>
        </form>
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
    </div>
  );
}
