import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import { Form, Button, Row, Toast, Col } from "react-bootstrap";
import Footer from "./Footer";
import axios from "axios";
import jsCookie from "js-cookie";

export default function PasswordRecovery() {
  const [state, setState] = useState({
    emailPhone: "",
  });
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    header: "",
    text: "",
  });

  function MailIcon() {
    return (
      <img
        src="https://img.icons8.com/ios-filled/25/000000/apple-mail.png"
        alt="mail-icon"
      />
    );
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => {
      if (name === "emailPhone") {
        return {
          emailPhone: value,
        };
      }
    });
  }

  function handleSwitchToSMS() {
    window.location = "/verify/sms";
  }
  function handleBackToLogin() {
    window.location = "/login";
  }
  function handleSubmit(event) {
    event.preventDefault();
    const cred = {
      emailPhone: state.emailPhone,
    };

    jsCookie.set("cred", state.emailPhone);

    axios
      .post("http://localhost:5000/users/sendmail", cred)
      .then((res) => {
        jsCookie.set("code", res.data.code);
        setMessage({
          type: "alert alert-success",
          header: "Success",
          text: "Code sent successfully",
        });
        setShow(true);
        window.location = "/success";
      })
      .catch(function (response) {
        //handle error
        setMessage({
          type: "alert alert-danger",
          header: "Failed",
          text: "Invalid email address",
        });
        setShow(true);
      });
  }
  return (
    <div className={styles.container}>
      <h5>Password Recovery by Email</h5>
      <Row style={{ padding: "1rem" }} sm={10}>
        {" "}
      </Row>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={state.emailPhone}
            onChange={handleChange}
            type="email"
            name="emailPhone"
            placeholder="Enter your email"
          />
          <Button
            style={{
              justifyContent: "center",
              alignItem: "center",
              alignSelf: "center",
              marginBottom: "2rem",
              marginTop: "10px",
            }}
            variant="light"
            className="btn btn-block"
            type="submit"
          >
            <MailIcon></MailIcon> Next
          </Button>
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
        </Form.Group>
        <div style={{ marginBottom: "2rem" }}>
          {" "}
          <button
            onClick={handleSwitchToSMS}
            className="btn btn-md btn-block btn-secondary"
          >
            Verify using SMS instead ?{" "}
          </button>
          <br></br>
          <button
            onClick={handleBackToLogin}
            className="btn btn-md btn-block btn-secondary"
          >
            Try to login again
          </button>
        </div>{" "}
      </Form>

      <Footer />
    </div>
  );
}
