import { React, useState } from "react";
import { Form, Button, Col, Toast, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import Footer from "./Footer";
import axios from "axios";

function Register() {
  const [state, setState] = useState({
    fname: "",
    lname: "",
    username: "",
    phoneNo: "",
    password: "",
    address: "",
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
      if (name === "fname") {
        return {
          fname: value,
          lname: prev.lname,
          username: prev.username,
          phoneNo: prev.phoneNo,
          password: prev.password,
          address: prev.address,
        };
      } else if (name === "lname") {
        return {
          fname: prev.fname,
          lname: value,
          username: prev.username,
          phoneNo: prev.phoneNo,
          password: prev.password,
          address: prev.address,
        };
      } else if (name === "username") {
        return {
          fname: prev.fname,
          lname: prev.lname,
          username: value,
          phoneNo: prev.phoneNo,
          password: prev.password,
          address: prev.address,
        };
      } else if (name === "phoneNo") {
        return {
          fname: prev.fname,
          lname: prev.lname,
          username: prev.username,
          phoneNo: value,
          password: prev.password,
          address: prev.address,
        };
      } else if (name === "password") {
        return {
          fname: prev.fname,
          lname: prev.lname,
          username: prev.username,
          phoneNo: prev.phoneNo,
          password: value,
          address: prev.address,
        };
      } else if (name === "address") {
        return {
          fname: prev.fname,
          lname: prev.lname,
          username: prev.username,
          phoneNo: prev.phoneNo,
          password: prev.password,
          address: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      fname: state.fname,
      lname: state.lname,
      username: state.username,
      phoneNo: state.phoneNo,
      password: state.password,
      address: state.address,
    };
    axios
      .post("http://localhost:5000/users/register", data)
      .then((res) => {
        setMessage({
          type: "alert alert-success",
          header: "Success",
          text: "Account Created Successfully",
        });
        setShow(true);
        window.location = "/login";
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
  function handleSwitch() {
    window.location = "/login";
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        src="https://img.icons8.com/metro/30/000000/add-user-male.png"
        alt="user"
      />
      <Form onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              name="fname"
              value={state.fname}
              onChange={handleChange}
              placeholder="First name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lname"
              value={state.lname}
              onChange={handleChange}
              placeholder="Last name"
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              value={state.username}
              onChange={handleChange}
              type="email"
              name="username"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={state.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Your Address </Form.Label>
          <Form.Control
            name="address"
            value={state.address}
            onChange={handleChange}
            placeholder="Ramallah, Jenin, Hebron, ..."
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Phone Number</Form.Label>

            <Form.Control
              name="phoneNo"
              value={state.phoneNo}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </Form.Group>
        </Form.Row>
        <Button variant="dark" className="btn btn-block" type="submit">
          Signup
          <img
            src="https://img.icons8.com/pastel-glyph/25/ffffff/add-user-male--v2.png"
            alt="icon"
            style={{ marginLeft: "5px" }}
          />
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

      <button onClick={handleSwitch} className="btn btn-md btn-secondary">
        Already have an account? Login here
      </button>
      <Footer />
    </div>
  );
}
export default Register;
