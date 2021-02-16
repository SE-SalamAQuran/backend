<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require("axios");


=======
import React from "react";
import { Navbar, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Nav.module.css";
>>>>>>> 13e0fa665af8db96ae7c9232b7f6005c34b8926d

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
<<<<<<< HEAD
        <Navbar.Text>Signed in as: {fname + " " + lname}</Navbar.Text>
=======
        <h5 className={styles.badge}>
          <Badge pill variant="light">
            {user.fname + " " + user.lname}
          </Badge>
        </h5>
        <img
          src="https://img.icons8.com/material-sharp/30/ffffff/settings.png"
          alt="settings"
        />
>>>>>>> 13e0fa665af8db96ae7c9232b7f6005c34b8926d
      </Navbar.Collapse>
    </Navbar>
  );
}
