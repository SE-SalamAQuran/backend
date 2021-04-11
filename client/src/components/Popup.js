import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Popup(props) {
  function handleClick() {
    props.toggle();
  }
  return (
    <div className="modal">
      <div className="modal_content">
        <span className="close" onClick={handleClick}>
          &times;
        </span>
        <h3>{props.title}</h3>
        {props.component}
      </div>
    </div>
  );
}
