/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Navbar from "./AppBar";
import Footer from "./Footer";

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  let user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/all/" + user._id, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const renderUsers = (users, index) => {
    return (
      <tr key={index}>
        <td>{users.fname + " " + users.lname}</td>
        <td>{users.username}</td>
        <td>{users.address}</td>
        <td>{users.phoneNo}</td>
        <td>{users.createdAt} </td>
      </tr>
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Navbar></Navbar>
      <div style={{ padding: 20 }}>
        <div>
          <h4 style={{ textAlign: "center" }}>
            {" "}
            List of Users: (number of users = {users.length} )
          </h4>
        </div>

        <ReactBootStrap.Table responsive striped bordered hover>
          <thead>
            <tr></tr>
          </thead>
          <tbody></tbody>
        </ReactBootStrap.Table>
        <ReactBootStrap.Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>phoneNo</th>
              <th>Date of joined </th>
            </tr>
          </thead>
          <tbody>{users.map(renderUsers)}</tbody>
        </ReactBootStrap.Table>
        <Footer />
      </div>
    </div>
  );
}

export default AllUsers;
