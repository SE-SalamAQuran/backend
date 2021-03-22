import { React, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/Forms.module.css";
export default function FilesUploadComponent() {
  const [avatar, setAvatar] = useState(null);

  function onSubmit(e) {
    let user = JSON.parse(sessionStorage.getItem("user"));

    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatar);

    axios(
      {
        method: "patch",
        url: "http://localhost:5000/upload/avatar/" + user._id,
        data: formData,
      },
      (window.location = "/tprofile")
    )
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.icon}
        src="https://img.icons8.com/carbon-copy/80/000000/test-account.png"
        alt="pic"
      />
      <h1>Upload a new profile picture</h1>
      <div className="row mt-4">
        <form onSubmit={onSubmit} encType="multipart-form-data">
          <div className="form-group">
            <input
              type="file"
              onChange={(event) => {
                const avatar = event.target.files[0];
                setAvatar(avatar);
              }}
              className="form-control-avatar"
              name="avatar"
            />
            <input
              type="submit"
              value="Upload Picture"
              className="btn btn-block btn-primary"
              style={{ marginTop: "2rem" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
