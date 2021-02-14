import { React, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
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
        window.location = "/";

        res.status(200);
      })
      .catch((err) => console.error("Error logging in!", err));
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
        <Button variant="dark" className={styles.button} type="submit">
          Signup
        </Button>
      </Form>

      <a href="http://localhost:3000/login" className={styles.link}>
        Already have an account? Login here
      </a>
      <Footer />
    </div>
  );
}
export default Register;
