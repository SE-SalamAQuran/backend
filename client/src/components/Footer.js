import React from "react";
import styles from "./styles/Home.module.css";

function clickHandler() {
  window.location = "/";
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p onClick={clickHandler}>
        Copyrights @ Palestinian Estates {new Date().getFullYear()}
        <img
          src="https://img.icons8.com/wired/50/00000/real-estate.png"
          alt="logo"
          className={styles.logo}
        />
      </p>
    </footer>
  );
}
