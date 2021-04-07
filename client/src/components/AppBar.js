import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Nav.module.css";

export default function Appbar() {
  function isLogged() {
    return JSON.parse(sessionStorage.getItem("user")) == null ? false : true;
  }

  function handleUserClick() {
    window.location = "/tprofile";
  }

  function UserGreeting(props) {
    return (
      <button
        type="button"
        className="btn btn-light"
        style={{
          width: "30px",
          height: "30px",
          padding: "6px 0px",
          borderRadius: "15px",
          textAlign: "center",
          fontSize: "12px",
          lineHeight: "1.42857",
        }}
        onClick={handleUserClick}
      >
        <img
          src="https://img.icons8.com/windows/20/000000/user-tag.png"
          alt="avatar"
        />
      </button>
    );
  }

  function handleGuestClick() {
    window.location = "/login";
  }

  function GuestGreeting(props) {
    return (
      <button
        type="button"
        onClick={handleGuestClick}
        className="btn btn-outline-light"
      >
        <span>Login</span>
      </button>
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
