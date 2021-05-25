import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropCard from "./PropCard";

export default function FilteredProps(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:5000/properties/filter/" +
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
      .then((res) => res.json())
      .then((data) => setData(data));
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
      <div
        className="row"
        style={{
          padding: "5rem",
        }}
      >
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
