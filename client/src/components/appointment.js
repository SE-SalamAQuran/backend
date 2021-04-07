import { React, useState } from "react";
import { Form, Button, Col, Toast, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
import Footer from "./Footer";
import axios from "axios";
function Bookappointment() {
    const [state, setState] = useState({
      fname: "",
      lname: "",
      username: "",
      phoneNo: "",
      password: "",
      address: "",
    });
}