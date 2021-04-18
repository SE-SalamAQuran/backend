import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Popup(props) {
  return (
    <div className="container">
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        {" "}
        {props.component}
      </div>
    </div>
  );
}
