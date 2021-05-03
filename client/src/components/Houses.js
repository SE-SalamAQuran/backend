import { React, useState } from "react";
import NormalProps from "./NormalProps";
import AppBar from "./AppBar";
import styles from "./styles/Home.module.css";
import { Button, Alert } from "react-bootstrap";
import FilteredProps from "./FilteredProps";

export default function Houses() {
  const [filter, setFilter] = useState(false);

  const [show, setShow] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxArea, setMaxArea] = useState(0);
  const [minArea, setMinArea] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [transactionType, setTransactionType] = useState("");
  const [location, setLocation] = useState(""); //City

  function handleMinPrice(e) {
    setMinPrice(e.target.value);
  }
  function handleMaxPrice(e) {
    setMaxPrice(e.target.value);
  }
  function handleMinArea(e) {
    setMinArea(e.target.value);
  }
  function handleMaxArea(e) {
    setMaxArea(e.target.value);
  }
  function handleTransaction(event) {
    setTransactionType(event.target.value);
  }

  function handleLocationChange(event) {
    setLocation(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    setShow(false);
    setFilter(true);
  }

  return (
    <div style={{ paddingRight: "0" }} className={styles.container}>
      {" "}
      <AppBar />
      <div>
        <Alert show={show} style={{ textAlign: "center" }} variant="secondary">
          <Alert.Heading>
            Filter your search to get better results
          </Alert.Heading>
          <hr />
          <h5 style={{ marginTop: "1rem", marginBottom: "1.12em" }}>
            These search terms are applied to estates of type "Houses"
          </h5>
          <form onSubmit={handleSubmit}>
            <div class="w-100"></div>

            <div className="row">
              <div style={{ textAlign: "center", margin: "2rem" }} class="col">
                <label>Price range</label>
                <br></br>
                <input
                  style={{ marginLeft: "1rem" }}
                  type="text"
                  name="minPrice"
                  value={minPrice}
                  onChange={handleMinPrice}
                  placeholder="Min price"
                ></input>
                <input
                  style={{ marginLeft: "1rem" }}
                  type="text"
                  value={maxPrice}
                  onChange={handleMaxPrice}
                  name="maxPrice"
                  placeholder="Max price"
                ></input>
              </div>
            </div>
            <div class="w-100"></div>
            <div className="row">
              <div class="col" style={{ textAlign: "center", margin: "2rem" }}>
                <label>Area range in squared meters</label>
                <br></br>
                <input
                  style={{ marginLeft: "1rem" }}
                  type="text"
                  name="minArea"
                  value={minArea}
                  onChange={handleMinArea}
                  placeholder="Min Area"
                ></input>
                <input
                  style={{ marginLeft: "1rem" }}
                  type="text"
                  value={maxArea}
                  onChange={handleMaxArea}
                  name="maxArea"
                  placeholder="Max Area"
                ></input>
              </div>
            </div>
            <div class="w-100"></div>
            <div className="row">
              <div class="col" style={{ textAlign: "center", margin: "2rem" }}>
                <label>Transaction Type</label>
                <select
                  value={transactionType}
                  defaultValue="sale-cash"
                  onChange={handleTransaction}
                  className="form-control"
                >
                  <option value="">Select Transaction</option>
                  <option value="sale-cash">Cash Sale</option>
                  <option value="sale-installment">Installment Sale</option>
                  <option value="rent">Rent</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div
                className="col"
                style={{ textAlign: "center", margin: "2rem" }}
              >
                <label>Location</label>
                <select
                  value={location}
                  defaultValue="Ramallah"
                  onChange={handleLocationChange}
                  className="form-control"
                >
                  <option value="">Select City</option>

                  <option value="Ramallah">Ramallah</option>
                  <option value="AlBireh">AlBireh</option>
                  <option value="Nablus">Nablus</option>
                  <option value="Hebron">Hebron</option>
                  <option value="Bethlehem">Bethlehem</option>
                  <option value="Tulkarm">Tulkarm</option>
                  <option value="Qalqilia">Qalqilia</option>
                  <option value="Salfit">Salfit</option>
                  <option value="Tubas">Tubas</option>
                  <option value="Jenin">Jenin</option>
                  <option value="Jericho">Jericho</option>
                  <option value="Jerusalem">Jerusalem</option>
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
      <div>
        {filter ? (
          <FilteredProps
            type="house"
            transactionType={transactionType}
            maxPrice={maxPrice}
            minPrice={minPrice}
            maxArea={maxArea}
            minArea={minArea}
            location={location}
          />
        ) : (
          <NormalProps type="houses" />
        )}
      </div>
    </div>
  );
}
