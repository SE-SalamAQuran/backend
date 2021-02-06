import React from "react";
import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./card";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar></Navbar>
      <Card></Card>
    </div>
  );
}
