import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    margin: 20,
    color: "#fff",
  },
}));

function switchToLogin() {
  window.location = "/login";
}

function switchToRegister() {
  window.location = "/register";
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ width: "auto" }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Palestinian Estate
          </Typography>
          <Link
            className={classes.links}
            color="inherit"
            onClick={switchToLogin}
          >
            Login
          </Link>
          <Link
            className={classes.links}
            color="inherit"
            onClick={switchToRegister}
          >
            Sign up
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
