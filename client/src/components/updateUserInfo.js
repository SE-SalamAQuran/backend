import { React, useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import Footer from "./Footer";
import axios from "axios";

function Register() {
    
    let user = JSON.parse(sessionStorage.getItem("user"));

  const [state, setState] = useState({
    fname: user.fname,
    lname: user.lname,
    phoneNo: user.phoneNo,
    address: user.address,
  });

  function backProfile (e)  {
    e.preventDefault();
    window.location = "/tprofile";
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prev.lname,
          phoneNo: prev.phoneNo,
          address: prev.address,
        };
      } else if (name === "lname") {
        return {
          fname: prev.fname,
          lname: value,
          phoneNo: prev.phoneNo,
          address: prev.address,
        };
      } else if (name === "phoneNo") {
        return {
          fname: prev.fname,
          lname: prev.lname,
          phoneNo: value,
          address: prev.address,
        };
      
      } else if (name === "address") {
        return {
          fname: prev.fname,
          lname: prev.lname,
          phoneNo: prev.phoneNo,
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
      phoneNo: state.phoneNo,
      address: state.address,
    };
    console.log(data)
    axios
    .put("http://localhost:5000/users/update/" + user._id, data)

    .then((res) => {

        res.status(200);
      })
      .catch((err) => console.error("updating fail !! ", err));
        window.location = "/tprofile";
  }

  return (
    <div className={styles.container}>
      <h1> upadte your information </h1>
      <br/>
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
              placeholder="phone number"
            />
          </Form.Group>
        </Form.Row>
        <Button variant="dark" onClick = {handleSubmit}>
          Update
        </Button> 
        <spam/> <spam/> <spam/>
        <Button  onClick = {backProfile} variant="dark" >
          Discard updating
        </Button>
      </Form>
      <Footer />
    </div>
  );
}
export default Register;
