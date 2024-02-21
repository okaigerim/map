import React from "react";

import { logoDesktop } from "../../assets/images/index";

import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <img
            src={logoDesktop}
            alt="logo desktop"
            className={styles.logoImg}
          />
        </div>
        <div className={styles.navigationLinks}>
          <Link to="/" className={styles.button}>Home</Link>
          <Link to="/" className={styles.button}>Admissions</Link>
          <Link to="/" className={styles.button}>Academics</Link>
          <Link to="/" className={styles.button}>Faculty & Research</Link>
          <Link to="/contact-us" className={styles.button}>Contacts</Link>
          <Link to="/" className={styles.button}>Campus Navigation</Link>
        </div>
      </div>
    </div>
  );
};
