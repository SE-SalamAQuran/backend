import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import axios from "axios";
import style from "./styles/Home.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "100%",
    height: 400,

    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  icon: {
    color: "white",
  },
}));

export default function Gallery(props) {
  const classes = useStyles();
  let tileData = props.tileData;

  const [state, setState] = useState({
    propertyFor: "",
    price: 0,
    currency: "",
    description: "",
  });

  useEffect((prop) => {
    prop = localStorage.getItem("id");
    axios
      .get("http://localhost:5000/properties/property/" + prop)
      .then((res) => {
        setState({
          description: res.data.description,
          propertyFor: res.data.propertyFor,
          currency: res.data.currency,
          price: res.data.price,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      style={{ marginBottom: "0", marginTop: "2rem" }}
      className={classes.root}
      id={style.rootDiv}
    >
      <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <div style={{ color: "#000", textAlign: "center" }}>
          <h4 style={{ marginTop: "2rem" }}>{state.propertyFor}</h4>
          <hr></hr>
          <p>
            {state.price} {state.currency}
          </p>
          <p style={{ fontStyle: "italic" }}>
            {state.description.substring(2)}
          </p>
        </div>
      </div>
      <div>
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          {tileData.map((tile) => (
            <GridListTile
              key={tile.image}
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <img src={tile.image} className={style.myImg} alt="prop" />
              <GridListTileBar
                titlePosition="top"
                actionPosition="left"
                className={classes.titleBar}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}
