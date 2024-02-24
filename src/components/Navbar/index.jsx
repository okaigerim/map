import React from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Languages } from "../Languages";

import { logoDesktop } from "../../assets/images/index";

import styles from "./style.module.scss";

export const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation('navbar');

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
              {t('home')}
            </div>
          </Link>
          <Link to="/admissions" style={{ textDecoration: 'none' }}>
            <div
              className={clsx(
                styles.button,
                location.pathname === "/admissions" && styles.active
              )}
            >
              {t('admission')}
            </div>
          </Link>
          <Link to="/academics" style={{ textDecoration: 'none' }}>
            <div
              className={clsx(
                styles.button,
                location.pathname === "/academics" && styles.active
              )}
            >
              {t('academics')}
            </div>
          </Link>
          <Link to="/contact-us" style={{ textDecoration: 'none' }}>
            <div
              className={clsx(
                styles.button,
                location.pathname === "/contact-us" && styles.active
              )}
            >
              {t('contact')}
            </div>
          </Link>
          <Link to="/" className={styles.button}>
            {t('campus')}
          </Link>
        </div>
        <div className={styles.langs}>
          <Languages />
        </div>
      </div>
    </div>
  );
};
