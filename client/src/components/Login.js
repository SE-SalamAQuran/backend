import { React, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import GoogleLogin from "react-google-login";
import jwt from "jwt-decode";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Palestinian Estate
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LogIn() {
  const classes = useStyles();
  const [state, setState] = useState({
    emailPhone: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => {
      if (name === "emailPhone") {
        return {
          emailPhone: value,
          password: prev.password,
        };
      } else if (name === "password") {
        return {
          emailPhone: prev.emailPhone,
          password: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const cred = {
      emailPhone: state.emailPhone,
      password: state.password,
    };
    axios
      .post("http://localhost:5000/users/login", cred)
      .then((res) => {
        window.location = "/home";
        const token = res.data.token;
        sessionStorage.setItem("token", token);
        let thisUser = res.data.decoded;
        sessionStorage.setItem("user", JSON.stringify(thisUser));
      })
      .catch((err) => console.error("Error logging in!", err));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon color="white" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="emailPhone"
            onChange={handleChange}
            value={state.emailPhone}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={state.password}
            onChange={handleChange}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Button>
            <GoogleLogin></GoogleLogin>
          </Button>
          <Button>
            <div
              class="fb-login-button"
              data-width=""
              data-size="large"
              data-button-type="continue_with"
              data-layout="default"
              data-auto-logout-link="false"
              data-use-continue-as="false"
            ></div>
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="http://localhost:3000/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
