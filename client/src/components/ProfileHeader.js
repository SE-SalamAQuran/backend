import React from "react";
import { Navbar, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Nav.module.css";

export default function ProfileHeader() {
  let user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <Navbar variant="dark" bg="dark">
      <Navbar.Brand href="http://localhost:3000/">
        Palestinian Estates
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <h5 className={styles.badge}>
          <Badge pill variant="light">
            {user.fname + " " + user.lname}
          </Badge>
        </h5>
        <img
          src="https://img.icons8.com/material-sharp/30/ffffff/settings.png"
          alt="settings"
        />
      </Navbar.Collapse>
    </Navbar>
  );
}
