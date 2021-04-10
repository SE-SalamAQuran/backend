import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles/Home.module.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AppBar from "./AppBar";
import Grid from "@material-ui/core/Grid";

export default function Shops() {
  function isLogged() {
    return JSON.parse(sessionStorage.getItem("user")) == null ? false : true;
  }

  function handleAppointmentClick() {
    window.location = "/appointment";
  }
  function handleInfoClick() {
    //This will have to wait for now
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

  const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fafafa",
    },
    media: {
      height: 300,
    },
  });

  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/properties/shops")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={styles.container}>
      {" "}
      <AppBar />
      <Typography color="textPrimary" gutterBottom variant="h2" align="center">
        Shops
      </Typography>
      <Grid style={{ marginLeft: "1rem" }} container spacing={3}>
        {data.map((character) => (
          <Grid item xs={12} sm={4} key={character.id}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image={character.imgPath} />
              <CardContent style={{ textAlign: "center" }}>
                <Typography color="primary" variant="h5">
                  {character.city}
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Price : {character.price}
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Location : {character.address}
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Currency : {character.currency}
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Offered for : {character.propertyFor}
                </Typography>
                <Typography color="textSecondary" variant="subtitle2">
                  Area : {character.area}
                </Typography>
                <CardActions>
                  <Greeting isLoggedIn={isLogged()}></Greeting>
                  <br></br>
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
                </CardActions>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
