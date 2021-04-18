import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import AppointmentsForm from "./AppointmentsForm";
import Info from "./Info";
import Backdrop from "@material-ui/core/Backdrop";
import Popup from "./Popup";
import { makeStyles } from "@material-ui/core/styles";
import CurrencyConverter from "./CurrencyConverter";
import axios from "axios";


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
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const handleClose = () => {
    setOpen(false);
  };

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
  function deleteProperty() {
    
    axios
      .delete("http://localhost:5000/properties/myProperties/" + props.name)

      .then((res) => {
        res.status(200);
      })
      .catch((err) => console.error("Error logging in!", err));

    window.location = "http://localhost:3000/myProperty";
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
        onClick={deleteProperty}
        className="btn btn-block btn-danger"
      >
         delete 
      </button>
    );
  }

  function CurrencyButton() {
    return (
      <button
        type="button"
        onClick={handleCurrencyClick}
        className="btn btn-block btn-warning"
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
    setContent("appointment");
    setState({
      component: <AppointmentsForm />,
    });
  }
  function handleSwapToDetails() {
    window.localStorage.setItem("id", props.name);
    setContent("info");
    setState({
      component: <Info />,
    });
  }
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <Mybutton />;
    }
    return null;
  }

  function Component() {
    if (content === "info") {
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
              </div>
            </div>
          </div>
        </div>
      );
    } else {
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
      </Backdrop>{" "}
    </div>
  );
}
