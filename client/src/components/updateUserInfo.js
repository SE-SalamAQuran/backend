import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import Footer from "./Footer";
import axios from "axios";
import { set } from 'mongoose';

function Register() {
    
    let user = JSON.parse(sessionStorage.getItem("user"));

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNo, setPhoneNO] = useState("");
  const [address, setAddress] = useState("");




  useEffect(() => {

    axios
    .get("http://localhost:5000/users/user/" + user._id, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((res) => {

      setFname(res.data.fname)
      setLname(res.data.lname)
      setAddress(res.data.address)
      setPhoneNO(res.data.phoneNo)

      console.log(res)
      console.log(res.data.fname)
      console.log(res.data.lname)
      console.log(res.data.phoneNo)
      console.log(res.data.address);})

      .catch((err) => console.log(err));
      
  },[])

  function backProfile (e)  {
    e.preventDefault();
    window.location = "/tprofile";
  };

  function changeFName (e) {
    setFname(e.target.value);
    
  };
  function changeLName  (e)  {
    setLname(e.target.value);
  };
  function changeAddress  (e)  {
   setAddress( e.target.value,);
  };
  function changePhoneNumbe  (e) {
setPhoneNO( e.target.value,);
  };

  

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
    
      fname: fname,
      lname: lname,
      phoneNo: phoneNo,
      address: address,
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
              value={fname}
              onChange={changeFName}
              placeholder="First name"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              name="lname"
              value={lname}
              onChange={changeLName}
              placeholder="Last name"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Your Address </Form.Label>
          <Form.Control
            name="address"
            value={address}
            onChange={changeAddress}
            placeholder="Ramallah, Jenin, Hebron, ..."
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phoneNo"
              value={phoneNo}
              onChange={changePhoneNumbe}
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
