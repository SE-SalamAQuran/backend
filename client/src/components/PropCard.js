import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default function PropCard(props) {
  function isLogged() {
    return JSON.parse(sessionStorage.getItem("user")) == null ? false : true;
  }
  function handleAppointmentClick() {
    window.location = "/appointment";
  }
  function handleInfoClick() {
    //This will have to wait for now
    window.localStorage.clear();
    window.localStorage.setItem("id", props.name);
  }
  function Mybutton() {
    return (
      <button
        type="button"
        onClick={handleAppointmentClick}
        className="btn btn-block btn-secondary"
      >
        Book an appointment
        <img
          style={{ marginLeft: "5px" }}
          alt="clock-svg"
          src="https://img.icons8.com/pastel-glyph/20/ffffff/clock.png"
        />
      </button>
    );
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <Mybutton />;
    }
    return null;
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{ height: "15rem" }} variant="top" src={props.src} />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title style={{ fontSize: "1.5rem" }}>{props.title}</Card.Title>
        <hr></hr>
        <Card.Text>
          <p>Property For: {props.li1}</p>
          <p>Location: {props.li2}</p>
          <p>Area: {props.li3}</p>
          <p>Price: {props.li4}</p>
          <p>Currency: {props.li5}</p>
        </Card.Text>
        <Greeting isLoggedIn={isLogged()}></Greeting>
        <button
          type="button"
          onClick={handleInfoClick}
          className="btn btn-block btn-info"
        >
          More information
          <img
            style={{ marginLeft: "5px" }}
            alt="info-svg"
            src="https://img.icons8.com/android/20/ffffff/info.png"
          />
        </button>{" "}
      </Card.Body>
    </Card>
  );
}
