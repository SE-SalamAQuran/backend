import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import { Form, Button, Nav } from "react-bootstrap";
import Footer from "./Footer";
import axios from "axios";

export default function PasswordRecovery() {
  const [state, setState] = useState({
    emailPhone: "",
  });

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

  function handleSubmit(event) {
    event.preventDefault();
    const cred = {
      emailPhone: state.emailPhone,
    };
    axios
      .post("http://localhost:5000/users/sendmail", cred)
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
        <Button
          style={{
            justifyContent: "center",
            alignItem: "center",
            alignSelf: "center",
            marginTop: "6px",
          }}
          variant="dark"
          className={styles.button}
          type="submit"
        >
          Login
        </Button>
        <Nav.Link href="http://localhost:3000/forgot">
          Forgot your password ?
        </Nav.Link>
      </Form>

      <a href="http://localhost:3000/register" className={styles.link}>
        New user? Sign up for an account here
      </a>
      <Footer />
    </div>
  );
}
