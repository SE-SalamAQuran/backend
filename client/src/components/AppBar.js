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
  function logOut(e) {
    e.preventDefault();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    window.location = "/";
  }
  function UserGreeting(props) {
    return (
      <div>
        <button
          onClick={logOut}
          style={{ marginRight: "7px" }}
          type="button"
          class="btn btn-sm btn-outline-danger"
          aria-label="logout"
        >
          <img
            src="https://img.icons8.com/android/24/ffffff/logout-rounded-left.png"
            alt="logout"
            style={{ marginRight: "6px" }}
          />
          Logout
        </button>
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
      </div>
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
        <Navbar.Brand href="/">
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
              <Dropdown.Item href="/lands">Lands</Dropdown.Item>
              <Dropdown.Item href="/villas">Villas</Dropdown.Item>
              <Dropdown.Item href="/roofs">Roofs</Dropdown.Item>
              <Dropdown.Item href="/shops">Shops</Dropdown.Item>
              <Dropdown.Item href="/offices">Offices</Dropdown.Item>
              <Dropdown.Item href="/apartments">Apartments</Dropdown.Item>
              <Dropdown.Item href="/houses">Houses</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link className={styles.link} href="/about">
            About
          </Nav.Link>
          <Nav.Link className={styles.link} href="/contact">
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
