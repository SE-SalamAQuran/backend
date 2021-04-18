/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-concat */
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Navbar from "./AppBar";
import Footer from "./Footer";

export default function AdminTable() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    axios
      .get("http://localhost:5000/properties/getWishItem/", {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        setWishList(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [wishList, setWishList] = useState([]);
  const [count, setCount] = useState(0);
  function deleteItem(wishListId) {
    const id = wishListId;

    axios
      .delete("http://localhost:5000/properties/deleteWishItem/" + id)

      .then((res) => {
        res.status(200);
      })
      .catch((err) => console.error("Error !", err));

    window.location = "http://localhost:3000/usersRequsted";
  }
  function ShowUserDetail(id) {
    var ID = id;

    axios
      .get("http://localhost:5000/users/user/" + ID, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        alert(
          " username  : " +
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

  const renderWishlist = (wishList, index) => {
    return (
      <tr key={index}>
        <td>{wishList.propType}</td>
        <td>{wishList.transType}</td>
        <td>{wishList.address}</td>
        <td>{wishList.city}</td>
        <td className="opration">
          <button
            onClick={() => ShowUserDetail(wishList.user)}
            type="button"
            class="btn btn-outline-info"
          >
            {" "}
            user details
          </button>
        </td>
        <td className="opration">
          <button
            onClick={() => deleteItem(wishList._id)}
            type="button"
            class="btn btn-outline-danger"
          >
            {" "}
            Delete
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <Navbar></Navbar>
      <div style={{ padding: 20 }}>
        <div className="form-row">
          <div className="form-group col-md-4"></div>
          <div className="form-group col-md-4">
            <h4 style={{ textAlign: "center" }}>
              {" "}
              List of Requests: ({wishList.length} requests)
            </h4>
          </div>
          <div className="form-group col-md-4"></div>
        </div>

        <ReactBootStrap.Table striped bordered hover>
          <thead>
            <tr>
              <th>Property Type</th>
              <th>Transaction Type</th>
              <th>Location address</th>
              <th>City</th>
              <th>user details</th>
              <th>Delete Request</th>
            </tr>
          </thead>
          <tbody>{wishList.map(renderWishlist)}</tbody>
        </ReactBootStrap.Table>

        <Footer />
      </div>
    </div>
  );
}
