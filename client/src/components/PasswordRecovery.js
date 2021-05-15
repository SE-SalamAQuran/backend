import { React, useState } from "react";
import { Form, Button, Col, Row, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import Footer from "./Footer";
import axios from "axios";

function PasswordRecovery() {
  const [state, setState] = useState({
    pass: "",
    passConf: "",
    username: "",
  });
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    header: "",
    text: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => {
      if (name === "pass") {
        return {
          pass: value,
          passConf: prev.passConf,
          username: prev.username,
        };
      } else if (name === "passConf") {
        return {
          pass: prev.pass,
          passConf: value,
          username: prev.username,
        };
      } else if (name === "username") {
        return {
          pass: prev.pass,
          passConf: prev.passConf,
          username: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const cred = {
      username: state.username,
      pass: state.pass,
      passConf: state.passConf,
    };
    axios
      .patch("http://localhost:5000/users/updatepass", cred)
      .then((res) => {
        setMessage({
          type: "alert alert-success",
          header: "Success",
          text: "Changed password successfully",
        });
        setShow(true);
        window.location = "/login";
      })
      .catch(function (response) {
        //handle error
        setMessage({
          type: "alert alert-danger",
          header: "Failed",
          text: "Passwords don't match or password too short",
        });
        setShow(true);
      });
  }

  return (
    <div className={styles.container}>
      <img
        alt="password-icon"
        src="https://img.icons8.com/fluent/48/000000/password-window.png"
        className={styles.icon}
      />

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            name="username"
            value={state.username}
            onChange={handleChange}
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>New Password</Form.Label>
          <Form.Control
            value={state.pass}
            onChange={handleChange}
            type="password"
            name="pass"
            placeholder="Enter new password"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="passConf"
            value={state.passConf}
            onChange={handleChange}
            placeholder="Confirm password"
          />
        </Form.Group>
        <Button variant="dark" className="btn btn-block" type="submit">
          Change password
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
      </Form>

      <a
        href="https://palestinian-estates.herokuapp.com/register"
        className={styles.link}
      >
        New user? Sign up for an account here
      </a>
      <Footer />
    </div>
  );
}
export default PasswordRecovery;
