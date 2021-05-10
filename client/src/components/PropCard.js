import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import AppointmentsForm from "./AppointmentsForm";
import Info from "./Info";
import Backdrop from "@material-ui/core/Backdrop";
import Popup from "./Popup";
import { makeStyles } from "@material-ui/core/styles";
import CurrencyConverter from "./CurrencyConverter";
import { Row, Col, Toast } from "react-bootstrap";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function PropCard(props) {
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    component: null,
  });
  const [disable, setDisable] = useState(true);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    header: "",
    text: "",
    duration: 0,
  });

  function isLogged() {
    return JSON.parse(sessionStorage.getItem("user")) == null ? false : true;
  }
  function handleAppointmentClick() {
    window.localStorage.setItem("id", props.name);
    setOpen(!open);
    setContent("appointment");
    setState({
      component: <AppointmentsForm />,
    });
  }

  function handleInfoClick() {
    window.localStorage.setItem("id", props.name);
    setOpen(!open);
    setContent("info");
    setState({
      component: <Info></Info>,
    });
  }
  function handleCurrencyClick() {
    window.localStorage.setItem("id", props.name);
    setOpen(!open);
    setContent("convert");
    setState({
      component: <CurrencyConverter />,
    });
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

  function CurrencyButton() {
    return (
      <button
        type="button"
        onClick={handleCurrencyClick}
        className="btn btn-block btn-warning"
        style={{ color: "#fff" }}
      >
        Switch Currency
        <img
          style={{ marginLeft: "5px" }}
          alt="info-svg"
          src="https://img.icons8.com/carbon-copy/20/ffffff/currency-exchange.png"
        />
      </button>
    );
  }

  function InfoButton() {
    return (
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
      </button>
    );
  }

  function handleSwapToConverter() {
    window.localStorage.setItem("id", props.name);
    setContent("convert");
    setState({
      component: <CurrencyConverter />,
    });
  }

  function handleSwapToAppointment() {
    window.localStorage.setItem("id", props.name);
    if (isLogged()) {
      setDisable(false);

      setContent("appointment");

      setState({
        component: <AppointmentsForm />,
      });
    } else {
      setDisable(true);
      setMessage({
        header: "Action not allowed",
        text: "You must login to book an appointment",
        duration: 4000,
        type: "alert alert-info",
      });
      setShow(true);
    }
  }
  function handleSwapToDetails() {
    window.localStorage.setItem("id", props.name);
    setContent("info");
    setState({
      component: <Info />,
    });
  }

  function disableBtn() {
    isLogged() ? setDisable(false) : setDisable(true);
  }
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <Mybutton />;
    }
    return null;
  }

  function ToastMessage() {
    return (
      <Row>
        <Col xs={12}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            delay={message.duration}
            autohide
          >
            <div className={message.type}>
              <strong className="mr-auto">{message.header}</strong>
              <br></br>
              <small>{message.text}</small>
            </div>
          </Toast>
        </Col>
      </Row>
    );
  }

  function Component() {
    if (content === "appointment") {
      return (
        <div>
          {" "}
          <AppointmentsForm></AppointmentsForm>
          <button
            onClick={handleSwapToDetails}
            className="btn btn-info"
            style={{
              postion: "absolute",
              marginRight: "2rem",
              marginTop: "1rem",
            }}
          >
            Back to details
          </button>
          <button
            onClick={handleSwapToConverter}
            className="btn btn-warning"
            style={{
              postion: "absolute",
              marginRight: "2rem",
              marginTop: "1rem",
            }}
          >
            Convert Price
          </button>
          <button
            onClick={handleClose}
            className="btn btn-danger"
            style={{
              postion: "absolute",
              marginRight: "2rem",
              marginTop: "1rem",
            }}
          >
            Cancel
          </button>
        </div>
      );
    } else if (content === "info") {
      disableBtn();

      return (
        <div>
          {" "}
          <Info></Info>
          <div style={{ marginBottom: "2rem" }} className="container">
            <div className="row">
              <div className="col">
                <button
                  onClick={handleClose}
                  className="btn btn-danger btn-md"
                  style={{
                    marginRight: "2rem",
                    marginTop: "5px",
                  }}
                >
                  X
                </button>
              </div>
              <div className="col">
                <button
                  onClick={handleSwapToConverter}
                  className="btn btn-warning btn-md"
                  style={{
                    marginRight: "2rem",
                    marginTop: "5px",
                  }}
                >
                  Convert Currency
                </button>
              </div>
              <div className="col">
                <button
                  onClick={handleSwapToAppointment}
                  className="btn btn-secondary btn-md"
                  disabled={disable}
                  style={{
                    marginRight: "2rem",
                    marginTop: "5px",
                  }}
                >
                  Book an appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      disableBtn();

      return (
        <div>
          {" "}
          <CurrencyConverter />
          <div style={{ marginBottom: "2rem" }} className="container">
            <div className="row">
              <div className="col">
                <button
                  onClick={handleClose}
                  className="btn btn-danger btn-md"
                  style={{
                    marginRight: "2rem",
                    marginTop: "5px",
                  }}
                >
                  X
                </button>
              </div>
              <div className="col">
                <button
                  onClick={handleSwapToAppointment}
                  className="btn btn-secondary btn-md"
                  disabled={disable}
                  style={{
                    marginRight: "2rem",
                    marginTop: "5px",
                  }}
                >
                  Book an appointment
                </button>
              </div>
              <div className="col">
                <button
                  onClick={handleSwapToDetails}
                  className="btn btn-info btn-md"
                  style={{
                    marginRight: "2rem",
                    marginTop: "5px",
                  }}
                >
                  Back to details
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      {" "}
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
          <CurrencyButton />
          <Greeting isLoggedIn={isLogged()}></Greeting>
          <InfoButton />
        </Card.Body>
      </Card>
      <Backdrop className={classes.backdrop} open={open}>
        <Popup component={<Component />} />
        <ToastMessage />
      </Backdrop>{" "}
    </div>
  );
}
