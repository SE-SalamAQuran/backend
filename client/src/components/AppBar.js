import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Nav.module.css";

export default function Appbar() {
  function isLogged() {
    return JSON.parse(sessionStorage.getItem("user")) == null ? false : true;
  }

  function UserGreeting(props) {
    return (
      <a href="http://localhost:3000/tprofile">
        <img
          src="https://img.icons8.com/windows/32/ffffff/user-tag.png"
          alt="avatar"
        />
      </a>
    );
  }

  function GuestGreeting(props) {
    return (
      <a className={styles.link} href="http://localhost:3000/login">
        Login
      </a>
    );
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  return (
    <div id={styles.appBar}>
      <Navbar expand="xl" bg="dark" variant="dark">
        <Navbar.Brand href="http://localhost:3000/">
          <img
            src="https://img.icons8.com/wired/50/ffffff/real-estate.png"
            alt="logo"
            className={styles.logo}
          />{" "}
          Palestinian Estates
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Estates
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="http://localhost:3000/lands">
                Lands
              </Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/villas">
                Villas
              </Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/Roof">
                Roof
              </Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/Shop">
               Shop
              </Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/Office">
              Office
              </Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/Apartment">
                Apartments
              </Dropdown.Item>
            
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link className={styles.link} href="http://localhost:3000/about">
            About
          </Nav.Link>
          <Nav.Link
            className={styles.link}
            href="http://localhost:3000/#contact"
          >
            Contact Us
          </Nav.Link>
          <Navbar.Text>
            <Greeting isLoggedIn={isLogged()}></Greeting>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
