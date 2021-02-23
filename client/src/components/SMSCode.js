import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import { Form, Button, Row } from "react-bootstrap";
import Footer from "./Footer";
import axios from "axios";
import jsCookie from "js-cookie";

function SMSIcon() {
  return (
    <img
      src="https://img.icons8.com/android/24/000000/sms.png"
      alt="sms-icon"
    />
  );
}

export default function SMSCode() {
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
      .post("http://localhost:5000/users/sendSMS", cred)
      .then((res) => {
        window.location = "/success";
        jsCookie.set("smsCode", res.data.code);
      })
      .catch((err) => console.error("Error logging in!", err));
  }
  return (
    <div className={styles.container}>
      <h5>Password Recovery by SMS</h5>
      <Row style={{ padding: "1rem" }} sm={10}>
        {" "}
      </Row>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            value={state.emailPhone}
            onChange={handleChange}
            name="emailPhone"
            placeholder="Enter your phone"
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
            <SMSIcon></SMSIcon>
          </Button>
        </Form.Group>
        <div style={{ marginBottom: "2rem" }}>
          {" "}
          <a
            style={{ marginBottom: "1rem" }}
            href="http://localhost:3000/verify/mail"
          >
            Verify using Email instead?
          </a>
          <br></br>
          <a href="http://localhost:3000/login">Try to login again</a>
        </div>
      </Form>

      <Footer />
    </div>
  );
}
