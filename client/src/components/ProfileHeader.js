import React, { useState, useEffect } from 'react';
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require("axios");



export default function ProfileHeader() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  

  useEffect(() => {

    axios
    .get("http://localhost:5000/users/user/" + user._id, {
      headers: {
        "content-type": "application/json",
      },
    })
    .then((res) => {

      setFname(res.data.fname)
      setLname(res.data.lname)})
   
     

      .catch((err) => console.log(err));
      
  },[])
  

   

  return (
    <Navbar variant="dark" bg="dark">
      <Navbar.Brand href="http://localhost:3000/">
        Palestinian Estates
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Signed in as: {fname + " " + lname}</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
