import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import { Form, Button, Row, Col, Toast } from "react-bootstrap";
import Footer from "./Footer";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    header: "",
    text: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const cred = {
      emailPhone: "+" + state.emailPhone,
    };
    jsCookie.set("cred", state.emailPhone);

    axios
      .post("http://localhost:5000/users/sendSMS", cred)
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
          text: "Invalid phone number",
        });
        setShow(true);
      });
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
          <PhoneInput
            country={"ps"}
            value={state.emailPhone}
            name="emailPhone"
            onChange={(emailPhone) => setState({ emailPhone })}
          ></PhoneInput>

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
            <SMSIcon></SMSIcon> Next
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
