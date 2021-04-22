import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";

export default function SearchFilter(props) {
  const [show, setShow] = useState(false);
  const type = props.type; //Type of property to apply the filter to
  const [priceRange, setPriceRange] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState(""); //City

  function handleAreaChange(event) {
    setArea(event.target.value);
  }
  function handlePriceChange(event) {
    setPriceRange(event.target.value);
  }
  function handleCurrencyChange(event) {
    setCurrency(event.target.value);
  }
  function handleLocationChange(event) {
    setLocation(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <Alert show={show} style={{ textAlign: "center" }} variant="secondary">
        <Alert.Heading>Filter your search to get better results</Alert.Heading>
        <hr />
        <h5 style={{ marginTop: "1rem", marginBottom: "1.12em" }}>
          These search terms are applied to estates of type {type}
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div class="col">
              <label>Price range</label>
              <select onChange={handlePriceChange} className="form-control">
                <option value={priceRange}>5000 - 10000</option>
                <option value={priceRange}>10000 - 50000</option>
                <option value={priceRange}>50000 - 100000</option>
                <option value={priceRange}>100000 - 250000</option>
                <option value={priceRange}>250000 - 1000000</option>
                <option value={priceRange}>more than 1000000</option>
              </select>
            </div>
            <div class="col">
              <label>Currency</label>
              <select onChange={handleCurrencyChange} className="form-control">
                <option value={currency}>USD</option>
                <option value={currency}>JOD</option>
                <option value={currency}>ILS</option>
              </select>
            </div>
            <div class="w-100"></div>
            <div class="col">
              <label>Area in squared meters</label>
              <select onChange={handleAreaChange} className="form-control">
                <option value={area}>Less than 90</option>
                <option value={area}>90 - 120</option>
                <option value={area}>120 - 300</option>
                <option value={area}>300 - 750</option>
                <option value={area}>750 - 1250</option>
                <option value={area}>1250 - 1500</option>
                <option value={area}>More than 1500</option>
              </select>
            </div>
            <div class="col">
              <label>Location</label>
              <select onChange={handleLocationChange} className="form-control">
                <option value={location}>Ramallah</option>
                <option value={location}>AlBireh</option>
                <option value={location}>Nablus</option>
                <option value={location}>Hebron</option>
                <option value={location}>Bethlehem</option>
                <option value={location}>Tulkarm</option>
                <option value={location}>Qalqilia</option>
                <option value={location}>Salfit</option>
                <option value={location}>Tubas</option>
                <option value={location}>Jenin</option>
                <option value={location}>Jericho</option>
                <option value={location}>Jerusalem</option>
              </select>
            </div>
          </div>
          <button
            style={{ marginTop: "1.21em" }}
            className="btn btn-md btn-outline-dark"
            type="submit"
          >
            Filter my Search
          </button>
        </form>
        <hr />
        <p style={{ textAlign: "center" }}>
          We appreciate the choice you made to buy your property via our
          platform.
          <br></br>
          Thank you and we wish you a nice day.
        </p>
        <Button
          style={{
            display: "block",
            marginTop: "0.54rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onClick={() => setShow(false)}
          variant="outline-danger"
        >
          X
        </Button>
      </Alert>
      {!show && (
        <button
          type="button"
          onClick={() => setShow(true)}
          className="btn btn-block btn-light"
        >
          Click here to filter search details
        </button>
      )}
    </div>
  );
}
