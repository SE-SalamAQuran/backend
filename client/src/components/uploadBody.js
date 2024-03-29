/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable default-case */
/* eslint-disable no-unreachable */
import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Form, Toast, Col, Row } from "react-bootstrap";
import styles from "./styles/Forms.module.css";
import axios from "axios";
import jsCookie from "js-cookie";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

function UploadBody() {
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState({
    type: "",
    header: "",
    text: "",
  });
  const [type, setType] = useState("house");
  const [city, setCity] = useState("Ramallah");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [transactionType, setTransactionType] = useState("sale-cash");
  const [area, setArea] = useState(0);
  const [price, setPrice] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [bedRoom, setBedRoom] = useState("");
  const [bathRoom, setBathRoom] = useState("");
  const [tapartmentFloo, settapartmentFloor] = useState("");
  const [bulidingFloors, setBulidingFloors] = useState("");
  const [apartmentFloor, setapartmentFloor] = useState("");
  const [classification, setClassification] = useState("");
  const [useability, setUseability] = useState("");
  const [ageOfConstr, setAgeOfConstr] = useState("");
  const [locationStatus, setLocationStatus] = useState("");
  const [services, setServices] = useState("");
  const [pavement, setPavement] = useState("  ");
  const [totalApartments, setTotalApartments] = useState("");
  const [numberOfStreets, setNumberOfStreet] = useState("");

  function selectType(e) {
    setType(e.target.value);
  }

  function selectCity(e) {
    setCity(e.target.value);
  }
  function selectLocation(e) {
    setLocation(e.target.value);
  }
  function selectTransactionType(e) {
    setTransactionType(e.target.value);
  }
  function selectArea(e) {
    setArea(e.target.value);
  }
  function selectPrice(e) {
    setPrice(e.target.value);
  }
  function selectCurrncy(e) {
    setCurrency(e.target.value);
  }
  //selectBedRoom
  function selectBedRoom(e) {
    setBedRoom(" ,  Number of bedrooms: " + e.target.value);
  }
  function selectBathRoom(e) {
    setBathRoom(" ,  Number of bathrooms: " + e.target.value);
  }

  function selectBulidingFloor(e) {
    setBulidingFloors(" ,  Number of floors: " + e.target.value);
  }
  function selectapartmentFloor(e) {
    settapartmentFloor(" , Apartments in each floor: " + e.target.value);
  }

  function selectLandClassification(e) {
    setClassification(" , Classification of the Area is: " + e.target.value);
  }
  function selectUseOfLand(e) {
    setUseability(" , The land is: " + e.target.value);
  }
  function selectAgeOfConstr(e) {
    setAgeOfConstr(" , Age of construction: " + e.target.value + "years");
  }
  function selectServies(e) {
    setServices(" , Services available: " + e.target.value);
  }
  function selectStatus(e) {
    setLocationStatus(" , Location is on: " + e.target.value);
  }
  function selectTotalApartments(e) {
    setTotalApartments(" , Total number of apartments: " + e.target.value);
  }
  function selectPavement(e) {
    setPavement(" , " + e.target.value);
  }
  function selectStreets(e) {
    setNumberOfStreet(" , Number of streets: " + e.target.value);
  }

  function Describtion(type) {
    switch (type) {
      case "house":
        return (
          <div>
            <h3 style={{ justifyContent: "center" }}>
              {" "}
              More details and description{" "}
            </h3>

            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputType Bedroom">Number of bedrooms</label>
                  <select
                    class="form-control"
                    id="sel1"
                    onChange={selectBedRoom}
                  >
                    <option>select bedRoom number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="more than 10">more than 10</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputType Bathroom">Number of bathrooms</label>
                  <select
                    class="form-control"
                    id="sel1"
                    onChange={selectBathRoom}
                  >
                    <option>select bathroom number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value=" more than 3 ">more than 3</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputType floors">Number of floors</label>
                  <select
                    onChange={selectBulidingFloor}
                    class="form-control"
                    id="sel1"
                  >
                    <option>select number of floors</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value=" more than 3 ">more than 3</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputType Age of Construction">
                    Age of construction in years
                  </label>
                  <select
                    class="form-control"
                    id="sel1"
                    onChange={selectAgeOfConstr}
                  >
                    <option>select age Of construction</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="more than 10 years">
                      more than 10 years
                    </option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        );
        break;
      case "villa":
        {
          return (
            <div>
              <h3 style={{ justifyContent: "center" }}>
                {" "}
                More details and description{" "}
              </h3>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputType Age of Construction">
                      Age of construction in years
                    </label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectAgeOfConstr}
                    >
                      <option>select age Of construction</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="more than 10 years">
                        more than 10 years
                      </option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputType Bedroom">Number of bedrooms</label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectBedRoom}
                    >
                      <option>select bedRoom number</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="more than 10">more than 10</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputType Bathroom">Number of bathrooms</label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectBathRoom}
                    >
                      {" "}
                      <option>select bathroom number</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value=" more than 5 ">more than 5</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputType floors">Number of floors</label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectBulidingFloor}
                    >
                      <option>Number of floors</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value=" more than 3 ">more than 3</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          );
        }
        break;
      case "land":
        {
          return (
            <div>
              <h3 style={{ justifyContent: "center" }}>
                {" "}
                More details and description{" "}
              </h3>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputType Services">Services</label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectServies}
                    >
                      <option>select services </option>
                      <option value="Electricity only">Electricity only</option>
                      <option value="Water only">Water only</option>
                      <option value="Water and Electricity">
                        Both water and Electricity
                      </option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputType Pavement">Pavement</label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectPavement}
                    >
                      <option>select Pavement </option>
                      <option value="There is pavement">
                        Located on a paved street
                      </option>
                      <option value="There is no pavement">
                        Located on a non paved street
                      </option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputType streets">Number of streets</label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectStreets}
                    >
                      <option>select number of street</option>
                      <option value="1">One street</option>
                      <option value="2">Two streets</option>
                      <option value="more than 2">More than streets</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="input Classification"> Classification</label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectLandClassification}
                    >
                      <option value="1">Classification</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputAddress"> Land usage </label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectUseOfLand}
                    >
                      <option value="Agricultural Land">
                        select Land usage
                      </option>
                      <option value="Agricultural Land">
                        Agricultural Land
                      </option>
                      <option value="Land to build">Land to build</option>
                      <option value="Agricultural land and suitable for construction">
                        Agricultural land and suitable for construction
                      </option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          );
        }
        break;
      case "apartment":
        {
          return (
            <div>
              <h3 style={{ justifyContent: "center" }}>
                {" "}
                More details and description{" "}
              </h3>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputType Age of Construction">
                      Age of construction in years
                    </label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectAgeOfConstr}
                    >
                      <option>select age Of construction</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="more than 10 years">
                        more than 10 years
                      </option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputType Total Apartments">
                      Total number of apartments in the building
                    </label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectTotalApartments}
                    >
                      <option>Total number of apartments = </option>
                      <option value="8">8</option>
                      <option value="10">10</option>
                      <option value="12">12</option>
                      <option value="14">14</option>
                      <option value="16">16</option>
                      <option value="18">18</option>

                      <option value="more than 20">more than 20</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputType Bedroom">Number of bedrooms</label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectBedRoom}
                    >
                      <option>select bedRoom number</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="more than 10">more than 10</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputType Bathroom">Number of bathrooms</label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectBathRoom}
                    >
                      <option>select bathroom number</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value=" more than 5 ">more than 5</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputType floors">Number of floors </label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectBulidingFloor}
                    >
                      <option>Number of floors</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="8">11</option>
                      <option value="9">12</option>
                      <option value="10">13</option>
                      <option value="8">14</option>
                      <option value="9">15</option>
                      <option value="more than 15">more than 15</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputType floors">
                      apartment floor number{" "}
                    </label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectapartmentFloor}
                    >
                      <option>apartment floor number</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="8">11</option>
                      <option value="9">12</option>
                      <option value="10">13</option>
                      <option value="8">14</option>
                      <option value="9">15</option>
                      <option value="more than 15">more than 15</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          );
        }
        break;
      case "shop":
        {
          return (
            <div>
              <h3 style={{ justifyContent: "center" }}>
                {" "}
                More details and description{" "}
              </h3>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputType Age of Construction">
                      Location Status
                    </label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectStatus}
                    >
                      <option> Location Status</option>
                      <option value="On a main street">On a main street</option>
                      <option value="On a side street">On a side street</option>

                      <option value="Both main and side street">
                        both main and side street
                      </option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputType Age of Construction">
                      Age of construction in years
                    </label>
                    <select
                      class="form-control"
                      id="sel1"
                      onChange={selectAgeOfConstr}
                    >
                      <option>select age Of construction</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="more than 10 years">
                        more than 10 years
                      </option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          );
        }
        break;
      case "office": {
        return (
          <div>
            <h3 style={{ justifyContent: "center" }}>
              {" "}
              More details and description{" "}
            </h3>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputType Age of Construction">
                    Location Status
                  </label>
                  <select
                    class="form-control"
                    id="sel1"
                    onChange={selectStatus}
                  >
                    <option> Location Status</option>
                    <option value="On a main street">On a main street</option>
                    <option value="On a side street">On a side street</option>

                    <option value="Both main and side street">
                      both main and side street
                    </option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputType Age of Construction">
                    Age of construction in years
                  </label>
                  <select
                    class="form-control"
                    id="sel1"
                    onChange={selectAgeOfConstr}
                  >
                    <option>select age Of construction</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="more than 10 years">
                      more than 10 years
                    </option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        );
      }
      default: {
        return (
          <div>
            <h3 style={{ justifyContent: "center" }}>
              {" "}
              More details and description{" "}
            </h3>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputType Age of Construction">
                    Age of construction in years
                  </label>
                  <select
                    class="form-control"
                    id="sel1"
                    onChange={selectAgeOfConstr}
                  >
                    <option>select age Of construction</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="more than 10 years">
                      more than 10 years
                    </option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputType Total Apartments">
                    Total number of apartments in the building
                  </label>
                  <select
                    class="form-control"
                    id="sel1"
                    onChange={selectTotalApartments}
                  >
                    <option> Total number of apartments</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>

                    <option value="more than 20">more than 20</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputType Bedroom">Number of bedrooms</label>
                  <select
                    class="form-control"
                    id="sel1"
                    onChange={selectBedRoom}
                  >
                    <option>select bedRoom number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="more than 10">more than 10</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputType Bathroom">Number of bathrooms</label>
                  <select
                    class="form-control"
                    id="sel1"
                    onChange={selectBathRoom}
                  >
                    <option>select bathroom number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value=" more than 5 ">more than 5</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputType floors">Number of floors </label>
                  <select
                    class="form-control"
                    id="sel1"
                    onChange={selectBulidingFloor}
                  >
                    <option>Number of floors</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="8">11</option>
                    <option value="9">12</option>
                    <option value="10">13</option>
                    <option value="8">14</option>
                    <option value="9">15</option>
                    <option value="more than 15">more than 15</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputType floors">apartment floor number </label>
                  <select
                    class="form-control"
                    id="sel1"
                    onChange={selectapartmentFloor}
                  >
                    {" "}
                    <option>apartment floor number</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="8">11</option>
                    <option value="9">12</option>
                    <option value="10">13</option>
                    <option value="8">14</option>
                    <option value="9">15</option>
                    <option value="more than 15">more than 15</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        );
      }
    }
  }

  function onSubmit(e) {
    let user = JSON.parse(sessionStorage.getItem("user"));
    e.preventDefault();

    const data = {
      propertyType: type,
      city: city,
      location: location,
      transactionType: transactionType,
      description:
        bedRoom +
        bathRoom +
        tapartmentFloo +
        bulidingFloors +
        apartmentFloor +
        classification +
        useability +
        ageOfConstr +
        locationStatus +
        services +
        pavement +
        totalApartments +
        numberOfStreets,
      area: area,
      price: price,
      currency: currency,
    };
    console.log(data);

    axios({
      method: "post",
      url: "http://localhost:5000/properties/new/" + user._id,
      data,
    })
      .then(function (response) {
        //handle success
        setMessage({
          type: "alert alert-success",
          header: "Success",
          text: "Property Added Successfully",
        });
        setShow(true);

        const prop_id = response.data._id;
        jsCookie.set("id", prop_id);
        window.location = "/upload/media";
      })
      .catch(function (response) {
        //handle error
        setMessage({
          type: "alert alert-danger",
          header: "Failed",
          text: "Please fill all fields",
        });
        setShow(true);
      });
    console.log(data);
  }

  return (
    <div
      className="container"
      style={{ padding: 20, justifyContent: "center" }}
    >
      <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
        Upload your new property
      </h2>
      <img
        style={{ display: "block", marginRight: "auto", marginLeft: "auto" }}
        src="https://img.icons8.com/clouds/100/26e07f/real-estate.png"
        alt="house"
      />

      <form style={{ marginTop: "1rem" }} onSubmit={onSubmit}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputType">Type of property</label>
            <select class="form-control" id="sel1" onChange={selectType}>
              <option value="house">house</option>
              <option value="villa">villa</option>
              <option value="land">land</option>
              <option value="apartment">apartment</option>
              <option value="shop">shop</option>
              <option value="office">office</option>
              <option value="roof">roof</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="inputAreaInM">Total Area in squared meters</label>
            <input
              type="number"
              class="form-control"
              id="inputText"
              placeholder="The total area "
              onChange={selectArea}
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <select class="form-control" id="sel1" onChange={selectCity}>
              <option>Ramallah</option>
              <option>AlBireh</option>
              <option>Nablus</option>
              <option>Hebron</option>
              <option>Bethlehem</option>
              <option>Tulkarm</option>
              <option>Qalqilia</option>
              <option>Salfit</option>
              <option>Tubas</option>
              <option>Jenin</option>
              <option>Jericho</option>
              <option>Jerusalem</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="inputAddress">Location address</label>
            <input
              type="text"
              class="form-control"
              id="inputText"
              placeholder="Location address"
              onChange={selectLocation}
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputTypeOfTransaction">Transaction type</label>
            <select
              class="form-control"
              id="sel1"
              onChange={selectTransactionType}
            >
              <option>sale-cash</option>
              <option>sale-installment</option>
              <option>rent</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPrice">Price</label>
            <input
              type="number"
              class="form-control"
              id="inputText"
              placeholder="price"
              onChange={selectPrice}
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputcurrency">currency</label>
            <select class="form-control" id="sel1" onChange={selectCurrncy}>
              <option>USD</option>
              <option>JOD</option>
              <option>ILS</option>
            </select>
          </div>
        </div>
        <hr></hr>
        <div>{Describtion(type)}</div>

        <hr></hr>

        <button type="submit" class="btn btn-secondary btn-block">
          Upload
        </button>
      </form>

      <Row>
        <Col xs={12}>
          <Toast
            onClose={() => setAlert(false)}
            show={show}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            delay={3000}
            autohide
          >
            <div className={message.type}>
              <strong className="mr-auto">{message.header}</strong>
              <br></br>
              <small>{message.text}</small>
            </div>
          </Toast>
        </Col>
      </Row>
    </div>
  );
}

export default UploadBody;
