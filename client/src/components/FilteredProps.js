import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropCard from "./PropCard";
import axios from "axios";

export default function FilteredProps(props) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get(
        "http://locahost:5000/properties/filter/" +
          props.type +
          "/" +
          props.transactionType +
          "/" +
          props.maxPrice +
          "/" +
          props.minPrice +
          "/" +
          props.maxArea +
          "/" +
          props.minArea +
          "/" +
          props.location
      )
      .then((res) => {
        setData(res.data.Props);
        console.log(res.data.Props);
      })
      .catch((err) => console.error(err));
  }, [
    props.location,
    props.maxArea,
    props.maxPrice,
    props.minArea,
    props.minPrice,
    props.transactionType,
    props.type,
  ]);

  return (
    <div className="container" style={{ marginTop: "1.43rem" }}>
      <div className="row">
        {data.map((character) => {
          return (
            <div className="col-lg-4 col-md-6">
              <PropCard
                name={character._id}
                src={character.imgPath}
                title={character.city}
                li1={character.propertyFor}
                li2={character.address}
                li3={character.area}
                li4={character.price}
                li5={character.currency}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
