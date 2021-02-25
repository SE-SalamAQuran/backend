import { React, useState } from "react";
import { Form, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import Footer from "./Footer";
import axios from "axios";

function Login() {
  const [state, setState] = useState({
    emailPhone: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => {
      if (name === "emailPhone") {
        return {
          emailPhone: value,
          password: prev.password,
        };
      } else if (name === "password") {
        return {
          emailPhone: prev.emailPhone,
          password: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const cred = {
      emailPhone: state.emailPhone,
      password: state.password,
    };
    axios
      .post("http://localhost:5000/users/login", cred)
      .then((res) => {
        window.location = "/";
        const token = res.data.token;
        sessionStorage.setItem("token", token);
        let thisUser = res.data.decoded;
        sessionStorage.setItem("user", JSON.stringify(thisUser));
      })
      .catch((err) => console.error("Error logging in!", err));
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        src="https://img.icons8.com/pastel-glyph/50/000000/user-lock.png"
        alt="lock"
      />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={state.emailPhone}
            onChange={handleChange}
            type="email"
            name="emailPhone"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="dark" className={styles.loginButton} type="submit">
          Login
        </Button>
      </Form>

      <Nav.Link href="http://localhost:3000/verify/mail">
        Forgot your password ?
      </Nav.Link>
      <a href="http://localhost:3000/register" className={styles.link}>
        New user? Sign up for an account here
      </a>
      <Footer />
    </div>
  );
}
export default Login;
