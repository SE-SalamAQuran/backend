import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Navbar from "./AppBar";
import Footer from "./Footer";

export default function AppointmentTable() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  //5fa5288ca69f5d28b0dde424
  useEffect(() => {
    axios
      .get("http://localhost:5000/appointments/userAppointment/"+ user._id, {
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

  function showPropertyDetails(user){
    alert("you want to show property")
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
        <div  style={{ textAlign: "center" ,  }}>
            <h4 >
              {" "}
              List of your appintment : (you have {appointments.length} appointment)
            </h4>
        </div>
        <br/>
        <div  style={{width : 650 ,margin:"auto" , textAlign:"center"}}>
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


