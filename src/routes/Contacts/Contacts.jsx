import React from "react";

import { Footer } from "../../components/Footer";

import { circle } from "../../assets/images";

import styles from "./contacts.module.scss";

export const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <div className={styles.textContent}>
            <p className={styles.title}>Let's talk with Us</p>
            <p className={styles.subtitle}>
              We value your feedback and inquiries. Please feel free to get in
              touch with us using the information below.
            </p>
            <div className={styles.subtext}>
              <p className={styles.title2}>Contact Info :</p>
              <div className={styles.subtextImg}>
                <img src={circle} alt="circle" className={styles.img} />
                <p className={styles.subtext}>
                  Phone Number: +7 (727) 292 60 25
                </p>
              </div>
              <div className={styles.subtextImg}>
                <img src={circle} alt="circle" className={styles.img} />
                <p className={styles.subtext}>
                  Email: info@satbayev.university
                </p>
              </div>
              <div className={styles.subtextImg}>
                <img src={circle} alt="circle" className={styles.img} />
                <p className={styles.subtext}>
                  22 Satbaev str., 050013, Almaty, The Republic of Kazakhstan
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <div className={styles.mainContent}>
            <label htmlFor="fullname" title="Full name">
              <span class="tooltip">Full name</span>
              <input id="fullname" type="text" />
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
