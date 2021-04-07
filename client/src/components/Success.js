import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import { Form, Button, Row, Col, Toast } from "react-bootstrap";
import Footer from "./Footer";
import jsCookie from "js-cookie";

export default function Success() {
  const [state, setState] = useState({
    code: "",
  });
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    header: "",
    text: "",
  });
  function MyIcon() {
    return (
      <img src="https://img.icons8.com/nolan/24/unlock-2.png" alt="unlock" />
    );
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => {
      if (name === "code") {
        return {
          code: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const code = jsCookie.get("code");
    if (code === state.code) {
      setMessage({
        type: "alert alert-success",
        header: "Success",
        text: "Valid Code",
      });
      setShow(true);
      window.location = "/newPassword";
    } else {
      setMessage({
        type: "alert alert-danger",
        header: "Failed",
        text: "Invalid Code",
      });
      setShow(true);
      window.location.reload();
    }
  }

  return (
    <div className={styles.container}>
      <img
        style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
        src="https://img.icons8.com/bubbles/50/ffffff/question-mark.png"
        alt="success"
      />
      <h5 style={{ textAlign: "center" }}>Password Recovery</h5>
      <Row style={{ padding: "1rem" }} sm={10}>
        {" "}
      </Row>
      <h6>
        Please enter the 8 characters code we sent to {jsCookie.get("cred")}
      </h6>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Verification Code</Form.Label>
          <Form.Control
            value={state.code}
            name="code"
            onChange={handleChange}
            placeholder="8 digit code"
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
            <MyIcon /> Next
          </Button>
        </Form.Group>
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
      <Footer />{" "}
    </div>
  );
}
