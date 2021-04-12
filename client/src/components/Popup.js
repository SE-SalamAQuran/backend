import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Popup(props) {
  return (
    <div className="container">
      <div
        style={{
          height: "100%",
          width: "50%",
          position: "fixed",
          zIndex: 1,
          top: 0,
          left: 0,
          marginRight: "10px",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "left",
          }}
        >
          {" "}
          <h3>{props.title}</h3>
          <span style={{ fontStyle: "italic" }}>{props.help}</span>
        </div>
      </div>
      <div
        style={{
          height: "100%",
          width: "50%",
          position: "fixed",
          zIndex: 1,
          top: 0,
          right: 0,
          overflowX: "hidden",
          paddingTop: "20px",
        }}
      >
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
    </div>
  );
}
