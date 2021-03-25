import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function UploadBody() {
  return (
    <div
      className="container"
      style={{ padding: 20, justifyContent: "center" }}
    >
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputTitle">The name of the property</label>
            <input
              type="Text"
              class="form-control"
              id="inputText"
              placeholder="The name of the property"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputType">Type of property</label>
            <select class="form-control" id="sel1">
              <option value="house">house</option>
              <option value="villa">villa</option>
              <option value="land">land</option>
              <option value="apartment">apartment</option>
              <option value="shop">shop</option>
              <option value="office">office</option>
              <option value="roof">roof</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <select class="form-control" id="sel1">
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
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputTypeOfTransaction">transaction type</label>
            <select class="form-control" id="sel1">
              <option>sale-cash</option>
              <option>sale-installment</option>
              <option>rent</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="inputAreaInM">The total area</label>
            <input
              type="Text"
              class="form-control"
              id="inputText"
              placeholder="The total area"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputPrice">Price</label>
            <input
              type="Text"
              class="form-control"
              id="inputText"
              placeholder="price"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputcurrency">currency</label>
            <select class="form-control" id="sel1">
              <option>USD</option>
              <option>JOD</option>
              <option>ILS</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UploadBody;
