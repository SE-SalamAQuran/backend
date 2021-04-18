/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Navbar from "./AppBar";
import Footer from "./Footer";

export default function AppointmentTable() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    axios
      .get("http://localhost:5000/appointments/userAppointment/" + user._id, {
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

  const [appointments, setAppointments] = useState([]);
  const [count, setCount] = useState(0);

   function showPropertyDetails(Pid) {
    const ID = Pid;
    axios
      .get("http://localhost:5000/properties/property/" + ID, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
      
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

  const renderAppointments = (appointments, index) => {
    return (
      <tr key={index}>
        <td>{appointments.place}</td>
        <td>{appointments.date}</td>
        <td>{appointments.time}</td>
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
      </tr>
    );
  };

  return (
    <div>
      <Navbar></Navbar>
      <div style={{ padding: 20 }}>
        <div style={{ textAlign: "center" }}>
          <h4>
            {" "}
            List of your appintment : (you have {appointments.length}{" "}
            appointment)
          </h4>
        </div>
        <br />
        <div style={{ width: 650, margin: "auto", textAlign: "center" }}>
          <ReactBootStrap.Table striped bordered hover>
            <thead>
              <tr>
                <th>place</th>
                <th>date</th>
                <th>time</th>
                <th>properDetails</th>
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
