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

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    const formData1 = new FormData();
    const formData2 = new FormData();
    const formData3 = new FormData();
    const formData4 = new FormData();
    const formData5 = new FormData();
    const formData6 = new FormData();
    let prop = jsCookie.get("id");

    const url = "http://localhost:5000/upload/avatar/prop/" + prop;
    if (
      image1 == null &&
      image2 == null &&
      image3 == null &&
      image4 == null &&
      image5 == null &&
      image6 == null
    ) {
      setMessage({
        type: "alert alert-danger",
        header: "You must upload at least one image",
        text: "If you don't want to upload pictures please click skip",
      });
      setShow(true);
    } else {
      formData1.append("omg", image1);
      formData2.append("omg", image2);
      formData3.append("omg", image3);
      formData4.append("omg", image4);
      formData5.append("omg", image5);
      formData6.append("omg", image6);
      axios
        .all([
          axios.post(url, formData1),
          axios.post(url, formData2),
          axios.post(url, formData3),
          axios.post(url, formData4),
          axios.post(url, formData5),
          axios.post(url, formData6),
        ])

        .then(function (response) {
          //handle success
          setMessage({
            type: "alert alert-success",
            header: "Success",
            text: "Image uploaded successfully",
          });
          setShow(true);
          console.log(response.data);
          window.location = "/upload/confirm";
        })
        .catch(function (err) {
          //handle error
          setMessage({
            type: "alert alert-warning",
            header: "You uploaded your images",
            text: "You uploaded less than 6 images",
          });
          setShow(true);
          console.error(err);
          window.location = "/upload/confirm";
        });
    }
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
        src="https://img.icons8.com/color/80/000000/real-estate.png"
        alt="pic"
      />
      <h1>Upload images of your property</h1>
      <div className="row mt-4">
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <div className="form-group">
            <input
              type="file"
              onChange={(e) => {
                setImage1(e.target.files[0]);
              }}
              className="form-control"
            />
            <input
              type="file"
              onChange={(e) => {
                setImage2(e.target.files[0]);
              }}
              className="form-control"
            />
            <input
              type="file"
              onChange={(e) => {
                setImage3(e.target.files[0]);
              }}
              className="form-control"
            />
            <input
              type="file"
              onChange={(e) => {
                setImage4(e.target.files[0]);
              }}
              className="form-control"
            />
            <input
              type="file"
              onChange={(e) => {
                setImage5(e.target.files[0]);
              }}
              className="form-control"
            />
            <input
              type="file"
              onChange={(e) => {
                setImage6(e.target.files[0]);
              }}
              className="form-control"
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
