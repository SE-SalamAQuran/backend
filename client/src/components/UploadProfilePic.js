import { React, useState } from "react";
import axios from "axios";
import styles from "./styles/Forms.module.css";

function UploadProfilePic() {
  const [state, setState] = useState({ file: null });

  function handleChange(event) {
    const { name, value } = event.target;
    // setState({ file: event.target.files[0] });
    setState((prev) => {
      if (name === "file") {
        return {
          file: value,
        };
      } else {
        return { file: prev.file };
      }
    });
  }
  function onClickHandler() {
    const data = new FormData();
    data.append("file", state.file);
    axios
      .post("http://localhost:5000/users/upload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log(res.statusText);
        window.location = "/tprofile";
      });
  }
  function onSubmit(event) {
    event.preventDefault();

    let newFile = state.file;
    axios
      .post("http://localhost:5000/users/upload", {
        data: newFile,
      })
      .then((res) => {
        window.location = "/tprofile";
        res.status(200);
      })
      .catch((err) => console.error("Error uploading", err));
  }

  return (
    <div className={styles.container}>
      <h3>Upload New Profile Picture</h3>
      <img
        className={styles.icon}
        src="https://img.icons8.com/carbon-copy/80/000000/test-account.png"
        alt="pic"
      />
      <form
        onSubmit={onClickHandler}
        className="mt-4"
        encType="multipart/form-data"
      >
        <div className="form-group">
          <input
            type="file"
            value={state.file}
            onChange={handleChange}
            name="file"
            id="input-files"
            className="form-control-file border"
          />
        </div>
        <button type="submit" className="btn btn-dark btn-block">
          Submit
        </button>
      </form>

      <hr />
      <div className="row">
        <div className="col-sm-12">
          <div className="preview-images"></div>
        </div>
      </div>
    </div>
  );
}
export default UploadProfilePic;
