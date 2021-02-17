import { React, useState } from "react";
import search from "regex-collection";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import { Form, Button, Row } from "react-bootstrap";
import Footer from "./Footer";
import axios from "axios";

export default function PasswordRecovery() {
  const [state, setState] = useState({
    emailPhone: "",
    type: "",
  });

  function MailIcon() {
    return (
      <img
        src="https://img.icons8.com/ios-filled/25/000000/apple-mail.png"
        alt="mail-icon"
      />
    );
  }
  function SMSIcon() {
    return (
      <img
        src="https://img.icons8.com/android/24/000000/sms.png"
        alt="sms-icon"
      />
    );
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => {
      if (name === "emailPhone") {
        return {
          emailPhone: value,
          type: prev.type,
        };
      } else if (name === "type") {
        return {
          emailPhone: prev.emailPhone,
          type: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const cred = {
      emailPhone: state.emailPhone,
    };
    if (cred.emailPhone.isEmailAddress) {
      axios
        .post("http://localhost:5000/users/sendmail", cred)
        .then((res) => {
          window.location = "/";
        })
        .catch((err) => console.error("Error logging in!", err));
    } else if (cred.emailPhone.isTelephoneNumber) {
      axios
        .post("http://localhost:5000/users/sendSMS", cred)
        .then((res) => {
          window.location = "/";
        })
        .catch((err) => console.error("Error logging in!", err));
    }
  }
  return (
    <div className={styles.container}>
      <Row style={{ padding: "1rem" }} sm={10}>
        {" "}
        <MailIcon></MailIcon>
        <SMSIcon></SMSIcon>
      </Row>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email / Phone</Form.Label>
          <Form.Control
            value={state.emailPhone}
            onChange={handleChange}
            type="email"
            name="emailPhone"
            placeholder="Enter mail or phone"
          />
        </Form.Group>

        <Button
          style={{
            justifyContent: "center",
            alignItem: "center",
            alignSelf: "center",
            marginBottom: "6rem",
            marginTop: "10px",
          }}
          variant="dark"
          className={styles.button}
          type="submit"
        >
          Send Verification Code
        </Button>
      </Form>

      <Footer />
    </div>
  );
}
