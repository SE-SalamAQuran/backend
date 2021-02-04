import { React, useState } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Pal Estate
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Register() {
  const googleRef = "http://localhost:5000/users/auth/google/PalestinianEstate";
  const facebookRef =
    "https://localhost:5000/users/auth/facebook/PalestinianEstate/?ssl=sa8s8asgahs";
  const [state, setState] = useState({
    fname: "",
    lname: "",
    username: "",
    phoneNo: "",
    password: "",
    address: "",
    gender: "",
  });

  const classes = useStyles();

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prev.lname,
          username: prev.username,
          phoneNo: prev.phoneNo,
          password: prev.password,
          address: prev.address,
          gender: prev.gender,
        };
      } else if (name === "lname") {
        return {
          fname: prev.fname,
          lname: value,
          username: prev.username,
          phoneNo: prev.phoneNo,
          password: prev.password,
          address: prev.address,
          gender: prev.gender,
        };
      } else if (name === "username") {
        return {
          fname: prev.fname,
          lname: prev.lname,
          username: value,
          phoneNo: prev.phoneNo,
          password: prev.password,
          address: prev.address,
          gender: prev.gender,
        };
      } else if (name === "phoneNo") {
        return {
          fname: prev.fname,
          lname: prev.lname,
          username: prev.username,
          phoneNo: value,
          password: prev.password,
          address: prev.address,
          gender: prev.gender,
        };
      } else if (name === "password") {
        return {
          fname: prev.fname,
          lname: prev.lname,
          username: prev.username,
          phoneNo: prev.phoneNo,
          password: value,
          address: prev.address,
          gender: prev.gender,
        };
      } else if (name === "address") {
        return {
          fname: prev.fname,
          lname: prev.lname,
          username: prev.username,
          phoneNo: prev.phoneNo,
          password: prev.password,
          address: value,
          gender: prev.gender,
        };
      } else if (name === "gender") {
        return {
          fname: prev.fname,
          lname: prev.lname,
          username: prev.username,
          phoneNo: prev.phoneNo,
          password: prev.password,
          address: prev.address,
          gender: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      fname: state.fname,
      lname: state.lname,
      username: state.username,
      phoneNo: state.phoneNo,
      password: state.password,
      address: state.address,
      gender: state.gender,
    };
    axios
      .post("http://localhost:5000/users/register", user)
      .then((res) => {
        window.location = "/";
        console.log("User ", user + "is added in DB!");
        res.status(200);
      })
      .catch((err) => console.error("Error logging in!", err));
  }

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon color="white" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="fname"
                  value={state.fname}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={state.lname}
                  onChange={handleChange}
                  id="lastName"
                  label="Last Name"
                  name="lname"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={state.username}
                  onChange={handleChange}
                  id="email"
                  label="Email Address"
                  name="username"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={state.password}
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={state.address}
                  onChange={handleChange}
                  name="address"
                  label="Address"
                  type="text"
                  id="address"
                  autoComplete="Address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  value={state.phoneNo}
                  onChange={handleChange}
                  name="phoneNo"
                  label="Phone"
                  id="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    aria-label="gender"
                    name="gender"
                    value={state.gender}
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel
                      value="Female"
                      control={
                        <Radio style={{ width: "auto" }} color="primary" />
                      }
                      label="Female"
                    />
                    <FormControlLabel
                      value="Male"
                      control={
                        <Radio style={{ width: "auto" }} color="primary" />
                      }
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="secondary"
                  href={googleRef}
                >
                  <img
                    src="https://img.icons8.com/plasticine/30/000000/google-logo.png"
                    alt="google-icon"
                  />
                  Sign Up with Google
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  href={facebookRef}
                >
                  <img
                    src="https://img.icons8.com/cute-clipart/30/000000/facebook-new.png"
                    alt="facebook-icon"
                  />
                  Sign Up with Facebook
                </Button>

                <Link href="http://localhost:3000/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
