import React from "react";
import styles from "./styles/Home.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <a href="http://localhost:3000" rel="noopener noreferrer">
        Copyrights @ Palestinian Estates {new Date().getFullYear()}
        <img
          src="https://img.icons8.com/wired/50/000000/real-estate.png"
          alt="logo"
          className={styles.logo}
        />
      </a>
    </footer>
  );
}
