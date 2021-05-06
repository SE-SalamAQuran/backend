/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { Row, Col, Toast } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "8rem",
  },
  root: {
    flexGrow: 1,
    marginRight: "2rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AppointmentsForm() {
  function isLogged() {
    return JSON.parse(sessionStorage.getItem("user")) == null ? false : true;
  }
  const [disable, setDisable] = useState(false);
  const [owner, setOwner] = useState("");
  const [state, setState] = useState({
    place: "",
    time: "",
    date: "",
  });
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    header: "",
    text: "",
    duration: 0,
  });

  useEffect(() => {
    let thisUser = JSON.parse(sessionStorage.getItem("user"));
    axios
      .get(
        "http://localhost:5000/properties/property/" +
          window.localStorage.getItem("id")
      )
      .then((res) => setOwner(res.data.owner))
      .catch((err) => console.error(err));
    thisUser._id === owner ? setDisable(true) : setDisable(false);
  }, [owner]);

  function onChange(e) {
    const { name, value } = e.target;
    setState((prev) => {
      if (name === "date") {
        return {
          date: value,
          time: prev.time,
          place: prev.place,
        };
      } else if (name === "time") {
        return {
          date: prev.date,
          time: value,
          place: prev.place,
        };
      } else if (name === "place") {
        return {
          date: prev.date,
          time: prev.time,
          place: value,
        };
      }
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    let user = JSON.parse(sessionStorage.getItem("user"));
    let prop = localStorage.getItem("id");
    let data = {
      date: state.date,
      time: state.time,
      place: state.place,
    };
    axios
      .post(
        "http://localhost:5000/appointments/new/" + user._id + "/" + prop,
        data
      )
      .then((res) => {
        setMessage({
          type: "alert alert-success",
          header: "Success",
          text: "Appointment added!",
          duration: 3500,
        });
        setShow(true);
      })
      .catch((error) => {
        //handle error

        setMessage({
          type: "alert alert-danger",
          header: "Failed",
          text: "Appointment reserved or you have an empty field",
          duration: 4500,
        });
        setShow(true);
      });
  }

  return (
    <div className={classes.root}>
      {" "}
      <h2 style={{ marginBottom: "1.34rem", textAlign: "center" }}>
        Booking an appointment
      </h2>
      <form onSubmit={onSubmit} className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TextField
                id="filled-primary"
                name="date"
                value={state.date}
                onChange={onChange}
                fullWidth
                label="Date"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {" "}
              <TextField
                id="filled-primary"
                name="time"
                value={state.time}
                onChange={onChange}
                label="Time"
                type="time"
                fullWidth
                defaultValue="2:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <TextField
                id="filled-primary"
                label="Place"
                name="place"
                fullWidth
                value={state.place}
                onChange={onChange}
              />
            </Paper>
          </Grid>
        </Grid>

        <button
          style={{ marginTop: "2rem" }}
          type="submit"
          className="btn btn-block btn-success"
          disabled={disable}
        >
          Book the appointment
        </button>
      </form>
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
    </div>
  );
}
