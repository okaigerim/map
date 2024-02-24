import React from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import { Languages } from "../Languages";

import { logoDesktop } from "../../assets/images/index";

import styles from "./style.module.scss";

export const Navbar = () => {
  const location = useLocation();
  
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
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div
              className={clsx(
                styles.button,
                location.pathname === "/" && styles.active
              )}
            >
              Home
            </div>
          </Link>
          <Link to="/admissions" style={{ textDecoration: 'none' }}>
            <div
              className={clsx(
                styles.button,
                location.pathname === "/admissions" && styles.active
              )}
            >
              Admissions
            </div>
          </Link>
          <Link to="/academics" style={{ textDecoration: 'none' }}>
            <div
              className={clsx(
                styles.button,
                location.pathname === "/academics" && styles.active
              )}
            >
              Academics
            </div>
          </Link>
          <Link to="/contact-us" className={styles.button}>
            Contacts
          </Link>
          <Link to="/" className={styles.button}>
            Campus Navigation
          </Link>
        </div>
        <div className={styles.langs}>
          <Languages />
        </div>
      </div>
    </div>
  );
};
