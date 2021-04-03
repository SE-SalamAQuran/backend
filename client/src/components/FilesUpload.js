import { React, useState } from "react";
import axios from "axios";
import { Col, Row, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
export default function FilesUploadComponent() {
  const [images, setImages] = useState([]);
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
    for (const key of Object.keys(images)) {
      formData.append("images", images[key]);
    }
    axios({
      method: "post",
      url: "http://localhost:5000/uploads/test/" + user._id,
      data: formData,
    })
      .then(function (response) {
        //handle success
        setMessage({
          type: "alert alert-success",
          header: "Success",
          text: "Image uploaded successfully",
        });
        setShow(true);
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
      });
    console.log(formData.get("images"));
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        src="https://img.icons8.com/carbon-copy/80/000000/test-account.png"
        alt="pic"
      />
      <h1>Upload a new profile picture</h1>
      <div className="row mt-4">
        <form onSubmit={onSubmit} encType="multipart-form-data">
          <div className="form-group">
            <input
              type="file"
              onChange={(event) => {
                setImages(event.target.files);
              }}
              className="form-control-avatar"
              name="images"
              multiple
            />
            <input
              type="submit"
              value="Upload Picture"
              className="btn btn-block btn-primary"
              style={{ marginTop: "2rem" }}
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
