import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import { Form, Button, Row } from "react-bootstrap";
import Footer from "./Footer";
import axios from "axios";
import jsCookie from "js-cookie";

export default function PasswordRecovery() {
  const [state, setState] = useState({
    emailPhone: "",
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

  function handleSubmit(event) {
    event.preventDefault();
    const cred = {
      emailPhone: state.emailPhone,
    };

    jsCookie.set("cred", state.emailPhone);

    axios
      .post("http://localhost:5000/users/sendmail", cred)
      .then((res) => {
        window.location = "/success";
        jsCookie.set("code", res.data.code);
      })
      .catch((err) => console.error("Error logging in!", err));
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
            className={styles.button}
            type="submit"
          >
            <MailIcon></MailIcon> Next
          </Button>
        </Form.Group>
        <div style={{ marginBottom: "2rem" }}>
          {" "}
          <a
            style={{ marginBottom: "1rem" }}
            href="http://localhost:3000/verify/sms"
          >
            Verify using SMS instead?
          </a>
          <br></br>
          <a href="http://localhost:3000/login">Try to login again</a>
        </div>{" "}
      </Form>

      <Footer />
    </div>
  );
}
