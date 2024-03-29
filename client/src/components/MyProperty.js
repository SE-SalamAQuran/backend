import React, { useState, useEffect } from "react";
import PropCard from "./PropCard copy";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "./AppBar";
import Grid from "@material-ui/core/Grid";
import styles from "./styles/Home.module.css";

export default function MyProperties() {
  let user = JSON.parse(sessionStorage.getItem("user"));

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

  // eslint-disable-next-line no-unused-vars
  const classes = useStyles;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/properties/myProperties/" + user._id)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user._id]);

  return (
    <div style={{ paddingRight: "0" }} className={styles.container}>
      {" "}
      <AppBar />
      <Typography color="textPrimary" gutterBottom variant="h2" align="center">
        My Properties{" "}
      </Typography>
      <Grid style={{ marginLeft: "2rem" }} container spacing={3}>
        {data.map((character) => (
          <Grid item xs={12} sm={4} key={character.id}>
            <PropCard
              name={character._id}
              src={character.imgPath}
              title={character.city}
              li1={character.type + " " + character.propertyFor}
              li2={character.address}
              li3={character.area}
              li4={character.price}
              li5={character.currency}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
