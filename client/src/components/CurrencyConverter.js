import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "#fff",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CurrencyConverter() {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState("");
  const [desired, setDesired] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  useEffect((prop) => {
    prop = localStorage.getItem("id");

    axios
      .get("http://localhost:5000/properties/property/" + prop)
      .then((res) => {
        setCurrent(res.data.currency);
        setAmount(res.data.price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleChange(e) {
    setDesired(e.target.value);
  }

  function handleClick() {
    setShow(true);
  }

  function onSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/currencies/rate/" + current + "/" + desired)
      .then((res) => {
        setResult(res.data.rate);
        console.log(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function Result() {
    return (
      <div>
        {show ? (
          <p>
            Result: {Math.round(result * amount)} {desired}
          </p>
        ) : null}
      </div>
    );
  }

  const classes = useStyles();
  return (
    <div>
      <h4>Convert Currency</h4>
      <span style={{ fontStyle: "italic" }}>
        Please note that this is based on real currency rates
      </span>
      <h5>
        Current price: {amount} {current}
      </h5>
      <form onSubmit={onSubmit}>
        <h5>Desired Currency</h5>
        <FormControl className={classes.formControl}>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={desired}
            onChange={handleChange}
          >
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="ILS">ILS</MenuItem>
            <MenuItem value="JOD">JOD</MenuItem>
          </Select>
        </FormControl>
        <FormHelperText>
          Choose the currency you wish to pay with
        </FormHelperText>

        <button
          onClick={handleClick}
          type="submit"
          className="btn btn-block btn-success"
        >
          Convert Currency
        </button>
      </form>
      <Result />
    </div>
  );
}
