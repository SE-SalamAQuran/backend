/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import Navbar from "./AppBar";
import Footer from "./Footer";

function Table() {
  let user = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    axios
      .get("http://localhost:5000/properties/getWishItem/" + user._id, {
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
      .catch((err) => console.error("Error logging in!", err));

    window.location = "/table";
  }
  function goListedWishesPage(e) {
    e.preventDefault();
    window.location = "/uploadNewRealEstateRequest";
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
          <div className="form-group col-md-4">
            <button
              onClick={goListedWishesPage}
              type="button"
              class="btn btn-secondary  btn-lg"
            >
              Add a new request
            </button>
          </div>
          <div className="form-group col-md-4">
            <h4 style={{ textAlign: "center" }}>
              {" "}
              List of Requests: (you have {wishList.length} requests)
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

export default Table;
