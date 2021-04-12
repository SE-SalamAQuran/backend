/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect } from "react";
import Gallery from "./Gallery";
import axios from "axios";

export default function Info() {
  const [state, setState] = useState({
    images: [],
  });

  useEffect((prop) => {
    prop = localStorage.getItem("id");
    axios
      .get("http://localhost:5000/properties/details/imgs/" + prop)
      .then((res) => {
        setState({ images: res.data.images });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Gallery tileData={state.images} />
    </div>
  );
}
