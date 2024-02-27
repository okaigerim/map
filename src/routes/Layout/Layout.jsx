import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import { Navbar } from "../../components/Navbar";

import useIsMobile from "../../utils/useIsMobile";

import styles from "./layout.module.scss";

export const Layout = ({ children }) => {
  const isMobile = useIsMobile();

  return isMobile ? (
    <div className={styles.mobilecontainer}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );  
};
