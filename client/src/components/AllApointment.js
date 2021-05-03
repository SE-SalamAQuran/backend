/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Navbar from "./AppBar";
import Footer from "./Footer";
import carousel3 from "./carousel3.jpg";

export default function AppointmentTableAdmin() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  const [appointments, setAppointments] = useState([]);
  const [count, setCount] = useState(0);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNo, setPhoneNO] = useState("");
  const [address, setAddress] = useState("");
  const [fname1, setFname1] = useState("");
  const [lname1, setLname1] = useState("");
  const [phoneNo1, setPhoneNO1] = useState("");
  const [address1, setAddress1] = useState("");
  const [userDID, setUserDID] = useState("");
  const [propertyId, setPropertyId] = useState("");
  const [ownerId, setOwnerId] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("");

  //5fa5288ca69f5d28b0dde424
  useEffect(() => {
    axios
      .get("http://localhost:5000/appointments/AllAppointment", {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setAppointments(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function ShowUserDetail(ID1) {
    var ID = ID1;

    axios
      .get("http://localhost:5000/users/user/" + ID, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setFname(res.data.fname);
        setLname(res.data.lname);
        setAddress(res.data.address);
        setPhoneNO(res.data.phoneNo);
        alert(
          "username  : " +
            res.data.fname +
            " " +
            res.data.lname +
            "\n " +
            "phoneNumber :  " +
            res.data.phoneNo +
            " \n" +
            " address : " +
            "  " +
            res.data.address
        );
      })

      .catch((err) => console.log(err));
  }
  function showPropertyDetails(Pid) {
    const ID = Pid;
    axios
      .get("http://localhost:5000/properties/property/" + ID, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setOwnerId(res.data.owner);
        setType(res.data.type);
        setTransactionType(res.data.propertyFor);
        setCity(res.data.city);
        setLocation(res.data.address);
        setArea(res.data.area);
        setPrice(res.data.price);
        setCurrency(res.data.currency);
        console.log(res);
        axios
          .get("http://localhost:5000/users/user/" + res.data.owner, {
            headers: {
              "content-type": "application/json",
            },
          })
          .then((res) => {
            setFname(res.data.fname);
            setLname(res.data.lname);
            console.log(res);
            alert(
              "Owner details : \n " +
                "username : " +
                res.data.fname +
                " " +
                res.data.lname +
                "\n " +
                "phoneNumber :  " +
                res.data.phoneNo +
                " \n" +
                " address : " +
                "  " +
                res.data.address
            );
          })

          .catch((err) => console.log(err));
        alert(
          res.data.type +
            " for " +
            " " +
            res.data.propertyFor +
            " \n in : " +
            res.data.address +
            " , " +
            res.data.city +
            " \n Area : " +
            res.data.area +
            " \n" +
            "price : " +
            res.data.price +
            "  " +
            res.data.currency +
            "\n \n Click Ok to show owner details"
        );
      })
      .catch((err) => console.log(err));
  }

  function deleteAppointmet(appointmet) {
    const id = appointmet;

    axios
      .delete("http://localhost:5000/appointments/deleteAppointment/" + id)

      .then((res) => {
        res.status(200);
      })
      .catch((err) => console.error("Error logging in!", err));

    window.location = "http://localhost:3000/allAppointements";
  }

  const renderAppointments = (appointments, index) => {
    return (
      <tr key={index}>
        <td>{appointments.place}</td>
        <td>{appointments.date}</td>
        <td>{appointments.time}</td>
        <td className="opration">
          <button
            onClick={() => ShowUserDetail(appointments.user)}
            type="button"
            class="btn btn-outline-info"
          >
            {" "}
            user Details
          </button>
        </td>
        <td className="opration">
          <button
            onClick={() => showPropertyDetails(appointments.property)}
            type="button"
            class="btn btn-outline-info"
          >
            {" "}
            property Details
          </button>
        </td>

        <td className="opration">
          <button
            onClick={() => deleteAppointmet(appointments._id)}
            type="button"
            class="btn btn-outline-danger"
          >
            {" "}
            delete Appointment
          </button>
        </td>
      </tr>
    );
  };
  function showTableOrUserDetails() {
    return (
      <div>
        <Navbar></Navbar>

        <div style={{ padding: 20 }}>
          <div style={{ textAlign: "center" }}>
            <h4> List of appointments : ({appointments.length} appointment)</h4>
          </div>
          <br />
          <div style={{ margin: "auto", textAlign: "center" }}>
            <ReactBootStrap.Table striped bordered hover>
              <thead>
                <tr>
                  <th>place</th>
                  <th>date</th>
                  <th>time</th>
                  <th>userDetails</th>
                  <th>propertyDetails</th>
                  <th>deleteAppointmet</th>
                </tr>
              </thead>
              <tbody>{appointments.map(renderAppointments)}</tbody>
            </ReactBootStrap.Table>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return showTableOrUserDetails();
}
