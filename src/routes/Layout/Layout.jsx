import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import { Navbar } from "../../components/Navbar";

import useIsMobile from "../../utils/useIsMobile";

import styles from "./layout.module.scss";

export const Layout = ({ children }) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return isMobile ? (
    <div>
      <h3>Mobile Layout</h3>
      <div>{children}</div>
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
