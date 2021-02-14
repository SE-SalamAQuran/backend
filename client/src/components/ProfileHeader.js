import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ProfileHeader() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <Navbar variant="dark" bg="dark">
      <Navbar.Brand href="http://localhost:3000/">
        Palestinian Estates
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Signed in as: {user.fname + " " + user.lname}</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
