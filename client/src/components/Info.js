import { React, useState, useEffect } from "react";
// import Gallery from "./Gallery";
import axios from "axios";

export default function Info() {
  const [state, setState] = useState({
    images: [],
  });

  let id = localStorage.getItem("id");
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/properties/details/imgs/" + id)
  //     .then((res) => {
  //       setState({ images: res.data.images });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });

  return <div></div>;
}
